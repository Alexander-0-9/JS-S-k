const people = [
    {
        firstName: "Eren",
        lastName: "Jaeger",
        position: "Soldier",
        info: "Member of the Scout Regiment.",
        image: "Images/Untitled3.jpg",
        phone: {
            private: "12345678",
            work: "87654321"
        }
    },
    {
        firstName: "Mikasa",
        lastName: "Ackerman",
        position: "Soldier For The Scouts ",
        info: "One of the strongest fighters.",
        image: "Images/Untitled2.jpg",
        phone: {
            private: "22334455",
            work: "55443322"
        }
    },
    {
        firstName: "Armin",
        lastName: "Arlert",
        position: "Strategist For the Scouts",
        info: "Highly intelligent and tactical.",
        image: "Images/Untitled1.jpg",
        phone: {
            private: "99887766",
            work: "66778899"
        }
    },
    {
        firstName: "Levi",
        lastName: "Ackerman",
        position: "Captain In the Schouts",
        info: "Humanity’s strongest soldier.",
        image: "Images/images.jpg",
        phone: {
            private: "11223344",
            work: "44332211"
        }
    },
    {
        firstName: "Hange",
        lastName: "Zoe",
        position: "Researcher For The Scouts",
        info: "Expert on Titans.",
        image: "Images/images0.jpg",
        phone: {
            private: "64297531",
            work: "13579246"
        }
    },
    {
        firstName: "Erwin",
        lastName: "Smith",
        position: "Commander",
        info: "Leader of the Schout Regiment.",
        image: "Images/Erwin_Smith_(Anime)_character_image.webp",
        phone: {
            private: "67676767",
            work: "76767676"
        }
    }
];

const input = document.getElementById("searchInput");
const button = document.getElementById("searchBtn");
const results = document.getElementById("results");

function searchPerson() {
    const searchValue = input.value.toLowerCase().trim();
    results.innerHTML = "";

    if (!searchValue) return;

    const matches = people.filter(p =>
        p.firstName.toLowerCase().includes(searchValue) ||
        p.lastName.toLowerCase().includes(searchValue) ||
        (p.firstName + " " + p.lastName).toLowerCase().includes(searchValue)
    );

    if (matches.length === 0) {
        const error = document.createElement("p");
        error.innerText = "No people found.";
        error.classList.add("error");
        results.appendChild(error);
    } else {
        matches.forEach(p => {
            const card = document.createElement("div");
            card.classList.add("person-card");

            const img = document.createElement("img");
            img.src = p.image;
            img.alt = p.firstName;

            const infoDiv = document.createElement("div");

            const name = document.createElement("h2");
            name.innerText = `${p.firstName} ${p.lastName}`;

            const position = document.createElement("p");
            position.innerText = `Position: ${p.position}`;

            const info = document.createElement("p");
            info.innerText = p.info;

            const phone = document.createElement("p");
            phone.innerText = `Private: ${p.phone.private} | Work: ${p.phone.work}`;

            infoDiv.appendChild(name);
            infoDiv.appendChild(position);
            infoDiv.appendChild(info);
            infoDiv.appendChild(phone);

            card.appendChild(img);
            card.appendChild(infoDiv);

            results.appendChild(card);
        });
    }

    input.value = "";
}

button.addEventListener("click", searchPerson);

input.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
        searchPerson();
    }
});