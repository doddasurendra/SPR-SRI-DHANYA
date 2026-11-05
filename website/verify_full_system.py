import os
from playwright.sync_api import sync_playwright

BASE_DIR = r"c:\Users\LENOVO\Downloads\PDF CATLOG\website"
OUT_DIR = os.path.join(BASE_DIR, "screenshots")
os.makedirs(OUT_DIR, exist_ok=True)

def verify_system():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page(viewport={"width": 1366, "height": 900})
        
        print("[STEP 1] Loading S.P.R. Siri Dhanya Storefront...")
        page.goto("http://localhost:8000/index.html")
        page.wait_for_selector(".product-card")
        product_count = page.locator(".product-card").count()
        print(f"[STEP 1 OK] Loaded {product_count} products on the store.")
        
        # Test AI Chatbot
        print("[STEP 2] Testing Siri Dhanya AI Chatbot...")
        page.click(".fab-ai")
        page.wait_for_selector("#aiChatDrawer.active")
        
        # Ask stock query
        page.fill("#aiUserInput", "What products are currently in stock?")
        page.click(".ai-send-btn")
        page.wait_for_timeout(1000)
        chat_body = page.locator("#aiChatMessages").inner_text()
        assert "Real-Time Stock Availability" in chat_body
        print("[STEP 2 OK] AI Chatbot successfully answered stock availability.")
        page.screenshot(path=os.path.join(OUT_DIR, "test_01_ai_chat.png"))
        
        # Close Chat Drawer
        page.click(".ai-close-btn")
        page.wait_for_timeout(400)
        
        # Test Ordering & Multi-Channel Dispatch
        print("[STEP 3] Placing an Order via Checkout Stepper...")
        page.locator("#prod-card-1 .btn-add-cart").click()
        page.wait_for_timeout(400)
        page.locator("#prod-card-6 .btn-add-cart").click()
        page.wait_for_timeout(400)
        
        # Open Cart
        page.click(".fk-cart-btn")
        page.wait_for_selector("#cartDrawer.active")
        page.click(".btn-checkout")
        page.wait_for_selector("#checkoutModal.active")
        
        # Proceed Step 1 -> Step 2
        page.click("#checkoutStep1 .btn-primary")
        page.wait_for_timeout(400)
        # Proceed Step 2 -> Step 3
        page.click("#checkoutStep2 .btn-primary")
        page.wait_for_timeout(400)
        
        # Step 3: Choose UPI and Complete Order
        page.click("#radioUpi")
        page.wait_for_timeout(300)
        page.click("#payNowBtn")
        page.wait_for_selector("#orderSuccessModal.active")
        print("[STEP 3 OK] Order placed successfully!")
        
        # Check WhatsApp notification links for both numbers
        link1 = page.get_attribute("#successWhatsappBtn1", "href")
        link2 = page.get_attribute("#successWhatsappBtn2", "href")
        print(f"WhatsApp Line 1 Target (+91 94413 93817): {link1[:45]}...")
        print(f"WhatsApp Line 2 Target (9492468817): {link2[:45]}...")
        assert "9441393817" in link1
        assert "9492468817" in link2
        page.screenshot(path=os.path.join(OUT_DIR, "test_02_order_success.png"))
        
        # Test Customer "My Orders"
        print("[STEP 4] Testing Customer My Orders & Delivery Tracking...")
        page.click("#orderSuccessModal .btn-primary") # Opens My Orders
        page.wait_for_selector("#myOrdersModal.active")
        orders_text = page.locator("#myOrdersList").inner_text()
        assert "Live Tracking Journey" in orders_text
        print("[STEP 4 OK] Customer order tracking verified.")
        page.screenshot(path=os.path.join(OUT_DIR, "test_03_customer_tracking.png"))
        page.click("#myOrdersModal .modal-close")
        page.wait_for_timeout(400)
        
        # Test Admin Portal & 9 KPIs
        print("[STEP 5] Testing Admin Order Management Portal...")
        page.click(".fk-admin-badge-btn")
        page.wait_for_selector("#adminModal.active")
        
        kpi_total = page.locator("#kpiTotalOrders").inner_text()
        kpi_sales = page.locator("#kpiTotalSales").inner_text().replace("\u20b9", "Rs. ")
        print(f"[STEP 5 OK] Total Orders KPI: {kpi_total}, Total Sales KPI: {kpi_sales}")
        page.screenshot(path=os.path.join(OUT_DIR, "test_04_admin_portal.png"))
        
        # Open Order Details in Admin
        print("[STEP 6] Opening Order Details in Admin View...")
        page.locator("#adminOrdersTableBody .btn-primary").first.click()
        page.wait_for_selector("#adminOrderDetailsModal.active")
        
        # Enter Courier & AWB
        page.fill("#shippingCourierInput", "India Post Speed Post")
        page.fill("#shippingTrackingInput", "AP9441393817IN")
        page.click("button:has-text('Save Shipping & Notify Customer')")
        page.wait_for_timeout(600)
        
        status_badge = page.locator("#detailStatusBadge").inner_text()
        print(f"[STEP 6 OK] Updated Order Lifecycle Status: {status_badge}")
        assert "Shipped" in status_badge
        page.screenshot(path=os.path.join(OUT_DIR, "test_05_admin_order_details.png"))
        
        print("\n=======================================================")
        print("ALL VERIFICATION SUITES PASSED FLAWLESSLY WITH 100% SUCCESS!")
        print("=======================================================")
        browser.close()

if __name__ == "__main__":
    verify_system()
