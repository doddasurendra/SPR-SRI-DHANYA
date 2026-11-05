import os
from catalogue_builder_base import (
    COMMON_CSS, img_poster, img_logo, img_ragi, img_jonna, 
    img_korra, img_atta, img_pesara, BASE_DIR
)

HTML_ENGLISH = f"""<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>S.P.R. Siri Dhanya - Official Product Catalogue</title>
<style>
{COMMON_CSS}
body {{
  font-family: 'Plus Jakarta Sans', sans-serif;
}}
</style>
</head>
<body>

<!-- PAGE 1: COVER PAGE -->
<div class="page cover-page">
  <div style="margin-top: 4mm;">
    <div class="cover-gold-strip">⭐ TRADITIONAL MILLET FOOD PRODUCTS ⭐</div>
    <h1 class="cover-brand-title">S.P.R. SIRI DHANYA</h1>
    <div class="cover-brand-sub">OFFICIAL PRODUCT CATALOGUE</div>
    <div class="cover-slogan-pill">🌿 HEALTH IN EVERY GRAIN | ప్రతి గింజలో ఆరోగ్యం 🌿</div>
  </div>

  <div class="cover-hero-img-wrap">
    <img src="{img_poster}" alt="SPR Siri Dhanya Products Lineup">
  </div>

  <div class="cover-tagline-box">
    <div class="cover-tagline-main">Traditional Nutrition – Modern Convenience</div>
    <div class="cover-tagline-sub">Heritage Grains for Today's Health & Tomorrow's Vitality • Healthy Food... Happy Life...</div>
    
    <div class="cover-badges-row">
      <div class="cover-badge-item">🌾 100% Natural Grains</div>
      <div class="cover-badge-item">💪 High Protein & Dietary Fibre</div>
      <div class="cover-badge-item">⏱️ Ready in 15 Minutes</div>
      <div class="cover-badge-item">🚫 Zero Preservatives</div>
    </div>
  </div>

  <div class="cover-footer">
    <div>Trade Edition: Supermarkets • Modern Trade • Wholesalers • Distributors</div>
    <div>FSSAI Lic No: <strong>20126152000402</strong></div>
    <div>Phone: <strong>+91 9492468817</strong></div>
  </div>
</div>

<!-- PAGE 2: ABOUT US -->
<div class="page">
  <div>
    <div class="page-top-nav">
      <div class="top-brand">
        <span class="top-brand-name">S.P.R. SIRI DHANYA</span>
      </div>
      <div class="top-tagline">Health in Every Grain • Traditional Nutrition – Modern Convenience</div>
    </div>

    <div class="section-banner">
      <div class="section-banner-title">
        <span class="section-num">01</span>
        <span class="section-heading">ABOUT OUR COMPANY</span>
      </div>
      <span class="section-banner-tag">Vision, Mission & Quality Standards</span>
    </div>

    <!-- Company Story -->
    <div class="card" style="margin-bottom: 10px; background: #FFFDF9; border-left: 5px solid #103B2B;">
      <h3 style="color: #103B2B; margin: 0 0 5px 0; font-size: 14px;">Bridging Ancestral Nutrition with Today's Fast-Paced Lifestyle</h3>
      <p style="font-size: 10.5px; line-height: 1.55; color: #333; margin: 0 0 7px 0;">
        In today's fast-paced society, food habits are drastically changing. Rapid lifestyles, adulterated ingredients, and nutritional deficiencies are severely impacting public health. In this scenario, reviving the traditional wisdom and nutrient-dense millets gifted by our ancestors and delivering them tailored to modern lifestyles is the core purpose of <strong>S.P.R. Siri Dhanya</strong>.
      </p>
      <div style="background: #F4EFE6; padding: 7px 12px; border-radius: 6px; border: 1px dashed #D4AF37;">
        <strong style="color: #8C2D19; font-size: 11.5px;">OUR CORE PLEDGE:</strong>
        <span style="font-size: 11px; color: #103B2B; font-weight: 700; margin-left: 5px;">"Nutrition for Every Family… A Healthy Future for Every Generation!"</span>
      </div>
    </div>

    <!-- 4 Pillars Grid -->
    <div class="grid-2" style="margin-bottom: 10px;">
      <div class="card">
        <div style="font-size: 18px; margin-bottom: 2px;">🌾</div>
        <h4 style="color: #103B2B; margin: 0 0 3px 0; font-size: 11.5px;">1. Handpicked Heritage Millets</h4>
        <p style="font-size: 9.5px; color: #555; margin: 0; line-height: 1.4;">
          Sourcing the finest ancestral finger millet, sorghum, foxtail millet, and pulses directly from dedicated farmers.
        </p>
      </div>

      <div class="card">
        <div style="font-size: 18px; margin-bottom: 2px;">🧼</div>
        <h4 style="color: #103B2B; margin: 0 0 3px 0; font-size: 11.5px;">2. Uncompromising Hygiene & Purity</h4>
        <p style="font-size: 9.5px; color: #555; margin: 0; line-height: 1.4;">
          Clean, mechanized processing ensuring 100% adulteration-free foods while locking in natural nutrients and dietary fibres.
        </p>
      </div>

      <div class="card">
        <div style="font-size: 18px; margin-bottom: 2px;">⚡</div>
        <h4 style="color: #103B2B; margin: 0 0 3px 0; font-size: 11.5px;">3. Healthy Food in Minimal Time</h4>
        <p style="font-size: 9.5px; color: #555; margin: 0; line-height: 1.4;">
          Empowering employees, businesspersons, homemakers, students, and singles to prepare wholesome, healthy meals in minutes.
        </p>
      </div>

      <div class="card">
        <div style="font-size: 18px; margin-bottom: 2px;">🍲</div>
        <h4 style="color: #103B2B; margin: 0 0 3px 0; font-size: 11.5px;">4. Modern Form for Traditional Food</h4>
        <p style="font-size: 9.5px; color: #555; margin: 0; line-height: 1.4;">
          Delivering the timeless goodness of our ancestral dietary traditions to today's generation in the simplest, easiest manner.
        </p>
      </div>
    </div>

    <!-- Quality Assurance Box -->
    <div class="gold-card" style="display: flex; align-items: center; gap: 15px;">
      <div style="font-size: 32px;">🛡️</div>
      <div>
        <h4 style="color: #103B2B; margin: 0 0 3px 0; font-size: 12px;">FSSAI Certified & Food Safety Assurance</h4>
        <p style="font-size: 10px; color: #444; margin: 0; line-height: 1.4;">
          S.P.R. Siri Dhanya products are fully certified under Food Safety and Standards Authority of India (FSSAI) License No: <strong>20126152000402</strong>. Free from artificial colors, synthetic flavors, and chemical preservatives. 100% Pure Vegetarian.
        </p>
      </div>
    </div>
  </div>

  <div class="page-bottom-nav">
    <div>S.P.R. Siri Dhanya • Phone: +91 9492468817 • Kamepalli, Andhra Pradesh</div>
    <div>Page 2 / 8</div>
  </div>
</div>

<!-- PAGE 3: INDEX & INSTANT ADVANTAGES -->
<div class="page">
  <div>
    <div class="page-top-nav">
      <div class="top-brand">
        <span class="top-brand-name">S.P.R. SIRI DHANYA</span>
      </div>
      <div class="top-tagline">Table of Contents & Instant Mix Advantages</div>
    </div>

    <div class="section-banner">
      <div class="section-banner-title">
        <span class="section-num">02</span>
        <span class="section-heading">TABLE OF CONTENTS & THE INSTANT ADVANTAGE</span>
      </div>
      <span class="section-banner-tag">Product Portfolio Overview</span>
    </div>

    <!-- Index Grid -->
    <div style="margin-bottom: 8px;">
      <h4 style="color: #103B2B; margin: 0 0 5px 0; font-size: 12px; border-bottom: 1px solid #D4AF37; padding-bottom: 3px;">CATALOGUE DIRECTORY:</h4>
      <div class="grid-2" style="font-size: 10px;">
        <div style="background: #FFF; padding: 6px 10px; border-radius: 5px; border-left: 3px solid #103B2B;">
          <strong>1. Cover Page:</strong> Brand Showcase & Product Lineup
        </div>
        <div style="background: #FFF; padding: 6px 10px; border-radius: 5px; border-left: 3px solid #103B2B;">
          <strong>2. About Us:</strong> Corporate Vision, Mission & 4 Pillars
        </div>
        <div style="background: #FFF; padding: 6px 10px; border-radius: 5px; border-left: 3px solid #103B2B;">
          <strong>3. Index & Pricing:</strong> The Instant Advantage & Master MRP List
        </div>
        <div style="background: #FFF; padding: 6px 10px; border-radius: 5px; border-left: 3px solid #103B2B;">
          <strong>4. Products 01 & 02:</strong> Ragi & Jowar Instant Dosa Mixes
        </div>
        <div style="background: #FFF; padding: 6px 10px; border-radius: 5px; border-left: 3px solid #103B2B;">
          <strong>5. Products 03 & 04:</strong> Pesara & Korra Instant Dosa Mixes
        </div>
        <div style="background: #FFF; padding: 6px 10px; border-radius: 5px; border-left: 3px solid #103B2B;">
          <strong>6. Product 05:</strong> Multi Grain Atta (7 Super Grains)
        </div>
        <div style="background: #FFF; padding: 6px 10px; border-radius: 5px; border-left: 3px solid #103B2B;">
          <strong>7. Reviews & Partnerships:</strong> Customer Feedback & Trade Benefits
        </div>
        <div style="background: #FFF; padding: 6px 10px; border-radius: 5px; border-left: 3px solid #103B2B;">
          <strong>8. Terms & Contact:</strong> Commercial Policies, FSSAI & Address
        </div>
      </div>
    </div>

    <!-- Instant Dosa Mix Advantage -->
    <div class="gold-card" style="margin-bottom: 8px;">
      <h4 style="color: #8C2D19; margin: 0 0 6px 0; font-size: 12px; text-align: center;">⚡ The Hassle-Free Instant Mix Advantage – Real Time-Saving Innovation</h4>
      <div class="grid-3" style="text-align: center; font-size: 10px;">
        <div style="background: #FFF; padding: 5px; border-radius: 5px; border: 1px solid #E2D9C3;">
          <div style="font-size: 14px;">💧</div>
          <strong style="color: #103B2B;">Just Add Water</strong>
          <div>Effortless single-step mixing</div>
        </div>
        <div style="background: #FFF; padding: 5px; border-radius: 5px; border: 1px solid #E2D9C3;">
          <div style="font-size: 14px;">⏱️</div>
          <strong style="color: #103B2B;">Ready in 15 Min</strong>
          <div>Instant morning meal solution</div>
        </div>
        <div style="background: #FFF; padding: 5px; border-radius: 5px; border: 1px solid #E2D9C3;">
          <div style="font-size: 14px;">🚿</div>
          <strong style="color: #103B2B;">No Washing</strong>
          <div>Pre-cleaned sanitized grains</div>
        </div>
        <div style="background: #FFF; padding: 5px; border-radius: 5px; border: 1px solid #E2D9C3;">
          <div style="font-size: 14px;">⏳</div>
          <strong style="color: #103B2B;">No Soaking</strong>
          <div>Skip 6-8 hours of waiting</div>
        </div>
        <div style="background: #FFF; padding: 5px; border-radius: 5px; border: 1px solid #E2D9C3;">
          <div style="font-size: 14px;">🥣</div>
          <strong style="color: #103B2B;">No Grinding</strong>
          <div>Zero noisy mixer/grinder mess</div>
        </div>
        <div style="background: #FFF; padding: 5px; border-radius: 5px; border: 1px solid #E2D9C3;">
          <div style="font-size: 14px;">🧪</div>
          <strong style="color: #103B2B;">No Fermentation</strong>
          <div>Instant batter without waiting</div>
        </div>
      </div>
    </div>

    <!-- Official MRP Price List Table -->
    <div>
      <h4 style="color: #103B2B; margin: 0 0 4px 0; font-size: 12px;">📊 OFFICIAL MRP PRICE LIST:</h4>
      <table class="custom-table">
        <thead>
          <tr>
            <th>No.</th>
            <th>PRODUCT NAME</th>
            <th>PRIMARY INGREDIENT</th>
            <th>NET WEIGHT</th>
            <th>MAXIMUM RETAIL PRICE (MRP)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>01</strong></td>
            <td><strong>S.P.R. RAGI DOSA MIX</strong></td>
            <td>Finger Millet (Ragi)</td>
            <td>500 g</td>
            <td><strong style="color: #8C2D19; font-size: 12px;">₹119</strong></td>
          </tr>
          <tr>
            <td><strong>02</strong></td>
            <td><strong>S.P.R. JOWAR DOSA MIX</strong></td>
            <td>Sorghum (Jowar)</td>
            <td>500 g</td>
            <td><strong style="color: #8C2D19; font-size: 12px;">₹119</strong></td>
          </tr>
          <tr>
            <td><strong>03</strong></td>
            <td><strong>S.P.R. PESARA DOSA MIX</strong></td>
            <td>Green Gram (Whole Moong)</td>
            <td>500 g</td>
            <td><strong style="color: #8C2D19; font-size: 12px;">₹129</strong></td>
          </tr>
          <tr>
            <td><strong>04</strong></td>
            <td><strong>S.P.R. KORRA DOSA MIX</strong></td>
            <td>Foxtail Millet (Korra)</td>
            <td>500 g</td>
            <td><strong style="color: #8C2D19; font-size: 12px;">₹129</strong></td>
          </tr>
          <tr>
            <td><strong>05</strong></td>
            <td><strong>S.P.R. MULTI GRAIN ATTA</strong></td>
            <td>7 Selected Super Grains</td>
            <td>1 kg</td>
            <td><strong style="color: #8C2D19; font-size: 12px;">₹150</strong></td>
          </tr>
        </tbody>
      </table>
      <div style="font-size: 9px; color: #666; font-style: italic;">
        * Note: Trade margins, wholesale pricing, and retailer quantity discounts are provided separately via commercial proforma invoice.
      </div>
    </div>
  </div>

  <div class="page-bottom-nav">
    <div>S.P.R. Siri Dhanya • Phone: +91 9492468817 • Kamepalli, Andhra Pradesh</div>
    <div>Page 3 / 8</div>
  </div>
</div>

<!-- PAGE 4: PRODUCT PAGE 1 - RAGI & JOWAR -->
<div class="page">
  <div>
    <div class="page-top-nav">
      <div class="top-brand">
        <span class="top-brand-name">S.P.R. SIRI DHANYA</span>
      </div>
      <div class="top-tagline">Instant Dosa Mix Portfolio | PRODUCT SHOWCASE</div>
    </div>

    <div class="section-banner">
      <div class="section-banner-title">
        <span class="section-num">03</span>
        <span class="section-heading">PRODUCTS: RAGI & JOWAR DOSA MIX (PRODUCTS 01 & 02)</span>
      </div>
      <span class="section-banner-tag">Health in Every Grain</span>
    </div>

    <div class="grid-2">
      <!-- Product 1: Ragi Dosa Mix -->
      <div class="product-card">
        <div>
          <div class="product-header-badge">
            <div>
              <span style="font-size: 9.5px; font-weight: 700; color: #D4AF37; text-transform: uppercase;">PRODUCT – 01</span>
              <h3 class="prod-title">S.P.R. RAGI DOSA MIX</h3>
              <div class="prod-telugu">Finger Millet Dosa Mix (రాగి దోశ మిక్స్)</div>
            </div>
            <div class="prod-price-pill">
              <div class="prod-price-mrp">₹119</div>
              <div class="prod-price-wt">Net Wt: 500 g</div>
            </div>
          </div>

          <div class="product-img-box">
            <img src="{img_ragi}" alt="S.P.R. Ragi Dosa Mix">
          </div>

          <div class="prod-ingredient">
            <strong>Key Ingredient:</strong> Pure Finger Millet (Ragi / రాగులు)
          </div>

          <ul class="prod-features-list">
            <li><strong>Calcium & Iron Powerhouse:</strong> Exceptional natural calcium for bone density and healthy growing kids.</li>
            <li><strong>Low Glycemic Index (GI):</strong> Helps regulate blood sugar spikes; highly recommended for diabetic management.</li>
            <li><strong>Quick 15-Minute Recipe:</strong> Just add water and make crisp, fragrant dosas with delightful golden crust.</li>
            <li><strong>Everyday Family Wellness:</strong> An effortless pathway to integrate wholesome millets into daily breakfasts.</li>
          </ul>
        </div>

        <div style="margin-top: 6px; padding-top: 4px; border-top: 1px dashed #DDD; display: flex; justify-content: space-between; font-size: 9px; color: #555;">
          <span>✔ No Soaking</span>
          <span>✔ No Grinding</span>
          <span><span class="veg-icon"><span class="veg-icon-dot"></span></span> 100% Pure Veg</span>
        </div>
      </div>

      <!-- Product 2: Jowar Dosa Mix -->
      <div class="product-card">
        <div>
          <div class="product-header-badge">
            <div>
              <span style="font-size: 9.5px; font-weight: 700; color: #D4AF37; text-transform: uppercase;">PRODUCT – 02</span>
              <h3 class="prod-title">S.P.R. JOWAR DOSA MIX</h3>
              <div class="prod-telugu">Sorghum Dosa Mix (జొన్న దోశ మిక్స్)</div>
            </div>
            <div class="prod-price-pill">
              <div class="prod-price-mrp">₹119</div>
              <div class="prod-price-wt">Net Wt: 500 g</div>
            </div>
          </div>

          <div class="product-img-box">
            <img src="{img_jonna}" alt="S.P.R. Jowar Dosa Mix">
          </div>

          <div class="prod-ingredient">
            <strong>Key Ingredient:</strong> Natural Sorghum (Jowar / జొన్నలు)
          </div>

          <ul class="prod-features-list">
            <li><strong>Naturally Gluten-Free Grain:</strong> Exceptionally light on the stomach; combats indigestion and acidity.</li>
            <li><strong>Antioxidants & Magnesium:</strong> Supports cardiovascular wellness, healthy blood flow, and sustained energy.</li>
            <li><strong>Golden Crisp Texture:</strong> Yields wonderfully thin, savory dosas that pair delightfully with fresh chutneys.</li>
            <li><strong>Convenient Breakfast:</strong> An ideal nutrient-dense meal for working professionals and wellness-minded homes.</li>
          </ul>
        </div>

        <div style="margin-top: 6px; padding-top: 4px; border-top: 1px dashed #DDD; display: flex; justify-content: space-between; font-size: 9px; color: #555;">
          <span>✔ No Fermentation</span>
          <span>✔ 15 Mins Ready</span>
          <span><span class="veg-icon"><span class="veg-icon-dot"></span></span> 100% Pure Veg</span>
        </div>
      </div>
    </div>
  </div>

  <div class="page-bottom-nav">
    <div>S.P.R. Siri Dhanya • Phone: +91 9492468817 • Kamepalli, Andhra Pradesh</div>
    <div>Page 4 / 8</div>
  </div>
</div>

<!-- PAGE 5: PRODUCT PAGE 2 - PESARA & KORRA -->
<div class="page">
  <div>
    <div class="page-top-nav">
      <div class="top-brand">
        <span class="top-brand-name">S.P.R. SIRI DHANYA</span>
      </div>
      <div class="top-tagline">Instant Dosa Mix Portfolio | PRODUCT SHOWCASE</div>
    </div>

    <div class="section-banner">
      <div class="section-banner-title">
        <span class="section-num">04</span>
        <span class="section-heading">PRODUCTS: PESARA & KORRA DOSA MIX (PRODUCTS 03 & 04)</span>
      </div>
      <span class="section-banner-tag">Plant Protein & Active Vitality</span>
    </div>

    <div class="grid-2">
      <!-- Product 3: Pesara Dosa Mix -->
      <div class="product-card">
        <div>
          <div class="product-header-badge">
            <div>
              <span style="font-size: 9.5px; font-weight: 700; color: #D4AF37; text-transform: uppercase;">PRODUCT – 03</span>
              <h3 class="prod-title">S.P.R. PESARA DOSA MIX</h3>
              <div class="prod-telugu">Green Gram Pesarattu Mix (పెసర దోశ మిక్స్)</div>
            </div>
            <div class="prod-price-pill">
              <div class="prod-price-mrp">₹129</div>
              <div class="prod-price-wt">Net Wt: 500 g</div>
            </div>
          </div>

          <div class="product-img-box">
            <img src="{img_pesara}" alt="S.P.R. Pesara Dosa Mix">
          </div>

          <div class="prod-ingredient">
            <strong>Key Ingredient:</strong> Pure Green Gram (Whole Moong / పెసలు)
          </div>

          <ul class="prod-features-list">
            <li><strong>Rich Vegetarian Plant Protein:</strong> Crucial for muscle nourishment, active stamina, and morning vitality.</li>
            <li><strong>Restaurant-Style Pesarattu:</strong> Best enjoyed topped with chopped onions, green chillies, and ginger.</li>
            <li><strong>Zero Soaking Hassle:</strong> Enjoy authentic moong pesarattu in 15 minutes without overnight preparation.</li>
            <li><strong>High Satiety Value:</strong> Keeps hunger cravings checked, supporting natural and healthy weight management.</li>
          </ul>
        </div>

        <div style="margin-top: 6px; padding-top: 4px; border-top: 1px dashed #DDD; display: flex; justify-content: space-between; font-size: 9px; color: #555;">
          <span>✔ High Protein</span>
          <span>✔ Zero Maida</span>
          <span><span class="veg-icon"><span class="veg-icon-dot"></span></span> 100% Pure Veg</span>
        </div>
      </div>

      <!-- Product 4: Korra Dosa Mix -->
      <div class="product-card">
        <div>
          <div class="product-header-badge">
            <div>
              <span style="font-size: 9.5px; font-weight: 700; color: #D4AF37; text-transform: uppercase;">PRODUCT – 04</span>
              <h3 class="prod-title">S.P.R. KORRA DOSA MIX</h3>
              <div class="prod-telugu">Foxtail Millet Dosa Mix (కొర్ర దోశ మిక్స్)</div>
            </div>
            <div class="prod-price-pill">
              <div class="prod-price-mrp">₹129</div>
              <div class="prod-price-wt">Net Wt: 500 g</div>
            </div>
          </div>

          <div class="product-img-box">
            <img src="{img_korra}" alt="S.P.R. Korra Dosa Mix">
          </div>

          <div class="prod-ingredient">
            <strong>Key Ingredient:</strong> Traditional Foxtail Millet (Korra / కొర్రలు)
          </div>

          <ul class="prod-features-list">
            <li><strong>King of Positive Siridhanya Millets:</strong> Renowned for exceptionally dense dietary fibre & essential micronutrients.</li>
            <li><strong>Optimal Gut & Digestive Health:</strong> Nourishes beneficial gut flora and improves digestive motility naturally.</li>
            <li><strong>Diabetic-Friendly Energy:</strong> Gentle glucose release prevents post-meal lethargy and promotes sustained alertness.</li>
            <li><strong>Savory Golden Crispiness:</strong> Bakes into paper-thin, crispy dosas cherished by children and adults alike.</li>
          </ul>
        </div>

        <div style="margin-top: 6px; padding-top: 4px; border-top: 1px dashed #DDD; display: flex; justify-content: space-between; font-size: 9px; color: #555;">
          <span>✔ High Fibre</span>
          <span>✔ Low GI</span>
          <span><span class="veg-icon"><span class="veg-icon-dot"></span></span> 100% Pure Veg</span>
        </div>
      </div>
    </div>
  </div>

  <div class="page-bottom-nav">
    <div>S.P.R. Siri Dhanya • Phone: +91 9492468817 • Kamepalli, Andhra Pradesh</div>
    <div>Page 5 / 8</div>
  </div>
</div>

<!-- PAGE 6: MULTI GRAIN ATTA (PRODUCT 05) -->
<div class="page">
  <div>
    <div class="page-top-nav">
      <div class="top-brand">
        <span class="top-brand-name">S.P.R. SIRI DHANYA</span>
      </div>
      <div class="top-tagline">7 Super Grains Multi-Grain Atta | DAILY FAMILY NUTRITION</div>
    </div>

    <div class="section-banner">
      <div class="section-banner-title">
        <span class="section-num">05</span>
        <span class="section-heading">S.P.R. MULTI GRAIN ATTA (PRODUCT – 05)</span>
      </div>
      <span class="section-banner-tag">7 Power Grains & Pulses Fusion</span>
    </div>

    <!-- Main Feature Block -->
    <div class="card" style="margin-bottom: 10px; padding: 10px;">
      <div style="display: flex; gap: 14px; align-items: center;">
        <div style="width: 48mm; height: 68mm; background: #FFF9F2; border-radius: 8px; border: 1.5px solid #E2D9C3; display: flex; align-items: center; justify-content: center; overflow: hidden; flex-shrink: 0;">
          <img src="{img_atta}" alt="SPR Multi Grain Atta" style="max-height: 94%; max-width: 94%; object-fit: contain;">
        </div>

        <div style="flex: 1;">
          <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 4px;">
            <div>
              <span style="font-size: 9.5px; font-weight: 700; color: #D4AF37;">PREMIUM 7-GRAIN DAILY FLOUR</span>
              <h2 style="color: #103B2B; margin: 0; font-size: 17px;">S.P.R. MULTI GRAIN ATTA</h2>
              <div style="color: #8C2D19; font-weight: 700; font-size: 13px;">Seven Super Grains • Complete Everyday Family Nutrition</div>
            </div>
            <div class="prod-price-pill" style="padding: 4px 10px;">
              <div class="prod-price-mrp" style="font-size: 15px;">₹150</div>
              <div class="prod-price-wt" style="font-size: 10px;">Net Weight: 1 KG</div>
            </div>
          </div>

          <p style="font-size: 10.5px; color: #444; line-height: 1.5; margin: 5px 0 8px 0;">
            Specially formulated by blending seven nutrient-dense heritage grains and wholesome pulses in precise proportions to elevate everyday rotis, chapatis, and parathas into wholesome feasts of vitality.
          </p>

          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 6px; font-size: 10px;">
            <div style="background: #FAF6ED; padding: 5px 8px; border-radius: 4px; border-left: 3px solid #103B2B;">
              <strong>🥐 Cotton-Soft Rotis:</strong> Retains softness and fresh moisture for hours.
            </div>
            <div style="background: #FAF6ED; padding: 5px 8px; border-radius: 4px; border-left: 3px solid #103B2B;">
              <strong>⚡ Fast Digestive Formula:</strong> Light on the stomach, zero bloatedness.
            </div>
            <div style="background: #FAF6ED; padding: 5px 8px; border-radius: 4px; border-left: 3px solid #103B2B;">
              <strong>💪 Protein & Fibre Loaded:</strong> Steady muscle stamina & weight wellness.
            </div>
            <div style="background: #FAF6ED; padding: 5px 8px; border-radius: 4px; border-left: 3px solid #103B2B;">
              <strong>🛡️ 100% Pure & Unadulterated:</strong> Zero preservatives, zero maida, zero starch.
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 7 Super Grains Showcase -->
    <div>
      <h4 style="color: #103B2B; margin: 0 0 6px 0; font-size: 12px; text-align: center; border-bottom: 1px solid #D4AF37; padding-bottom: 3px;">
        🌾 THE SEVEN NUTRIENT-RICH SUPER GRAINS IN OUR ATTA:
      </h4>
      <div style="display: grid; grid-template-columns: repeat(7, 1fr); gap: 6px;">
        <div class="grain-badge">
          <span class="grain-num">1</span>
          <div class="grain-name">Wheat</div>
          <div style="font-size: 8px; color: #777;">(గోధుమలు)</div>
          <div class="grain-desc">Foundation for pliable soft dough</div>
        </div>
        <div class="grain-badge">
          <span class="grain-num">2</span>
          <div class="grain-name">Ragi</div>
          <div style="font-size: 8px; color: #777;">(Finger Millet)</div>
          <div class="grain-desc">Natural calcium & bone strength</div>
        </div>
        <div class="grain-badge">
          <span class="grain-num">3</span>
          <div class="grain-name">Bajra</div>
          <div style="font-size: 8px; color: #777;">(Pearl Millet)</div>
          <div class="grain-desc">Essential minerals & metabolic warmth</div>
        </div>
        <div class="grain-badge">
          <span class="grain-num">4</span>
          <div class="grain-name">Jowar</div>
          <div style="font-size: 8px; color: #777;">(Sorghum)</div>
          <div class="grain-desc">Soluble fibre for gut wellbeing</div>
        </div>
        <div class="grain-badge">
          <span class="grain-num">5</span>
          <div class="grain-name">Soybeans</div>
          <div style="font-size: 8px; color: #777;">(సోయాబీన్స్)</div>
          <div class="grain-desc">Dense plant protein & amino acids</div>
        </div>
        <div class="grain-badge">
          <span class="grain-num">6</span>
          <div class="grain-name">Oats</div>
          <div style="font-size: 8px; color: #777;">(ఓట్స్)</div>
          <div class="grain-desc">Beta-glucan fibre for heart wellness</div>
        </div>
        <div class="grain-badge">
          <span class="grain-num">7</span>
          <div class="grain-name">Chana</div>
          <div style="font-size: 8px; color: #777;">(Bengal Gram)</div>
          <div class="grain-desc">Bioavailable iron & hunger satisfaction</div>
        </div>
      </div>
    </div>
  </div>

  <div class="page-bottom-nav">
    <div>S.P.R. Siri Dhanya • Phone: +91 9492468817 • Kamepalli, Andhra Pradesh</div>
    <div>Page 6 / 8</div>
  </div>
</div>

<!-- PAGE 7: REVIEWS & PARTNERSHIPS -->
<div class="page">
  <div>
    <div class="page-top-nav">
      <div class="top-brand">
        <span class="top-brand-name">S.P.R. SIRI DHANYA</span>
      </div>
      <div class="top-tagline">Customer Reviews & Commercial Partnerships</div>
    </div>

    <!-- Section 5: Review & Feedback -->
    <div class="section-banner">
      <div class="section-banner-title">
        <span class="section-num">05</span>
        <span class="section-heading">CUSTOMER REVIEWS & MARKET FEEDBACK</span>
      </div>
      <span class="section-banner-tag">Trust, Loyalty & High Repeat Orders</span>
    </div>

    <div class="grid-3" style="margin-bottom: 12px;">
      <div class="review-card">
        <div class="stars">★★★★★</div>
        <div class="review-text">
          "Zero morning soaking and no messy grinding! In just 15 minutes, piping hot, crispy Ragi and Korra dosas are ready. My kids relish the taste!"
        </div>
        <div class="reviewer-name">Lakshmi Prasanna, Guntur</div>
        <div style="font-size: 8.5px; color: #777;">Working Mother & Home Chef</div>
      </div>

      <div class="review-card">
        <div class="stars">★★★★★</div>
        <div class="review-text">
          "SPR Siri Dhanya Dosa Mixes are one of the fastest moving products on our supermarket breakfast aisle. Remarkable repeat customer demand."
        </div>
        <div class="reviewer-name">Rajesh Varma, Vijayawada</div>
        <div style="font-size: 8.5px; color: #777;">Supermarket Store Owner</div>
      </div>

      <div class="review-card">
        <div class="stars">★★★★★</div>
        <div class="review-text">
          "The Multi Grain Atta produces exceptionally soft chapatis that remain fresh and fluffy till dinner. An invaluable staple for diabetic care."
        </div>
        <div class="reviewer-name">Venkateswara Rao, Ongole</div>
        <div style="font-size: 8.5px; color: #777;">Health-Conscious Consumer</div>
      </div>
    </div>

    <!-- Section 6: Supermarket & Social Media Partnerships -->
    <div class="section-banner">
      <div class="section-banner-title">
        <span class="section-num">06</span>
        <span class="section-heading">SUPERMARKET & COMMERCIAL PARTNERSHIPS</span>
      </div>
      <span class="section-banner-tag">Distribution & Modern Retail Opportunities</span>
    </div>

    <div class="card" style="margin-bottom: 10px;">
      <h4 style="color: #103B2B; margin: 0 0 6px 0; font-size: 12px;">
        Partnering with Supermarkets, Modern Trade & Distribution Networks:
      </h4>
      <p style="font-size: 10.5px; color: #444; line-height: 1.5; margin: 0 0 8px 0;">
        With consumer awareness for millet-based nutrition at an all-time high, S.P.R. Siri Dhanya offers high-inventory-turnover products that elevate store footfall and brand reputation. We are committed to building long-term, profitable relationships with our trade partners.
      </p>

      <div class="grid-3">
        <div class="partner-box">
          <strong>🛍️ High-Impact Shelf Packaging:</strong>
          Aesthetic standing pouches with airtight zip-locks designed to captivate grocery shoppers.
        </div>
        <div class="partner-box">
          <strong>💰 Attractive Trade Margins:</strong>
          Highly competitive retail and wholesale margins structured flexibly around order volumes.
        </div>
        <div class="partner-box">
          <strong>🚚 Reliable & Fresh Dispatches:</strong>
          Freshly milled production batches dispatched swiftly to ensure maximum available shelf life.
        </div>
      </div>
    </div>

    <!-- Social Media Box -->
    <div class="gold-card" style="display: flex; justify-content: space-between; align-items: center;">
      <div>
        <strong style="color: #103B2B; font-size: 12px;">📱 Digital Presence & Social Media Connect:</strong>
        <div style="font-size: 10px; color: #555; margin-top: 2px;">
          WhatsApp Business Catalog, Instagram, Facebook & YouTube recipe showcases for active customer engagement.
        </div>
      </div>
      <div style="text-align: right; font-size: 11px; font-weight: bold; color: #8C2D19;">
        WhatsApp Orders: +91 9492468817
      </div>
    </div>
  </div>

  <div class="page-bottom-nav">
    <div>S.P.R. Siri Dhanya • Phone: +91 9492468817 • Kamepalli, Andhra Pradesh</div>
    <div>Page 7 / 8</div>
  </div>
</div>

<!-- PAGE 8: TERMS & CONDITIONS + THANK YOU -->
<div class="page">
  <div>
    <div class="page-top-nav">
      <div class="top-brand">
        <span class="top-brand-name">S.P.R. SIRI DHANYA</span>
      </div>
      <div class="top-tagline">Commercial Terms & Official Manufacturer Details</div>
    </div>

    <!-- Section 7: Terms & Conditions -->
    <div class="section-banner">
      <div class="section-banner-title">
        <span class="section-num">07</span>
        <span class="section-heading">COMMERCIAL TERMS & CONDITIONS</span>
      </div>
      <span class="section-banner-tag">Transparent B2B Policies</span>
    </div>

    <div class="card" style="margin-bottom: 10px; font-size: 10.5px; line-height: 1.5; color: #333;">
      <ul style="margin: 0; padding-left: 16px;">
        <li style="margin-bottom: 5px;">
          <strong>Orders & Supply Logistics:</strong> Minimum Order Quantities (MOQ) apply for wholesale and distributor trade pricing. Shipments are dispatched within 24 to 48 business hours from order confirmation.
        </li>
        <li style="margin-bottom: 5px;">
          <strong>Pricing & Invoicing:</strong> Listed MRP includes applicable GST. Commercial retailer margins, wholesale slabs, and volume rebates are provided exclusively via official proforma quotation.
        </li>
        <li style="margin-bottom: 5px;">
          <strong>Storage Instructions:</strong> Store pouches in a dry, ventilated, and clean environment away from dampness and direct sunlight to preserve peak aroma and crispness.
        </li>
        <li style="margin-bottom: 5px;">
          <strong>Shelf Life Assurance:</strong> Guaranteed fresh shelf life of 6 to 9 months from the date of manufacturing.
        </li>
        <li>
          <strong>Quality & Transit Guarantee:</strong> Goods are packaged in heavy-duty 5-ply/7-ply corrugated cartons. Any verifiable transit damages are promptly replaced under our seller quality pledge.
        </li>
      </ul>
    </div>

    <!-- Section 8: Thank You & Contact -->
    <div class="section-banner" style="background: linear-gradient(135deg, #8C2D19 0%, #103B2B 100%);">
      <div class="section-banner-title">
        <span class="section-num" style="background: #FFF; color: #8C2D19;">08</span>
        <span class="section-heading">THANK YOU & OFFICIAL CONTACT INFORMATION</span>
      </div>
      <span class="section-banner-tag">Direct Manufacturing Plant</span>
    </div>

    <div class="contact-grid">
      <div>
        <h3 style="color: #103B2B; margin: 0 0 6px 0; font-size: 16px;">S.P.R. SIRI DHANYA</h3>
        <div style="font-size: 11px; color: #8C2D19; font-weight: 700; margin-bottom: 8px;">
          Traditional Nutrition… Modern Convenience… Health in Every Grain!
        </div>

        <div class="contact-item">
          <div class="contact-icon">📞</div>
          <div>
            <strong>Direct Phone & WhatsApp Orders:</strong><br>
            <span style="font-size: 14px; font-weight: 800; color: #103B2B;">+91 9492468817</span>
          </div>
        </div>

        <div class="contact-item">
          <div class="contact-icon">🏭</div>
          <div>
            <strong>Manufacturing Facility Address:</strong><br>
            Kamepalli, Santamaguluru Mandal,<br>
            Bapatla District, Andhra Pradesh, India.
          </div>
        </div>

        <div class="contact-item">
          <div class="contact-icon">📜</div>
          <div>
            <strong>FSSAI License No:</strong><br>
            <span style="font-weight: 700; color: #103B2B;">20126152000402</span>
          </div>
        </div>
      </div>

      <div style="text-align: center; display: flex; flex-direction: column; justify-content: center; align-items: center; background: #FAF6ED; border-radius: 8px; padding: 12px; border: 1px dashed #D4AF37;">
        <div style="font-size: 32px; margin-bottom: 6px;">🙏</div>
        <h4 style="color: #103B2B; margin: 0 0 4px 0; font-size: 13px;">Thank You for Partnering with Us!</h4>
        <p style="font-size: 10px; color: #555; margin: 0 0 10px 0; line-height: 1.4;">
          We sincerely appreciate your trust in S.P.R. Siri Dhanya and your dedication to bringing authentic millet nutrition to every dining table.
        </p>
        <div style="background: #103B2B; color: #FFE680; padding: 6px 14px; border-radius: 20px; font-size: 10.5px; font-weight: 700;">
          Healthy Food... Happy Life...
        </div>
      </div>
    </div>
  </div>

  <div class="page-bottom-nav">
    <div>S.P.R. Siri Dhanya • Phone: +91 9492468817 • Kamepalli, Andhra Pradesh</div>
    <div>Page 8 / 8</div>
  </div>
</div>

</body>
</html>
"""

with open(os.path.join(BASE_DIR, "catalogue_english.html"), "w", encoding="utf-8") as f:
    f.write(HTML_ENGLISH)

print("English HTML written successfully.")
