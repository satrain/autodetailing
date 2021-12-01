// POSTOJE 3 OSNOVNA DELOVA OVOG KODA
// STRUKTURA JE TAKVA DA ZA SVAKU OD SEKCIJA KOJE SE PRIKAZUJU KADA JE SELEKTOVAN AUTO NA IKONICI
// POSTOJE 3 DELA: 
// - array sa informacijama(objektima), 
// - for petlja pri kraju koda koja omogucava info box(popup) (https://prnt.sc/2159so1) i 
// - njihova funkcija za selektovanje

// INITIALIZE FUNCTIONS (functions that start when page is opened)

const mainVehicleWrapper = document.querySelector(".booking-icons-wrapper")
const mainVehicleTypes = [
    {
        name: "Auto",
        iconClasses: "fas fa-car",
        id: "auto",
        price: 100.00
    },
    {
        name: "RV",
        iconClasses: "fas fa-bus",
        id: "rv",
        price: 20.00
    },
    {
        name: "Boat",
        iconClasses: "fas fa-ship",
        id: "boat",
        price: 30.00
    },
    {
        name: "Bike",
        iconClasses: "fas fa-motorcycle",
        id: "bike",
        price: 80.00
    }
]

// ISPIS ZA MAIN TYPE VOZILA - KREIRANJE MAIN KARTICA
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

// KREIRANJE SEKUNDARNIH KARTICA ( sa info box-om )
const cardsSelectSize = [
    {
        id: "two-door-coupe",
        name: "2 door coupe",
        iconClass: "fas fa-car",
        content: {
            imgSrc: "https://tubecabolivia.com/wp-content/uploads/2019/12/imggg.png",
            text: "Ovo je nas najnoviji i najbolji proizvod"
        }
    },
    {
        id: "four-door-sedan",
        name: "4 door sedan",
        iconClass: "fas fa-ship",
        content: {
            imgSrc: "https://miro.medium.com/max/1152/1*Xt36eAsjJ3c_I4qpYWIDzA.png",
            text: "Ovo je nas DRUGI najnoviji i najbolji proizvod"
        }
    },
    {
        id: "crossover-mini-suv",
        name: "crossover/mini SUV",
        iconClass: "fas fa-motorcycle",
        content: {
            imgSrc: "https://media.istockphoto.com/photos/freedom-chains-that-transform-into-birds-charge-concept-picture-id1322104312?b=1&k=20&m=1322104312&s=170667a&w=0&h=VQyPkFkMKmo0e4ixjhiOLjiRs_ZiyKR_4SAsagQQdkk=",
            text: "Ako se ovo prikaze sve radi!"
        }
    },
    {
        id: "mid-size-SUV",
        name: "mid size SUV",
        iconClass: "fas fa-bus",
        content: {
            imgSrc: "",
            text: "M T"
        }
    },
    {
        id: "large-suv-minivan",
        name: "Large SUV/minivan",
        iconClass: "fas fa-car",
        content: {
            imgSrc: "",
            text: ""
        }
    },

]

function createSingleCard(obj) {
    let object = obj;

    let ispis = `
    <div id="${object.id}" class="single-card">
        <div class="single-card-inner-cont inner-icon">
            <i class="${object.iconClass}"></i>
            <div class="info-icon">i</div>
        </div>
        <p>${object.name}</p>
    </div>
    `
    return ispis;
}


// SELECT SIZE FUNCTIONS TO DISPLAY
function displayCardsSelectSize() {
    let selectSizeWrapper = document.querySelector(".select-size-wrapper")

    for (let i = 0; i < cardsSelectSize.length; i++) {
        let current = selectSizeWrapper.innerHTML
        selectSizeWrapper.innerHTML = current + createSingleCard(cardsSelectSize[i])
    }
}

displayCardsSelectSize();






