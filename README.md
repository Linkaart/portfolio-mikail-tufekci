# 🧑‍💻 portfolio-mikail-

> Portfolio personnel de Mikail  — Développeur Full-Stack basé en France.

![License](https://img.shields.io/badge/license-MIT-blue)
![Stack](https://img.shields.io/badge/stack-React%20%2B%20Vite-61dafb)
![Deploy](https://img.shields.io/badge/deploy-Vercel-black)

---

## ✨ Présentation

Portfolio professionnel single-page (SPA) construit avec **React + Vite**. Design dark tech / terminal avec animations au scroll, curseur personnalisé et typewriter effect.

---

## 🚀 Fonctionnalités

- Hero animé avec effet typewriter (Python · React · Java · Flutter…)
- Bande défilante de la stack technique (marquee infini)
- Section À propos avec bloc terminal interactif
- Grille de compétences par catégorie
- Timeline expériences professionnelles
- Formation & certifications
- Formulaire de contact avec feedback visuel
- Curseur personnalisé (desktop)
- Scroll reveal sur toutes les sections
- 100% responsive

---

## 🛠️ Stack

| Outil | Usage |
|---|---|
| React 18 | UI composants |
| Vite 5 | Build tool + dev server |
| CSS Variables | Thème dark cohérent |
| Google Fonts | JetBrains Mono + Syne |
| Vercel | Déploiement continu |

---

## 📁 Structure

```
portfolio-mikail-/
├── public/
│   └── cv-mikail-.pdf
├── src/
│   ├── components/
│   │   ├── Nav.jsx
│   │   ├── Hero.jsx
│   │   ├── StackBar.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Experience.jsx
│   │   ├── Education.jsx
│   │   ├── Contact.jsx
│   │   ├── Footer.jsx
│   │   ├── Cursor.jsx
│   │   └── GridBg.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── vite.config.js
├── vercel.json
└── package.json
```

---

## ⚙️ Installation

```bash
git clone https://github.com/Linkaart/portfolio-mikail-.git
cd portfolio-mikail-
npm install
npm run dev
# → http://localhost:5173
```

## 🏗️ Build production

```bash
npm run build
npm run preview
```

---

## 🌐 Déploiement Vercel

```bash
# Méthode CLI
npm i -g vercel
vercel --prod
```

Ou importer directement depuis vercel.com → New Project → GitHub.

---

## 📄 Licence

 © 2025 Mikail Tufekci
