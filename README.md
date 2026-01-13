# 🥩 PT. Colink Sigma Indonesia - Official Corporate Website

![Project Status](https://img.shields.io/badge/Status-Active-success?style=for-the-badge)
![License](https://img.shields.io/badge/License-MIT-blue?style=for-the-badge)

> A modern, high-performance company profile website for a leading partner in the meat processing industry. Built with **React**, **Vite**, and **German Precision**.

---

## 🌐 Live Demo

🚀 **[View Live Site](https://colinksigma.xo.je)**

---

## 📖 About The Project

This project is a digital representation of **PT. Colink Sigma Indonesia**, a company specializing in meat processing machinery, consultation, and supplies. 

The website is engineered to reflect the company's core values: **Professionalism, Hygiene, and German Engineering Standards**. It features a fully responsive design, multi-language support (Internationalization), and SEO optimization to ensure high visibility and user engagement.

### Key Features
* **🌍 Multi-Language Support (i18n):** Seamless switching between English, Indonesian (`ID`), and German (`DE`) to serve international clients.
* **⚡ Blazing Fast Performance:** Powered by Vite and React for instant page loads.
* **📱 Fully Responsive:** Optimized for Desktops, Tablets, and Mobile devices using Tailwind CSS.
* **🔍 SEO Optimized:** Integrated with `react-helmet-async`, `sitemap.xml`, and `robots.txt` for better Google Indexing.
* **✨ Interactive UI:** Smooth animations using Framer Motion and interactive maps with Leaflet.
* **🛡️ Security:** Clean architecture with no mixed content, ready for SSL deployment.

---

## 🛠️ Tech Stack

This project uses the latest modern web development technologies:

| Category | Technology |
| :--- | :--- |
| **Framework** | ![React](https://img.shields.io/badge/react-%2320232a.svg?style=flat&logo=react&logoColor=%2361DAFB) **React 18** |
| **Build Tool** | ![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=flat&logo=vite&logoColor=white) |
| **Styling** | ![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=flat&logo=tailwind-css&logoColor=white) |
| **Animation** | ![Framer](https://img.shields.io/badge/Framer-black?style=flat&logo=framer&logoColor=blue) **Framer Motion** |
| **Routing** | **React Router DOM v6** |
| **I18n** | **i18next** |
| **Maps** | **Leaflet / React-Leaflet** |

---

## 📸 Screenshots

| Home Page | Services Page |
| :---: | :---: |
| ![Home Page](https://via.placeholder.com/400x200?text=Home+Page+Preview) | ![Services](https://via.placeholder.com/400x200?text=Services+Page+Preview) |

| Multi-Language Feature | Mobile View |
| :---: | :---: |
| ![i18n](https://via.placeholder.com/400x200?text=Language+Switching) | ![Mobile](https://via.placeholder.com/400x200?text=Mobile+Responsive) |

---

## 📂 Project Structure

A quick look at the top-level files and directories you'll see in this project.

```text
colink-sigma/
├── public/              # Static assets (favicon, robots.txt, sitemap.xml)
├── src/
│   ├── components/      # Reusable UI components (Navbar, Footer, Hero)
│   ├── locales/         # JSON files for translations (en, id, de)
│   ├── pages/           # Main page views (Home, About, Services)
│   ├── App.jsx          # Main application component
│   ├── main.jsx         # Entry point & SEO Provider
│   └── i18n.js          # Internationalization configuration
├── index.html           # Main HTML file
├── vite.config.js       # Vite configuration
└── package.json         # Project dependencies