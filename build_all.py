import os
import asyncio
import pypdf
import pymupdf
from playwright.async_api import async_playwright

BASE_DIR = r"c:\Users\LENOVO\Downloads\PDF CATLOG"

catalogues = [
    {
        "name": "Telugu",
        "script": "generate_catalogue_telugu",
        "html": os.path.join(BASE_DIR, "catalogue_telugu.html"),
        "pdf": os.path.join(BASE_DIR, "SPR_Siri_Dhanya_Catalogue_Telugu.pdf"),
        "preview_dir": os.path.join(BASE_DIR, "preview_telugu")
    },
    {
        "name": "English",
        "script": "generate_catalogue_english",
        "html": os.path.join(BASE_DIR, "catalogue_english.html"),
        "pdf": os.path.join(BASE_DIR, "SPR_Siri_Dhanya_Catalogue_English.pdf"),
        "preview_dir": os.path.join(BASE_DIR, "preview_english")
    },
    {
        "name": "Hindi",
        "script": "generate_catalogue_hindi",
        "html": os.path.join(BASE_DIR, "catalogue_hindi.html"),
        "pdf": os.path.join(BASE_DIR, "SPR_Siri_Dhanya_Catalogue_Hindi.pdf"),
        "preview_dir": os.path.join(BASE_DIR, "preview_hindi")
    }
]

async def render_pdf(page, html_path, pdf_path):
    normalized = html_path.replace("\\", "/")
    await page.goto(f"file:///{normalized}", wait_until="networkidle")
    # Wait for Google Fonts and layout
    await page.wait_for_timeout(1500)
    await page.pdf(
        path=pdf_path,
        format="A4",
        print_background=True,
        prefer_css_page_size=True,
        margin={"top": "0px", "right": "0px", "bottom": "0px", "left": "0px"}
    )

def generate_previews(pdf_path, out_dir):
    os.makedirs(out_dir, exist_ok=True)
    doc = pymupdf.open(pdf_path)
    for i, page in enumerate(doc):
        pix = page.get_pixmap(dpi=150)
        pix.save(os.path.join(out_dir, f"page_{i+1}.png"))
    print(f"Exported {len(doc)} preview pages to {out_dir}")

async def main():
    # First execute the HTML generator scripts
    import generate_catalogue_telugu
    import generate_catalogue_english
    import generate_catalogue_hindi

    async with async_playwright() as p:
        browser = await p.chromium.launch()
        page = await browser.new_page()

        for cat in catalogues:
            print(f"\n--- Generating {cat['name']} PDF ---")
            await render_pdf(page, cat["html"], cat["pdf"])
            reader = pypdf.PdfReader(cat["pdf"])
            page_count = len(reader.pages)
            file_size_mb = os.path.getsize(cat["pdf"]) / (1024 * 1024)
            print(f"[SUCCESS] {cat['name']} PDF created: {page_count} pages, {file_size_mb:.2f} MB")
            generate_previews(cat["pdf"], cat["preview_dir"])

        await browser.close()

if __name__ == "__main__":
    asyncio.run(main())
