# ⚡ Goloveshko — Personal Portfolio Website

Live website: **[goloveshko.github.io](https://goloveshko.github.io)**

Personal website showcasing my projects, research in AI/ML, and software engineering expertise.

---

## 🛠️ Tech Stack

- **Frontend:** HTML5, Tailwind CSS v4, Vanilla JS, inline SVG icons ([Font Awesome Free 7.3.1](https://fontawesome.com/license/free))
- **Design:** Glassmorphism UI, custom CSS animations, dark theme
- **Features:** Dual language support (EN / RU), fully responsive, smooth scrolling
- **Tooling:** Node.js + Tailwind CLI, GitHub Actions, Docker & Nginx

---

## 🚀 Local Development

### Preview with Docker

```bash
git clone https://github.com/goloveshko/goloveshko.github.io.git
cd goloveshko.github.io
docker compose up -d
```

Open `http://localhost:8080` in your browser.

### Rebuilding Tailwind CSS

Styles are compiled from `css/input.css` (Tailwind CSS v4, CSS-first config)
into `css/tailwind.css`. In production this file is rebuilt automatically by
[GitHub Actions](.github/workflows/build-tailwind.yml) on every push to `main`.

For local edits you'll need Node.js 20+:

```bash
npm install
npm run build:css   # one-off minified build
npm run watch:css   # watch mode — rebuilds on every change
```

> **Don't edit `css/tailwind.css` manually** — it's a generated artifact.
> Change utility classes in `index.html` or theme tokens in `css/input.css`,
> then rebuild.

---

## 📬 Contact

- **Telegram:** [@itz2bot](https://t.me/itz2bot?start=website)
- **GitHub:** [@goloveshko](https://github.com/goloveshko)