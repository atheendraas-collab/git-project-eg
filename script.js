/* =========================================
   CAR DATABASE
========================================= */

const cars = [

    /* ================= BMW ================= */

    {
        brand: "BMW",
        name: "BMW M2",
        category: "coupe",
        type: "M PERFORMANCE COUPE",
        power: "460 HP",
        acceleration: "4.1s",
        speed: "285 KM/H",
        price: "$64,900",
        image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=1200&q=90",
        description: "A compact performance coupe built around pure driving emotion."
    },

    {
        brand: "BMW",
        name: "BMW M3 Competition",
        category: "sedan",
        type: "M PERFORMANCE SEDAN",
        power: "503 HP",
        acceleration: "3.8s",
        speed: "290 KM/H",
        price: "$85,300",
        image: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=1200&q=90",
        description: "The legendary M3 combines everyday usability with extreme performance."
    },

    {
        brand: "BMW",
        name: "BMW M4 Competition",
        category: "coupe",
        type: "M PERFORMANCE COUPE",
        power: "503 HP",
        acceleration: "3.8s",
        speed: "290 KM/H",
        price: "$86,100",
        image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=1200&q=90",
        description: "A muscular coupe with iconic BMW M performance."
    },

    {
        brand: "BMW",
        name: "BMW M5",
        category: "sedan",
        type: "HIGH PERFORMANCE SEDAN",
        power: "717 HP",
        acceleration: "3.5s",
        speed: "305 KM/H",
        price: "$120,000",
        image: "https://images.unsplash.com/photo-1556189250-72ba954cfc2b?auto=format&fit=crop&w=1200&q=90",
        description: "Executive luxury meets serious M performance."
    },

    {
        brand: "BMW",
        name: "BMW M8 Competition",
        category: "coupe",
        type: "GRAND TOURER",
        power: "617 HP",
        acceleration: "3.0s",
        speed: "305 KM/H",
        price: "$140,000",
        image: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?auto=format&fit=crop&w=1200&q=90",
        description: "A sophisticated grand tourer with brutal performance."
    },

    {
        brand: "BMW",
        name: "BMW X5 M Competition",
        category: "suv",
        type: "M PERFORMANCE SUV",
        power: "617 HP",
        acceleration: "3.7s",
        speed: "285 KM/H",
        price: "$125,000",
        image: "https://images.unsplash.com/photo-1551830820-330a71b99659?auto=format&fit=crop&w=1200&q=90",
        description: "Supercar performance wrapped in a luxurious SUV."
    },

    {
        brand: "BMW",
        name: "BMW X6 M",
        category: "suv",
        type: "PERFORMANCE SUV COUPE",
        power: "617 HP",
        acceleration: "3.7s",
        speed: "285 KM/H",
        price: "$130,000",
        image: "https://images.unsplash.com/photo-1617814065893-007571d7e7c2?auto=format&fit=crop&w=1200&q=90",
        description: "Aggressive coupe styling with legendary M performance."
    },

    {
        brand: "BMW",
        name: "BMW XM",
        category: "suv",
        type: "M LUXURY SUV",
        power: "644 HP",
        acceleration: "4.1s",
        speed: "270 KM/H",
        price: "$160,000",
        image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=1200&q=90",
        description: "BMW's flagship high-performance luxury SUV."
    },

    {
        brand: "BMW",
        name: "BMW i4 M50",
        category: "electric",
        type: "ELECTRIC GRAN COUPE",
        power: "536 HP",
        acceleration: "3.9s",
        speed: "225 KM/H",
        price: "$72,000",
        image: "https://images.unsplash.com/photo-1619767886558-efdc259cde1a?auto=format&fit=crop&w=1200&q=90",
        description: "Electric performance with unmistakable BMW character."
    },

    {
        brand: "BMW",
        name: "BMW i5 M60",
        category: "electric",
        type: "ELECTRIC EXECUTIVE",
        power: "593 HP",
        acceleration: "3.8s",
        speed: "230 KM/H",
        price: "$85,000",
        image: "https://images.unsplash.com/photo-1617654112368-307921291f42?auto=format&fit=crop&w=1200&q=90",
        description: "A new generation of electric executive performance."
    },

    {
        brand: "BMW",
        name: "BMW i7 M70",
        category: "electric",
        type: "ELECTRIC LUXURY SEDAN",
        power: "650 HP",
        acceleration: "3.7s",
        speed: "250 KM/H",
        price: "$170,000",
        image: "https://images.unsplash.com/photo-1553440569-bcc63803a83d?auto=format&fit=crop&w=1200&q=90",
        description: "The ultimate BMW electric luxury experience."
    },

    {
        brand: "BMW",
        name: "BMW Z4 M40i",
        category: "convertible",
        type: "ROADSTER",
        power: "382 HP",
        acceleration: "4.4s",
        speed: "250 KM/H",
        price: "$66,000",
        image: "https://images.unsplash.com/photo-1493238792000-8113da705763?auto=format&fit=crop&w=1200&q=90",
        description: "Open-air driving with classic roadster proportions."
    },


    /* ================= ROLLS ROYCE ================= */

    {
        brand: "Rolls-Royce",
        name: "Rolls-Royce Phantom",
        category: "sedan",
        type: "ULTRA LUXURY SALOON",
        power: "563 HP",
        acceleration: "5.3s",
        speed: "250 KM/H",
        price: "$505,000",
        image: "https://images.unsplash.com/photo-1631295868223-63265b40d9b4?auto=format&fit=crop&w=1200&q=90",
        description: "The ultimate expression of Rolls-Royce craftsmanship."
    },

    {
        brand: "Rolls-Royce",
        name: "Phantom Extended",
        category: "sedan",
        type: "EXTENDED WHEELBASE",
        power: "563 HP",
        acceleration: "5.4s",
        speed: "250 KM/H",
        price: "$570,000",
        image: "https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=1200&q=90",
        description: "Unmatched rear-seat luxury with limousine proportions."
    },

    {
        brand: "Rolls-Royce",
        name: "Rolls-Royce Ghost",
        category: "sedan",
        type: "LUXURY SALOON",
        power: "563 HP",
        acceleration: "4.8s",
        speed: "250 KM/H",
        price: "$355,000",
        image: "https://images.unsplash.com/photo-1631203893217-4f5f7f3a8a2d?auto=format&fit=crop&w=1200&q=90",
        description: "Minimalist luxury with effortless Rolls-Royce performance."
    },

    {
        brand: "Rolls-Royce",
        name: "Ghost Extended",
        category: "sedan",
        type: "EXTENDED LUXURY",
        power: "563 HP",
        acceleration: "4.9s",
        speed: "250 KM/H",
        price: "$390,000",
        image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=1200&q=90",
        description: "Extraordinary space combined with serene refinement."
    },

    {
        brand: "Rolls-Royce",
        name: "Rolls-Royce Cullinan",
        category: "suv",
        type: "ULTRA LUXURY SUV",
        power: "563 HP",
        acceleration: "5.2s",
        speed: "250 KM/H",
        price: "$420,000",
        image: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?auto=format&fit=crop&w=1200&q=90",
        description: "The world's most prestigious luxury SUV."
    },

    {
        brand: "Rolls-Royce",
        name: "Cullinan Black Badge",
        category: "suv",
        type: "BLACK BADGE SUV",
        power: "591 HP",
        acceleration: "5.1s",
        speed: "250 KM/H",
        price: "$470,000",
        image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=1200&q=90",
        description: "The darker, bolder side of Rolls-Royce."
    },

    {
        brand: "Rolls-Royce",
        name: "Rolls-Royce Spectre",
        category: "electric",
        type: "ELECTRIC COUPE",
        power: "577 HP",
        acceleration: "4.5s",
        speed: "250 KM/H",
        price: "$420,000",
        image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=1200&q=90",
        description: "The silent future of Rolls-Royce luxury."
    },

    {
        brand: "Rolls-Royce",
        name: "Spectre Black Badge",
        category: "electric",
        type: "BLACK BADGE ELECTRIC",
        power: "650 HP",
        acceleration: "4.2s",
        speed: "250 KM/H",
        price: "$480,000",
        image: "https://images.unsplash.com/photo-1619767886558-efdc259cde1a?auto=format&fit=crop&w=1200&q=90",
        description: "Electric power meets the Black Badge philosophy."
    },


    /* ================= MERCEDES ================= */

    {
        brand: "Mercedes",
        name: "Mercedes-AMG GT 63",
        category: "coupe",
        type: "AMG PERFORMANCE",
        power: "577 HP",
        acceleration: "3.2s",
        speed: "315 KM/H",
        price: "$180,000",
        image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=1200&q=90",
        description: "AMG performance wrapped in grand touring luxury."
    },

    {
        brand: "Mercedes",
        name: "Mercedes-AMG G63",
        category: "suv",
        type: "LUXURY PERFORMANCE SUV",
        power: "577 HP",
        acceleration: "4.5s",
        speed: "240 KM/H",
        price: "$180,000",
        image: "https://images.unsplash.com/photo-1520031441872-265e4ff7038f?auto=format&fit=crop&w=1200&q=90",
        description: "The legendary G-Class with hand-built AMG performance."
    },

    {
        brand: "Mercedes",
        name: "Mercedes-Maybach S680",
        category: "sedan",
        type: "MAYBACH LUXURY",
        power: "621 HP",
        acceleration: "4.5s",
        speed: "250 KM/H",
        price: "$240,000",
        image: "https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=1200&q=90",
        description: "First-class luxury for the road."
    },


    /* ================= PORSCHE ================= */

    {
        brand: "Porsche",
        name: "Porsche 911 Turbo S",
        category: "supercar",
        type: "ICONIC SPORTS CAR",
        power: "640 HP",
        acceleration: "2.7s",
        speed: "330 KM/H",
        price: "$230,000",
        image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=90",
        description: "One of the world's most recognizable performance cars."
    },

    {
        brand: "Porsche",
        name: "Porsche 911 GT3 RS",
        category: "supercar",
        type: "TRACK WEAPON",
        power: "518 HP",
        acceleration: "3.2s",
        speed: "296 KM/H",
        price: "$245,000",
        image: "https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?auto=format&fit=crop&w=1200&q=90",
        description: "Motorsport technology engineered for the road."
    },

    {
        brand: "Porsche",
        name: "Porsche Taycan Turbo S",
        category: "electric",
        type: "ELECTRIC PERFORMANCE",
        power: "750 HP",
        acceleration: "2.8s",
        speed: "260 KM/H",
        price: "$197,000",
        image: "https://images.unsplash.com/photo-1611651338412-8403fa6e3599?auto=format&fit=crop&w=1200&q=90",
        description: "Electric performance without compromising Porsche DNA."
    },


    /* ================= FERRARI ================= */

    {
        brand: "Ferrari",
        name: "Ferrari 296 GTB",
        category: "supercar",
        type: "V6 HYBRID SUPERCAR",
        power: "819 HP",
        acceleration: "2.9s",
        speed: "330 KM/H",
        price: "$342,000",
        image: "https://images.unsplash.com/photo-1592198084033-aade902d1aae?auto=format&fit=crop&w=1200&q=90",
        description: "A new era of Ferrari hybrid performance."
    },

    {
        brand: "Ferrari",
        name: "Ferrari SF90 Stradale",
        category: "supercar",
        type: "HYBRID SUPERCAR",
        power: "986 HP",
        acceleration: "2.5s",
        speed: "340 KM/H",
        price: "$625,000",
        image: "https://images.unsplash.com/photo-1597687210367-a4916c0ca6b4?auto=format&fit=crop&w=1200&q=90",
        description: "Ferrari's electrified V8 performance masterpiece."
    },

    {
        brand: "Ferrari",
        name: "Ferrari Roma Spider",
        category: "convertible",
        type: "GRAND TOURER",
        power: "612 HP",
        acceleration: "3.4s",
        speed: "320 KM/H",
        price: "$280,000",
        image: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?auto=format&fit=crop&w=1200&q=90",
        description: "Italian elegance with open-top grand touring."
    },


    /* ================= LAMBORGHINI ================= */

    {
        brand: "Lamborghini",
        name: "Lamborghini Revuelto",
        category: "supercar",
        type: "V12 HYBRID",
        power: "1,001 HP",
        acceleration: "2.5s",
        speed: "350 KM/H",
        price: "$600,000",
        image: "https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?auto=format&fit=crop&w=1200&q=90",
        description: "The next generation of Lamborghini V12 performance."
    },

    {
        brand: "Lamborghini",
        name: "Lamborghini Huracán",
        category: "supercar",
        type: "V10 SUPERCAR",
        power: "631 HP",
        acceleration: "2.9s",
        speed: "325 KM/H",
        price: "$250,000",
        image: "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=1200&q=90",
        description: "The iconic Lamborghini V10 experience."
    },

    {
        brand: "Lamborghini",
        name: "Lamborghini Urus",
        category: "suv",
        type: "SUPER SUV",
        power: "657 HP",
        acceleration: "3.5s",
        speed: "305 KM/H",
        price: "$240,000",
        image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=1200&q=90",
        description: "Supercar DNA transformed into an SUV."
    },


    /* ================= BENTLEY ================= */

    {
        brand: "Bentley",
        name: "Bentley Continental GT",
        category: "coupe",
        type: "GRAND TOURER",
        power: "650 HP",
        acceleration: "3.5s",
        speed: "335 KM/H",
        price: "$300,000",
        image: "https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=1200&q=90",
        description: "Handcrafted British luxury with extraordinary performance."
    },

    {
        brand: "Bentley",
        name: "Bentley Bentayga",
        category: "suv",
        type: "LUXURY SUV",
        power: "626 HP",
        acceleration: "3.9s",
        speed: "306 KM/H",
        price: "$220,000",
        image: "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=1200&q=90",
        description: "Luxury, craftsmanship and performance in SUV form."
    },


    /* ================= McLAREN ================= */

    {
        brand: "McLaren",
        name: "McLaren 750S",
        category: "supercar",
        type: "SUPERCAR",
        power: "740 HP",
        acceleration: "2.8s",
        speed: "332 KM/H",
        price: "$324,000",
        image: "https://images.unsplash.com/photo-1621135802920-133df287f89c?auto=format&fit=crop&w=1200&q=90",
        description: "Lightweight engineering and breathtaking acceleration."
    },

    {
        brand: "McLaren",
        name: "McLaren Artura",
        category: "supercar",
        type: "HYBRID SUPERCAR",
        power: "671 HP",
        acceleration: "3.0s",
        speed: "330 KM/H",
        price: "$250,000",
        image: "https://images.unsplash.com/photo-1553440569-bcc63803a83d?auto=format&fit=crop&w=1200&q=90",
        description: "A lightweight hybrid supercar built around pure driving."
    }

];


