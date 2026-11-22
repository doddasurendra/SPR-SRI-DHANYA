# -*- coding: utf-8 -*-
import os

with open('website/app.js', 'r', encoding='utf-8') as f:
    c = f.read()

# 1. Chatbot ordering script
c = c.replace('+91 94413 93817** లేదా **9492468817', '+91 8121158817** లేదా **+91 94413 93817')
c = c.replace('మా మేనేజ్‌మెంట్ వాట్సాప్ నెంబర్ 94413 93817 కు', 'మా ప్రైమరీ వాట్సాప్ నెంబర్ 8121158817 కు')
c = c.replace('+91 94413 93817** या **9492468817', '+91 8121158817** या **+91 94413 93817')
c = c.replace('व्हाट्सएप नंबर 94413 93817 पर भी', 'व्हाट्सएप नंबर 8121158817 पर भी')
c = c.replace('+91 94413 93817** or **9492468817', '+91 8121158817** or **+91 94413 93817')
c = c.replace('WhatsApp helpline at +91 94413 93817!', 'WhatsApp helpline at +91 8121158817!')

# 2. Factory Operations
c = c.replace(
    '🏭 **ఫ్యాక్టరీ చిరునామా:** కామేపల్లి గ్రామం, సంతమాగులూరు మండలం, బాపట్ల జిల్లా, ఆంధ్రప్రదేశ్ - 523326.',
    '🏭 **ఖచ్చితమైన ఫ్యాక్టరీ చిరునామా:** డోర్ నెం. 203/6-1B, ఫ్లాట్ నెం. 63, శ్రీ సాయి బాలాజీ నగర్, మెయిన్ రోడ్, సంతమాగులూరు X రోడ్, కామేపల్లి, బాపట్ల జిల్లా, ఆంధ్రప్రదేశ్ - 523302 (GPS: 16°07\'11.5"N 79°55\'25.4"E).'
)
c = c.replace(
    '🏭 **फैक्टरी पता:** कामेपल्ली गांव, संतमागलुरु मंडल, बापटला जिला, आंध्र प्रदेश - 523326।',
    '🏭 **सटीक फैक्टरी पता:** डोर नं. 203/6-1B, फ्लैट नं. 63, श्री साई बालाजी नगर, मेन रोड, संतमागलुरु X रोड, कामेपल्ली, बापटला जिला, आंध्र प्रदेश - 523302 (GPS: 16°07\'11.5"N 79°55\'25.4"E)।'
)
c = c.replace(
    '🏭 **Manufacturing Plant:** Kamepalli, Santamaguluru Mandal, Bapatla District, Andhra Pradesh - 523326.',
    '🏭 **Exact Manufacturing Plant & Location:** Flat/Door/Block No. 203/6-1B, Flat no 63, Sri Sai Balaji Nagar, Main Road, Santhamaguluru X Road, Kamepalli, Bapatla District, Andhra Pradesh - 523302 (GPS: 16°07\'11.5"N 79°55\'25.4"E).'
)

# 3. Topic 9 Contact Details
old_topic9 = """• **మేనేజ్‌మెంట్ లైన్ 1:** [+91 94413 93817](tel:9441393817) *(డైరెక్ట్ కాల్ & వాట్సాప్)*\\n` +
                   `• **మేనేజ్‌మెంట్ లైన్ 2:** [9492468817](tel:9492468817)\\n` +
                   `• **ఫ్యాక్టరీ & ఆఫీస్:** కామేపల్లి, సంతమాగులూరు మండలం, బాపట్ల జిల్లా, ఆంధ్రప్రదేశ్ - 523326.\\n` +
                   `• **FSSAI లైసెన్స్:** 20126152000402\\n\\n`"""

