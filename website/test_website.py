import asyncio
import os
from playwright.async_api import async_playwright

BASE_DIR = r"c:\Users\LENOVO\Downloads\PDF CATLOG\website"
OUT_DIR = os.path.join(BASE_DIR, "screenshots")
os.makedirs(OUT_DIR, exist_ok=True)

async def test_website():
    async with async_playwright() as p:
        browser = await p.chromium.launch()
        page = await browser.new_page(viewport={"width": 1280, "height": 900})

        html_path = os.path.join(BASE_DIR, "index.html").replace("\\", "/")
        await page.goto(f"file:///{html_path}", wait_until="networkidle")

        # 1. Screenshot Homepage
        await page.screenshot(path=os.path.join(OUT_DIR, "01_homepage.png"), full_page=False)
        print("Captured 01_homepage.png")

        # 2. Add product to cart & take screenshot of cart drawer
        await page.click("#prod-card-1 .btn-add-cart")
        await page.wait_for_timeout(500)
        await page.click("#prod-card-5 .btn-add-cart")
        await page.wait_for_timeout(500)
        await page.click(".fk-cart-btn")
        await page.wait_for_timeout(600)
        await page.screenshot(path=os.path.join(OUT_DIR, "02_cart_drawer.png"))
        print("Captured 02_cart_drawer.png")

        # 3. Open Checkout Modal -> Step 1
        await page.click(".btn-checkout")
        await page.wait_for_timeout(500)
        await page.screenshot(path=os.path.join(OUT_DIR, "03_checkout_step1.png"))
        print("Captured 03_checkout_step1.png")

        # 4. Proceed to Step 2 -> Order Summary
        await page.click("#checkoutStep1 .btn-primary")
        await page.wait_for_timeout(500)
        await page.screenshot(path=os.path.join(OUT_DIR, "04_checkout_step2.png"))
        print("Captured 04_checkout_step2.png")

        # 5. Proceed to Step 3 -> Payment Options (Flipkart Gateway)
        await page.click("#checkoutStep2 .btn-primary")
        await page.wait_for_timeout(500)
        await page.screenshot(path=os.path.join(OUT_DIR, "05_payment_options.png"))
        print("Captured 05_payment_options.png")

        # 6. Click Cash on Delivery (COD) to test captcha and COD panel
        await page.click("#radioCod")
        await page.wait_for_timeout(400)
        await page.screenshot(path=os.path.join(OUT_DIR, "06_payment_cod.png"))
        print("Captured 06_payment_cod.png")

        # 7. Enter captcha and complete order
        captcha_val = await page.text_content("#captchaValue")
        await page.fill("#captchaInput", captcha_val.strip())
        await page.click("#payNowBtn")
        await page.wait_for_timeout(600)
        await page.screenshot(path=os.path.join(OUT_DIR, "07_order_success.png"))
        print("Captured 07_order_success.png")

        # 8. Close success modal and open Product Quickview for Ragi Dosa
        await page.click("#orderSuccessModal .btn-primary")
        await page.wait_for_timeout(400)
        await page.click("#prod-card-1 .prod-title")
        await page.wait_for_timeout(600)
        await page.screenshot(path=os.path.join(OUT_DIR, "08_product_quickview.png"))
        print("Captured 08_product_quickview.png")

        await browser.close()
        print("All tests passed successfully!")

if __name__ == "__main__":
    asyncio.run(test_website())
