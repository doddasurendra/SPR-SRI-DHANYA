import os
import base64
import asyncio
from playwright.async_api import async_playwright

BASE_DIR = r"c:\Users\LENOVO\Downloads\PDF CATLOG"
ASSETS_DIR = os.path.join(BASE_DIR, "assets")

def get_base64(filename):
    path = os.path.join(ASSETS_DIR, filename)
    if os.path.exists(path):
        with open(path, "rb") as f:
            data = base64.b64encode(f.read()).decode("utf-8")
            ext = filename.split(".")[-1]
            return f"data:image/{ext};base64,{data}"
    return ""

img_poster = get_base64("brand_poster_logo.png")
img_logo = get_base64("brand_logo_clean.png")
img_ragi = get_base64("ragi_dosa.png")
img_jonna = get_base64("jonna_dosa.png")
img_korra = get_base64("korra_dosa.png")
img_atta = get_base64("multi_grain_atta.png")
img_pesara = get_base64("pesara_dosa.png")

# Shared CSS for all 3 languages
COMMON_CSS = """
@import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@600;700;800;900&family=Mandali&family=Noto+Sans+Devanagari:wght@400;500;600;700;800&family=Noto+Sans+Telugu:wght@400;500;600;700;800&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');

@page {
  size: A4 portrait;
  margin: 0;
}

* {
  box-sizing: border-box;
  -webkit-print-color-adjust: exact !important;
  print-color-adjust: exact !important;
}

body {
  margin: 0;
  padding: 0;
  background-color: #f0f0f0;
  color: #1a2a20;
  font-family: 'Plus Jakarta Sans', 'Noto Sans Telugu', 'Noto Sans Devanagari', 'Nirmala UI', sans-serif;
  -webkit-font-smoothing: antialiased;
}

.page {
  width: 210mm;
  height: 297mm;
  max-height: 297mm;
  position: relative;
  page-break-after: always;
  overflow: hidden;
  background: #FAF8F4;
  padding: 13mm 15mm 12mm 15mm;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

/* Page 1: Luxury Cover */
.cover-page {
  background: radial-gradient(circle at 50% 30%, #174E37 0%, #0D2E1F 70%, #061910 100%);
  color: #FFFFFF;
  padding: 12mm 15mm;
  text-align: center;
  justify-content: space-between;
  border: 4mm solid #B8860B;
}

.cover-gold-strip {
  display: inline-block;
  padding: 4px 18px;
  background: linear-gradient(90deg, rgba(212,175,55,0.1), rgba(212,175,55,0.8), rgba(212,175,55,0.1));
  color: #FFE680;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 2.5px;
  text-transform: uppercase;
  border-top: 1px solid #D4AF37;
  border-bottom: 1px solid #D4AF37;
  margin-bottom: 5px;
}

.cover-brand-title {
  font-family: 'Cinzel', serif;
  font-size: 36px;
  font-weight: 900;
  color: #FFFFFF;
  letter-spacing: 1.5px;
  margin: 4px 0 2px 0;
  text-shadow: 0 2px 10px rgba(0,0,0,0.5);
}

.cover-brand-sub {
  font-size: 14px;
  color: #E2B960;
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;
  margin-bottom: 6px;
}

.cover-slogan-pill {
  display: inline-block;
  background: rgba(212, 175, 55, 0.2);
  border: 1px solid #D4AF37;
  border-radius: 20px;
  padding: 4px 18px;
  color: #FFF3C4;
  font-size: 13px;
  font-weight: 600;
  margin-bottom: 8px;
}

.cover-hero-img-wrap {
  width: 130mm;
  height: 130mm;
  margin: 0 auto;
  border-radius: 50%;
  padding: 5px;
  background: linear-gradient(135deg, #D4AF37, #8B6914, #FFE680, #D4AF37);
  box-shadow: 0 10px 30px rgba(0,0,0,0.6);
  display: flex;
  align-items: center;
  justify-content: center;
}

.cover-hero-img-wrap img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
  display: block;
}

.cover-tagline-box {
  margin-top: 6px;
}

.cover-tagline-main {
  font-size: 18px;
  font-weight: 700;
  color: #FFDE8A;
  margin-bottom: 3px;
}

.cover-tagline-sub {
  font-size: 13px;
  color: #D2E4D9;
}

.cover-badges-row {
  display: flex;
  justify-content: center;
  gap: 8px;
  margin: 8px 0;
}

.cover-badge-item {
  background: rgba(255,255,255,0.08);
  border: 1px solid rgba(212,175,55,0.4);
  padding: 5px 12px;
  border-radius: 6px;
  font-size: 10.5px;
  font-weight: 600;
  color: #FAF4D3;
}

.cover-footer {
  border-top: 1px solid rgba(212,175,55,0.4);
  padding-top: 6px;
  font-size: 10px;
  color: #A3C2B3;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

/* Interior Pages Header & Footer */
.page-top-nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1.5px solid #D4AF37;
  padding-bottom: 5px;
  margin-bottom: 8px;
}

.top-brand {
  display: flex;
  align-items: center;
  gap: 8px;
}

.top-brand-logo {
  height: 24px;
}

.top-brand-name {
  font-family: 'Cinzel', serif;
  font-size: 14px;
  font-weight: 800;
  color: #103B2B;
}

.top-tagline {
  font-size: 10px;
  font-weight: 600;
  color: #996B1F;
}

.page-bottom-nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid #DCD5C5;
  padding-top: 5px;
  margin-top: 6px;
  font-size: 9.5px;
  color: #63756A;
}

/* Section Header Component */
.section-banner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: linear-gradient(135deg, #103B2B 0%, #1A543E 100%);
  color: #FFFFFF;
  padding: 6px 14px;
  border-radius: 8px;
  margin-bottom: 10px;
  box-shadow: 0 2px 6px rgba(0,0,0,0.08);
}

.section-banner-title {
  display: flex;
  align-items: center;
  gap: 10px;
}

.section-num {
  background: #D4AF37;
  color: #103B2B;
  font-weight: 800;
  font-size: 11px;
  padding: 2px 7px;
  border-radius: 4px;
}

.section-heading {
  font-size: 15px;
  font-weight: 700;
  letter-spacing: 0.5px;
}

.section-banner-tag {
  font-size: 10px;
  color: #F3E5AB;
  font-weight: 500;
}

/* Cards & Components */
.card {
  background: #FFFFFF;
  border: 1px solid #E6DEC9;
  border-radius: 8px;
  padding: 12px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.03);
}

.gold-card {
  background: #FFFDF9;
  border: 1.5px solid #D4AF37;
  border-radius: 8px;
  padding: 12px;
}

.grid-2 {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
}

.grid-3 {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 10px;
}

.grid-4 {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 8px;
}

/* Product Cards */
.product-card {
  background: #FFFFFF;
  border: 1.5px solid #E2D9C3;
  border-radius: 10px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  box-shadow: 0 3px 10px rgba(0,0,0,0.04);
}

.product-img-box {
  width: 100%;
  height: 98mm;
  background: #F9F7F2;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  margin-bottom: 8px;
}

.product-img-box img {
  max-width: 95%;
  max-height: 95%;
  object-fit: contain;
  filter: drop-shadow(0 4px 8px rgba(0,0,0,0.15));
}

.product-header-badge {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 4px;
}

.prod-title {
  font-size: 14px;
  font-weight: 800;
  color: #103B2B;
  margin: 0;
  line-height: 1.25;
}

.prod-telugu {
  font-size: 13px;
  font-weight: 700;
  color: #8C2D19;
  margin: 1px 0 0 0;
}

.prod-price-pill {
  background: linear-gradient(135deg, #103B2B, #1B5840);
  color: #FFFFFF;
  padding: 3px 8px;
  border-radius: 6px;
  text-align: right;
  white-space: nowrap;
}

.prod-price-mrp {
  font-size: 13px;
  font-weight: 800;
  color: #FFDF73;
}

.prod-price-wt {
  font-size: 9px;
  color: #E2ECE5;
}

.prod-ingredient {
  font-size: 10.5px;
  color: #555;
  background: #F4EFE6;
  padding: 4px 8px;
  border-radius: 4px;
  margin: 5px 0 6px 0;
}

.prod-ingredient strong {
  color: #103B2B;
}

.prod-features-list {
  list-style: none;
  padding: 0;
  margin: 0;
  font-size: 10px;
  color: #333;
}

.prod-features-list li {
  position: relative;
  padding-left: 14px;
  margin-bottom: 3.5px;
  line-height: 1.35;
}

.prod-features-list li::before {
  content: "✔";
  position: absolute;
  left: 0;
  color: #167347;
  font-size: 10px;
  font-weight: bold;
}

/* Tables */
.custom-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 11px;
  margin: 8px 0;
}

.custom-table th {
  background: #103B2B;
  color: #FFFFFF;
  padding: 8px 10px;
  text-align: left;
  font-weight: 700;
  border: 1px solid #103B2B;
}

.custom-table td {
  padding: 7px 10px;
  border: 1px solid #E2D9C3;
  color: #222;
}

.custom-table tr:nth-child(even) {
  background-color: #F8F5EE;
}

.custom-table tr:hover {
  background-color: #FFF8E7;
}

/* Atta 7 Grains */
.grain-badge {
  background: #FFFFFF;
  border: 1.5px solid #D4AF37;
  border-radius: 8px;
  padding: 8px 6px;
  text-align: center;
  box-shadow: 0 2px 4px rgba(0,0,0,0.03);
}

.grain-num {
  display: inline-block;
  width: 20px;
  height: 20px;
  line-height: 20px;
  background: #103B2B;
  color: #FFE680;
  font-size: 10px;
  font-weight: bold;
  border-radius: 50%;
  margin-bottom: 3px;
}

.grain-name {
  font-size: 11px;
  font-weight: 700;
  color: #103B2B;
}

.grain-desc {
  font-size: 9px;
  color: #666;
  margin-top: 2px;
}

/* Testimonial Box */
.review-card {
  background: #FFFFFF;
  border-left: 4px solid #D4AF37;
  border-radius: 6px;
  padding: 9px 12px;
  box-shadow: 0 2px 6px rgba(0,0,0,0.04);
}

.stars {
  color: #D4AF37;
  font-size: 12px;
  margin-bottom: 2px;
}

.review-text {
  font-size: 10.5px;
  font-style: italic;
  color: #2F3E36;
  line-height: 1.35;
  margin-bottom: 4px;
}

.reviewer-name {
  font-size: 9.5px;
  font-weight: 700;
  color: #103B2B;
}

/* Partner Pillars */
.partner-box {
  background: #F4EFE6;
  border: 1px solid #DCD0B7;
  border-radius: 6px;
  padding: 8px 10px;
  font-size: 10px;
  line-height: 1.35;
}

.partner-box strong {
  color: #103B2B;
  display: block;
  font-size: 11px;
  margin-bottom: 2px;
}

/* Footer & Contacts */
.contact-grid {
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: 12px;
  background: #FFFFFF;
  border: 1.5px solid #D4AF37;
  border-radius: 10px;
  padding: 12px;
}

.contact-item {
  display: flex;
  gap: 8px;
  align-items: flex-start;
  margin-bottom: 8px;
  font-size: 11px;
}

.contact-icon {
  font-size: 16px;
  color: #D4AF37;
  min-width: 20px;
}

.veg-icon {
  display: inline-block;
  width: 14px;
  height: 14px;
  border: 1.5px solid #008000;
  padding: 2px;
  background: #fff;
  vertical-align: middle;
}

.veg-icon-dot {
  width: 6px;
  height: 6px;
  background: #008000;
  border-radius: 50%;
  margin: auto;
}
"""

print("Common CSS compiled.")