/* =========================================
   DOM ELEMENTS
========================================= */

const carGrid = document.getElementById("carGrid");
const searchInput = document.getElementById("search");
const categorySelect = document.getElementById("category");

const filters = document.querySelectorAll(".filter");
const brandCards = document.querySelectorAll(".brand-card");

const modal = document.getElementById("modal");
const modalClose = document.getElementById("modalClose");

const modalImage = document.getElementById("modalImage");
const modalBrand = document.getElementById("modalBrand");
const modalName = document.getElementById("modalName");
const modalDescription = document.getElementById("modalDescription");
const modalPower = document.getElementById("modalPower");
const modalAcceleration = document.getElementById("modalAcceleration");
const modalSpeed = document.getElementById("modalSpeed");
const modalPrice = document.getElementById("modalPrice");

const noResults = document.getElementById("noResults");

let selectedBrand = "all";
let selectedCategory = "all";
let favorites = [];


/* =========================================
   LOADER
========================================= */

window.addEventListener("load", () => {

    setTimeout(() => {
        document.getElementById("loader")
            .classList.add("hide");
    }, 1000);

});


/* =========================================
   DISPLAY CARS
========================================= */

function displayCars() {

    const searchValue =
        searchInput.value.toLowerCase().trim();

    const filteredCars = cars.filter(car => {

        const matchesBrand =
            selectedBrand === "all" ||
            car.brand === selectedBrand;

        const matchesCategory =
            selectedCategory === "all" ||
            car.category === selectedCategory;

        const matchesSearch =
            car.name.toLowerCase()
                .includes(searchValue) ||

            car.brand.toLowerCase()
                .includes(searchValue) ||

            car.type.toLowerCase()
                .includes(searchValue);

        return (
            matchesBrand &&
            matchesCategory &&
            matchesSearch
        );

    });


    carGrid.innerHTML = "";


    if (filteredCars.length === 0) {

        noResults.style.display = "block";

        return;

    }


    noResults.style.display = "none";


    filteredCars.forEach((car, index) => {

        const card = document.createElement("article");

        card.className = "car-card";

        const isFavorite =
            favorites.includes(car.name);

        card.innerHTML = `

            <div class="car-image">

                <img
                    src="${car.image}"
                    alt="${car.name}"
                    loading="lazy"
                >

                <div class="car-brand">
                    ${car.brand}
                </div>

                <button
                    class="favorite ${isFavorite ? "active" : ""}"
                    data-name="${car.name}"
                >
                    ${isFavorite ? "♥" : "♡"}
                </button>

            </div>

            <div class="car-content">

                <span class="type">
                    ${car.type}
                </span>

                <h3>
                    ${car.name}
                </h3>

                <div class="specs">

                    <span>
                        POWER
                        <strong>${car.power}</strong>
                    </span>

                    <span>
                        0–100
                        <strong>${car.acceleration}</strong>
                    </span>

                    <span>
                        TOP SPEED
                        <strong>${car.speed}</strong>
                    </span>

                </div>

                <div class="car-bottom">

                    <div class="price">
                        ${car.price}
                    </div>

                    <button
                        class="details"
                        data-name="${car.name}"
                    >
                        View Details →
                    </button>

                </div>

            </div>

        `;

        carGrid.appendChild(card);


        setTimeout(() => {
            card.classList.add("visible");
        }, index * 50);

    });


    attachCardEvents();

}