// SELECT PACKAGE FUNCTIONS TO DISPLAY
const cardsSelectPackage = [
    {
        id: "mini-detail",
        name: "Mini-detail",
        iconClass: "fas fa-car",
        content: {
            imgSrc: "https://www.cmaeurope.org/upload/public/images/webpage/Clubhouse/attention%20to%20detail.jpg",
            text: "Mini-detail detail"
        }
    },
    {
        id: "exterior-detail",
        name: "Exterior detail",
        iconClass: "fas fa-car",
        content: {
            imgSrc: "https://www.salesforce.com/content/dam/blogs/ca/Blog%20Posts/details-open-graph.jpg",
            text: "Exterior detail"
        }
    },
    {
        id: "interior-detail",
        name: "Interior detail",
        iconClass: "fas fa-car",
        content: {
            imgSrc: "https://www.cmaeurope.org/upload/public/images/webpage/Clubhouse/attention%20to%20detail.jpg",
            text: "Interior detail"
        }
    },
    {
        id: "full-inside-outside-detail",
        name: "Full inside/outside detail",
        iconClass: "fas fa-car",
        content: {
            imgSrc: "https://www.salesforce.com/content/dam/blogs/ca/Blog%20Posts/details-open-graph.jpg",
            text: "Full inside/outside detail"
        }
    },
    {
        id: "paint-correction",
        name: "Paint Correction",
        iconClass: "fas fa-car",
        content: {
            imgSrc: "https://www.cmaeurope.org/upload/public/images/webpage/Clubhouse/attention%20to%20detail.jpg",
            text: "paint correction"
        }
    },
    {
        id: "ceramic-coating",
        name: "Ceramic Coating",
        iconClass: "fas fa-car",
        content: {
            imgSrc: "https://www.salesforce.com/content/dam/blogs/ca/Blog%20Posts/details-open-graph.jpg",
            text: "ceramic coating"
        }
    }
]

function displayCardsSelectPackage() {
    let selectPackageWrapper = document.querySelector(".select-package-wrapper")

    for (let i = 0; i < cardsSelectPackage.length; i++) {
        let current = selectPackageWrapper.innerHTML
        selectPackageWrapper.innerHTML = current + createSingleCard(cardsSelectPackage[i])
    }
}

displayCardsSelectPackage();






// SELECT CONDITION FUNCTIONS TO DISPLAY
const cardsSelectCondition = [
    {
        id: "condition-new",
        name: "New",
        iconClass: "fas fa-car",
        content: {
            imgSrc: "https://tubecabolivia.com/wp-content/uploads/2019/12/imggg.png",
            text: "New one mate!"
        }
    },
    {
        id: "condition-used",
        name: "Used",
        iconClass: "fas fa-car",
        content: {
            imgSrc: "https://tubecabolivia.com/wp-content/uploads/2019/12/imggg.png",
            text: "Used!"
        }
    },
    {
        id: "condition-abused",
        name: "Abused",
        iconClass: "fas fa-car",
        content: {
            imgSrc: "https://tubecabolivia.com/wp-content/uploads/2019/12/imggg.png",
            text: "Abused!"
        }
    }
]

function displayCardsSelectCondition() {
    let selectConditionWrapper = document.querySelector(".select-condition-wrapper")

    for (let i = 0; i < cardsSelectCondition.length; i++) {
        let current = selectConditionWrapper.innerHTML
        selectConditionWrapper.innerHTML = current + createSingleCard(cardsSelectCondition[i])
    }
}

displayCardsSelectCondition();








// SELECT EXTRAS FUNCTIONS TO DISPLAY
const cardsSelectExtras = [
    {
        id: "pet-hair-removal",
        name: "Pet hair removal",
        iconClass: "fas fa-car",
        content: {
            imgSrc: "https://tubecabolivia.com/wp-content/uploads/2019/12/imggg.png",
            text: "Pet hair removal"
        }
    },
    {
        id: "hard-water-spot-removal",
        name: "Hard Water Spot Removal",
        iconClass: "fas fa-car",
        content: {
            imgSrc: "https://tubecabolivia.com/wp-content/uploads/2019/12/imggg.png",
            text: "Used!"
        }
    },
    {
        id: "headliner-steam-cleaning",
        name: "Headliner Steam Cleaning",
        iconClass: "fas fa-car",
        content: {
            imgSrc: "https://tubecabolivia.com/wp-content/uploads/2019/12/imggg.png",
            text: "headliner-steam-cleaning"
        }
    },
    {
        id: "scratch-removal",
        name: "Scratch Removal",
        iconClass: "fas fa-car",
        content: {
            imgSrc: "https://tubecabolivia.com/wp-content/uploads/2019/12/imggg.png",
            text: "Scratch Removal"
        }
    },
    {
        id: "excessive-crumbs-stains-removal",
        name: "Excessive Crumbs/Stains Removal",
        iconClass: "fas fa-car",
        content: {
            imgSrc: "https://tubecabolivia.com/wp-content/uploads/2019/12/imggg.png",
            text: "headliner-steam-cleaning"
        }
    },
    {
        id: "headlight-restoration",
        name: "Headlight Restoration",
        iconClass: "fas fa-car",
        content: {
            imgSrc: "https://tubecabolivia.com/wp-content/uploads/2019/12/imggg.png",
            text: "Scratch Removal"
        }
    },
    {
        id: "engine-detailing",
        name: "Engine Detailing",
        iconClass: "fas fa-car",
        content: {
            imgSrc: "https://tubecabolivia.com/wp-content/uploads/2019/12/imggg.png",
            text: "headliner-steam-cleaning"
        }
    },
    {
        id: "trim-restoration",
        name: "Trim Restoration",
        iconClass: "fas fa-car",
        content: {
            imgSrc: "https://tubecabolivia.com/wp-content/uploads/2019/12/imggg.png",
            text: "Trim Restoration"
        }
    },
    {
        id: "black-trim-restoration",
        name: "Black Trim Restoration",
        iconClass: "fas fa-car",
        content: {
            imgSrc: "https://tubecabolivia.com/wp-content/uploads/2019/12/imggg.png",
            text: "Black Trim Restoration"
        }
    },
    {
        id: "ozone",
        name: "Ozone",
        iconClass: "fas fa-car",
        content: {
            imgSrc: "https://tubecabolivia.com/wp-content/uploads/2019/12/imggg.png",
            text: "ozone is gut"
        }
    }
]

