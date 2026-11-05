import os
from catalogue_builder_base import (
    COMMON_CSS, img_poster, img_logo, img_ragi, img_jonna, 
    img_korra, img_atta, img_pesara, BASE_DIR
)

HTML_HINDI = f"""<!DOCTYPE html>
<html lang="hi">
<head>
<meta charset="UTF-8">
<title>S.P.R. Siri Dhanya - आधिकारिक उत्पाद कैटलॉग</title>
<style>
{COMMON_CSS}
body {{
  font-family: 'Noto Sans Devanagari', 'Poppins', sans-serif;
}}
</style>
</head>
<body>

<!-- PAGE 1: COVER PAGE -->
<div class="page cover-page">
  <div style="margin-top: 4mm;">
    <div class="cover-gold-strip">⭐ पारंपरिक मिलेट एवं पोषक खाद्य उत्पाद ⭐</div>
    <h1 class="cover-brand-title">S.P.R. SIRI DHANYA</h1>
    <div class="cover-brand-sub">आधिकारिक उत्पाद कैटलॉग | OFFICIAL PRODUCT CATALOGUE</div>
    <div class="cover-slogan-pill">🌿 हर दाने में स्वास्थ्य | HEALTH IN EVERY GRAIN 🌿</div>
  </div>

  <div class="cover-hero-img-wrap">
    <img src="{img_poster}" alt="SPR Siri Dhanya Products Lineup">
  </div>

  <div class="cover-tagline-box">
    <div class="cover-tagline-main">पारंपरिक पोषण – आधुनिक सुविधा</div>
    <div class="cover-tagline-sub">हमारे पारंपरिक अनाज... हमारे स्वास्थ्य और सुनहरे भविष्य के लिए... Healthy Food... Happy Life...</div>
    
    <div class="cover-badges-row">
      <div class="cover-badge-item">🌾 100% प्राकृतिक अनाज</div>
      <div class="cover-badge-item">💪 प्रचुर प्रोटीन एवं फाइबर</div>
      <div class="cover-badge-item">⏱️ मात्र 15 मिनट में तैयार</div>
      <div class="cover-badge-item">🚫 शून्य प्रिजर्वेटिव्स</div>
    </div>
  </div>

  <div class="cover-footer">
    <div>सुपरमार्केट्स, थोक विक्रेता एवं डिस्ट्रीब्यूटर्स के लिए व्यावसायिक कैटलॉग</div>
    <div>FSSAI Lic No: <strong>20126152000402</strong></div>
    <div>फ़ोन: <strong>+91 9492468817</strong></div>
  </div>
</div>

<!-- PAGE 2: ABOUT US -->
<div class="page">
  <div>
    <div class="page-top-nav">
      <div class="top-brand">
        <span class="top-brand-name">S.P.R. SIRI DHANYA</span>
      </div>
      <div class="top-tagline">हर दाने में स्वास्थ्य • पारंपरिक पोषण – आधुनिक सुविधा</div>
    </div>

    <div class="section-banner">
      <div class="section-banner-title">
        <span class="section-num">01</span>
        <span class="section-heading">हमारी कंपनी का परिचय (ABOUT OUR COMPANY)</span>
      </div>
      <span class="section-banner-tag">कंपनी का उद्देश्य एवं मूल्य</span>
    </div>

    <!-- Company Story -->
    <div class="card" style="margin-bottom: 10px; background: #FFFDF9; border-left: 5px solid #103B2B;">
      <h3 style="color: #103B2B; margin: 0 0 5px 0; font-size: 14px;">पारंपरिक पोषण – आधुनिक समाज की सेहत का मजबूत आधार</h3>
      <p style="font-size: 10.5px; line-height: 1.55; color: #333; margin: 0 0 7px 0;">
        आज के समाज में खान-पान की आदतें तेजी से बदल रही हैं। भागदौड़ भरी जीवनशैली, मिलावटी खाद्य सामग्री और पोषक तत्वों की कमी से लोगों का स्वास्थ्य गंभीर रूप से प्रभावित हो रहा है। ऐसी परिस्थितियों में हमारे पूर्वजों द्वारा दिए गए सिरीधान्यों एवं पारंपरिक आहार के मूल्यों को आधुनिक जीवनशैली के अनुरूप हर घर तक पहुंचाना ही <strong>S.P.R. सिरी धान्या</strong> का मुख्य उद्देश्य है।
      </p>
      <div style="background: #F4EFE6; padding: 7px 12px; border-radius: 6px; border: 1px dashed #D4AF37;">
        <strong style="color: #8C2D19; font-size: 11.5px;">हमारा संकल्प:</strong>
        <span style="font-size: 11px; color: #103B2B; font-weight: 700; margin-left: 5px;">"हर परिवार को पौष्टिक आहार… हर पीढ़ी के लिए स्वस्थ भविष्य!"</span>
      </div>
    </div>

    <!-- 4 Pillars Grid -->
    <div class="grid-2" style="margin-bottom: 10px;">
      <div class="card">
        <div style="font-size: 18px; margin-bottom: 2px;">🌾</div>
        <h4 style="color: #103B2B; margin: 0 0 3px 0; font-size: 11.5px;">1. श्रेष्ठ पारंपरिक मिलेट्स का चयन</h4>
        <p style="font-size: 9.5px; color: #555; margin: 0; line-height: 1.4;">
          हमारे पूर्वजों की धरोहर श्रेष्ठ रागी, ज्वार, कंगनी (कोदरा) एवं दालों का किसानों से सीधा संग्रह।
        </p>
      </div>

      <div class="card">
        <div style="font-size: 18px; margin-bottom: 2px;">🧼</div>
        <h4 style="color: #103B2B; margin: 0 0 3px 0; font-size: 11.5px;">2. सर्वोच्च स्वच्छता एवं शुद्धता</h4>
        <p style="font-size: 9.5px; color: #555; margin: 0; line-height: 1.4;">
          स्वच्छ वातावरण में आधुनिक प्रसंस्करण ताकि प्राकृतिक पोषक तत्व, विटामिन्स और फाइबर पूरी तरह सुरक्षित रहें।
        </p>
      </div>

      <div class="card">
        <div style="font-size: 18px; margin-bottom: 2px;">⚡</div>
        <h4 style="color: #103B2B; margin: 0 0 3px 0; font-size: 11.5px;">3. कम समय में पौष्टिक आहार</h4>
        <p style="font-size: 9.5px; color: #555; margin: 0; line-height: 1.4;">
          कर्मचारियों, व्यापारियों, महिलाओं, विद्यार्थियों और अकेले रहने वाले व्यक्तियों के लिए न्यूनतम समय में सेहतमंद भोजन।
        </p>
      </div>

      <div class="card">
        <div style="font-size: 18px; margin-bottom: 2px;">🍲</div>
        <h4 style="color: #103B2B; margin: 0 0 3px 0; font-size: 11.5px;">4. पारंपरिक आहार का आधुनिक स्वरूप</h4>
        <p style="font-size: 9.5px; color: #555; margin: 0; line-height: 1.4;">
          हमारे पूर्वजों की खान-पान की अच्छाइयों को आज की नई पीढ़ी तक सबसे आसान और सुगम तरीके से पहुंचाना।
        </p>
      </div>
    </div>

    <!-- Quality Assurance Box -->
    <div class="gold-card" style="display: flex; align-items: center; gap: 15px;">
      <div style="font-size: 32px;">🛡️</div>
      <div>
        <h4 style="color: #103B2B; margin: 0 0 3px 0; font-size: 12px;">FSSAI प्रमाणीकरण एवं खाद्य सुरक्षा का भरोसा</h4>
        <p style="font-size: 10px; color: #444; margin: 0; line-height: 1.4;">
          S.P.R. Siri Dhanya के सभी उत्पाद भारतीय खाद्य सुरक्षा और मानक प्राधिकरण (FSSAI) लाइसेंस संख्या: <strong>20126152000402</strong> द्वारा प्रमाणित हैं। कृत्रिम रंग, रासायनिक संरक्षक या सिंथेटिक फ्लेवर से पूरी तरह मुक्त। 100% शुद्ध शाकाहारी।
        </p>
      </div>
    </div>
  </div>

  <div class="page-bottom-nav">
    <div>S.P.R. Siri Dhanya • फ़ोन: +91 9492468817 • कामेंपल्ली, आंध्र प्रदेश</div>
    <div>पृष्ठ 2 / 8</div>
  </div>
</div>

<!-- PAGE 3: INDEX & INSTANT ADVANTAGES -->
<div class="page">
  <div>
    <div class="page-top-nav">
      <div class="top-brand">
        <span class="top-brand-name">S.P.R. SIRI DHANYA</span>
      </div>
      <div class="top-tagline">विषय सूची एवं त्वरित सुविधा | INDEX & ADVANTAGES</div>
    </div>

    <div class="section-banner">
      <div class="section-banner-title">
        <span class="section-num">02</span>
        <span class="section-heading">विषय सूची एवं त्वरित डोसा मिक्स की विशेषताएं (INDEX)</span>
      </div>
      <span class="section-banner-tag">उत्पाद विवरण एवं मूल्य सूची</span>
    </div>

    <!-- Index Grid -->
    <div style="margin-bottom: 8px;">
      <h4 style="color: #103B2B; margin: 0 0 5px 0; font-size: 12px; border-bottom: 1px solid #D4AF37; padding-bottom: 3px;">कैटलॉग अनुक्रमणिका (TABLE OF CONTENTS):</h4>
      <div class="grid-2" style="font-size: 10px;">
        <div style="background: #FFF; padding: 6px 10px; border-radius: 5px; border-left: 3px solid #103B2B;">
          <strong>1. मुख्य पृष्ठ (Cover):</strong> ब्रांड परिचय एवं उत्पाद श्रृंखला
        </div>
        <div style="background: #FFF; padding: 6px 10px; border-radius: 5px; border-left: 3px solid #103B2B;">
          <strong>2. कंपनी परिचय (About Us):</strong> हमारा उद्देश्य एवं 4 मुख्य स्तंभ
        </div>
        <div style="background: #FFF; padding: 6px 10px; border-radius: 5px; border-left: 3px solid #103B2B;">
          <strong>3. सूची एवं मूल्य (Index):</strong> त्वरित लाभ एवं आधिकारिक MRP
        </div>
        <div style="background: #FFF; padding: 6px 10px; border-radius: 5px; border-left: 3px solid #103B2B;">
          <strong>4. उत्पाद 01 व 02:</strong> रागी एवं ज्वार डोसा मिक्स
        </div>
        <div style="background: #FFF; padding: 6px 10px; border-radius: 5px; border-left: 3px solid #103B2B;">
          <strong>5. उत्पाद 03 व 04:</strong> पेसरा (मूँग) एवं कंगनी डोसा मिक्स
        </div>
        <div style="background: #FFF; padding: 6px 10px; border-radius: 5px; border-left: 3px solid #103B2B;">
          <strong>6. उत्पाद 05:</strong> मल्टी ग्रेन आटा (7 अनाजों की शक्ति)
        </div>
        <div style="background: #FFF; padding: 6px 10px; border-radius: 5px; border-left: 3px solid #103B2B;">
          <strong>7. समीक्षाएं एवं व्यापार:</strong> ग्राहक विचार व सुपरमार्केट लाभ
        </div>
        <div style="background: #FFF; padding: 6px 10px; border-radius: 5px; border-left: 3px solid #103B2B;">
          <strong>8. नियम व शर्तें एवं संपर्क:</strong> नीतियां, पता व धन्यवाद
        </div>
      </div>
    </div>

    <!-- Instant Dosa Mix Advantage -->
    <div class="gold-card" style="margin-bottom: 8px;">
      <h4 style="color: #8C2D19; margin: 0 0 6px 0; font-size: 12px; text-align: center;">⚡ त्वरित डोसा मिक्स की 6 अनूठी सुविधाएं – समय बचाने वाला समाधान</h4>
      <div class="grid-3" style="text-align: center; font-size: 10px;">
        <div style="background: #FFF; padding: 5px; border-radius: 5px; border: 1px solid #E2D9C3;">
          <div style="font-size: 14px;">💧</div>
          <strong style="color: #103B2B;">Just Add Water</strong>
          <div>केवल पानी मिलाएं</div>
        </div>
        <div style="background: #FFF; padding: 5px; border-radius: 5px; border: 1px solid #E2D9C3;">
          <div style="font-size: 14px;">⏱️</div>
          <strong style="color: #103B2B;">Ready in 15 Min</strong>
          <div>15 मिनट में तैयार</div>
        </div>
        <div style="background: #FFF; padding: 5px; border-radius: 5px; border: 1px solid #E2D9C3;">
          <div style="font-size: 14px;">🚿</div>
          <strong style="color: #103B2B;">No Washing</strong>
          <div>धोने की आवश्यकता नहीं</div>
        </div>
        <div style="background: #FFF; padding: 5px; border-radius: 5px; border: 1px solid #E2D9C3;">
          <div style="font-size: 14px;">⏳</div>
          <strong style="color: #103B2B;">No Soaking</strong>
          <div>भिगोने की झंझट नहीं</div>
        </div>
        <div style="background: #FFF; padding: 5px; border-radius: 5px; border: 1px solid #E2D9C3;">
          <div style="font-size: 14px;">🥣</div>
          <strong style="color: #103B2B;">No Grinding</strong>
          <div>पीसने का कोई झंझट नहीं</div>
        </div>
        <div style="background: #FFF; padding: 5px; border-radius: 5px; border: 1px solid #E2D9C3;">
          <div style="font-size: 14px;">🧪</div>
          <strong style="color: #103B2B;">No Fermentation</strong>
          <div>खमीर उठाने का इंतजार नहीं</div>
        </div>
      </div>
    </div>

    <!-- Official MRP Price List Table -->
    <div>
      <h4 style="color: #103B2B; margin: 0 0 4px 0; font-size: 12px;">📊 आधिकारिक एमआरपी मूल्य सूची (OFFICIAL MRP PRICE LIST):</h4>
      <table class="custom-table">
        <thead>
          <tr>
            <th>क्र. सं.</th>
            <th>उत्पाद का नाम (PRODUCT NAME)</th>
            <th>मुख्य सामग्री</th>
            <th>वजन (NET WT)</th>
            <th>अधिकतम खुदरा मूल्य (MRP)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>01</strong></td>
            <td><strong>S.P.R. RAGI DOSA MIX</strong> (रागी डोसा मिक्स)</td>
            <td>पारंपरिक रागी (नाचनी)</td>
            <td>500 ग्राम</td>
            <td><strong style="color: #8C2D19; font-size: 12px;">₹119</strong></td>
          </tr>
          <tr>
            <td><strong>02</strong></td>
            <td><strong>S.P.R. JOWAR DOSA MIX</strong> (ज्वार डोसा मिक्स)</td>
            <td>शुद्ध ज्वार</td>
            <td>500 ग्राम</td>
            <td><strong style="color: #8C2D19; font-size: 12px;">₹119</strong></td>
          </tr>
          <tr>
            <td><strong>03</strong></td>
            <td><strong>S.P.R. PESARA DOSA MIX</strong> (पेसरा डोसा मिक्स)</td>
            <td>साबुत मूँग दाल</td>
            <td>500 ग्राम</td>
            <td><strong style="color: #8C2D19; font-size: 12px;">₹129</strong></td>
          </tr>
          <tr>
            <td><strong>04</strong></td>
            <td><strong>S.P.R. KORRA DOSA MIX</strong> (कंगनी डोसा मिक्स)</td>
            <td>सिरीधान्य कंगनी (कोदरा)</td>
            <td>500 ग्राम</td>
            <td><strong style="color: #8C2D19; font-size: 12px;">₹129</strong></td>
          </tr>
          <tr>
            <td><strong>05</strong></td>
            <td><strong>S.P.R. MULTI GRAIN ATTA</strong> (मल्टी ग्रेन आटा)</td>
            <td>7 पोषक अनाजों का मिश्रण</td>
            <td>1 किलोग्राम</td>
            <td><strong style="color: #8C2D19; font-size: 12px;">₹150</strong></td>
          </tr>
        </tbody>
      </table>
      <div style="font-size: 9px; color: #666; font-style: italic;">
        * विशेष नोट: सुपरमार्केट्स, वितरकों एवं थोक व्यापारियों के लिए विशेष ट्रेड मार्जिन एवं मात्रा आधारित छूट कोटेशन द्वारा अलग से उपलब्ध कराई जाती है।
      </div>
    </div>
  </div>

  <div class="page-bottom-nav">
    <div>S.P.R. Siri Dhanya • फ़ोन: +91 9492468817 • कामेंपल्ली, आंध्र प्रदेश</div>
    <div>पृष्ठ 3 / 8</div>
  </div>
</div>

<!-- PAGE 4: PRODUCT PAGE 1 - RAGI & JOWAR -->
<div class="page">
  <div>
    <div class="page-top-nav">
      <div class="top-brand">
        <span class="top-brand-name">S.P.R. SIRI DHANYA</span>
      </div>
      <div class="top-tagline">त्वरित डोसा मिक्स श्रृंखला | PRODUCT SHOWCASE</div>
    </div>

    <div class="section-banner">
      <div class="section-banner-title">
        <span class="section-num">03</span>
        <span class="section-heading">उत्पाद: रागी एवं ज्वार डोसा मिक्स (PRODUCTS 01 & 02)</span>
      </div>
      <span class="section-banner-tag">हर दाने में स्वास्थ्य</span>
    </div>

    <div class="grid-2">
      <!-- Product 1: Ragi Dosa Mix -->
      <div class="product-card">
        <div>
          <div class="product-header-badge">
            <div>
              <span style="font-size: 9.5px; font-weight: 700; color: #D4AF37; text-transform: uppercase;">PRODUCT – 01</span>
              <h3 class="prod-title">S.P.R. RAGI DOSA MIX</h3>
              <div class="prod-telugu">रागी डोसा मिक्स (Finger Millet Mix)</div>
            </div>
            <div class="prod-price-pill">
              <div class="prod-price-mrp">₹119</div>
              <div class="prod-price-wt">वजन: 500 ग्राम</div>
            </div>
          </div>

          <div class="product-img-box">
            <img src="{img_ragi}" alt="S.P.R. Ragi Dosa Mix">
          </div>

          <div class="prod-ingredient">
            <strong>मुख्य घटक:</strong> शुद्ध पारंपरिक रागी (Finger Millet)
          </div>

          <ul class="prod-features-list">
            <li><strong>कैल्शियम व आयरन का भंडार:</strong> हड्डियों की मजबूती, दांतों के विकास व बच्चों की बढ़त के लिए अत्यंत लाभकारी।</li>
            <li><strong>डायबिटीज में फायदेमंद:</strong> लो-ग्लाइसेमिक इंडेक्स होने के कारण ब्लड शुगर को नियंत्रित रखने में सहायक।</li>
            <li><strong>15 मिनट में कुरकुरा स्वाद:</strong> सिर्फ पानी मिलाएं और तवे पर कुरकुरा, सुगंधित और स्वादिष्ट डोसा तैयार करें।</li>
            <li><strong>दैनिक पारिवारिक पोषण:</strong> पारंपरिक मोटे अनाजों को अपने दैनिक नाश्ते में शामिल करने का सबसे आसान जरिया।</li>
          </ul>
        </div>

        <div style="margin-top: 6px; padding-top: 4px; border-top: 1px dashed #DDD; display: flex; justify-content: space-between; font-size: 9px; color: #555;">
          <span>✔ No Soaking</span>
          <span>✔ No Grinding</span>
          <span><span class="veg-icon"><span class="veg-icon-dot"></span></span> 100% शाकाहारी</span>
        </div>
      </div>

      <!-- Product 2: Jowar Dosa Mix -->
      <div class="product-card">
        <div>
          <div class="product-header-badge">
            <div>
              <span style="font-size: 9.5px; font-weight: 700; color: #D4AF37; text-transform: uppercase;">PRODUCT – 02</span>
              <h3 class="prod-title">S.P.R. JOWAR DOSA MIX</h3>
              <div class="prod-telugu">ज्वार डोसा मिक्स (Sorghum Millet Mix)</div>
            </div>
            <div class="prod-price-pill">
              <div class="prod-price-mrp">₹119</div>
              <div class="prod-price-wt">वजन: 500 ग्राम</div>
            </div>
          </div>

          <div class="product-img-box">
            <img src="{img_jonna}" alt="S.P.R. Jowar Dosa Mix">
          </div>

          <div class="prod-ingredient">
            <strong>मुख्य घटक:</strong> प्राकृतिक ज्वार (Sorghum Millet)
          </div>

          <ul class="prod-features-list">
            <li><strong>प्राकृतिक ग्लूटेन-मुक्त अनाज:</strong> पेट के लिए बेहद हल्का और सुपाच्य; एसिडिटी व गैस की समस्या से राहत दिलाए।</li>
            <li><strong>एंटीऑक्सीडेंट्स एवं मैग्नीशियम:</strong> हृदय स्वास्थ्य, रक्तचाप संतुलन और ऊर्जा स्तर को बनाए रखने में सहायक।</li>
            <li><strong>सुनहरा कुरकुरापन:</strong> बेहद पतले और कुरकुरे डोसे बनते हैं जिन्हें पूरा परिवार चाव से खाता है।</li>
            <li><strong>व्यस्त जीवन में सुविधा:</strong> कामकाजी महिलाओं एवं पुरुषों के लिए बिना किसी झंझट के तुरंत पौष्टिक नाश्ता।</li>
          </ul>
        </div>

        <div style="margin-top: 6px; padding-top: 4px; border-top: 1px dashed #DDD; display: flex; justify-content: space-between; font-size: 9px; color: #555;">
          <span>✔ No Fermentation</span>
          <span>✔ 15 Mins Ready</span>
          <span><span class="veg-icon"><span class="veg-icon-dot"></span></span> 100% शाकाहारी</span>
        </div>
      </div>
    </div>
  </div>

  <div class="page-bottom-nav">
    <div>S.P.R. Siri Dhanya • फ़ोन: +91 9492468817 • कामेंपल्ली, आंध्र प्रदेश</div>
    <div>पृष्ठ 4 / 8</div>
  </div>
</div>

<!-- PAGE 5: PRODUCT PAGE 2 - PESARA & KORRA -->
<div class="page">
  <div>
    <div class="page-top-nav">
      <div class="top-brand">
        <span class="top-brand-name">S.P.R. SIRI DHANYA</span>
      </div>
      <div class="top-tagline">त्वरित डोसा मिक्स श्रृंखला | PRODUCT SHOWCASE</div>
    </div>

    <div class="section-banner">
      <div class="section-banner-title">
        <span class="section-num">04</span>
        <span class="section-heading">उत्पाद: पेसरा (मूँग) एवं कंगनी डोसा मिक्स (PRODUCTS 03 & 04)</span>
      </div>
      <span class="section-banner-tag">वनस्पति प्रोटीन एवं शारीरिक ऊर्जा</span>
    </div>

    <div class="grid-2">
      <!-- Product 3: Pesara Dosa Mix -->
      <div class="product-card">
        <div>
          <div class="product-header-badge">
            <div>
              <span style="font-size: 9.5px; font-weight: 700; color: #D4AF37; text-transform: uppercase;">PRODUCT – 03</span>
              <h3 class="prod-title">S.P.R. PESARA DOSA MIX</h3>
              <div class="prod-telugu">पेसरा डोसा मिक्स (Green Gram Moong Dosa)</div>
            </div>
            <div class="prod-price-pill">
              <div class="prod-price-mrp">₹129</div>
              <div class="prod-price-wt">वजन: 500 ग्राम</div>
            </div>
          </div>

          <div class="product-img-box">
            <img src="{img_pesara}" alt="S.P.R. Pesara Dosa Mix">
          </div>

          <div class="prod-ingredient">
            <strong>मुख्य घटक:</strong> साबुत हरी मूँग दाल (Whole Green Gram)
          </div>

          <ul class="prod-features-list">
            <li><strong>उच्च वनस्पति प्रोटीन:</strong> मांसपेशियों की मजबूती, शारीरिक ऊर्जा और स्फूर्ति के लिए प्रोटीन से भरपूर।</li>
            <li><strong>रेस्तरां जैसा पेसरट्टू स्वाद:</strong> बारीक कटी प्याज, हरी मिर्च और अदरक के साथ पारंपरिक कुरकुरा स्वाद।</li>
            <li><strong>दाल भिगोने की जरूरत नहीं:</strong> मूँग दाल को घंटों भिगोने व मिक्सी में पीसने के झंझट से पूरी आजादी।</li>
            <li><strong>वजन नियंत्रण में मददगार:</strong> पेट को लंबे समय तक तृप्त रखता है, जिससे अवांछित भूख नियंत्रित रहती है।</li>
          </ul>
        </div>

        <div style="margin-top: 6px; padding-top: 4px; border-top: 1px dashed #DDD; display: flex; justify-content: space-between; font-size: 9px; color: #555;">
          <span>✔ High Protein</span>
          <span>✔ Zero Maida</span>
          <span><span class="veg-icon"><span class="veg-icon-dot"></span></span> 100% शाकाहारी</span>
        </div>
      </div>

      <!-- Product 4: Korra Dosa Mix -->
      <div class="product-card">
        <div>
          <div class="product-header-badge">
            <div>
              <span style="font-size: 9.5px; font-weight: 700; color: #D4AF37; text-transform: uppercase;">PRODUCT – 04</span>
              <h3 class="prod-title">S.P.R. KORRA DOSA MIX</h3>
              <div class="prod-telugu">कंगनी डोसा मिक्स (Foxtail Millet Dosa)</div>
            </div>
            <div class="prod-price-pill">
              <div class="prod-price-mrp">₹129</div>
              <div class="prod-price-wt">वजन: 500 ग्राम</div>
            </div>
          </div>

          <div class="product-img-box">
            <img src="{img_korra}" alt="S.P.R. Korra Dosa Mix">
          </div>

          <div class="prod-ingredient">
            <strong>मुख्य घटक:</strong> सिरीधान्य कंगनी / कोदरा (Foxtail Millet)
          </div>

          <ul class="prod-features-list">
            <li><strong>पॉजिटिव सिरीधान्यों का राजा:</strong> घुलनशील डाइटरी फाइबर और दुर्लभ सूक्ष्म पोषक तत्वों का अनूठा स्रोत।</li>
            <li><strong>आंतों एवं पाचन तंत्र के लिए वरदान:</strong> पाचन क्रिया को सुगम बनाता है और कब्ज से स्थायी मुक्ति दिलाता है।</li>
            <li><strong>शुगर रोगियों के लिए वरदान:</strong> शरीर में धीरे-धीरे ग्लूकोज छोड़ता है जिससे शुगर का स्तर नहीं बढ़ता।</li>
            <li><strong>स्वादिष्ट पेपर-क्रिस्प डोसा:</strong> सुनहरी रंगत और क्रिस्पी बनावट जो बड़ों और बच्चों सबको पसंद आए।</li>
          </ul>
        </div>

        <div style="margin-top: 6px; padding-top: 4px; border-top: 1px dashed #DDD; display: flex; justify-content: space-between; font-size: 9px; color: #555;">
          <span>✔ High Fibre</span>
          <span>✔ Low GI</span>
          <span><span class="veg-icon"><span class="veg-icon-dot"></span></span> 100% शाकाहारी</span>
        </div>
      </div>
    </div>
  </div>

  <div class="page-bottom-nav">
    <div>S.P.R. Siri Dhanya • फ़ोन: +91 9492468817 • कामेंपल्ली, आंध्र प्रदेश</div>
    <div>पृष्ठ 5 / 8</div>
  </div>
</div>

<!-- PAGE 6: MULTI GRAIN ATTA (PRODUCT 05) -->
<div class="page">
  <div>
    <div class="page-top-nav">
      <div class="top-brand">
        <span class="top-brand-name">S.P.R. SIRI DHANYA</span>
      </div>
      <div class="top-tagline">7 अनाजों की शक्ति वाला मल्टी ग्रेन आटा | DAILY NUTRITION</div>
    </div>

    <div class="section-banner">
      <div class="section-banner-title">
        <span class="section-num">05</span>
        <span class="section-heading">S.P.R. मल्टी ग्रेन आटा (PRODUCT – 05: MULTI GRAIN ATTA)</span>
      </div>
      <span class="section-banner-tag">7 उत्कृष्ट अनाजों एवं दालों का वैज्ञानिक मिश्रण</span>
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
              <div style="color: #8C2D19; font-weight: 700; font-size: 13px;">मल्टी ग्रेन आटा – हर रोटी में संपूर्ण पारिवारिक पोषण</div>
            </div>
            <div class="prod-price-pill" style="padding: 4px 10px;">
              <div class="prod-price-mrp" style="font-size: 15px;">₹150</div>
              <div class="prod-price-wt" style="font-size: 10px;">शुद्ध वजन: 1 किलोग्राम (1 KG)</div>
            </div>
          </div>

          <p style="font-size: 10.5px; color: #444; line-height: 1.5; margin: 5px 0 8px 0;">
            रोजमर्रा की रोटियों और चपातियों को अधिक पौष्टिक और सेहतमंद बनाने के लिए सात पारंपरिक अनाजों व दालों को वैज्ञानिक अनुपात में मिलाकर यह आटा तैयार किया गया है।
          </p>

          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 6px; font-size: 10px;">
            <div style="background: #FAF6ED; padding: 5px 8px; border-radius: 4px; border-left: 3px solid #103B2B;">
              <strong>🥐 रुई जैसी नरम रोटियाँ:</strong> लंबे समय तक बिल्कुल ताज़ा और मुलायम रहती हैं।
            </div>
            <div style="background: #FAF6ED; padding: 5px 8px; border-radius: 4px; border-left: 3px solid #103B2B;">
              <strong>⚡ फास्ट डाइजेस्टिव फॉर्मूला:</strong> पेट पर हल्का, गैस और भारीपन से मुक्त।
            </div>
            <div style="background: #FAF6ED; padding: 5px 8px; border-radius: 4px; border-left: 3px solid #103B2B;">
              <strong>💪 भरपूर प्रोटीन व फाइबर:</strong> मांसपेशियों की ताकत व वजन संतुलन।
            </div>
            <div style="background: #FAF6ED; padding: 5px 8px; border-radius: 4px; border-left: 3px solid #103B2B;">
              <strong>🛡️ 100% प्राकृतिक एवं शुद्ध:</strong> कोई मैदा, केमिकल या स्टार्च नहीं।
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 7 Super Grains Showcase -->
    <div>
      <h4 style="color: #103B2B; margin: 0 0 6px 0; font-size: 12px; text-align: center; border-bottom: 1px solid #D4AF37; padding-bottom: 3px;">
        🌾 मल्टी ग्रेन आटे में सम्मिलित 7 सुपर अनाज (THE 7 SUPER GRAINS):
      </h4>
      <div style="display: grid; grid-template-columns: repeat(7, 1fr); gap: 6px;">
        <div class="grain-badge">
          <span class="grain-num">1</span>
          <div class="grain-name">गेहूँ</div>
          <div style="font-size: 8px; color: #777;">(Wheat)</div>
          <div class="grain-desc">नरम व लचीली रोटी का आधार</div>
        </div>
        <div class="grain-badge">
          <span class="grain-num">2</span>
          <div class="grain-name">रागी</div>
          <div style="font-size: 8px; color: #777;">(Finger Millet)</div>
          <div class="grain-desc">प्राकृतिक कैल्शियम, मजबूत हड्डियां</div>
        </div>
        <div class="grain-badge">
          <span class="grain-num">3</span>
          <div class="grain-name">बाजरा</div>
          <div style="font-size: 8px; color: #777;">(Pearl Millet)</div>
          <div class="grain-desc">खनिज लवण एवं शारीरिक ऊर्जा</div>
        </div>
        <div class="grain-badge">
          <span class="grain-num">4</span>
          <div class="grain-name">ज्वार</div>
          <div style="font-size: 8px; color: #777;">(Sorghum)</div>
          <div class="grain-desc">फाइबर एवं सुगम पाचन क्रिया</div>
        </div>
        <div class="grain-badge">
          <span class="grain-num">5</span>
          <div class="grain-name">सोयाबीन</div>
          <div style="font-size: 8px; color: #777;">(Soybeans)</div>
          <div class="grain-desc">प्रचुर वनस्पति प्रोटीन शक्ति</div>
        </div>
        <div class="grain-badge">
          <span class="grain-num">6</span>
          <div class="grain-name">ओट्स / जई</div>
          <div style="font-size: 8px; color: #777;">(Oats)</div>
          <div class="grain-desc">हृदय के लिए लाभकारी बीटा-ग्लूकेन</div>
        </div>
        <div class="grain-badge">
          <span class="grain-num">7</span>
          <div class="grain-name">चना</div>
          <div style="font-size: 8px; color: #777;">(Bengal Gram)</div>
          <div class="grain-desc">प्राकृतिक आयरन व भूख संतुष्टि</div>
        </div>
      </div>
    </div>
  </div>

  <div class="page-bottom-nav">
    <div>S.P.R. Siri Dhanya • फ़ोन: +91 9492468817 • कामेंपल्ली, आंध्र प्रदेश</div>
    <div>पृष्ठ 6 / 8</div>
  </div>
</div>

<!-- PAGE 7: REVIEWS & PARTNERSHIPS -->
<div class="page">
  <div>
    <div class="page-top-nav">
      <div class="top-brand">
        <span class="top-brand-name">S.P.R. SIRI DHANYA</span>
      </div>
      <div class="top-tagline">ग्राहक अनुभव एवं व्यापारिक साझेदारी</div>
    </div>

    <!-- Section 5: Review & Feedback -->
    <div class="section-banner">
      <div class="section-banner-title">
        <span class="section-num">05</span>
        <span class="section-heading">ग्राहक समीक्षाएं एवं बाजार प्रतिक्रिया (REVIEWS & FEEDBACK)</span>
      </div>
      <span class="section-banner-tag">विश्वास, संतुष्टि एवं निरंतर मांग</span>
    </div>

    <div class="grid-3" style="margin-bottom: 12px;">
      <div class="review-card">
        <div class="stars">★★★★★</div>
        <div class="review-text">
          "सुबह न भिगोने की चिंता, न मिक्सी में पीसने की झंझट! मात्र 15 मिनट में कुरकुरे रागी और कोदरा डोसे बनकर तैयार हो जाते हैं। बच्चे बहुत पसंद करते हैं!"
        </div>
        <div class="reviewer-name">लक्ष्मी प्रसन्ना, गुंटूर</div>
        <div style="font-size: 8.5px; color: #777;">गृहिणी एवं माता</div>
      </div>

      <div class="review-card">
        <div class="stars">★★★★★</div>
        <div class="review-text">
          "हमारे सुपरमार्केट में SPR रागी और ज्वार डोसा मिक्स के पैकेट बहुत तेजी से बिकते हैं। ग्राहकों की दोबारा मांग बहुत उत्साहजनक है।"
        </div>
        <div class="reviewer-name">राजेश वर्मा, विजयवाड़ा</div>
        <div style="font-size: 8.5px; color: #777;">सुपरमार्केट संचालक</div>
      </div>

      <div class="review-card">
        <div class="stars">★★★★★</div>
        <div class="review-text">
          "मल्टी ग्रेन आटे की रोटियाँ रात तक बिल्कुल नरम रहती हैं। शुगर रोगियों और डाइट फॉलो करने वालों के लिए यह सर्वोत्तम आटा है।"
        </div>
        <div class="reviewer-name">वेंकटेश्वर राव, ओंगोल</div>
        <div style="font-size: 8.5px; color: #777;">स्वास्थ्य-सचेत ग्राहक</div>
      </div>
    </div>

    <!-- Section 6: Supermarket & Social Media Partnerships -->
    <div class="section-banner">
      <div class="section-banner-title">
        <span class="section-num">06</span>
        <span class="section-heading">सुपरमार्केट एवं व्यापारिक साझेदारी (BUSINESS & PARTNERSHIPS)</span>
      </div>
      <span class="section-banner-tag">वितरण एवं आधुनिक खुदरा व्यापार</span>
    </div>

    <div class="card" style="margin-bottom: 10px;">
      <h4 style="color: #103B2B; margin: 0 0 6px 0; font-size: 12px;">
        सुपरमार्केट्स, थोक व्यापारी एवं वितरकों के लिए सुनहरा अवसर:
      </h4>
      <p style="font-size: 10.5px; color: #444; line-height: 1.5; margin: 0 0 8px 0;">
        आजकल मोटे अनाजों (मिलेट्स) के प्रति उपभोक्ताओं में भारी रुझान है। S.P.R. Siri Dhanya के उत्पाद आपके स्टोर की बिक्री और ग्राहकों का भरोसा बढ़ाने में पूर्णतः सक्षम हैं। हम अपने व्यापारिक साझेदारों को उच्चतम लाभ व निरंतर सहयोग का वादा करते हैं।
      </p>

      <div class="grid-3">
        <div class="partner-box">
          <strong>🛍️ आकर्षक शेल्फ पैकेजिंग:</strong>
          दुकान के शेल्फ पर ग्राहकों का ध्यान खींचने वाली प्रीमियम जिपलॉक स्टैंडिंग पाउच पैकिंग।
        </div>
        <div class="partner-box">
          <strong>💰 आकर्षक व्यापारिक मार्जिन:</strong>
          ऑर्डर की मात्रा के आधार पर खुदरा व थोक विक्रेताओं के लिए अत्यधिक लाभदायक ट्रेड डिस्काउंट।
        </div>
        <div class="partner-box">
          <strong>🚚 ताज़ा स्टॉक व त्वरित आपूर्ति:</strong>
          ताज़ा निर्मित बैच की सीधी आपूर्ति जिससे अधिकतम शेल्फ लाइफ का लाभ मिले।
        </div>
      </div>
    </div>

    <!-- Social Media Box -->
    <div class="gold-card" style="display: flex; justify-content: space-between; align-items: center;">
      <div>
        <strong style="color: #103B2B; font-size: 12px;">📱 डिजिटल उपस्थिति एवं सोशल मीडिया जुड़ाव:</strong>
        <div style="font-size: 10px; color: #555; margin-top: 2px;">
          WhatsApp बिजनेस कैटलॉग, इंस्टाग्राम, फेसबुक एवं यूट्यूब पर रेसिपी वीडियो व स्वास्थ्य सुझाव!
        </div>
      </div>
      <div style="text-align: right; font-size: 11px; font-weight: bold; color: #8C2D19;">
        WhatsApp ऑर्डर्स: +91 9492468817
      </div>
    </div>
  </div>

  <div class="page-bottom-nav">
    <div>S.P.R. Siri Dhanya • फ़ोन: +91 9492468817 • कामेंपल्ली, आंध्र प्रदेश</div>
    <div>पृष्ठ 7 / 8</div>
  </div>
</div>

<!-- PAGE 8: TERMS & CONDITIONS + THANK YOU -->
<div class="page">
  <div>
    <div class="page-top-nav">
      <div class="top-brand">
        <span class="top-brand-name">S.P.R. SIRI DHANYA</span>
      </div>
      <div class="top-tagline">व्यापारिक नियम व शर्तें एवं संपर्क विवरण</div>
    </div>

    <!-- Section 7: Terms & Conditions -->
    <div class="section-banner">
      <div class="section-banner-title">
        <span class="section-num">07</span>
        <span class="section-heading">व्यापारिक नियम एवं शर्तें (TERMS & CONDITIONS)</span>
      </div>
      <span class="section-banner-tag">पारदर्शी व्यावसायिक नीतियां</span>
    </div>

    <div class="card" style="margin-bottom: 10px; font-size: 10.5px; line-height: 1.5; color: #333;">
      <ul style="margin: 0; padding-left: 16px;">
        <li style="margin-bottom: 5px;">
          <strong>ऑर्डर एवं आपूर्ति (Orders & Supply):</strong> थोक एवं वितरक दरों के लिए न्यूनतम ऑर्डर मात्रा (MOQ) लागू होती है। ऑर्डर पुष्टिकरण के 24 से 48 व्यावसायिक घंटों में माल रवाना किया जाता है।
        </li>
        <li style="margin-bottom: 5px;">
          <strong>मूल्य एवं बिलिंग (Pricing & GST):</strong> कैटलॉग में उल्लिखित MRP में जीएसटी शामिल है। थोक मूल्य, डीलर मार्जिन और विशेष छूट केवल आधिकारिक प्रोफार्मा इनवॉइस द्वारा प्रदान की जाती हैं।
        </li>
        <li style="margin-bottom: 5px;">
          <strong>भंडारण निर्देश (Storage):</strong> उत्पादों को नमी-मुक्त, स्वच्छ, हवादार एवं ठंडे स्थान पर रखें। सीधी धूप और सीलन से बचाएं।
        </li>
        <li style="margin-bottom: 5px;">
          <strong>शेल्फ लाइफ (Shelf Life):</strong> निर्माण तिथि से 6 से 9 माह तक पूर्ण ताजगी व प्राकृतिक गुणवत्ता की गारंटी।
        </li>
        <li>
          <strong>गुणवत्ता एवं पारगमन सुरक्षा (Transit Guarantee):</strong> माल को मजबूत कोरूगेटेड बॉक्स में सुरक्षित पैक किया जाता है। परिवहन के दौरान क्षति की स्थिति में तत्काल रिप्लेसमेंट की सुविधा उपलब्ध है।
        </li>
      </ul>
    </div>

    <!-- Section 8: Thank You & Contact -->
    <div class="section-banner" style="background: linear-gradient(135deg, #8C2D19 0%, #103B2B 100%);">
      <div class="section-banner-title">
        <span class="section-num" style="background: #FFF; color: #8C2D19;">08</span>
        <span class="section-heading">हार्दिक धन्यवाद एवं संपर्क विवरण (THANK YOU & CONTACT)</span>
      </div>
      <span class="section-banner-tag">सीधा विनिर्माण केंद्र</span>
    </div>

    <div class="contact-grid">
      <div>
        <h3 style="color: #103B2B; margin: 0 0 6px 0; font-size: 16px;">S.P.R. SIRI DHANYA</h3>
        <div style="font-size: 11px; color: #8C2D19; font-weight: 700; margin-bottom: 8px;">
          पारंपरिक पोषण… आधुनिक सुविधा… हर दाने में स्वास्थ्य!
        </div>

        <div class="contact-item">
          <div class="contact-icon">📞</div>
          <div>
            <strong>सीधा फ़ोन एवं WhatsApp ऑर्डर्स:</strong><br>
            <span style="font-size: 14px; font-weight: 800; color: #103B2B;">+91 9492468817</span>
          </div>
        </div>

        <div class="contact-item">
          <div class="contact-icon">🏭</div>
          <div>
            <strong>विनिर्माण इकाई का पता:</strong><br>
            कामेंपल्ली, संतमागुलोर मंडल,<br>
            बापटला जिला, आंध्र प्रदेश, भारत।
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
        <h4 style="color: #103B2B; margin: 0 0 4px 0; font-size: 13px;">हमसे जुड़ने के लिए हार्दिक धन्यवाद!</h4>
        <p style="font-size: 10px; color: #555; margin: 0 0 10px 0; line-height: 1.4;">
          S.P.R. सिरी धान्या पर विश्वास जताने और हर घर तक पारंपरिक पोषण पहुँचाने में हमारे सहभागी बनने के लिए आपका हृदय से आभार।
        </p>
        <div style="background: #103B2B; color: #FFE680; padding: 6px 14px; border-radius: 20px; font-size: 10.5px; font-weight: 700;">
          Healthy Food... Happy Life...
        </div>
      </div>
    </div>
  </div>

  <div class="page-bottom-nav">
    <div>S.P.R. Siri Dhanya • फ़ोन: +91 9492468817 • कामेंपल्ली, आंध्र प्रदेश</div>
    <div>पृष्ठ 8 / 8</div>
  </div>
</div>

</body>
</html>
"""

with open(os.path.join(BASE_DIR, "catalogue_hindi.html"), "w", encoding="utf-8") as f:
    f.write(HTML_HINDI)

print("Hindi HTML written successfully.")
