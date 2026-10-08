const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");
const cartCount = document.querySelector("#cartCount");
const form = document.querySelector("#newsletterForm");
const formMessage = document.querySelector("#formMessage");

document.querySelector("#year").textContent = new Date().getFullYear();

// Mobile navigation
menuButton.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(isOpen));
});

nav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
  });
});

// Collection filters
document.querySelectorAll(".filter").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelector(".filter.active")?.classList.remove("active");
    button.classList.add("active");

    const category = button.dataset.filter;

    document.querySelectorAll(".watch-card").forEach((card) => {
      const matches = category === "all" || card.dataset.category === category;
      card.classList.toggle("hidden", !matches);
    });
  });
});

// Simple demo bag counter
let itemCount = 0;

document.querySelectorAll(".quick-add").forEach((button) => {
  button.addEventListener("click", () => {
    itemCount += 1;
    cartCount.textContent = itemCount;

    const originalText = button.textContent;
    button.textContent = "Added to bag ✓";
    window.setTimeout(() => {
      button.textContent = originalText;
    }, 1200);
  });
});

// Newsletter demo response
form.addEventListener("submit", (event) => {
  event.preventDefault();

  if (!form.reportValidity()) return;

  formMessage.textContent = "Thank you for joining the AURELIUS list.";
  form.reset();
});
