// ===============================
// FILTER SYSTEM
// ===============================

const filters = document.querySelectorAll(".filter");
const cards = document.querySelectorAll(".car-card");

filters.forEach(filter => {

    filter.addEventListener("click", () => {

        filters.forEach(btn => {
            btn.classList.remove("active");
        });

        filter.classList.add("active");

        const category = filter.dataset.filter;

        cards.forEach(card => {

            if (
                category === "all" ||
                card.dataset.category === category
            ) {
                card.style.display = "block";

                setTimeout(() => {
                    card.style.opacity = "1";
                    card.style.transform = "translateY(0)";
                }, 50);

            } else {

                card.style.opacity = "0";
                card.style.transform = "translateY(20px)";

                setTimeout(() => {
                    card.style.display = "none";
                }, 300);
            }

        });

    });

});


// ===============================
// SEARCH
// ===============================

const searchInput = document.getElementById("searchInput");

searchInput.addEventListener("input", () => {

    const searchValue = searchInput.value.toLowerCase();

    cards.forEach(card => {

        const carName =
            card.dataset.name.toLowerCase();

        if (carName.includes(searchValue)) {

            card.style.display = "block";

            setTimeout(() => {
                card.style.opacity = "1";
            }, 50);

        } else {

            card.style.opacity = "0";

            setTimeout(() => {
                card.style.display = "none";
            }, 300);

        }

    });

});


// ===============================
// FAVORITE BUTTON
// ===============================

const hearts = document.querySelectorAll(".heart");

hearts.forEach(heart => {

    heart.addEventListener("click", (event) => {

        event.stopPropagation();

        heart.classList.toggle("liked");

        if (heart.classList.contains("liked")) {
            heart.textContent = "♥";
        } else {
            heart.textContent = "♡";
        }

    });

});


// ===============================
// CAR DETAILS MODAL
// ===============================

const modal = document.getElementById("carModal");

const modalImage =
    document.getElementById("modalImage");

const modalCar =
    document.getElementById("modalCar");

const modalPrice =
    document.getElementById("modalPrice");

const modalPower =
    document.getElementById("modalPower");

const modalSpeed =
    document.getElementById("modalSpeed");

const detailsButtons =
    document.querySelectorAll(".details-btn");

detailsButtons.forEach(button => {

    button.addEventListener("click", () => {

        modalCar.textContent =
            button.dataset.car;

        modalPrice.textContent =
            button.dataset.price;

        modalPower.textContent =
            button.dataset.power;

        modalSpeed.textContent =
            button.dataset.speed;

        modalImage.src =
            button.dataset.image;

        modal.classList.add("show");

        document.body.style.overflow = "hidden";

    });

});


// ===============================
// CLOSE MODAL
// ===============================

const closeModal =
    document.getElementById("closeModal");

closeModal.addEventListener("click", closeCarModal);

modal.addEventListener("click", event => {

    if (event.target === modal) {
        closeCarModal();
    }

});


function closeCarModal() {

    modal.classList.remove("show");

    document.body.style.overflow = "auto";

}


// ESCAPE KEY

document.addEventListener("keydown", event => {

    if (event.key === "Escape") {
        closeCarModal();
    }

});


// ===============================
// CONTACT BUTTON
// ===============================

const contactBtn =
    document.getElementById("contactBtn");

contactBtn.addEventListener("click", () => {

    alert(
        "Thank you for your interest in VÉLOCÉ. Our collection specialist will contact you shortly."
    );

});


// ===============================
// MOBILE MENU
// ===============================

const menuBtn =
    document.getElementById("menuBtn");

const nav =
    document.querySelector(".navbar nav");

menuBtn.addEventListener("click", () => {

    if (nav.style.display === "flex") {

        nav.style.display = "none";

    } else {

        nav.style.display = "flex";

        nav.style.position = "absolute";
        nav.style.top = "90px";
        nav.style.left = "0";
        nav.style.width = "100%";
        nav.style.padding = "30px";
        nav.style.background = "#090909";
        nav.style.flexDirection = "column";
        nav.style.gap = "25px";

    }

});


// ===============================
// SCROLL REVEAL
// ===============================

const revealElements =
    document.querySelectorAll(
        ".car-card, .stat, .feature-content, .about, .contact"
    );

const observer =
    new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.style.opacity = "1";
                    entry.target.style.transform =
                        "translateY(0)";

                }

            });

        },
        {
            threshold: 0.1
        }
    );


revealElements.forEach(element => {

    element.style.opacity = "0";
    element.style.transform = "translateY(30px)";
    element.style.transition =
        "opacity .8s ease, transform .8s ease";

    observer.observe(element);

});