/* =========================================
   CARD EVENTS
========================================= */

function attachCardEvents() {

    document.querySelectorAll(".favorite")
        .forEach(button => {

            button.addEventListener("click", event => {

                event.stopPropagation();

                const name =
                    button.dataset.name;

                if (favorites.includes(name)) {

                    favorites =
                        favorites.filter(
                            item => item !== name
                        );

                    button.classList.remove("active");
                    button.textContent = "♡";

                } else {

                    favorites.push(name);

                    button.classList.add("active");
                    button.textContent = "♥";

                }

                updateFavoriteCount();

            });

        });


    document.querySelectorAll(".details")
        .forEach(button => {

            button.addEventListener("click", () => {

                openModal(
                    button.dataset.name
                );

            });

        });

}


/* =========================================
   MODAL
========================================= */

function openModal(name) {

    const car =
        cars.find(item => item.name === name);

    if (!car) return;


    modalImage.src = car.image;

    modalBrand.textContent =
        car.brand;

    modalName.textContent =
        car.name;

    modalDescription.textContent =
        car.description;

    modalPower.textContent =
        car.power;

    modalAcceleration.textContent =
        car.acceleration;

    modalSpeed.textContent =
        car.speed;

    modalPrice.textContent =
        car.price;


    modal.classList.add("show");

    document.body.style.overflow =
        "hidden";

}


