import asyncio
from crawl4ai import *

async def main(url):
    async with AsyncWebCrawler() as crawler:
        result = await crawler.arun(url=url)
        return result.markdown

if __name__ == "__main__":
    import sys
    url = sys.argv[1]
    print(asyncio.run(main(url)))
