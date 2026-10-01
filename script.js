
"use strict";

/* PAGE LOADER */
window.addEventListener("load", () => {
    setTimeout(() => {
        document.getElementById("loader").classList.add("hide");
    }, 900);
});

/* FLOATING GOLD FIREFLIES */
const particleContainer = document.getElementById("particles");

for (let i = 0; i < 35; i++) {
    const particle = document.createElement("span");
    particle.className = "particle";
    particle.style.left = Math.random() * 100 + "%";
    particle.style.animationDuration = (7 + Math.random() * 10) + "s";
    particle.style.animationDelay = (Math.random() * 12) + "s";
    particle.style.opacity = Math.random();
    particleContainer.appendChild(particle);
}

/* SCROLL REVEAL */
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            revealObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach((element) => {
    revealObserver.observe(element);
});

/* MOUSE-BASED 3D PORTRAIT */
const personCard = document.querySelector(".person-card");

if (personCard && window.matchMedia("(pointer: fine)").matches) {
    personCard.addEventListener("mousemove", (event) => {
        const rect = personCard.getBoundingClientRect();
        const x = (event.clientX - rect.left) / rect.width - 0.5;
        const y = (event.clientY - rect.top) / rect.height - 0.5;

        personCard.style.animationPlayState = "paused";
        personCard.style.transform =
            `rotateY(${-7 + x * 12}deg) rotateX(${-y * 10}deg) rotateZ(1deg)`;
    });

    personCard.addEventListener("mouseleave", () => {
        personCard.style.transform = "";
        personCard.style.animationPlayState = "running";
    });
}

/* MODAL HELPERS */
function showModal(id) {
    document.getElementById(id).classList.add("active");
    document.body.classList.add("modal-open");
}

function hideModal(id) {
    document.getElementById(id).classList.remove("active");

    if (!document.querySelector(".modal.active")) {
        document.body.classList.remove("modal-open");
    }
}

function openBooking() {
    showModal("bookingModal");
    calculatePrice();
}

function closeBooking() {
    hideModal("bookingModal");
}

function openSpa() {
    showModal("spaModal");
    updateSpaTotal();
}

function closeSpa() {
    hideModal("spaModal");
}

function openExperience() {
    showModal("experienceModal");
}

function closeExperience() {
    hideModal("experienceModal");
}

/* DATE HELPERS */
const localDateString = (date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
};

const today = localDateString(new Date());

const checkin = document.getElementById("checkin");
const checkout = document.getElementById("checkout");
const spaDate = document.getElementById("spaDate");
const experienceDate = document.getElementById("experienceDate");

[checkin, checkout, spaDate, experienceDate].forEach((input) => {
    input.min = today;
});

checkin.addEventListener("change", () => {
    checkout.min = checkin.value || today;

    if (checkout.value && checkout.value <= checkin.value) {
        const nextDay = new Date(checkin.value + "T12:00:00");
        nextDay.setDate(nextDay.getDate() + 1);
        checkout.value = localDateString(nextDay);
    }

    calculatePrice();
});

/* VILLA PRICE CALCULATOR */
const room = document.getElementById("room");

room.addEventListener("change", calculatePrice);
checkout.addEventListener("change", calculatePrice);

function calculatePrice() {
    const nightlyPrice = Number(room.value);

    let nights = 1;

    if (checkin.value && checkout.value) {
        const start = new Date(checkin.value + "T12:00:00");
        const end = new Date(checkout.value + "T12:00:00");
        const days = Math.round((end - start) / 86400000);

        if (days > 0) nights = days;
    }

    document.getElementById("total").textContent =
        "₹" + (nightlyPrice * nights).toLocaleString("en-IN");
}

/* SELECT A VILLA */
function selectRoom(price) {
    room.value = String(price);
    openBooking();
    calculatePrice();
}

/* DISPLAY A DEMO REQUEST REFERENCE */
function createReference(prefix) {
    return prefix + "-" +
        Date.now().toString(36).toUpperCase();
}

/* STAY REQUEST FORM */
document.getElementById("bookingForm").addEventListener("submit", (event) => {
    event.preventDefault();

    if (!checkin.value || !checkout.value || checkout.value <= checkin.value) {
        alert("Please choose a valid check-in and check-out date.");
        return;
    }

    const form = event.currentTarget;
    const data = new FormData(form);
    const reference = createReference("AY");

    const roomName = room.options[room.selectedIndex].text;
    const estimate = document.getElementById("total").textContent;

    document.getElementById("bookingResult").textContent =
        `Demo request ${reference} prepared for ${roomName}. ` +
        `Estimated stay total: ${estimate}. No reservation has been sent; ` +
        `connect a booking service or backend to submit this request.`;

    form.querySelector('button[type="submit"]').textContent = "REQUEST PREPARED";
});

/* SPA PRICE CALCULATOR */
const spaTreatment = document.getElementById("spaTreatment");

spaTreatment.addEventListener("change", updateSpaTotal);

function updateSpaTotal() {
    document.getElementById("spaTotal").textContent =
        "₹" + Number(spaTreatment.value).toLocaleString("en-IN");
}

/* SPA REQUEST FORM */
document.getElementById("spaForm").addEventListener("submit", (event) => {
    event.preventDefault();

    if (spaDate.value < today) {
        alert("Please choose today or a future date.");
        return;
    }

    const reference = createReference("SPA");
    const treatment = spaTreatment.options[spaTreatment.selectedIndex].text;

    document.getElementById("spaResult").textContent =
        `Demo request ${reference}: ${treatment}. ` +
        `No spa appointment has been sent; connect a booking service to confirm it.`;

    event.currentTarget.querySelector('button[type="submit"]').textContent =
        "REQUEST PREPARED";
});

/* EXTRA EXPERIENCE REQUEST */
let selectedExperience = {
    name: "",
    price: 0
};

function bookExperience(name, price) {
    selectedExperience = { name, price };

    document.getElementById("experienceDescription").textContent =
        name + " — " + "₹" + price.toLocaleString("en-IN");

    document.getElementById("experienceTotal").textContent =
        "₹" + price.toLocaleString("en-IN");

    document.getElementById("experienceDate").value = "";
    document.getElementById("experienceName").value = "";
    document.getElementById("experienceResult").textContent = "";

    showModal("experienceModal");
}

document.getElementById("experienceForm").addEventListener("submit", (event) => {
    event.preventDefault();

    if (experienceDate.value < today) {
        alert("Please choose today or a future date.");
        return;
    }

    const reference = createReference("EXP");

    document.getElementById("experienceResult").textContent =
        `Demo request ${reference} prepared for ${selectedExperience.name}. ` +
        `Estimated price: ₹${selectedExperience.price.toLocaleString("en-IN")}. ` +
        `No activity has been booked yet.`;

    event.currentTarget.querySelector('button[type="submit"]').textContent =
        "REQUEST PREPARED";
});

/* CLICK OUTSIDE TO CLOSE */
document.querySelectorAll(".modal").forEach((modal) => {
    modal.addEventListener("click", (event) => {
        if (event.target === modal) {
            hideModal(modal.id);
        }
    });
});

/* ESCAPE KEY */
document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        document.querySelectorAll(".modal.active").forEach((modal) => {
            hideModal(modal.id);
        });
    }
});