function closeModalWindow() {

    modal.classList.remove("show");

    document.body.style.overflow =
        "auto";

}


modalClose.addEventListener(
    "click",
    closeModalWindow
);


modal.addEventListener(
    "click",
    event => {

        if (event.target === modal) {
            closeModalWindow();
        }

    }
);


document.addEventListener(
    "keydown",
    event => {

        if (event.key === "Escape") {
            closeModalWindow();
        }

    }
);


/* =========================================
   BRAND FILTERS
========================================= */

filters.forEach(button => {

    button.addEventListener("click", () => {

        filters.forEach(btn =>
            btn.classList.remove("active")
        );

        button.classList.add("active");

        selectedBrand =
            button.dataset.filter;

        displayCars();

        document.getElementById("collection")
            .scrollIntoView({
                behavior: "smooth"
            });

    });

});


/* =========================================
   BRAND CARDS
========================================= */

brandCards.forEach(card => {

    card.addEventListener("click", () => {

        selectedBrand =
            card.dataset.brand;


        filters.forEach(filter => {

            filter.classList.toggle(
                "active",
                filter.dataset.filter === selectedBrand
            );

        });


        displayCars();


        document.getElementById("collection")
            .scrollIntoView({
                behavior: "smooth"
            });

    });

});


/* =========================================
   SEARCH
========================================= */

