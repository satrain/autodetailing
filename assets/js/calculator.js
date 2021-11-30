// Calculator - New
const mainVehicleWrapper = document.querySelector(".booking-icons-wrapper")

const mainVehicleTypes = [
    {
        name: "Auto",
        iconClasses: "fas fa-car",
        id: "auto",
        content: `<h1>Cao svima</h1>`
    },
    {
        name: "RV",
        iconClasses: "fas fa-bus",
        id: "rv"
    },
    {
        name: "Boat",
        iconClasses: "fas fa-ship",
        id: "boat"
    },
    {
        name: "Bike",
        iconClasses: "fas fa-motorcycle",
        id: "bike"
    }
]

// ISPIS ZA MAIN TYPE VOZILA
function ispisMainVehicle() {
    for (let i = 0; i < mainVehicleTypes.length; i++) {
        let ispis = `
        <div id="${mainVehicleTypes[i].id}" class="booking-field-icon booking-field-icon-main">
            <div class="inner-icon">
                <i class="${mainVehicleTypes[i].iconClasses}"></i>
            </div>
            <p class="inner-name-p">${mainVehicleTypes[i].name}</p>
        </div>`
        let a = mainVehicleWrapper.innerHTML;
        mainVehicleWrapper.innerHTML = a + ispis;
    }
}
ispisMainVehicle()

// let a = mainVehicleWrapper.innerHTML;
// mainVehicleWrapper.innerHTML = a + mainVehicleTypes[0].content;


// SREDJIVANJE GLAVNIH KARTICA
const bookingIconsMain = document.querySelectorAll(".booking-field-icon-main")

function paintTheCards(index) {
    let i = index;

    for (let k = 0; k < bookingIconsMain.length; k++) {
        for (let j = 0; j < bookingIconsMain[k].children.length; j++) {
            let div = bookingIconsMain[k].children[j]

            if (div.classList.contains("inner-icon")) {
                div.classList.remove("mainVehicleType-active")
            }
        }
    }
    for (let j = 0; j < bookingIconsMain[i].children.length; j++) {
        let div = bookingIconsMain[i].children[j]

        if (div.classList.contains("inner-icon")) {
            div.classList.toggle("mainVehicleType-active")
        }
    }
}

for (let i = 0; i < bookingIconsMain.length; i++) {
    bookingIconsMain[i].addEventListener("click", () => {
        paintTheCards(i)
    })
}


// SREDJIVANJE SEKUNDARNIH KARTICA ( sa info box-om )
const cards = [
    {
        id: "name-of-the-card",
        name: "NameOfTheCarddddd",
        iconClass: "fas fa-car",
        content: {
            imgSrc: "https://tubecabolivia.com/wp-content/uploads/2019/12/imggg.png",
            text: "Ovo je nas najnoviji i najbolji proizvod"
        }
    },
    {
        id: "name-of-the-card-2",
        name: "NameOfTheCard-2",
        iconClass: "fas fa-ship",
        content: {
            imgSrc: "https://tubecabolivia.com/wp-content/uploads/2019/12/imggg.png",
            text: "Ovo je nas najnoviji i najbolji proizvod"
        }
    }
]

function createSingleCard(obj) {
    let object = obj;

    let ispis = `
    <div id="${object.id}" class="single-card">
        <div class="single-card-inner-cont">
            <i class="${object.iconClass}"></i>
            <div class="info-icon">i</div>
        </div>
        <p>${object.name}</p>
    </div>
    `
    return ispis;
}

function displayCardsSelectSize() {
    let selectSizeWrapper = document.querySelector(".select-size-wrapper")

    for (let i = 0; i < cards.length; i++) {
        let current = selectSizeWrapper.innerHTML
        selectSizeWrapper.innerHTML = current + createSingleCard(cards[i])
    }
}
displayCardsSelectSize();



// Calculator - show fields based on vehicle choose
let bookingFieldIcon = document.querySelectorAll('.booking-field-icon')

function contentToDisplay(classToBlock) {
    let niz = [".auto-chosen-options", ".rv-chosen-options", ".boat-chosen-options", ".bike-chosen-options"];
    let currentClass = classToBlock;

    for (let i = 0; i < niz.length; i++) {
        document.querySelector(niz[i]).style.display = "none";
    }
    for (let i = 0; i < niz.length; i++) {
        if (niz[i] == currentClass)
            document.querySelector(currentClass).style.display = "block"
    }
}

for (let i = 0; i < bookingFieldIcon.length; i++) {
    bookingFieldIcon[i].addEventListener('click', function () {
        contentToDisplay("." + bookingFieldIcon[i].id + "-chosen-options");

    })
}


// Close the popup window
let popupX = document.querySelector(".exit-popup")

popupX.addEventListener("click", () => {
    document.querySelector(".popup-container").style.display = "none"
})


// Show popup on info icon click
function fillContentPopup() {

}


const iksevi = [];

function findXs() {
    let infoIcons = document.querySelectorAll(".single-card")
    for (let i = 0; i < infoIcons.length; i++) {
        iksevi.push(infoIcons[i].children[0].children[1])
    }
}

findXs()


for (let i = 0; i < iksevi.length; i++) {
    iksevi[i].addEventListener("click", () => {
        document.querySelector(".popup-container").style.display = "flex"
    })
}







// INITIALIZE FUNCTIONS (functions that start when page is opened)
