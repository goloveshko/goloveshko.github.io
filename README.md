# ⚡ Goloveshko — Personal Portfolio Website

Live website: **[sergey.is-a.dev](https://sergey.is-a.dev)**

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

npm install
npm run build:css   # generates css/tailwind.css (not committed to the repo)

docker compose up -d
```

Open `http://localhost:8080` in your browser.

### Rebuilding Tailwind CSS

Styles are compiled from `css/input.css` (Tailwind CSS v4, CSS-first config)
into `css/tailwind.css`. The file is a generated artifact: it is compiled
during deployment by [GitHub Actions](.github/workflows/deploy-pages.yml)
and is not committed to the repository.

For local edits you'll need Node.js 20+:

```bash
npm install
npm run build:css   # one-off minified build
npm run watch:css   # watch mode — rebuilds on every change
```

> **Don't edit `css/tailwind.css` manually** — it's a generated artifact.
> Change utility classes in `index.html` or theme tokens in `css/input.css`,
> then rebuild.

### Managing Icons

Icons are inlined as an SVG sprite in `index.html` — the hidden `<svg>` block
right after `<body>`. Source SVGs are kept in `images/icons/` for reference
(that folder is excluded from deployment; the sprite is the only thing that ships).

**Add a new icon:**

1. Save the source SVG to `images/icons/` (e.g. `docker.svg`).
2. In `index.html`, find the sprite block and add a `<symbol>` — copy the
   `viewBox` and the path `d` from the source file:

   ```html
   <symbol id="i-docker" viewBox="0 0 640 512" fill="currentColor">
     <path d="..." />
   </symbol>
   ```

3. Use it anywhere — size and color come from utility classes on the `<svg>`:

   ```html
   <svg class="h-8 w-8 text-blue-400 tech-icon" aria-hidden="true">
     <use href="#i-docker" />
   </svg>
   ```

**Replace an icon:** update the file in `images/icons/` _and_ the matching
`<symbol>` — keep the two in sync.

**Rules of thumb:**

- `fill="currentColor"` (or the `use { fill: currentColor }` rule in
  `styles.css`) is what makes icons inherit `text-*` colors and hover
  states — don't drop it. One mechanism is enough, having both is harmless.
- Double-check `viewBox` when copying from the source file — a wrong value
  distorts the icon.
- The sprite is plain HTML, nothing to rebuild. But if you use new utility
  classes (`h-*`, `w-*`, `align-*`), rebuild Tailwind as usual.

---

## 📬 Contact

- **Telegram:** [@itz2bot](https://t.me/itz2bot?start=website)
- **GitHub:** [@goloveshko](https://github.com/goloveshko)
