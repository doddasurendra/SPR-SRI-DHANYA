"""
S.P.R. SIRI DHANYA - Integrated Production E-Commerce & Payment Gateway Server
Serves static website files alongside secure backend REST APIs for:
- Razorpay order creation
- Cryptographic signature verification
- Webhook events
- Refund management
- Admin payment history
"""

import os
import sys
import json
import urllib.parse
from http.server import SimpleHTTPRequestHandler, HTTPServer
import socketserver

# Add current directory to path
sys.path.insert(0, os.path.dirname(__file__))
from payment_service import payment_service

WEBSITE_DIR = os.path.abspath(os.path.join(os.path.dirname(__file__), "..", "website"))


class SPRCommerceHandler(SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=WEBSITE_DIR, **kwargs)

    def _send_json(self, data: dict, status_code: int = 200):
        body = json.dumps(data, ensure_ascii=False).encode("utf-8")
        self.send_response(status_code)
        self.send_header("Content-Type", "application/json; charset=utf-8")
        self.send_header("Content-Length", str(len(body)))
        self.send_header("Access-Control-Allow-Origin", "*")
        self.send_header("Access-Control-Allow-Methods", "GET, POST, OPTIONS")
        self.send_header("Access-Control-Allow-Headers", "Content-Type, X-Razorpay-Signature, Authorization")
        self.send_header("Cache-Control", "no-cache, no-store, must-revalidate")
        self.end_headers()
        self.wfile.write(body)

    def do_OPTIONS(self):
        self.send_response(204)
        self.send_header("Access-Control-Allow-Origin", "*")
        self.send_header("Access-Control-Allow-Methods", "GET, POST, OPTIONS")
        self.send_header("Access-Control-Allow-Headers", "Content-Type, X-Razorpay-Signature, Authorization")
        self.end_headers()

    def do_GET(self):
        parsed = urllib.parse.urlparse(self.path)
        path = parsed.path.rstrip("/")
        query = urllib.parse.parse_qs(parsed.query)

        # Payment Public Config
        if path == "/api/payment/config":
            self._send_json(payment_service.get_public_config())
            return

        # Payment History (Admin)
        elif path == "/api/payment/history":
            status = query.get("status", [None])[0]
            records = payment_service.get_payment_history(status=status)
            self._send_json({
                "status": "success",
                "count": len(records),
                "mode": payment_service.mode,
                "is_live_ready": payment_service.is_live_configured,
                "payments": records
            })
            return

        # Fallback to serving static storefront files
        return super().do_GET()

    def do_POST(self):
        parsed = urllib.parse.urlparse(self.path)
        path = parsed.path.rstrip("/")

        content_length = int(self.headers.get("Content-Length", 0))
        post_bytes = self.rfile.read(content_length) if content_length > 0 else b""

        post_data = {}
        if post_bytes:
            try:
                post_data = json.loads(post_bytes.decode("utf-8"))
            except Exception:
                post_data = {}

        # 1. Create Order
        if path == "/api/payment/create-order":
            try:
                amount = float(post_data.get("amount", 0))
                currency = post_data.get("currency", "INR")
                receipt = post_data.get("receipt", "")
                notes = post_data.get("notes", {})
                
                result = payment_service.create_order(amount, currency=currency, receipt=receipt, notes=notes)
                self._send_json(result, 200)
            except Exception as e:
                self._send_json({"success": False, "error": str(e)}, 400)
            return

        # 2. Verify Payment Signature (Backend HMAC-SHA256)
        elif path == "/api/payment/verify":
            try:
                rzp_order_id = post_data.get("razorpay_order_id", "")
                rzp_payment_id = post_data.get("razorpay_payment_id", "")
                rzp_sig = post_data.get("razorpay_signature", "")
                store_order_id = post_data.get("store_order_id", "")
                method = post_data.get("payment_method", "UPI")

                result = payment_service.verify_payment_signature(
                    razorpay_order_id=rzp_order_id,
                    razorpay_payment_id=rzp_payment_id,
                    razorpay_signature=rzp_sig,
                    store_order_id=store_order_id,
                    payment_method=method
                )
                status_code = 200 if result.get("verified") else 400
                self._send_json(result, status_code)
            except Exception as e:
                self._send_json({"success": False, "verified": False, "error": str(e)}, 400)
            return

        # 3. Webhook Endpoint
        elif path == "/api/payment/webhook":
            signature = self.headers.get("X-Razorpay-Signature", "")
            if not payment_service.verify_webhook(post_bytes, signature):
                self._send_json({"status": "error", "message": "Invalid webhook signature"}, 400)
                return
            result = payment_service.process_webhook_event(post_data)
            self._send_json(result, 200)
            return

        # 4. Refund Management
        elif path == "/api/payment/refund":
            try:
                pay_id = post_data.get("payment_id", "")
                amount = float(post_data.get("amount")) if "amount" in post_data else None
                reason = post_data.get("reason", "Customer requested cancellation")

                result = payment_service.process_refund(pay_id, amount=amount, reason=reason)
                self._send_json(result, 200)
            except Exception as e:
                self._send_json({"success": False, "error": str(e)}, 400)
            return

        # 5. Admin Gateway Configuration Update
        elif path == "/api/payment/update-config":
            try:
                mode = post_data.get("mode", "test").lower()
                test_id = post_data.get("test_key_id")
                test_sec = post_data.get("test_key_secret")
                live_id = post_data.get("live_key_id")
                live_sec = post_data.get("live_key_secret")
                webhook_sec = post_data.get("webhook_secret")

                result = payment_service.update_merchant_credentials(
                    mode=mode,
                    test_key_id=test_id,
                    test_key_secret=test_sec,
                    live_key_id=live_id,
                    live_key_secret=live_sec,
                    webhook_secret=webhook_sec
                )
                self._send_json(result, 200)
            except Exception as e:
                self._send_json({"success": False, "error": str(e)}, 400)
            return

        self._send_json({"error": "Endpoint not found"}, 404)


class ThreadedHTTPServer(socketserver.ThreadingMixIn, HTTPServer):
    daemon_threads = True
    allow_reuse_address = True


def run_server(port: int = 8000, host: str = "0.0.0.0"):
    server_address = (host, port)
    httpd = ThreadedHTTPServer(server_address, SPRCommerceHandler)
    print("=" * 75)
    print("[SERVER] S.P.R. SIRI DHANYA - SECURE E-COMMERCE & PAYMENT GATEWAY SERVER")
    print("=" * 75)
    print(f"[ONLINE] Storefront & Backend active on http://localhost:{port}")
    print(f"[NETWORK] Mobile Wi-Fi Network URL: http://{host}:{port}")
    print(f"[SECURITY] Razorpay Mode: {payment_service.mode.upper()} (Live Ready: {payment_service.is_live_configured})")
    print("=" * 75)
    try:
        httpd.serve_forever()
    except KeyboardInterrupt:
        print("\nStopping server gracefully...")
        httpd.server_close()


if __name__ == "__main__":
    port = int(os.environ.get("PORT", 8000))
    host = os.environ.get("HOST", "0.0.0.0")
    run_server(port=port, host=host)