new_topic9 = """• **ప్రైమరీ మొబైల్ / వాట్సాప్:** [+91 8121158817](tel:8121158817) *(డైరెక్ట్ కాల్ & వాట్సాప్)*\\n` +
                   `• **మేనేజ్‌మెంట్ లైన్ 2:** [+91 94413 93817](tel:9441393817) | [9492468817](tel:9492468817)\\n` +
                   `• **ఈమెయిల్:** [sprsiridhanya6@gmail.com](mailto:sprsiridhanya6@gmail.com)\\n` +
                   `• **ఖచ్చితమైన చిరునామా:** డోర్ నెం. 203/6-1B, ఫ్లాట్ నెం. 63, శ్రీ సాయి బాలాజీ నగర్, మెయిన్ రోడ్, సంతమాగులూరు X రోడ్, కామేపల్లి, బాపట్ల జిల్లా, ఆంధ్రప్రదేశ్ - 523302\\n` +
                   `• **GPS లొకేషన్:** 16°07\'11.5"N 79°55\'25.4"E\\n` +
                   `• **FSSAI లైసెన్స్:** 20126152000402\\n\\n`"""

# Normalize CRLF for topic9 replacement
c = c.replace(old_topic9.replace('\n', '\r\n'), new_topic9.replace('\n', '\r\n'))
c = c.replace(old_topic9, new_topic9)

# 4. KB-01 seed
old_kb1 = 'Manufacturing plant and factory desk are located at Kamepalli, Santamaguluru Mandal, Bapatla District, Andhra Pradesh - 523326. Contact lines: +91 94413 93817 and 9492468817. FSSAI License: 20126152000402.'
new_kb1 = 'Exact factory location: Flat/Door/Block No. 203/6-1B, Flat no 63, Sri Sai Balaji Nagar, Main Road, Santhamaguluru X Road, Kamepalli, Bapatla District, Andhra Pradesh - 523302. GPS Coordinates: 16°07\'11.5"N 79°55\'25.4"E (16.119861, 79.923722). Primary Mobile: +91 8121158817, Helpline: +91 94413 93817 / 9492468817. Email: sprsiridhanya6@gmail.com. FSSAI License: 20126152000402.'
c = c.replace(old_kb1, new_kb1)

# 5. B2B Checkout WhatsApp buttons
c = c.replace(
    'if (btn1) btn1.href = `https://wa.me/919441393817?text=${encodedWa}`;',
    'if (btn1) btn1.href = `https://wa.me/918121158817?text=${encodedWa}`;'
)

# 6. Invoice header
old_inv = '<div style="font-size: 11px; margin-top: 4px;">Kamepalli, Santamaguluru Mandal, Bapatla Dist, A.P. - 523326</div>'
new_inv = '<div style="font-size: 11px; margin-top: 4px;">Flat/Door/Block No. 203/6-1B, Flat no 63, Sri Sai Balaji Nagar, Main Road, Santhamaguluru X Road, Kamepalli, Bapatla Dist, A.P. - 523302 (GPS: 16°07\'11.5"N 79°55\'25.4"E)</div>\n              <div style="font-size: 11px;">Mobile: <strong>+91 8121158817</strong> / <strong>+91 94413 93817</strong> | Email: <strong>sprsiridhanya6@gmail.com</strong></div>'
c = c.replace(old_inv, new_inv.replace('\n', '\r\n'))
c = c.replace(old_inv, new_inv)

# 7. Wholesale Enquiry WhatsApp alert
c = c.replace(
    'window.open(`https://wa.me/919441393817?text=${encodeURIComponent(alertMsg)}`, "_blank");',
    'window.open(`https://wa.me/918121158817?text=${encodeURIComponent(alertMsg)}`, "_blank");'
)

# 8. FSSAI Modal
c = c.replace(
    '<li><strong>Manufacturing Facility:</strong> Kamepalli, Santamaguluru Mandal, Bapatla District, Andhra Pradesh - 523326.</li>',
    '<li><strong>Exact Manufacturing Facility:</strong> Flat/Door/Block No. 203/6-1B, Flat no 63, Sri Sai Balaji Nagar, Main Road, Santhamaguluru X Road, Kamepalli, Bapatla District, Andhra Pradesh - 523302 (GPS: 16°07\'11.5"N 79°55\'25.4"E).</li>'
)

# 9. Print Catalogue Modal
old_cat = """🛡️ <strong>FSSAI Central/State License:</strong> 20126152000402<br>
              🏭 <strong>Manufacturing Facility:</strong> Kamepalli, Santamaguluru Mandal, Bapatla District, A.P. - 523326<br>
              📞 <strong>WhatsApp & Order Inquiries:</strong> +91 94413 93817 / 9492468817"""
