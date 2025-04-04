
# 🛡️ ChakraShield – Fake Social Media Account Detection System

**ChakraShield** is a highly innovative and secure web-based platform designed to **detect, report, and aid in the elimination of fake social media accounts** across platforms such as Facebook, Instagram, and X (formerly Twitter). Tailored for national cybersecurity needs, especially for government and defense agencies like ITBP, ChakraShield blends Artificial Intelligence, Machine Learning, and Blockchain technology to ensure digital trust and user authenticity.

> 🌐 **Live Prototype**: [chakra-shield-sentinel.lovable.app](https://chakra-shield-sentinel.lovable.app)

---

## ✨ Key Features

- 🔍 **AI/ML-Powered Detection** – Uses NLP and image recognition to detect suspicious behavior, fake identities, and bot-like patterns.
- 🧠 **BERT-based Language Model** – Scans bio, comments, and activity for harmful language, propaganda, and impersonation.
- 🧑‍🦰 **DeepFace Integration** – Validates profile images using facial recognition against known datasets.
- 📊 **Suspicious Score System** – Every profile is assigned a trust score based on multiple factors (text/image/time/IP).
- 🏢 **Centralized Reporting Dashboard (ChakraPanel)** – Government agencies can view, verify, and report accounts to platforms.
- 🔐 **Blockchain Logging** – Ensures tamper-proof evidence trails and proof-of-reporting for legal use.
- 🔔 **Real-time Alerts** – Admins are alerted of fake account activities immediately through the ChakraShield system.
- 📄 **Report Generation** – Fake profiles are logged and printable reports are generated for platform and legal action.
- 📲 **Integration with Official Social Media APIs** – Real-time profile scanning and flagging using developer APIs.

---

##  System Architecture

```
User → ChakraShield Web Portal → AI/ML Engine → Confidence Scoring → ChakraPanel Dashboard → Blockchain Log → Social Media Platforms
```

**Tech Stack:**

- **Frontend**: HTML, CSS, Bootstrap (React in roadmap)
- **Backend**: FastAPI (Python)
- **ML Models**: BERT, DeepFace, Random Forest
- **Database**: MongoDB (NoSQL)
- **Authentication**: Firebase Auth + JWT
- **Reporting**: PDF generation, export to CSV
- **Hosting**: AWS EC2 / Firebase Hosting

---

## 🔁 How It Works

1. User or admin enters a suspected profile link or username.
2. ChakraShield fetches public profile details via API.
3. ML models analyze profile image, username pattern, and activity.
4. Trustworthiness score is calculated.
5. Fake/suspicious accounts are flagged with reason & score.
6. Central agency gets real-time alert and dashboard visibility.
7. Verified reports are sent to platforms via email/API.
8. Logs are hashed and saved on blockchain for legal trail.



---

## 🧩 Future Enhancements

- 🤖 Add deep fake detection using GAN inversion techniques.
- 🇮🇳 Integration with DigiLocker for real ID verification.
- 📞 Emergency contact features for direct legal or defense agency alerts.
- 🧾 Aadhaar/EPIC verification API for critical profiles (only for government use).
- 📚 National AI Training Dataset expansion with CERT-In.

---

## 👨‍💻 Team ChakraShield – Contributors

| Name                   | Roll Number   |
|------------------------|---------------|
| Saikoushik Nalubola    | 2403A52L02     |
| Syed Althaf            | 2303A52496     |
| D Nihaal Krishna       | 2303A52498     |

---

## 🛡️ Vision

> **“To empower the nation’s digital boundaries and eliminate the threat of impersonation, propaganda, and cyber psychological operations (CYPsyOps) with AI and trust.”**

---