searchInput.addEventListener(
    "input",
    displayCars
);


/* =========================================
   CATEGORY
========================================= */

categorySelect.addEventListener(
    "change",
    () => {

        selectedCategory =
            categorySelect.value;

        displayCars();

    }
);


/* =========================================
   FAVORITE COUNT
========================================= */

function updateFavoriteCount() {

    document.getElementById(
        "favoriteCount"
    ).textContent = favorites.length;

}


document.getElementById(
    "favoriteNav"
).addEventListener("click", () => {

    searchInput.value = "";

    selectedBrand = "all";

    selectedCategory = "all";

    categorySelect.value = "all";

    filters.forEach(filter => {

        filter.classList.toggle(
            "active",
            filter.dataset.filter === "all"
        );

    });


    const favoriteCars =
        cars.filter(car =>
            favorites.includes(car.name)
        );


    if (favoriteCars.length === 0) {

        carGrid.innerHTML = "";

        noResults.textContent =
            "You haven't added any cars to your collection yet.";

        noResults.style.display =
            "block";

        return;

    }


    noResults.style.display =
        "none";

    carGrid.innerHTML = "";


    favoriteCars.forEach(car => {

        const card =
            createFavoriteCard(car);

        carGrid.appendChild(card);

    });


    document.getElementById("collection")
        .scrollIntoView({
            behavior: "smooth"
        });

});


