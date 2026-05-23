# 📱 Telegram Mini App (Vue + Vite)
This is a **Telegram Web App (Mini App)** built with **Vue 3 + Vite**.  
It runs inside Telegram like a mobile application and can be opened through a bot button.
---
## 🚀 Features
- ⚡ Vue 3 + Vite fast frontend
- 📱 Telegram Mini App support
- 🧭 Simple menu structure (Home / Pages / Settings)
- 🎨 Responsive UI (mobile friendly)
- 🌐 Deployable on GitHub Pages
- 🔗 Easy bot integration
[Telegram](chatgpt://generic-entity?number=0) Web Apps allow websites to run inside Telegram like native apps.
---
## 📁 Project Structure

src/
├── components/   # UI components (buttons, menus)
├── views/        # Pages (Home, Profile, Settings)
├── router/       # Navigation system
├── assets/       # Images and icons
├── App.vue
└── main.js

---
## 📱 How Telegram Mini App Works
```text id="flow2"
Telegram Bot Button
        ↓
User clicks "Open App"
        ↓
Web App opens inside Telegram
        ↓
Vue Mini App runs

⸻

🔗 Telegram Web App Button Example

{
  "inline_keyboard": [
    [
      {
        "text": "🚀 Open Mini App",
        "web_app": {
          "url": "https://your-site.com"
        }
      }
    ]
  ]
}

⸻

⚙️ Setup (Local Development)

# Clone repo
git clone https://github.com/your-username/your-repo.git
# Enter folder
cd your-repo
# Install dependencies
npm install
# Run dev server
npm run dev

⸻

🏗️ Build Project

npm run build

Output folder:

dist/

⸻

🌐 Deployment

This project can be deployed using:
GitHub Pages + GitHub Actions

⸻
🎯 Purpose

* Learn Telegram Mini Apps
* Build interactive web apps inside Telegram
* Practice Vue + Vite development
* Deploy real-world projects

⸻
