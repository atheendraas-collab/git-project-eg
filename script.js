/* =====================================
   DESTINATION DATABASE
===================================== */

const places = [

    {
        name: "Munnar",
        category: "mountain",
        location: "Kerala, India",
        time: "September – March",
        experience: "Tea Hills",
        image: "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&w=1400&q=90",
        description:
            "A breathtaking hill station surrounded by endless tea plantations, misty mountains and peaceful valleys."
    },

    {
        name: "Varkala",
        category: "beach",
        location: "Kerala, India",
        time: "October – March",
        experience: "Cliff & Beach",
        image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1400&q=90",
        description:
            "A spectacular coastal destination famous for dramatic cliffs, golden beaches and beautiful sunsets."
    },

    {
        name: "Alappuzha",
        category: "waterfall",
        location: "Kerala, India",
        time: "November – February",
        experience: "Backwaters",
        image: "https://images.unsplash.com/photo-1602305762777-3d0a8e1f5f07?auto=format&fit=crop&w=1400&q=90",
        description:
            "Experience Kerala's legendary backwaters, traditional houseboats and peaceful waterways."
    },

    {
        name: "Wayanad",
        category: "forest",
        location: "Kerala, India",
        time: "October – May",
        experience: "Wild Nature",
        image: "https://images.unsplash.com/photo-1605538883669-825200433431?auto=format&fit=crop&w=1400&q=90",
        description:
            "A green paradise filled with forests, waterfalls, wildlife and spectacular mountain landscapes."
    },

    {
        name: "Fort Kochi",
        category: "heritage",
        location: "Kerala, India",
        time: "October – March",
        experience: "History & Culture",
        image: "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&w=1400&q=90",
        description:
            "Explore historic streets, colonial architecture, art cafés and the iconic Chinese fishing nets."
    },

    {
        name: "Thekkady",
        category: "forest",
        location: "Kerala, India",
        time: "October – February",
        experience: "Wildlife",
        image: "https://images.unsplash.com/photo-1535338454770-8be927b5a00b?auto=format&fit=crop&w=1400&q=90",
        description:
            "Discover one of Kerala's most beautiful wildlife regions surrounded by dense forests."
    },

    {
        name: "Athirappilly",
        category: "waterfall",
        location: "Kerala, India",
        time: "June – January",
        experience: "Waterfall",
        image: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?auto=format&fit=crop&w=1400&q=90",
        description:
            "Kerala's spectacular waterfall surrounded by lush tropical forests."
    },

    {
        name: "Kovalam",
        category: "beach",
        location: "Kerala, India",
        time: "October – March",
        experience: "Beach Escape",
        image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1400&q=90",
        description:
            "Relax beside palm-lined beaches and watch unforgettable Arabian Sea sunsets."
    },

    {
        name: "Paris",
        category: "city",
        location: "France",
        time: "April – October",
        experience: "Culture & Romance",
        image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1400&q=90",
        description:
            "Discover timeless architecture, art, cafés and iconic landmarks in the City of Light."
    },

    {
        name: "Santorini",
        category: "beach",
        location: "Greece",
        time: "May – October",
        experience: "Island Escape",
        image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=1400&q=90",
        description:
            "Whitewashed buildings, blue domes and incredible Mediterranean sunsets."
    },

    {
        name: "Swiss Alps",
        category: "mountain",
        location: "Switzerland",
        time: "December – March",
        experience: "Snow Adventure",
        image: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?auto=format&fit=crop&w=1400&q=90",
        description:
            "Experience dramatic alpine peaks, snowy landscapes and unforgettable mountain adventures."
    },

    {
        name: "Bali",
        category: "forest",
        location: "Indonesia",
        time: "April – October",
        experience: "Tropical Escape",
        image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1400&q=90",
        description:
            "Explore tropical forests, waterfalls, temples and beautiful island landscapes."
    },

    {
        name: "Dubai",
        category: "city",
        location: "UAE",
        time: "November – March",
        experience: "Luxury",
        image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1400&q=90",
        description:
            "A futuristic city filled with incredible architecture, luxury experiences and desert adventures."
    },

    {
        name: "Kyoto",
        category: "heritage",
        location: "Japan",
        time: "March – May",
        experience: "Japanese Culture",
        image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1400&q=90",
        description:
            "Walk through ancient temples, peaceful gardens and beautiful traditional streets."
    },

    {
        name: "Iceland",
        category: "mountain",
        location: "Iceland",
        time: "September – March",
        experience: "Northern Lights",
        image: "https://images.unsplash.com/photo-1520769945061-0a448c463865?auto=format&fit=crop&w=1400&q=90",
        description:
            "Chase waterfalls, glaciers, volcanic landscapes and the magical Northern Lights."
    },

    {
        name: "Maldives",
        category: "beach",
        location: "Maldives",
        time: "November – April",
        experience: "Island Luxury",
        image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=1400&q=90",
        description:
            "Crystal-clear lagoons, private islands and some of the world's most beautiful beaches."
    }

];