function createFavoriteCard(car) {

    const card =
        document.createElement("article");

    card.className =
        "car-card visible";

    card.innerHTML = `

        <div class="car-image">

            <img
                src="${car.image}"
                alt="${car.name}"
            >

            <div class="car-brand">
                ${car.brand}
            </div>

            <button
                class="favorite active"
                data-name="${car.name}"
            >
                ♥
            </button>

        </div>

        <div class="car-content">

            <span class="type">
                ${car.type}
            </span>

            <h3>
                ${car.name}
            </h3>

            <div class="specs">

                <span>
                    POWER
                    <strong>${car.power}</strong>
                </span>

                <span>
                    0–100
                    <strong>${car.acceleration}</strong>
                </span>

                <span>
                    TOP SPEED
                    <strong>${car.speed}</strong>
                </span>

            </div>

            <div class="car-bottom">

                <div class="price">
                    ${car.price}
                </div>

                <button
                    class="details"
                    data-name="${car.name}"
                >
                    View Details →
                </button>

            </div>

        </div>
    `;


    card.querySelector(".favorite")
        .addEventListener("click", () => {

            favorites =
                favorites.filter(
                    item => item !== car.name
                );

            updateFavoriteCount();

            card.remove();

        });


    card.querySelector(".details")
        .addEventListener("click", () => {

            openModal(car.name);

        });


    return card;

}


/* =========================================
   CONTACT
========================================= */

document.getElementById(
    "contactButton"
).addEventListener("click", () => {

    alert(
        "Welcome to VÉLOCÉ.\n\nOur collection specialist will contact you shortly."
    );

});


/* =========================================
   MOBILE MENU
========================================= */

const menuButton =
    document.getElementById("menuButton");

const nav =
    document.getElementById("nav");

menuButton.addEventListener(
    "click",
    () => {

        nav.classList.toggle(
            "mobile-open"
        );

    }
);


nav.querySelectorAll("a")
    .forEach(link => {

        link.addEventListener(
            "click",
            () => {

                nav.classList.remove(
                    "mobile-open"
                );

            }
        );

    });


/* =========================================
   INITIAL LOAD
========================================= */

displayCars();
