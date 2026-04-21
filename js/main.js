/**
 * main.js — small shared behaviors for every page
 * Keeps logic minimal so beginners can read it top-to-bottom.
 */

/**
 * Opens/closes the mobile navigation menu.
 * Uses aria-expanded so screen readers stay in sync (accessibility helps SEO indirectly).
 */
function setupMobileNav() {
  const toggleButton = document.querySelector("[data-nav-toggle]");
  const navList = document.querySelector("[data-nav-menu]");

  if (!toggleButton || !navList) return;

  toggleButton.addEventListener("click", () => {
    const isOpen = navList.classList.toggle("is-open");
    toggleButton.setAttribute("aria-expanded", String(isOpen));
  });

  // Close menu after a navigation link is clicked (mobile UX)
  navList.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navList.classList.remove("is-open");
      toggleButton.setAttribute("aria-expanded", "false");
    });
  });
}

/**
 * Marks the current page in the navbar using aria-current="page".
 * Helps users (and assists understanding site structure for audits).
 */
function highlightCurrentNavLink() {
  const currentFile = window.location.pathname.split("/").pop() || "index.html";
  const links = document.querySelectorAll(".nav__link[data-nav-path]");

  links.forEach((link) => {
    const target = link.getAttribute("data-nav-path");
    if (target === currentFile) {
      link.setAttribute("aria-current", "page");
    }
  });
}

/**
 * Writes the current year into the footer (small polish; keeps copyright up to date).
 */
function setFooterYear() {
  const yearEl = document.querySelector("[data-year]");
  if (yearEl) {
    yearEl.textContent = String(new Date().getFullYear());
  }
}

document.addEventListener("DOMContentLoaded", () => {
  setupMobileNav();
  highlightCurrentNavLink();
  setFooterYear();
});
