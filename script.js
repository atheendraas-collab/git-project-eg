const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav-links");
const form = document.querySelector("#bookingForm");
const treatmentSelect = document.querySelector("#treatmentSelect");
const dateInput = document.querySelector("#dateInput");
const formMessage = document.querySelector("#formMessage");

// Prevent selecting a date in the past.
const today = new Date();
const localToday = new Date(today.getTime() - today.getTimezoneOffset() * 60000)
  .toISOString()
  .split("T")[0];

dateInput.min = localToday;
document.querySelector("#year").textContent = new Date().getFullYear();

// Open and close the mobile navigation menu.
menuButton.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");

  menuButton.setAttribute("aria-expanded", String(isOpen));
  menuButton.setAttribute(
    "aria-label",
    isOpen ? "Close navigation" : "Open navigation"
  );
});

// Close the mobile menu after a navigation link is selected.
nav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.setAttribute("aria-label", "Open navigation");
  });
});

// Select a treatment and take the visitor to the booking form.
document.querySelectorAll(".book-treatment").forEach((button) => {
  button.addEventListener("click", () => {
    treatmentSelect.value = button.dataset.treatment;
    document.querySelector("#book").scrollIntoView({ behavior: "smooth" });

    window.setTimeout(() => {
      document.querySelector('[name="name"]').focus();
    }, 450);
  });
});

// Show a confirmation message when the booking form is submitted.
form.addEventListener("submit", (event) => {
  event.preventDefault();

  if (!form.reportValidity()) return;

  const data = new FormData(form);
  const firstName = String(data.get("name")).trim().split(/\s+/)[0];

  formMessage.textContent =
    `Thank you, ${firstName}. Your ${data.get("treatment")} request is ready. Please contact AYANA Spa directly to confirm your appointment.`;

  formMessage.classList.remove("form-error");
  formMessage.classList.add("form-success");

  form.reset();
  dateInput.min = localToday;
});
