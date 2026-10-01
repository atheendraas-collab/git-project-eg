/* =====================================
   LOADER
===================================== */

window.addEventListener("load", () => {

    setTimeout(() => {

        document
            .getElementById("loader")
            .classList.add("hide");

    }, 1500);

});


/* =====================================
   FLOATING PARTICLES
===================================== */

const particles =
    document.querySelector(".particles");

for (let i = 0; i < 35; i++) {

    const particle =
        document.createElement("div");

    particle.className = "particle";

    particle.style.left =
        Math.random() * 100 + "%";

    particle.style.animationDuration =
        5 + Math.random() * 10 + "s";

    particle.style.animationDelay =
        Math.random() * 8 + "s";

    particle.style.opacity =
        Math.random();

    particles.appendChild(particle);

}


/* =====================================
   SCROLL REVEAL
===================================== */

const revealElements =
    document.querySelectorAll(
        ".reveal-section"
    );

const observer =
    new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add(
                        "visible"
                    );

                }

            });

        },
        {
            threshold: .15
        }
    );


revealElements.forEach(element => {

    observer.observe(element);

});


/* =====================================
   HERO PARALLAX
===================================== */

window.addEventListener("scroll", () => {

    const scroll =
        window.scrollY;

    const heroImage =
        document.querySelector(
            ".hero-image"
        );

    if (heroImage) {

        heroImage.style.transform =
            `scale(1.08) translateY(${scroll * .15}px)`;

    }

});


/* =====================================
   PERSON CARD 3D MOUSE EFFECT
===================================== */

const personCard =
    document.querySelector(
        ".person-card"
    );

document.addEventListener(
    "mousemove",
    event => {

        if (!personCard) return;

        const x =
            (window.innerWidth / 2 -
            event.clientX) / 40;

        const y =
            (window.innerHeight / 2 -
            event.clientY) / 40;

        personCard.style.transform =
            `rotateY(${-x}deg)
             rotateX(${y}deg)
             rotateZ(2deg)`;

    }
);


/* =====================================
   BOOKING MODAL
===================================== */

const bookingModal =
    document.getElementById(
        "bookingModal"
    );


function openBooking() {

    bookingModal.classList.add(
        "active"
    );

    document.body.style.overflow =
        "hidden";

    calculatePrice();

}


function closeBooking() {

    bookingModal.classList.remove(
        "active"
    );

    document.body.style.overflow =
        "auto";

}


/* =====================================
   SELECT ROOM
===================================== */

function selectRoom(price) {

    openBooking();

    const room =
        document.getElementById(
            "room"
        );

    room.value = price;

    calculatePrice();

}


/* =====================================
   PRICE CALCULATOR
===================================== */

const room =
    document.getElementById("room");

const checkin =
    document.getElementById("checkin");

const checkout =
    document.getElementById("checkout");


room.addEventListener(
    "change",
    calculatePrice
);

checkin.addEventListener(
    "change",
    calculatePrice
);

checkout.addEventListener(
    "change",
    calculatePrice
);


function calculatePrice() {

    let price =
        Number(room.value);

    let nights = 1;


    if (
        checkin.value &&
        checkout.value
    ) {

        const start =
            new Date(checkin.value);

        const end =
            new Date(checkout.value);

        const difference =
            end - start;

        const calculatedNights =
            Math.ceil(
                difference /
                (1000 * 60 * 60 * 24)
            );

        if (calculatedNights > 0) {

            nights =
                calculatedNights;

        }

    }


    const total =
        price * nights;


    document.getElementById(
        "total"
    ).textContent =
        "₹" +
        total.toLocaleString(
            "en-IN"
        );

}


/* =====================================
   CONFIRM BOOKING
===================================== */

function confirmBooking() {

    if (
        !checkin.value ||
        !checkout.value
    ) {

        alert(
            "Please select your check-in and check-out dates."
        );

        return;

    }


    alert(
        "✨ PRE-BOOKING RECEIVED!\n\n" +
        "Thank you for choosing AYANA Kerala Retreat.\n\n" +
        "Our reservation team will contact you shortly."
    );


    closeBooking();

}


/* =====================================
   SPA MODAL
===================================== */

const spaModal =
    document.getElementById(
        "spaModal"
    );


function openSpa() {

    spaModal.classList.add(
        "active"
    );

    document.body.style.overflow =
        "hidden";

}


function closeSpa() {

    spaModal.classList.remove(
        "active"
    );

    document.body.style.overflow =
        "auto";

}


function confirmSpa() {

    const treatment =
        document.getElementById(
            "spaTreatment"
        );


    alert(
        "🌿 SPA PRE-BOOKING RECEIVED!\n\n" +
        treatment.options[
            treatment.selectedIndex
        ].text
    );


    closeSpa();

}


/* =====================================
   CLOSE MODALS
===================================== */

bookingModal.addEventListener(
    "click",
    event => {

        if (
            event.target === bookingModal
        ) {

            closeBooking();

        }

    }
);


spaModal.addEventListener(
    "click",
    event => {

        if (
            event.target === spaModal
        ) {

            closeSpa();

        }

    }
);


/* =====================================
   ESC KEY
===================================== */

document.addEventListener(
    "keydown",
    event => {

        if (event.key === "Escape") {

            closeBooking();

            closeSpa();

        }

    }
);