function displayCardsSelectExtras() {
    let selectExtrasWrapper = document.querySelector(".select-extras-wrapper")

    for (let i = 0; i < cardsSelectExtras.length; i++) {
        let current = selectExtrasWrapper.innerHTML
        selectExtrasWrapper.innerHTML = current + createSingleCard(cardsSelectExtras[i])
    }
}

displayCardsSelectExtras();










/* -- ODAVDE KRECE UREDJIVANJE FUNKCIJA NAKON POZIVA(KREIRANJA) KARTICA -- */

// SREDJIVANJE GLAVNIH KARTICA
function paintTheCards(index, array) {
    let i = index;
    let cardsMainBooking = array

    for (let k = 0; k < cardsMainBooking.length; k++) {
        for (let j = 0; j < cardsMainBooking[k].children.length; j++) {
            let div = cardsMainBooking[k].children[j]

            if (div.classList.contains("mainVehicleType-active")) {
                div.classList.remove("mainVehicleType-active")
            }
        }
    }
    for (let j = 0; j < cardsMainBooking[i].children.length; j++) {
        let div = cardsMainBooking[i].children[j]
        if (div.classList.contains("inner-icon")) {
            div.classList.toggle("mainVehicleType-active")
        }
    }
}

function paintTheCardsWithNoRemoveClass(index, array) {
    let i = index;
    let cardsMainBooking = array

    for (let j = 0; j < cardsMainBooking[i].children.length; j++) {
        let div = cardsMainBooking[i].children[j]
        if (div.classList.contains("inner-icon")) {
            div.classList.toggle("mainVehicleType-active")
        }
    }
}

const bookingIconsMain = document.querySelectorAll(".booking-field-icon-main")

for (let i = 0; i < bookingIconsMain.length; i++) {
    bookingIconsMain[i].addEventListener("click", () => {
        paintTheCards(i, bookingIconsMain)

    })
}





// USING FUNCTION FROM MAIN TYPES TO IMPLEMENT ON SELECT SIZE, SELECT PACKAGE and SELECT CONDITION
const bookingSelectSize = document.querySelectorAll(".select-size-wrapper .single-card")

for (let i = 0; i < bookingSelectSize.length; i++) {
    bookingSelectSize[i].addEventListener("click", () => {
        paintTheCards(i, bookingSelectSize)

    })
}


const bookingSelectPackage = document.querySelectorAll(".select-package-wrapper .single-card")

for (let i = 0; i < bookingSelectPackage.length; i++) {
    bookingSelectPackage[i].addEventListener("click", () => {
        paintTheCards(i, bookingSelectPackage)

    })
}


const bookingSelectCondition = document.querySelectorAll(".select-condition-wrapper .single-card")

for (let i = 0; i < bookingSelectCondition.length; i++) {
    bookingSelectCondition[i].addEventListener("click", () => {
        paintTheCards(i, bookingSelectCondition)

    })
}



// KORISCENJE NOVE FUNKCIJE ZA SELEKTOVANJE, BEZ REMOVE KLASE NA OSTALIM ELEMTIMA
const bookingSelectExtras = document.querySelectorAll(".select-extras-wrapper .single-card")

for (let i = 0; i < bookingSelectExtras.length; i++) {
    bookingSelectExtras[i].addEventListener("click", () => {
        paintTheCardsWithNoRemoveClass(i, bookingSelectExtras)

    })
}



// Close the popup window
let popupX = document.querySelector(".exit-popup")

popupX.addEventListener("click", () => {
    document.querySelector(".popup-container").style.display = "none"
})


