# Anima Brindes

This project contains the **public frontend** of the **Anima Brindes** platform — an e-commerce for customized gifts and promotional products.  
It was built using **React + Vite**, focusing on performance, modular components, and responsive design.

> ⚠️ **Important:**  
> This repository contains **only the frontend**.  
> The backend and any sensitive data are **not included** and remain private.

---

## 🚀 Features

- Modern UI built with **React**  
- Fast build and hot reload using **Vite**  
- Reusable, component-based architecture  
- Integration with external API via environment variables  
- Ready for deployment on **Vercel**, **Netlify**, or similar platforms  

---

## 🧱 Stack

- **React + Vite**  
- **npm** package manager  
- Optional support for **TypeScript**

---

## 📦 Scripts

~~~bash
npm install
npm run dev      # development server
npm run build    # production build
npm run preview  # preview build
~~~

---

## 🔧 Environment Variables

Create a `.env` or `.env.local` file in the project root.  
Only **public variables** (prefixed with `VITE_`) should be used.

**Example:**

~~~env
VITE_API_URL=https://api.yourdomain.com
~~~

---

## ⚙️ Project Setup

~~~bash
git clone <YOUR-REPOSITORY-URL>.git
cd anima-brindes-frontend
npm install
npm run dev
~~~

Then open http://localhost:5173 in your browser.

---

## 🔒 Security Notes

- The backend and private keys are **not included**.  
- Always exclude `.env` and other sensitive files from commits.  
- Use `.gitignore` to protect environment variables and build artifacts.

---

## 📜 License

This project is **closed source** and provided for **portfolio and showcase purposes only**.  
Unauthorized distribution or commercial use is prohibited.
