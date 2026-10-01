/* =========================
   LOADER
========================= */

window.addEventListener("load", () => {

    setTimeout(() => {

        document
            .getElementById("loader")
            .classList.add("hide");

    }, 1200);

});


/* =========================
   BOOKING MODAL
========================= */

const bookingModal =
    document.getElementById("bookingModal");

function openBooking() {

    bookingModal.classList.add("active");

    document.body.style.overflow = "hidden";

    calculateTotal();
}


function closeBooking() {

    bookingModal.classList.remove("active");

    document.body.style.overflow = "auto";

}


/* =========================
   ROOM SELECTION
========================= */

function selectRoom(room, price) {

    openBooking();

    const select =
        document.getElementById("roomSelect");

    if (price == 8500) {
        select.selectedIndex = 0;
    }

    if (price == 12500) {
        select.selectedIndex = 1;
    }

    if (price == 18500) {
        select.selectedIndex = 2;
    }

    calculateTotal();
}


/* =========================
   CALCULATE BOOKING PRICE
========================= */

const roomSelect =
    document.getElementById("roomSelect");

const checkin =
    document.getElementById("checkin");

const checkout =
    document.getElementById("checkout");


roomSelect.addEventListener(
    "change",
    calculateTotal
);

checkin.addEventListener(
    "change",
    calculateTotal
);

checkout.addEventListener(
    "change",
    calculateTotal
);


function calculateTotal() {

    const price =
        Number(roomSelect.value);

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

        const calculated =
            Math.ceil(
                difference /
                (1000 * 60 * 60 * 24)
            );

        if (calculated > 0) {
            nights = calculated;
        }

    }

    const total =
        price * nights;

    document.getElementById(
        "totalPrice"
    ).textContent =
        "₹" +
        total.toLocaleString("en-IN");

}


/* =========================
   CONFIRM BOOKING
========================= */

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
        "🎉 Pre-booking request received!\n\n" +
        "Our reservation team will contact you shortly."
    );

    closeBooking();

}


/* =========================
   SPA
========================= */

const spaModal =
    document.getElementById("spaModal");


function openSpa() {

    spaModal.classList.add("active");

    document.body.style.overflow =
        "hidden";

}


function closeSpa() {

    spaModal.classList.remove("active");

    document.body.style.overflow =
        "auto";

}


function confirmSpa() {

    const treatment =
        document.getElementById(
            "spaSelect"
        );

    alert(
        "🌿 Spa pre-booking confirmed!\n\n" +
        treatment.options[
            treatment.selectedIndex
        ].text
    );

    closeSpa();

}


/* =========================
   CLOSE MODAL OUTSIDE
========================= */

bookingModal.addEventListener(
    "click",
    function(event) {

        if (event.target === bookingModal) {
            closeBooking();
        }

    }
);


spaModal.addEventListener(
    "click",
    function(event) {

        if (event.target === spaModal) {
            closeSpa();
        }

    }
);


/* =========================
   ESCAPE
========================= */

document.addEventListener(
    "keydown",
    event => {

        if (event.key === "Escape") {

            closeBooking();
            closeSpa();

        }

    }
);


/* =========================
   PARALLAX HERO
========================= */

window.addEventListener(
    "scroll",
    () => {

        const bg =
            document.querySelector(
                ".hero-bg"
            );

        if (!bg) return;

        bg.style.transform =
            `scale(1.05) translateY(${window.scrollY * 0.12}px)`;

    }
);
