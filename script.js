/* =========================
   PAGE LOADER
========================= */

window.addEventListener("load", () => {

    setTimeout(() => {

        document.querySelector(".loader")
            .classList.add("hide");

    }, 1200);

});


/* =========================
   FLOATING PARTICLES
========================= */

const particleContainer =
    document.querySelector(".particles");

for (let i = 0; i < 35; i++) {

    const particle = document.createElement("div");

    particle.classList.add("particle");

    particle.style.left =
        Math.random() * 100 + "%";

    particle.style.animationDuration =
        8 + Math.random() * 15 + "s";

    particle.style.animationDelay =
        Math.random() * 10 + "s";

    particle.style.width =
        2 + Math.random() * 3 + "px";

    particle.style.height =
        particle.style.width;

    particleContainer.appendChild(particle);
}


/* =========================
   SCROLL REVEAL
========================= */

const reveals =
    document.querySelectorAll(".reveal");

const observer =
    new IntersectionObserver(

        (entries) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show");

                    observer.unobserve(entry.target);

                }

            });

        },

        {
            threshold: 0.12
        }

    );

reveals.forEach(element => {
    observer.observe(element);
});


/* =========================
   DESTINATION DATA
========================= */

const places = {

    Munnar: {
        title: "Munnar",
        text:
            "A magical mountain destination surrounded by endless tea plantations, misty valleys, waterfalls and cool mountain air. Munnar is one of Kerala's most beautiful highland escapes."
    },

    Alappuzha: {
        title: "Alappuzha",
        text:
            "Known for its beautiful backwaters and traditional houseboats. Cruise slowly through coconut-lined canals while village life unfolds around you."
    },

    Wayanad: {
        title: "Wayanad",
        text:
            "A green paradise filled with forests, waterfalls, wildlife, caves and mist-covered mountains. Perfect for nature lovers and explorers."
    },

    Athirappilly: {
        title: "Athirappilly",
        text:
            "Kerala's famous waterfall surrounded by lush tropical forests. The enormous cascade creates a spectacular natural landscape."
    },

    Varkala: {
        title: "Varkala",
        text:
            "A beautiful coastal destination famous for its dramatic cliffs, golden beaches, Arabian Sea sunsets and relaxed atmosphere."
    }

};


/* =========================
   OPEN MODAL
========================= */

function openPlace(place) {

    const modal =
        document.getElementById("placeModal");

    const title =
        document.getElementById("modalTitle");

    const text =
        document.getElementById("modalText");

    title.textContent =
        places[place].title;

    text.textContent =
        places[place].text;

    modal.classList.add("active");

    document.body.style.overflow =
        "hidden";
}


/* =========================
   CLOSE MODAL
========================= */

function closePlace() {

    document
        .getElementById("placeModal")
        .classList.remove("active");

    document.body.style.overflow =
        "auto";
}


/* Close when clicking outside */

document
    .getElementById("placeModal")
    .addEventListener("click", function(e) {

        if (e.target === this) {
            closePlace();
        }

    });


/* =========================
   ESCAPE KEY
========================= */

document.addEventListener("keydown", function(e) {

    if (e.key === "Escape") {
        closePlace();
    }

});


/* =========================
   START JOURNEY
========================= */

function startJourney() {

    document
        .getElementById("places")
        .scrollIntoView({
            behavior: "smooth"
        });

}


/* =========================
   PARALLAX EFFECT
========================= */

window.addEventListener("scroll", () => {

    const scroll =
        window.scrollY;

    const hero =
        document.querySelector(".hero-bg");

    if (hero) {

        hero.style.transform =
            `scale(1.05) translateY(${scroll * 0.12}px)`;

    }

});


/* =========================
   MOBILE MENU
========================= */

const menuBtn =
    document.querySelector(".menu-btn");

const nav =
    document.querySelector(".navbar nav");

menuBtn.addEventListener("click", () => {

    if (nav.style.display === "flex") {

        nav.style.display = "none";

    } else {

        nav.style.display = "flex";

        nav.style.position = "absolute";
        nav.style.top = "90px";
        nav.style.right = "6%";

        nav.style.flexDirection = "column";

        nav.style.background = "#071b14";

        nav.style.padding = "25px";

        nav.style.gap = "20px";

    }

});


/* =========================
   ACTIVE NAVIGATION
========================= */

const sections =
    document.querySelectorAll("section[id]");

const links =
    document.querySelectorAll(".navbar nav a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 200;

        if (window.scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    links.forEach(link => {

        link.style.color = "";

        if (
            link.getAttribute("href") ===
            "#" + current
        ) {
            link.style.color = "#d5a85c";
        }

    });

});
