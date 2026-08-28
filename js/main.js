// ===== Language =====
function setLang(lang) {
  const root = document.documentElement;
  root.classList.toggle("lang-ru", lang === "ru");
  root.setAttribute("lang", lang);
  try {
    localStorage.setItem("lang", lang);
  } catch (e) {
    /* localStorage unavailable (private mode) - not critical */
  }
}

function toggleLang() {
  setLang(document.documentElement.classList.contains("lang-ru") ? "en" : "ru");
}

// ===== Smooth scroll =====
function scrollToSection(id) {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
}

// ===== Navigation dots =====
const navDots = document.querySelectorAll(".nav-dot");

navDots.forEach((dot) => {
  dot.addEventListener("click", () => scrollToSection(dot.dataset.target));
});

// ===== Scroll animations =====
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.1, rootMargin: "0px 0px -50px 0px" },
);

document.querySelectorAll(".fade-in-up").forEach((el) => observer.observe(el));

// ===== Active section highlighting =====
const sections = ["hero", "projects", "focus", "skills"];

const sectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const index = sections.indexOf(entry.target.id);
        if (index !== -1) {
          navDots.forEach((dot, i) =>
            dot.classList.toggle("active", i === index),
          );
        }
      }
    });
  },
  /*
   * A section counts as active while it crosses the central band of the
   * screen. Also works for sections scrolled past above the viewport
   * (threshold: 0.5 never fired for those).
   */
  { rootMargin: "-45% 0px -45% 0px", threshold: 0 },
);

sections.forEach((id) => {
  const el = document.getElementById(id);
  if (el) sectionObserver.observe(el);
});

// ===== Floating particles =====
function createParticles() {
  const container = document.getElementById("particles");
  if (!container) return;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  const particleCount = 20;

  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement("div");
    particle.className = "particle";

    const size = Math.random() * 4 + 2;
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    particle.style.left = `${Math.random() * 100}%`;
    particle.style.animationDuration = `${Math.random() * 20 + 15}s`;
    particle.style.animationDelay = `${Math.random() * 10}s`;

    container.appendChild(particle);
  }
}

// ===== Init =====
document.addEventListener("DOMContentLoaded", () => {
  createParticles();

  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
});

// ===== Header controls =====
document.getElementById("lang-toggle")?.addEventListener("click", toggleLang);

const scrollHint = document.querySelector(".scroll-hint");
if (scrollHint) {
  scrollHint.addEventListener("click", () =>
    scrollToSection(scrollHint.dataset.target),
  );
}

// ===== Local dev helper (skipped in production) =====
// Replaces the former <script src="local-dev.js" onerror=...> tag:
// loaded dynamically only outside GitHub Pages, silently skipped if missing.
if (!location.hostname.endsWith("github.io")) {
  const script = document.createElement("script");
  script.src = "js/local-dev.js";
  script.onerror = () => script.remove();
  document.head.append(script);
}