new_cat = """🛡️ <strong>FSSAI Central/State License:</strong> 20126152000402<br>
              🏭 <strong>Exact Location:</strong> Flat/Door/Block No. 203/6-1B, Flat no 63, Sri Sai Balaji Nagar, Main Road, Santhamaguluru X Road, Kamepalli, Bapatla District, A.P. - 523302 (GPS: 16°07\'11.5"N 79°55\'25.4"E)<br>
              📞 <strong>Primary Mobile:</strong> +91 8121158817 | Management: +91 94413 93817 | ✉️ <strong>Email:</strong> sprsiridhanya6@gmail.com"""
c = c.replace(old_cat.replace('\n', '\r\n'), new_cat.replace('\n', '\r\n'))
c = c.replace(old_cat, new_cat)

# 10. Quality modal
c = c.replace(
    '🏭 <strong>Manufacturing Facility:</strong> Kamepalli, Santamaguluru Mandal, Bapatla District, Andhra Pradesh - 523326.',
    '🏭 <strong>Exact Manufacturing Facility:</strong> Flat/Door/Block No. 203/6-1B, Flat no 63, Sri Sai Balaji Nagar, Main Road, Santhamaguluru X Road, Kamepalli, Bapatla District, Andhra Pradesh - 523302 (GPS: 16°07\'11.5"N 79°55\'25.4"E).'
)

# 11. Order Summary
old_ord_sum = 'Factory Location: Kamepalli, Santamaguluru Mandal, Bapatla District, AP - 523326\\nOfficial Helpline: +91 94413 93817 / 9492468817\\nEmail: sprsiridhanya6@gmail.com'
new_ord_sum = 'Factory Location: Flat/Door/Block No. 203/6-1B, Flat no 63, Sri Sai Balaji Nagar, Main Road, Santhamaguluru X Road, Kamepalli, Bapatla District, AP - 523302 (GPS: 16°07\'11.5"N 79°55\'25.4"E)\\nOfficial Mobile: +91 8121158817 | Helpline: +91 94413 93817\\nEmail: sprsiridhanya6@gmail.com'
c = c.replace(old_ord_sum, new_ord_sum)

# 12. Also add automatic migration for stored KB in localStorage
kb_migration_hook = """
  // Automatic migration for exact location & coordinates in cached KB
  try {
    const kbRaw = localStorage.getItem(DB_KNOWLEDGE_KEY);
    if (kbRaw && (kbRaw.includes("523326") || !kbRaw.includes("16°07'11.5"))) {
      let kbList = JSON.parse(kbRaw);
      let kb1 = kbList.find(k => k.id === "KB-01");
      if (kb1) {
        kb1.content = "S.P.R. Siri Dhanya is a premier traditional millet food enterprise founded with the mission: 'సంప్రదాయ పోషణ – ఆధునిక సౌలభ్యం | ప్రతి గింజలో ఆరోగ్యం' (Traditional Nutrition with Modern Convenience). Exact factory location: Flat/Door/Block No. 203/6-1B, Flat no 63, Sri Sai Balaji Nagar, Main Road, Santhamaguluru X Road, Kamepalli, Bapatla District, Andhra Pradesh - 523302. GPS Coordinates: 16°07'11.5\\\"N 79°55'25.4\\\"E (16.119861, 79.923722). Primary Mobile: +91 8121158817, Helpline: +91 94413 93817 / 9492468817. Email: sprsiridhanya6@gmail.com. FSSAI License: 20126152000402.";
        kb1.updated = "2026-11-21";
        localStorage.setItem(DB_KNOWLEDGE_KEY, JSON.stringify(kbList));
      }
    }
  } catch(e) { console.warn("KB migration skipped:", e); }
"""

if "function initMasterDatabase()" in c:
    target_str = "function initMasterDatabase() {"
    c = c.replace(target_str, target_str + kb_migration_hook)
elif "function initMasterDatabase" in c:
    pass

with open('website/app.js', 'w', encoding='utf-8') as f:
    f.write(c)

print('app.js update script executed successfully!')