/* =====================================
   ELEMENTS
===================================== */

const grid =
    document.getElementById("placeGrid");

const search =
    document.getElementById("search");

const filters =
    document.querySelectorAll(".filter");

const noResults =
    document.getElementById("noResults");

const modal =
    document.getElementById("modal");

const close =
    document.getElementById("close");

let currentCategory = "all";


/* =====================================
   LOADER
===================================== */

window.addEventListener("load", () => {

    setTimeout(() => {

        document
            .getElementById("loader")
            .classList.add("hide");

    }, 900);

});


/* =====================================
   DISPLAY PLACES
===================================== */

function displayPlaces() {

    const searchValue =
        search.value.toLowerCase().trim();


    const filtered =
        places.filter(place => {

            const categoryMatch =
                currentCategory === "all" ||
                place.category === currentCategory;


            const searchMatch =
                place.name
                    .toLowerCase()
                    .includes(searchValue) ||

                place.location
                    .toLowerCase()
                    .includes(searchValue) ||

                place.experience
                    .toLowerCase()
                    .includes(searchValue);


            return categoryMatch && searchMatch;

        });


    grid.innerHTML = "";


    if (filtered.length === 0) {

        noResults.style.display = "block";

        return;

    }


    noResults.style.display = "none";


    filtered.forEach((place, index) => {

        const card =
            document.createElement("article");

        card.className = "place-card";


        card.innerHTML = `

            <div class="place-image">

                <img
                    src="${place.image}"
                    alt="${place.name}"
                    loading="lazy"
                >

                <div class="place-tag">
                    ${place.category.toUpperCase()}
                </div>

            </div>

            <div class="place-content">

                <small>
                    ${place.location}
                </small>

                <h3>
                    ${place.name}
                </h3>

                <p>
                    ${place.description}
                </p>

                <button
                    class="view-place"
                    data-name="${place.name}"
                >
                    Discover Place →
                </button>

            </div>
        `;


        grid.appendChild(card);


        setTimeout(() => {

            card.classList.add("show");

        }, index * 80);

    });


    attachEvents();

}


/* =====================================
   CARD EVENTS
===================================== */

function attachEvents() {

    document
        .querySelectorAll(".view-place")
        .forEach(button => {

            button.addEventListener(
                "click",
                () => {

                    openModal(
                        button.dataset.name
                    );

                }
            );

        });

}


/* =====================================
   MODAL
===================================== */

function openModal(name) {

    const place =
        places.find(
            item => item.name === name
        );

    if (!place) return;


    document.getElementById(
        "modalImage"
    ).src = place.image;


    document.getElementById(
        "modalCategory"
    ).textContent =
        place.category.toUpperCase();


    document.getElementById(
        "modalTitle"
    ).textContent =
        place.name;


    document.getElementById(
        "modalDescription"
    ).textContent =
        place.description;


    document.getElementById(
        "modalLocation"
    ).textContent =
        place.location;


    document.getElementById(
        "modalTime"
    ).textContent =
        place.time;


    document.getElementById(
        "modalExperience"
    ).textContent =
        place.experience;


    modal.classList.add("show");

    document.body.style.overflow =
        "hidden";

}


function closeModal() {

    modal.classList.remove("show");

    document.body.style.overflow =
        "auto";

}


close.addEventListener(
    "click",
    closeModal
);


modal.addEventListener(
    "click",
    event => {

        if (event.target === modal) {

            closeModal();

        }

    }
);


document.addEventListener(
    "keydown",
    event => {

        if (event.key === "Escape") {

            closeModal();

        }

    }
);


/* =====================================
   FILTERS
===================================== */

filters.forEach(button => {

    button.addEventListener(
        "click",
        () => {

            filters.forEach(btn =>
                btn.classList.remove("active")
            );


            button.classList.add("active");


            currentCategory =
                button.dataset.category;


            displayPlaces();

        }
    );

});


/* =====================================
   SEARCH
===================================== */

search.addEventListener(
    "input",
    displayPlaces
);


/* =====================================
   MOBILE MENU
===================================== */

const menu =
    document.getElementById("menu");

const nav =
    document.getElementById("nav");


menu.addEventListener(
    "click",
    () => {

        nav.classList.toggle("open");

    }
);


nav.querySelectorAll("a")
    .forEach(link => {

        link.addEventListener(
            "click",
            () => {

                nav.classList.remove("open");

            }
        );

    });


/* =====================================
   INITIAL DISPLAY
===================================== */

displayPlaces();
