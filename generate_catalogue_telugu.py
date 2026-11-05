import os
import base64
import asyncio
from playwright.async_api import async_playwright
from catalogue_builder_base import (
    COMMON_CSS, img_poster, img_logo, img_ragi, img_jonna, 
    img_korra, img_atta, img_pesara, BASE_DIR
)

HTML_TELUGU = f"""<!DOCTYPE html>
<html lang="te">
<head>
<meta charset="UTF-8">
<title>S.P.R. Siri Dhanya - అధికారిక ఉత్పత్తుల కేటలాగ్</title>
<style>
{COMMON_CSS}
body {{
  font-family: 'Noto Sans Telugu', 'Mandali', 'Plus Jakarta Sans', sans-serif;
}}
</style>
</head>
<body>

<!-- PAGE 1: COVER PAGE -->
<div class="page cover-page">
  <div style="margin-top: 4mm;">
    <div class="cover-gold-strip">⭐ సంప్రదాయ చిరుధాన్యాల ఆహార ఉత్పత్తులు ⭐</div>
    <h1 class="cover-brand-title">S.P.R. SIRI DHANYA</h1>
    <div class="cover-brand-sub">అధికారిక ఉత్పత్తుల కేటలాగ్ | OFFICIAL PRODUCT CATALOGUE</div>
    <div class="cover-slogan-pill">🌿 ప్రతి గింజలో ఆరోగ్యం | HEALTH IN EVERY GRAIN 🌿</div>
  </div>

  <div class="cover-hero-img-wrap">
    <img src="{img_poster}" alt="SPR Siri Dhanya Products Lineup">
  </div>

  <div class="cover-tagline-box">
    <div class="cover-tagline-main">సంప్రదాయ పోషణ – ఆధునిక సౌలభ్యం</div>
    <div class="cover-tagline-sub">మన సంప్రదాయ ధాన్యాలు... మన ఆరోగ్యానికి, మన భవిష్యత్తుకు... Healthy Food... Happy Life...</div>
    
    <div class="cover-badges-row">
      <div class="cover-badge-item">🌾 100% సహజ ధాన్యాలు</div>
      <div class="cover-badge-item">💪 అధిక ప్రొటీన్ & పీచు పదార్థం</div>
      <div class="cover-badge-item">⏱️ 15 నిమిషాల్లో సిద్ధం</div>
      <div class="cover-badge-item">🚫 ప్రిజర్వేటివ్స్ లేవు</div>
    </div>
  </div>

  <div class="cover-footer">
    <div>సూపర్ మార్కెట్లు, హోల్సేల్ & డిస్ట్రిబ్యూటర్ల వ్యాపార కేటలాగ్</div>
    <div>FSSAI Lic No: <strong>20126152000402</strong></div>
    <div>ఫోన్: <strong>9492468817</strong></div>
  </div>
</div>

<!-- PAGE 2: ABOUT US -->
<div class="page">
  <div>
    <div class="page-top-nav">
      <div class="top-brand">
        <span class="top-brand-name">S.P.R. SIRI DHANYA</span>
      </div>
      <div class="top-tagline">ప్రతి గింజలో ఆరోగ్యం • సంప్రదాయ పోషణ – ఆధునిక సౌలభ్యం</div>
    </div>

    <div class="section-banner">
      <div class="section-banner-title">
        <span class="section-num">01</span>
        <span class="section-heading">మా సంస్థ పరిచయం (ABOUT OUR COMPANY)</span>
      </div>
      <span class="section-banner-tag">సంస్థ లక్ష్యం & విలువలు</span>
    </div>

    <!-- Company Story -->
    <div class="card" style="margin-bottom: 10px; background: #FFFDF9; border-left: 5px solid #103B2B;">
      <h3 style="color: #103B2B; margin: 0 0 5px 0; font-size: 14px;">సంప్రదాయ పోషకాలు – నేటి సమాజపు ఆరోగ్య వారధి</h3>
      <p style="font-size: 10.5px; line-height: 1.55; color: #333; margin: 0 0 7px 0;">
        నేటి సమాజంలో ఆహారపు అలవాట్లు మారుతున్నాయి. వేగవంతమైన జీవనశైలి, కల్తీ ఆహార పదార్థాలు, పోషకాహార లోపం వంటి సమస్యలు ప్రజల ఆరోగ్యంపై తీవ్ర ప్రభావం చూపుతున్నాయి. ఈ పరిస్థితుల్లో మన పూర్వీకులు అందించిన సిరిధాన్యాలు, సంప్రదాయ ఆహారపు విలువలను ఆధునిక జీవనశైలికి అనుగుణంగా ప్రతి ఒక్కరికీ అందించాలన్నదే మన <strong>S.P.R. సిరిధాన్య</strong> ముఖ్య ఉద్దేశం.
      </p>
      <div style="background: #F4EFE6; padding: 7px 12px; border-radius: 6px; border: 1px dashed #D4AF37;">
        <strong style="color: #8C2D19; font-size: 11.5px;">మన సంకల్పం:</strong>
        <span style="font-size: 11px; color: #103B2B; font-weight: 700; margin-left: 5px;">"ప్రతి కుటుంబానికి పోషకాహారం… ప్రతి తరానికి ఆరోగ్యకరమైన భవిష్యత్తు!"</span>
      </div>
    </div>

    <!-- 4 Pillars Grid -->
    <div class="grid-2" style="margin-bottom: 10px;">
      <div class="card">
        <div style="font-size: 18px; margin-bottom: 2px;">🌾</div>
        <h4 style="color: #103B2B; margin: 0 0 3px 0; font-size: 11.5px;">1. సంప్రదాయ ధాన్యాల ఎంపిక</h4>
        <p style="font-size: 9.5px; color: #555; margin: 0; line-height: 1.4;">
          మన పూర్వీకుల వారసత్వమైన మేలైన రాగులు, జొన్నలు, కొర్రలు, సజ్జలు మరియు పెసలను నేరుగా రైతుల నుండి సేకరిస్తాము.
        </p>
      </div>

      <div class="card">
        <div style="font-size: 18px; margin-bottom: 2px;">🧼</div>
        <h4 style="color: #103B2B; margin: 0 0 3px 0; font-size: 11.5px;">2. స్వచ్ఛత & పరిశుభ్రమైన తయారీ</h4>
        <p style="font-size: 9.5px; color: #555; margin: 0; line-height: 1.4;">
          కల్తీ లేని, స్వచ్ఛమైన వాతావరణంలో ఆధునిక పద్ధతులతో ప్రాసెస్ చేసి, సహజ పోషకాలు నశించకుండా భద్రపరుస్తాము.
        </p>
      </div>

      <div class="card">
        <div style="font-size: 18px; margin-bottom: 2px;">⚡</div>
        <h4 style="color: #103B2B; margin: 0 0 3px 0; font-size: 11.5px;">3. తక్కువ సమయంలో ఆరోగ్యకరమైన ఆహారం</h4>
        <p style="font-size: 9.5px; color: #555; margin: 0; line-height: 1.4;">
          ఉద్యోగులు, వ్యాపారులు, మహిళలు, విద్యార్థులు, ఒంటరిగా నివసించే వారికి అతి తక్కువ సమయంలో ఆరోగ్యకరమైన ఆహారం సిద్ధమయ్యేలా చేయడం.
        </p>
      </div>

      <div class="card">
        <div style="font-size: 18px; margin-bottom: 2px;">🍲</div>
        <h4 style="color: #103B2B; margin: 0 0 3px 0; font-size: 11.5px;">4. సంప్రదాయ ఆహారానికి ఆధునిక రూపం</h4>
        <p style="font-size: 9.5px; color: #555; margin: 0; line-height: 1.4;">
          మన పూర్వీకుల ఆహారపు అలవాట్లలోని మంచిని నేటి తరానికి సులభమైన పద్ధతిలో అందించడం.
        </p>
      </div>
    </div>

    <!-- Quality Assurance Box -->
    <div class="gold-card" style="display: flex; align-items: center; gap: 15px;">
      <div style="font-size: 32px;">🛡️</div>
      <div>
        <h4 style="color: #103B2B; margin: 0 0 3px 0; font-size: 12px;">FSSAI గుర్తింపు మరియు నాణ్యతా ప్రమాణాలు</h4>
        <p style="font-size: 10px; color: #444; margin: 0; line-height: 1.4;">
          S.P.R. Siri Dhanya ఉత్పత్తులు భారత ఆహార భద్రతా ప్రమాణాల అథారిటీ (FSSAI) లైసెన్స్ నెం: <strong>20126152000402</strong> క్రింద ధృవీకరించబడినవి. కృత్రిమ రంగులు, హానికర రసాయనాలు లేని 100% శాకాహార నాణ్యమైన ఉత్పత్తులు.
        </p>
      </div>
    </div>
  </div>

  <div class="page-bottom-nav">
    <div>S.P.R. Siri Dhanya • ఫోన్: 9492468817 • కామేపల్లి, ఆంధ్రప్రదేశ్</div>
    <div>పేజీ 2 / 8</div>
  </div>
</div>

<!-- PAGE 3: INDEX & INSTANT ADVANTAGES -->
<div class="page">
  <div>
    <div class="page-top-nav">
      <div class="top-brand">
        <span class="top-brand-name">S.P.R. SIRI DHANYA</span>
      </div>
      <div class="top-tagline">సూచిక & తయారీ సౌలభ్యం | INDEX & ADVANTAGES</div>
    </div>

    <div class="section-banner">
      <div class="section-banner-title">
        <span class="section-num">02</span>
        <span class="section-heading">విషయ సూచిక & తయారీ సౌలభ్యం (INDEX & FEATURES)</span>
      </div>
      <span class="section-banner-tag">వివరాలు & ధరల పట్టిక</span>
    </div>

    <!-- Index Grid -->
    <div style="margin-bottom: 8px;">
      <h4 style="color: #103B2B; margin: 0 0 5px 0; font-size: 12px; border-bottom: 1px solid #D4AF37; padding-bottom: 3px;">కేటలాగ్ విషయ సూచిక (TABLE OF CONTENTS):</h4>
      <div class="grid-2" style="font-size: 10px;">
        <div style="background: #FFF; padding: 6px 10px; border-radius: 5px; border-left: 3px solid #103B2B;">
          <strong>1. ముఖచిత్రం (Cover):</strong> బ్రాండ్ పరిచయం & గ్రూప్ డిస్‌ప్లే
        </div>
        <div style="background: #FFF; padding: 6px 10px; border-radius: 5px; border-left: 3px solid #103B2B;">
          <strong>2. సంస్థ పరిచయం (About Us):</strong> మా సంకల్పం & 4 స్తంభాలు
        </div>
        <div style="background: #FFF; padding: 6px 10px; border-radius: 5px; border-left: 3px solid #103B2B;">
          <strong>3. సూచిక & ప్రత్యేకతలు (Index):</strong> MRP ప్రైస్ లిస్ట్ & సౌలభ్యం
        </div>
        <div style="background: #FFF; padding: 6px 10px; border-radius: 5px; border-left: 3px solid #103B2B;">
          <strong>4. ఉత్పత్తులు 01 & 02:</strong> రాగి & జొన్న దోశ మిక్స్
        </div>
        <div style="background: #FFF; padding: 6px 10px; border-radius: 5px; border-left: 3px solid #103B2B;">
          <strong>5. ఉత్పత్తులు 03 & 04:</strong> పెసర & కొర్ర దోశ మిక్స్
        </div>
        <div style="background: #FFF; padding: 6px 10px; border-radius: 5px; border-left: 3px solid #103B2B;">
          <strong>6. ఉత్పత్తి 05:</strong> మల్టీ గ్రీన్ ఆటా (7 ధాన్యాల శక్తి)
        </div>
        <div style="background: #FFF; padding: 6px 10px; border-radius: 5px; border-left: 3px solid #103B2B;">
          <strong>7. సమీక్షలు & భాగస్వామ్యాలు:</strong> సూపర్ మార్కెట్ భాగస్వామ్యం
        </div>
        <div style="background: #FFF; padding: 6px 10px; border-radius: 5px; border-left: 3px solid #103B2B;">
          <strong>8. నిబంధనలు & ధన్యవాదాలు:</strong> నియమ నిబంధనలు & కాంటాక్ట్
        </div>
      </div>
    </div>

    <!-- Instant Dosa Mix Advantage -->
    <div class="gold-card" style="margin-bottom: 8px;">
      <h4 style="color: #8C2D19; margin: 0 0 6px 0; font-size: 12px; text-align: center;">⚡ ఇన్స్టెంట్ దోశ మిక్స్‌ల అసలైన సౌలభ్యం – సమయ ఆదా పరిష్కారం</h4>
      <div class="grid-3" style="text-align: center; font-size: 10px;">
        <div style="background: #FFF; padding: 5px; border-radius: 5px; border: 1px solid #E2D9C3;">
          <div style="font-size: 14px;">💧</div>
          <strong style="color: #103B2B;">Just Add Water</strong>
          <div>కేవలం నీరు కలపండి</div>
        </div>
        <div style="background: #FFF; padding: 5px; border-radius: 5px; border: 1px solid #E2D9C3;">
          <div style="font-size: 14px;">⏱️</div>
          <strong style="color: #103B2B;">Ready in 15 Min</strong>
          <div>15 నిమిషాల్లో సిద్ధం</div>
        </div>
        <div style="background: #FFF; padding: 5px; border-radius: 5px; border: 1px solid #E2D9C3;">
          <div style="font-size: 14px;">🚿</div>
          <strong style="color: #103B2B;">No Washing</strong>
          <div>కడగనక్కర్లేదు</div>
        </div>
        <div style="background: #FFF; padding: 5px; border-radius: 5px; border: 1px solid #E2D9C3;">
          <div style="font-size: 14px;">⏳</div>
          <strong style="color: #103B2B;">No Soaking</strong>
          <div>నానబెట్టనక్కర్లేదు</div>
        </div>
        <div style="background: #FFF; padding: 5px; border-radius: 5px; border: 1px solid #E2D9C3;">
          <div style="font-size: 14px;">🥣</div>
          <strong style="color: #103B2B;">No Grinding</strong>
          <div>రుబ్బే పనిలేదు</div>
        </div>
        <div style="background: #FFF; padding: 5px; border-radius: 5px; border: 1px solid #E2D9C3;">
          <div style="font-size: 14px;">🧪</div>
          <strong style="color: #103B2B;">No Fermentation</strong>
          <div>పులియబెట్టాల్సిన పనిలేదు</div>
        </div>
      </div>
    </div>

    <!-- Official MRP Price List Table -->
    <div>
      <h4 style="color: #103B2B; margin: 0 0 4px 0; font-size: 12px;">📊 అధికారిక MRP ధరల జాబితా (OFFICIAL MRP PRICE LIST):</h4>
      <table class="custom-table">
        <thead>
          <tr>
            <th>క్రమ సంఖ్య</th>
            <th>ఉత్పత్తి పేరు (PRODUCT NAME)</th>
            <th>ప్రధాన పదార్థం</th>
            <th>పరిమాణం (NET WT)</th>
            <th>గరిష్ట రిటైల్ ధర (MRP)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>01</strong></td>
            <td><strong>S.P.R. RAGI DOSA MIX</strong> (రాగి దోశ మిక్స్)</td>
            <td>సంప్రదాయ రాగులు</td>
            <td>500 గ్రాములు</td>
            <td><strong style="color: #8C2D19; font-size: 12px;">₹119</strong></td>
          </tr>
          <tr>
            <td><strong>02</strong></td>
            <td><strong>S.P.R. JOWAR DOSA MIX</strong> (జొన్న దోశ మిక్స్)</td>
            <td>సహజ జొన్నలు</td>
            <td>500 గ్రాములు</td>
            <td><strong style="color: #8C2D19; font-size: 12px;">₹119</strong></td>
          </tr>
          <tr>
            <td><strong>03</strong></td>
            <td><strong>S.P.R. PESARA DOSA MIX</strong> (పెసర దోశ మిక్స్)</td>
            <td>నాణ్యమైన పెసలు</td>
            <td>500 గ్రాములు</td>
            <td><strong style="color: #8C2D19; font-size: 12px;">₹129</strong></td>
          </tr>
          <tr>
            <td><strong>04</strong></td>
            <td><strong>S.P.R. KORRA DOSA MIX</strong> (కొర్ర దోశ మిక్స్)</td>
            <td>సంప్రదాయ కొర్రలు</td>
            <td>500 గ్రాములు</td>
            <td><strong style="color: #8C2D19; font-size: 12px;">₹129</strong></td>
          </tr>
          <tr>
            <td><strong>05</strong></td>
            <td><strong>S.P.R. MULTI GRAIN ATTA</strong> (మల్టీ గ్రీన్ ఆటా)</td>
            <td>7 రకాల ధాన్యాల మిశ్రమం</td>
            <td>1 కిలో</td>
            <td><strong style="color: #8C2D19; font-size: 12px;">₹150</strong></td>
          </tr>
        </tbody>
      </table>
      <div style="font-size: 9px; color: #666; font-style: italic;">
        * గమనిక: సూపర్ మార్కెట్ మరియు డిస్ట్రిబ్యూటర్ హోల్సేల్ మార్జిన్లు మరియు బల్క్ ఆర్డర్ రేట్లు ప్రత్యేకంగా అందించబడతాయి.
      </div>
    </div>
  </div>

  <div class="page-bottom-nav">
    <div>S.P.R. Siri Dhanya • ఫోన్: 9492468817 • కామేపల్లి, ఆంధ్రప్రదేశ్</div>
    <div>పేజీ 3 / 8</div>
  </div>
</div>

<!-- PAGE 4: PRODUCT PAGE 1 - RAGI & JOWAR -->
<div class="page">
  <div>
    <div class="page-top-nav">
      <div class="top-brand">
        <span class="top-brand-name">S.P.R. SIRI DHANYA</span>
      </div>
      <div class="top-tagline">ఇన్స్టెంట్ దోశ మిక్స్ పోర్ట్‌ఫోలియో | PRODUCT SHOWCASE</div>
    </div>

    <div class="section-banner">
      <div class="section-banner-title">
        <span class="section-num">03</span>
        <span class="section-heading">ఉత్పత్తులు: రాగి & జొన్న దోశ మిక్స్ (PRODUCTS 01 & 02)</span>
      </div>
      <span class="section-banner-tag">ప్రతి గింజలో ఆరోగ్యం</span>
    </div>

    <div class="grid-2">
      <!-- Product 1: Ragi Dosa Mix -->
      <div class="product-card">
        <div>
          <div class="product-header-badge">
            <div>
              <span style="font-size: 9.5px; font-weight: 700; color: #D4AF37; text-transform: uppercase;">PRODUCT – 01</span>
              <h3 class="prod-title">S.P.R. RAGI DOSA MIX</h3>
              <div class="prod-telugu">రాగి దోశ మిక్స్</div>
            </div>
            <div class="prod-price-pill">
              <div class="prod-price-mrp">₹119</div>
              <div class="prod-price-wt">500 గ్రాములు</div>
            </div>
          </div>

          <div class="product-img-box">
            <img src="{img_ragi}" alt="S.P.R. Ragi Dosa Mix">
          </div>

          <div class="prod-ingredient">
            <strong>ప్రధాన పదార్థం:</strong> సంప్రదాయ రాగులు (Finger Millet)
          </div>

          <ul class="prod-features-list">
            <li><strong>కాల్షియం & ఐరన్ గని:</strong> ఎముకల పుష్టికి, పిల్లల ఎదుగుదలకు అత్యుత్తమం.</li>
            <li><strong>మధుమేహ నివారణ:</strong> తక్కువ గ్లైసెమిక్ ఇండెక్స్ వల్ల షుగర్ నియంత్రణలో ఉంటుంది.</li>
            <li><strong>సులభమైన తయారీ:</strong> నీరు కలిపి 15 నిమిషాల్లో కరకరలాడే రుచికరమైన దోశలు తయారుచేసుకోవచ్చు.</li>
            <li><strong>సంప్రదాయ పోషణ:</strong> రోజువారీ అల్పాహారంలో చిరుధాన్యాలను చేర్చుకునే సులభమైన సౌలభ్యం.</li>
          </ul>
        </div>

        <div style="margin-top: 6px; padding-top: 4px; border-top: 1px dashed #DDD; display: flex; justify-content: space-between; font-size: 9px; color: #555;">
          <span>✔ No Soaking</span>
          <span>✔ No Grinding</span>
          <span><span class="veg-icon"><span class="veg-icon-dot"></span></span> 100% శాకాహారం</span>
        </div>
      </div>

      <!-- Product 2: Jowar Dosa Mix -->
      <div class="product-card">
        <div>
          <div class="product-header-badge">
            <div>
              <span style="font-size: 9.5px; font-weight: 700; color: #D4AF37; text-transform: uppercase;">PRODUCT – 02</span>
              <h3 class="prod-title">S.P.R. JOWAR DOSA MIX</h3>
              <div class="prod-telugu">జొన్న దోశ మిక్స్</div>
            </div>
            <div class="prod-price-pill">
              <div class="prod-price-mrp">₹119</div>
              <div class="prod-price-wt">500 గ్రాములు</div>
            </div>
          </div>

          <div class="product-img-box">
            <img src="{img_jonna}" alt="S.P.R. Jowar Dosa Mix">
          </div>

          <div class="prod-ingredient">
            <strong>ప్రధాన పదార్థం:</strong> సహజ జొన్నలు (Sorghum Millet)
          </div>

          <ul class="prod-features-list">
            <li><strong>గ్లూటెన్ లేని ధాన్యం:</strong> సులభంగా జీర్ణమవుతుంది, గ్యాస్ మరియు అసిడిటీని తగ్గిస్తుంది.</li>
            <li><strong>యాంటీఆక్సిడెంట్స్ & మెగ్నీషియం:</strong> గుండె ఆరోగ్యానికి మరియు రక్తపోటు నియంత్రణకు మేలు.</li>
            <li><strong>కుటుంబ అల్పాహారం:</strong> తేలికైన, కమ్మనైన క్రిస్పీ దోశలతో రోజంతా ఉల్లాసం.</li>
            <li><strong>సమయ ఆదా:</strong> ఆధునిక గృహిణులకు, వర్కింగ్ ప్రొఫెషనల్స్‌కు శ్రమ లేని అమూల్యమైన ఆహారం.</li>
          </ul>
        </div>

        <div style="margin-top: 6px; padding-top: 4px; border-top: 1px dashed #DDD; display: flex; justify-content: space-between; font-size: 9px; color: #555;">
          <span>✔ No Fermentation</span>
          <span>✔ 15 Mins Ready</span>
          <span><span class="veg-icon"><span class="veg-icon-dot"></span></span> 100% శాకాహారం</span>
        </div>
      </div>
    </div>
  </div>

  <div class="page-bottom-nav">
    <div>S.P.R. Siri Dhanya • ఫోన్: 9492468817 • కామేపల్లి, ఆంధ్రప్రదేశ్</div>
    <div>పేజీ 4 / 8</div>
  </div>
</div>

<!-- PAGE 5: PRODUCT PAGE 2 - PESARA & KORRA -->
<div class="page">
  <div>
    <div class="page-top-nav">
      <div class="top-brand">
        <span class="top-brand-name">S.P.R. SIRI DHANYA</span>
      </div>
      <div class="top-tagline">ఇన్స్టెంట్ దోశ మిక్స్ పోర్ట్‌ఫోలియో | PRODUCT SHOWCASE</div>
    </div>

    <div class="section-banner">
      <div class="section-banner-title">
        <span class="section-num">04</span>
        <span class="section-heading">ఉత్పత్తులు: పెసర & కొర్ర దోశ మిక్స్ (PRODUCTS 03 & 04)</span>
      </div>
      <span class="section-banner-tag">పోషణ & శక్తి</span>
    </div>

    <div class="grid-2">
      <!-- Product 3: Pesara Dosa Mix -->
      <div class="product-card">
        <div>
          <div class="product-header-badge">
            <div>
              <span style="font-size: 9.5px; font-weight: 700; color: #D4AF37; text-transform: uppercase;">PRODUCT – 03</span>
              <h3 class="prod-title">S.P.R. PESARA DOSA MIX</h3>
              <div class="prod-telugu">పెసర దోశ మిక్స్</div>
            </div>
            <div class="prod-price-pill">
              <div class="prod-price-mrp">₹129</div>
              <div class="prod-price-wt">500 గ్రాములు</div>
            </div>
          </div>

          <div class="product-img-box">
            <img src="{img_pesara}" alt="S.P.R. Pesara Dosa Mix">
          </div>

          <div class="prod-ingredient">
            <strong>ప్రధాన పదార్థం:</strong> స్వచ్ఛమైన పెసలు (Whole Moong / Green Gram)
          </div>

          <ul class="prod-features-list">
            <li><strong>అధిక ప్లాంట్ ప్రొటీన్:</strong> కండరాల పుష్టికి మరియు శరీర శక్తికి అనువైన పప్పుధాన్య పోషకం.</li>
            <li><strong>రుచికరమైన పెసరట్లు:</strong> ఉల్లిపాయ, పచ్చిమిర్చి, అల్లం ముక్కలతో హోటల్ స్టైల్ క్రంచీ దోశలు.</li>
            <li><strong>నానబెట్టే పనిలేదు:</strong> పెసలు నానబెట్టి రుబ్బే తిప్పలు లేకుండా నిమిషాల్లో తయారీ.</li>
            <li><strong>బ్రేక్‌ఫాస్ట్‌కు బెస్ట్ చాయిస్:</strong> రోజంతా కడుపు నిండిన సంతృప్తినిచ్చి బరువు నియంత్రణలో ఉంచుతుంది.</li>
          </ul>
        </div>

        <div style="margin-top: 6px; padding-top: 4px; border-top: 1px dashed #DDD; display: flex; justify-content: space-between; font-size: 9px; color: #555;">
          <span>✔ High Protein</span>
          <span>✔ Zero Maida</span>
          <span><span class="veg-icon"><span class="veg-icon-dot"></span></span> 100% శాకాహారం</span>
        </div>
      </div>

      <!-- Product 4: Korra Dosa Mix -->
      <div class="product-card">
        <div>
          <div class="product-header-badge">
            <div>
              <span style="font-size: 9.5px; font-weight: 700; color: #D4AF37; text-transform: uppercase;">PRODUCT – 04</span>
              <h3 class="prod-title">S.P.R. KORRA DOSA MIX</h3>
              <div class="prod-telugu">కొర్ర దోశ మిక్స్</div>
            </div>
            <div class="prod-price-pill">
              <div class="prod-price-mrp">₹129</div>
              <div class="prod-price-wt">500 గ్రాములు</div>
            </div>
          </div>

          <div class="product-img-box">
            <img src="{img_korra}" alt="S.P.R. Korra Dosa Mix">
          </div>

          <div class="prod-ingredient">
            <strong>ప్రధాన పదార్థం:</strong> సిరిధాన్య కొర్రలు (Foxtail Millet)
          </div>

          <ul class="prod-features-list">
            <li><strong>సిరిధాన్యాల రారాజు కొర్రలు:</strong> అత్యధిక పీచు పదార్థం మరియు సూక్ష్మ పోషకాల భాండాగారం.</li>
            <li><strong>జీర్ణక్రియకు అమృతం:</strong> పేగుల ఆరోగ్యాన్ని మెరుగుపరుస్తుంది, రక్తహీనతను నివారిస్తుంది.</li>
            <li><strong>డయాబెటిక్ స్నేహితుడు:</strong> నిలకడగా గ్లూకోజ్ విడుదల చేసి రోజంతా శక్తినిస్తుంది.</li>
            <li><strong>గోల్డెన్ క్రిస్పీ దోశ:</strong> పిల్లల నుండి పెద్దల వరకు అందరూ ఇష్టపడే కమ్మని రుచి.</li>
          </ul>
        </div>

        <div style="margin-top: 6px; padding-top: 4px; border-top: 1px dashed #DDD; display: flex; justify-content: space-between; font-size: 9px; color: #555;">
          <span>✔ High Fibre</span>
          <span>✔ Low GI</span>
          <span><span class="veg-icon"><span class="veg-icon-dot"></span></span> 100% శాకాహారం</span>
        </div>
      </div>
    </div>
  </div>

  <div class="page-bottom-nav">
    <div>S.P.R. Siri Dhanya • ఫోన్: 9492468817 • కామేపల్లి, ఆంధ్రప్రదేశ్</div>
    <div>పేజీ 5 / 8</div>
  </div>
</div>

<!-- PAGE 6: MULTI GRAIN ATTA (PRODUCT 05) -->
<div class="page">
  <div>
    <div class="page-top-nav">
      <div class="top-brand">
        <span class="top-brand-name">S.P.R. SIRI DHANYA</span>
      </div>
      <div class="top-tagline">మల్టీ గ్రీన్ ఆటా | 7 SUPER GRAINS MULTI-GRAIN ATTA</div>
    </div>

    <div class="section-banner">
      <div class="section-banner-title">
        <span class="section-num">05</span>
        <span class="section-heading">S.P.R. మల్టీ గ్రీన్ ఆటా (PRODUCT – 05: MULTI GRAIN ATTA)</span>
      </div>
      <span class="section-banner-tag">7 రకాల పోషక ధాన్యాల సమ్మేళనం</span>
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
              <span style="font-size: 9.5px; font-weight: 700; color: #D4AF37;">PREMIUM 7-GRAIN BLEND</span>
              <h2 style="color: #103B2B; margin: 0; font-size: 17px;">S.P.R. MULTI GRAIN ATTA</h2>
              <div style="color: #8C2D19; font-weight: 700; font-size: 13px;">మల్టీ గ్రీన్ ఆటా – ప్రతి చపాతీలో సంపూర్ణ పోషణ</div>
            </div>
            <div class="prod-price-pill" style="padding: 4px 10px;">
              <div class="prod-price-mrp" style="font-size: 15px;">₹150</div>
              <div class="prod-price-wt" style="font-size: 10px;">నికర బరువు: 1 కిలో (1 KG)</div>
            </div>
          </div>

          <p style="font-size: 10.5px; color: #444; line-height: 1.5; margin: 5px 0 8px 0;">
            రోజువారీ చపాతీలు మరియు రొట్టెలను మరింత బలవర్ధకంగా మార్చేందుకు ఏడు రకాల సంప్రదాయ ధాన్యాలు మరియు పప్పుధాన్యాలను శాస్త్రీయ నిష్పత్తిలో సమ్మిళితం చేసి ఈ ఆటా రూపొందించబడింది.
          </p>

          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 6px; font-size: 10px;">
            <div style="background: #FAF6ED; padding: 5px 8px; border-radius: 4px; border-left: 3px solid #103B2B;">
              <strong>🥐 దూదిలాంటి మెత్తని చపాతీలు:</strong> ఎక్కువ సమయం మృదువుగా ఉంటాయి.
            </div>
            <div style="background: #FAF6ED; padding: 5px 8px; border-radius: 4px; border-left: 3px solid #103B2B;">
              <strong>⚡ ఫాస్ట్ డైజెస్టివ్ ఫార్ములా:</strong> పొట్టకు తేలికైన సులభ జీర్ణశక్తి.
            </div>
            <div style="background: #FAF6ED; padding: 5px 8px; border-radius: 4px; border-left: 3px solid #103B2B;">
              <strong>💪 అధిక ప్రొటీన్ & పీచు:</strong> కండరాల శక్తి, బరువు నియంత్రణ.
            </div>
            <div style="background: #FAF6ED; padding: 5px 8px; border-radius: 4px; border-left: 3px solid #103B2B;">
              <strong>🛡️ 100% సహజత్వం:</strong> రసాయనాలు, మైదా ఏమాత్రం లేని స్వచ్ఛత.
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 7 Super Grains Showcase -->
    <div>
      <h4 style="color: #103B2B; margin: 0 0 6px 0; font-size: 12px; text-align: center; border-bottom: 1px solid #D4AF37; padding-bottom: 3px;">
        🌾 మల్టీ గ్రీన్ ఆటాలో కలసిన 7 సంప్రదాయ పోషక ధాన్యాలు (THE 7 SUPER GRAINS):
      </h4>
      <div style="display: grid; grid-template-columns: repeat(7, 1fr); gap: 6px;">
        <div class="grain-badge">
          <span class="grain-num">1</span>
          <div class="grain-name">గోధుమలు</div>
          <div style="font-size: 8px; color: #777;">(Wheat)</div>
          <div class="grain-desc">మెత్తని రోటీలకు ఆధారం</div>
        </div>
        <div class="grain-badge">
          <span class="grain-num">2</span>
          <div class="grain-name">రాగులు</div>
          <div style="font-size: 8px; color: #777;">(Ragi)</div>
          <div class="grain-desc">సహజ కాల్షియం, ఎముకల బలం</div>
        </div>
        <div class="grain-badge">
          <span class="grain-num">3</span>
          <div class="grain-name">సజ్జలు</div>
          <div style="font-size: 8px; color: #777;">(Bajra)</div>
          <div class="grain-desc">ఖనిజ లవణాలు, దేహానికి బలం</div>
        </div>
        <div class="grain-badge">
          <span class="grain-num">4</span>
          <div class="grain-name">జొన్నలు</div>
          <div style="font-size: 8px; color: #777;">(Jowar)</div>
          <div class="grain-desc">పీచు పదార్థం, జీర్ణక్రియ మేలు</div>
        </div>
        <div class="grain-badge">
          <span class="grain-num">5</span>
          <div class="grain-name">సోయాబీన్స్</div>
          <div style="font-size: 8px; color: #777;">(Soybeans)</div>
          <div class="grain-desc">అధిక ప్లాంట్ ప్రొటీన్ శక్తి</div>
        </div>
        <div class="grain-badge">
          <span class="grain-num">6</span>
          <div class="grain-name">ఓట్స్</div>
          <div style="font-size: 8px; color: #777;">(Oats)</div>
          <div class="grain-desc">గుండెకు మేలుచేసే బీటా-గ్లూకాన్</div>
        </div>
        <div class="grain-badge">
          <span class="grain-num">7</span>
          <div class="grain-name">శనగలు</div>
          <div style="font-size: 8px; color: #777;">(Chana)</div>
          <div class="grain-desc">సహజ ఐరన్ & ఆకలి నియంత్రణ</div>
        </div>
      </div>
    </div>
  </div>

  <div class="page-bottom-nav">
    <div>S.P.R. Siri Dhanya • ఫోన్: 9492468817 • కామేపల్లి, ఆంధ్రప్రదేశ్</div>
    <div>పేజీ 6 / 8</div>
  </div>
</div>

<!-- PAGE 7: REVIEWS & PARTNERSHIPS -->
<div class="page">
  <div>
    <div class="page-top-nav">
      <div class="top-brand">
        <span class="top-brand-name">S.P.R. SIRI DHANYA</span>
      </div>
      <div class="top-tagline">వినియోగదారుల అభిప్రాయాలు & వ్యాపార భాగస్వామ్యాలు</div>
    </div>

    <!-- Section 5: Review & Feedback -->
    <div class="section-banner">
      <div class="section-banner-title">
        <span class="section-num">05</span>
        <span class="section-heading">వినియోగదారుల అభిప్రాయాలు & సమీక్షలు (CUSTOMER REVIEWS & FEEDBACK)</span>
      </div>
      <span class="section-banner-tag">విశ్వసనీయత & సంతృప్తి</span>
    </div>

    <div class="grid-3" style="margin-bottom: 12px;">
      <div class="review-card">
        <div class="stars">★★★★★</div>
        <div class="review-text">
          "ఉదయం పూట నానబెట్టడం, రుబ్బే పనే లేకుండా 15 నిమిషాల్లో వేడివేడి రాగి, కొర్ర దోశలు రెడీ అయిపోతాయి. పిల్లలు ఎంతో ఇష్టంగా తింటున్నారు!"
        </div>
        <div class="reviewer-name">లక్ష్మి ప్రసన్న, గుంటూరు</div>
        <div style="font-size: 8.5px; color: #777;">హౌస్‌వైఫ్ & తల్లి</div>
      </div>

      <div class="review-card">
        <div class="stars">★★★★★</div>
        <div class="review-text">
          "మా సూపర్ మార్కెట్‌లో SPR రాగి మరియు జొన్న దోశ మిక్స్ ప్యాకెట్లు చాలా ఫాస్ట్‌గా అమ్ముడవుతున్నాయి. కస్టమర్ల నుండి రీపీట్ డిమాండ్ చాలా బాగుంది."
        </div>
        <div class="reviewer-name">రాజేష్ వర్మ, విజయవాడ</div>
        <div style="font-size: 8.5px; color: #777;">సూపర్ మార్కెట్ ఓనర్</div>
      </div>

      <div class="review-card">
        <div class="stars">★★★★★</div>
        <div class="review-text">
          "మల్టీ గ్రీన్ ఆటా రోటీలు రాత్రి వరకూ చాలా మెత్తగా ఉంటున్నాయి. షుగర్ మరియు డైట్ పాటించేవారికి ఇది అమూల్యమైన ఆహారం."
        </div>
        <div class="reviewer-name">వెంకటేశ్వరరావు, ఒంగోలు</div>
        <div style="font-size: 8.5px; color: #777;">హెల్త్ కాన్షియస్ కస్టమర్</div>
      </div>
    </div>

    <!-- Section 6: Supermarket & Social Media Partnerships -->
    <div class="section-banner">
      <div class="section-banner-title">
        <span class="section-num">06</span>
        <span class="section-heading">సూపర్ మార్కెట్ & వ్యాపార భాగస్వామ్యాలు (BUSINESS & SOCIAL MEDIA)</span>
      </div>
      <span class="section-banner-tag">పంపిణీ & రిటైల్ అవకాశాలు</span>
    </div>

    <div class="card" style="margin-bottom: 10px;">
      <h4 style="color: #103B2B; margin: 0 0 6px 0; font-size: 12px;">
        సూపర్ మార్కెట్లు, హోల్సేల్ వ్యాపారులు & పంపిణీదారులకు మా ఆహ్వానం:
      </h4>
      <p style="font-size: 10.5px; color: #444; line-height: 1.5; margin: 0 0 8px 0;">
        S.P.R. Siri Dhanya ఉత్పత్తులను ప్రతి ఇంటికీ చేరవేయడంలో సూపర్ మార్కెట్లు, కిరాణా మరియు పంపిణీదారులు మా ప్రధాన భాగస్వాములు. వినియోగదారుల ఆరోగ్య స్పృహ పెరుగుతున్న ప్రస్తుత తరుణంలో, మా ఉత్పత్తులు మీ స్టోర్‌కు అధిక అమ్మకాలు మరియు కస్టమర్ సంతృప్తిని అందిస్తాయి.
      </p>

      <div class="grid-3">
        <div class="partner-box">
          <strong>🛍️ ఆకర్షణీయమైన ప్యాకేజింగ్:</strong>
          స్టోర్ షెల్ఫ్‌లో ఆకర్షణీయంగా కనిపించే ప్రీమియం జిప్‌లాక్ ఫుడ్ గ్రేడ్ పౌచ్ ప్యాకింగ్.
        </div>
        <div class="partner-box">
          <strong>💰 ఉత్తమ వ్యాపార మార్జిన్లు:</strong>
          ఆర్డర్ పరిమాణాన్ని బట్టి రిటైలర్లకు, డిస్ట్రిబ్యూటర్లకు లాభదాయకమైన ట్రేడ్ డిస్కౌంట్లు.
        </div>
        <div class="partner-box">
          <strong>🚚 నిరంతర స్టాక్ సరఫరా:</strong>
          తాజా బ్యాచ్ ఉత్పత్తులను ఎల్లప్పుడూ సకాలంలో మీ స్టోర్‌కు వేగంగా చేరవేసే లాజిస్టిక్స్.
        </div>
      </div>
    </div>

    <!-- Social Media Box -->
    <div class="gold-card" style="display: flex; justify-content: space-between; align-items: center;">
      <div>
        <strong style="color: #103B2B; font-size: 12px;">📱 సోషల్ మీడియా & డిజిటల్ కనెక్ట్:</strong>
        <div style="font-size: 10px; color: #555; margin-top: 2px;">
          WhatsApp బిజినెస్ క్యాటలాగ్, Instagram, Facebook ద్వారా కొత్త రెసిపీలు మరియు ఆరోగ్య చిట్కాలు!
        </div>
      </div>
      <div style="text-align: right; font-size: 11px; font-weight: bold; color: #8C2D19;">
        WhatsApp ఆర్డర్లు: 9492468817
      </div>
    </div>
  </div>

  <div class="page-bottom-nav">
    <div>S.P.R. Siri Dhanya • ఫోన్: 9492468817 • కామేపల్లి, ఆంధ్రప్రదేశ్</div>
    <div>పేజీ 7 / 8</div>
  </div>
</div>

<!-- PAGE 8: TERMS & CONDITIONS + THANK YOU -->
<div class="page">
  <div>
    <div class="page-top-nav">
      <div class="top-brand">
        <span class="top-brand-name">S.P.R. SIRI DHANYA</span>
      </div>
      <div class="top-tagline">నిబంధనలు & సంప్రదించండి | TERMS & CONTACT</div>
    </div>

    <!-- Section 7: Terms & Conditions -->
    <div class="section-banner">
      <div class="section-banner-title">
        <span class="section-num">07</span>
        <span class="section-heading">వ్యాపార నిబంధనలు & షరతులు (TERMS & CONDITIONS)</span>
      </div>
      <span class="section-banner-tag">పారదర్శక వాణిజ్యం</span>
    </div>

    <div class="card" style="margin-bottom: 10px; font-size: 10.5px; line-height: 1.5; color: #333;">
      <ul style="margin: 0; padding-left: 16px;">
        <li style="margin-bottom: 5px;">
          <strong>ఆర్డర్లు & సరఫరా (Orders & Supply):</strong> డిస్ట్రిబ్యూటర్ మరియు హోల్సేల్ కొనుగోళ్లకు కనీస పరిమాణం (MOQ) వర్తిస్తుంది. ఆర్డర్ ఖరారైన 24-48 గంటల్లో తయారీ కేంద్రం నుండి డిస్పాచ్ చేయబడుతుంది.
        </li>
        <li style="margin-bottom: 5px;">
          <strong>ధరలు & జీఎస్టీ (Pricing & Billing):</strong> కేటలాగ్‌లో పేర్కొన్న MRP ధరకు GST వర్తింపు వివరాలు బిల్లింగ్‌లో స్పష్టంగా ఇవ్వబడతాయి. వ్యాపార కొనుగోలు ధరలు, డీలర్ మార్జిన్లు ప్రొఫార్మా ఇన్వాయిస్ ద్వారా ప్రత్యేకంగా అందించబడతాయి.
        </li>
        <li style="margin-bottom: 5px;">
          <strong>నిల్వ సూచనలు (Storage):</strong> ఉత్పత్తులను తేమ లేని, శుభ్రమైన, చల్లని ప్రదేశంలో నిల్వ చేయాలి. ప్రత్యక్ష సూర్యరశ్మి నుండి రక్షించాలి.
        </li>
        <li style="margin-bottom: 5px;">
          <strong>షెల్ఫ్ లైఫ్ (Shelf Life):</strong> ప్యాకింగ్ తేదీ నుండి 6 నుండి 9 నెలల వరకు సహజమైన తాజాదనం మరియు నాణ్యత ఉంటుంది.
        </li>
        <li>
          <strong>రవాణా & నాణ్యత హామీ (Quality Assurance):</strong> నాణ్యమైన కార్టన్ బాక్సుల్లో భద్రంగా ప్యాక్ చేయబడుతుంది. రవాణాలో ఏవైనా డ్యామేజ్‌లు జరిగితే తక్షణ సమాచారంతో రీప్లేస్‌మెంట్ సౌకర్యం కలదు.
        </li>
      </ul>
    </div>

    <!-- Section 8: Thank You & Contact -->
    <div class="section-banner" style="background: linear-gradient(135deg, #8C2D19 0%, #103B2B 100%);">
      <div class="section-banner-title">
        <span class="section-num" style="background: #FFF; color: #8C2D19;">08</span>
        <span class="section-heading">ధన్యవాదాలు & సంప్రదించండి (THANK YOU & CONTACT US)</span>
      </div>
      <span class="section-banner-tag">మా చిరునామా</span>
    </div>

    <div class="contact-grid">
      <div>
        <h3 style="color: #103B2B; margin: 0 0 6px 0; font-size: 16px;">S.P.R. SIRI DHANYA</h3>
        <div style="font-size: 11px; color: #8C2D19; font-weight: 700; margin-bottom: 8px;">
          సంప్రదాయ పోషణ… ఆధునిక సౌలభ్యం… ప్రతి గింజలో ఆరోగ్యం!
        </div>

        <div class="contact-item">
          <div class="contact-icon">📞</div>
          <div>
            <strong>ఫోన్ & WhatsApp ఆర్డర్లు:</strong><br>
            <span style="font-size: 14px; font-weight: 800; color: #103B2B;">9492468817</span>
          </div>
        </div>

        <div class="contact-item">
          <div class="contact-icon">🏭</div>
          <div>
            <strong>తయారీ సంస్థ చిరునామా:</strong><br>
            కామేపల్లి, సంతమాగులూరు మండలం,<br>
            బాపట్ల జిల్లా, ఆంధ్రప్రదేశ్.
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
        <h4 style="color: #103B2B; margin: 0 0 4px 0; font-size: 13px;">హృదయపూర్వక ధన్యవాదాలు!</h4>
        <p style="font-size: 10px; color: #555; margin: 0 0 10px 0; line-height: 1.4;">
          S.P.R. సిరిధాన్య కుటుంబంలో భాగమైనందుకు మరియు మన సంప్రదాయ చిరుధాన్యాలను ప్రోత్సహిస్తున్నందుకు ధన్యవాదాలు.
        </p>
        <div style="background: #103B2B; color: #FFE680; padding: 6px 14px; border-radius: 20px; font-size: 10.5px; font-weight: 700;">
          Healthy Food... Happy Life...
        </div>
      </div>
    </div>
  </div>

  <div class="page-bottom-nav">
    <div>S.P.R. Siri Dhanya • ఫోన్: 9492468817 • కామేపల్లి, ఆంధ్రప్రదేశ్</div>
    <div>పేజీ 8 / 8</div>
  </div>
</div>

</body>
</html>
"""

with open(os.path.join(BASE_DIR, "catalogue_telugu.html"), "w", encoding="utf-8") as f:
    f.write(HTML_TELUGU)

print("Telugu HTML written successfully.")
