"""manifest_plus.json の項目をニューラル音声(edge-tts)でMP3生成する。
   生成済みファイルはスキップ。途中で止まっても再実行で続きから。"""
import asyncio, json, os, sys
import edge_tts

OUT = "audio"
CONCURRENCY = 6
RETRIES = 3

os.makedirs(OUT, exist_ok=True)
with open("manifest_plus.json", encoding="utf-8") as f:
    items = json.load(f)

todo = [it for it in items if not os.path.exists(os.path.join(OUT, it["f"]))]
print("total %d, to generate %d" % (len(items), len(todo)), flush=True)

sem = asyncio.Semaphore(CONCURRENCY)
done = 0
failed = []


async def gen(it):
    global done
    path = os.path.join(OUT, it["f"])
    async with sem:
        for attempt in range(RETRIES):
            try:
                tts = edge_tts.Communicate(it["t"], it["v"])
                await tts.save(path)
                if os.path.getsize(path) < 500:
                    raise RuntimeError("output too small")
                done += 1
                if done % 25 == 0:
                    print("%d/%d" % (done, len(todo)), flush=True)
                return
            except Exception as e:
                if os.path.exists(path):
                    os.remove(path)
                if attempt == RETRIES - 1:
                    failed.append((it["f"], str(e)))
                else:
                    await asyncio.sleep(2 * (attempt + 1))


async def main():
    await asyncio.gather(*(gen(it) for it in todo))
    print("DONE generated=%d failed=%d" % (done, len(failed)), flush=True)
    for f, e in failed[:20]:
        print("FAIL", f, e, flush=True)


asyncio.run(main())
sys.exit(1 if failed else 0)
