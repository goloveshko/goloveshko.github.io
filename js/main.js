// Language toggle
let currentLang = "en";

function toggleLang() {
  currentLang = currentLang === "en" ? "ru" : "en";

  document
    .querySelectorAll(".lang-en")
    .forEach(
      (el) => (el.style.display = currentLang === "en" ? "block" : "none"),
    );
  document
    .querySelectorAll(".lang-ru")
    .forEach(
      (el) => (el.style.display = currentLang === "ru" ? "block" : "none"),
    );

  document.querySelector(".lang-text-en").style.display =
    currentLang === "en" ? "inline" : "none";
  document.querySelector(".lang-text-ru").style.display =
    currentLang === "ru" ? "inline" : "none";
}

// Scroll to section
function scrollToSection(id) {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
}

// Intersection Observer for scroll animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, observerOptions);

document.querySelectorAll(".fade-in-up").forEach((el) => {
  observer.observe(el);
});

// Navigation dots active state
const sections = ["hero", "projects", "focus", "skills"];
const navDots = document.querySelectorAll(".nav-dot");

const sectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const index = sections.indexOf(entry.target.id);
        navDots.forEach((dot, i) => {
          dot.classList.toggle("active", i === index);
        });
      }
    });
  },
  { threshold: 0.5 },
);

sections.forEach((id) => {
  const el = document.getElementById(id);
  if (el) sectionObserver.observe(el);
});

// Create floating particles
function createParticles() {
  const container = document.getElementById("particles");
  if (!container) return;

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

// Initialize on DOM loaded
document.addEventListener("DOMContentLoaded", () => {
  createParticles();
});