// Show popup on info icon click
function fillContentPopup(imgSrc, textContent) {
    let src = imgSrc;
    let text = textContent;

    let imgPopup = document.querySelector("#popup-img")
    let contentText = document.querySelector("#popup-text")

    // check if img doesn't have string


    imgPopup.setAttribute("src", src)
    contentText.innerHTML = text;
}

const infoIs = [];

function findXs() {
    let infoIcons = document.querySelectorAll(".single-card")

    for (let i = 0; i < infoIcons.length; i++) {
        infoIs.push(infoIcons[i].children[0].children[1])
    }
}

findXs()

// CEKIRANJE KLIKNUTOG i (info) POLJA SA KONTENTOM ZA POPUP - ZA SVAKU OD SEKCIJA PO JEDAN FOR
for (let i = 0; i < infoIs.length; i++) {
    infoIs[i].addEventListener("click", () => {
        // console.log(infoIs[i].parentElement.parentElement.id)
        let id = infoIs[i].parentElement.parentElement.id

        for (let j = 0; j < cardsSelectSize.length; j++) {
            if (id == cardsSelectSize[j].id) {
                fillContentPopup(cardsSelectSize[j].content.imgSrc, cardsSelectSize[j].content.text)

            }
        }
        for (let j = 0; j < cardsSelectPackage.length; j++) {
            if (id == cardsSelectPackage[j].id) {
                fillContentPopup(cardsSelectPackage[j].content.imgSrc, cardsSelectPackage[j].content.text)
            }
        }
        for (let j = 0; j < cardsSelectCondition.length; j++) {
            if (id == cardsSelectCondition[j].id) {
                fillContentPopup(cardsSelectCondition[j].content.imgSrc, cardsSelectCondition[j].content.text)
            }
        }
        for (let j = 0; j < cardsSelectExtras.length; j++) {
            if (id == cardsSelectExtras[j].id) {
                fillContentPopup(cardsSelectExtras[j].content.imgSrc, cardsSelectExtras[j].content.text)
            }
        }
        document.querySelector(".popup-container").style.display = "flex"
    })
}




// Calculator - show fields based on chosen vehicle
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





// ACTUAL CALCULATOR FUNCTION CALCULATE
const korpa = [

];



// funkcija za update-ovanje ukupne svote novca
function updateTotal() {
    let subTotal = 0;
    let salesTax = 0;

    for (let i = 0; i < korpa.length; i++) {
        subTotal += korpa[i].price
    }

    salesTax = subTotal * 10.3 / 100

    document.querySelector(".value-subtotal").innerHTML = "$" + subTotal.toFixed(2)
    document.querySelector(".value-taxes").innerHTML = "$" + salesTax.toFixed(2)
    document.querySelector(".value-total").innerHTML = "$" + (subTotal + salesTax).toFixed(2)
}


const calcTypeVehicle = document.querySelectorAll(".booking-field-icon-main")

function getFirstMainLiItem(itemId, className, parentClassName) {
    let id = itemId;
    let childEl = document.createElement("div");
    childEl.classList.add(className)
    let parentEl = document.querySelector(parentClassName)

    for (let i = 0; i < mainVehicleTypes.length; i++) {
        if (mainVehicleTypes[i].id == id) {
            let ispis = `
            <div class="main-li-left"><i class="${mainVehicleTypes[i].iconClasses}"></i><p>${mainVehicleTypes[i].name}</p></div>
            <div class="main-li-right">$${mainVehicleTypes[i].price.toFixed(2)}</div>`
            childEl.innerHTML = ispis;


            console.log(mainVehicleTypes[i])

            if (korpa.length == 0) {
                korpa.push(mainVehicleTypes[i])
            } else {
                korpa.length = 0
                korpa.push(mainVehicleTypes[i])
            }
        }
    }
    parentEl.appendChild(childEl)
}

function removeAllChildren(className) {
    let klasa = document.querySelector(className);
    if (klasa.lastElementChild) {
        let child = klasa.lastElementChild
        while (child) {
            klasa.removeChild(child)
            child = klasa.lastElementChild
        }
    }
}




// POZIV ZA CALCULATE KADA SE ODABERE TIP VOZILA
let lastI = -1;

for (let i = 0; i < calcTypeVehicle.length; i++) {
    calcTypeVehicle[i].addEventListener('click', () => {
        if (lastI != i) {
            removeAllChildren("#main-ul-first-child")
            getFirstMainLiItem(calcTypeVehicle[i].id, "main-li-holder", "#main-ul-first-child")
            updateTotal()


            lastI = i;
            // console.log(calcTypeVehicle[i].id, lastI)
        }
    })
}

