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
        price: "150 - $200"
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
        name: "2 Door Coupe",
        iconClass: "fas fa-car",
        content: {
            imgSrc: "https://tubecabolivia.com/wp-content/uploads/2019/12/imggg.png",
            text: "Ovo je nas najnoviji i najbolji proizvod"
        },
        price: 20.05,
        sameClass: "select-size-item"
    },
    {
        id: "four-door-sedan",
        name: "4 Door Sedan",
        iconClass: "fas fa-ship",
        content: {
            imgSrc: "https://miro.medium.com/max/1152/1*Xt36eAsjJ3c_I4qpYWIDzA.png",
            text: "Ovo je nas DRUGI najnoviji i najbolji proizvod"
        },
        price: 20.05,
        sameClass: "select-size-item"
    },
    {
        id: "crossover-mini-suv",
        name: "crossover/mini SUV",
        iconClass: "fas fa-motorcycle",
        content: {
            imgSrc: "https://media.istockphoto.com/photos/freedom-chains-that-transform-into-birds-charge-concept-picture-id1322104312?b=1&k=20&m=1322104312&s=170667a&w=0&h=VQyPkFkMKmo0e4ixjhiOLjiRs_ZiyKR_4SAsagQQdkk=",
            text: "Ako se ovo prikaze sve radi!"
        },
        price: 20.05,
        sameClass: "select-size-item"
    },
    {
        id: "mid-size-SUV",
        name: "mid size SUV",
        iconClass: "fas fa-bus",
        content: {
            imgSrc: "",
            text: "M T"
        },
        price: 10.05,
        sameClass: "select-size-item"
    },
    {
        id: "large-suv-minivan",
        name: "Large SUV/minivan",
        iconClass: "fas fa-car",
        content: {
            imgSrc: "",
            text: ""
        },
        price: 2.15,
        sameClass: "select-size-item"
    }

]

function createSingleCard(obj) {
    let object = obj;

    let ispis = `
    <div id="${object.id}" class="single-card ${object.sameClass}">
        <div class="single-card-inner-cont inner-icon">
            <i class="${object.iconClass}"></i>
            <div class="info-icon">i</div>
        </div>
        <p>${object.name}</p>
    </div>
    `
    return ispis;
}

function createInput(obj) {
    let input = document.createElement("input")

    input.type = "number";

    let klaseInputa = obj.iconClass.split(" ");
    for (let i = 0; i < klaseInputa.length; i++) {
        input.classList.add(klaseInputa[i])
    }


    return input;
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
        },
        price: 2.15,
        sameClass: "select-package-item"
    },
    {
        id: "exterior-detail",
        name: "Exterior detail",
        iconClass: "fas fa-car",
        content: {
            imgSrc: "https://www.salesforce.com/content/dam/blogs/ca/Blog%20Posts/details-open-graph.jpg",
            text: "Exterior detail"
        },
        price: 20.15,
        sameClass: "select-package-item"
    },
    {
        id: "interior-detail",
        name: "Interior detail",
        iconClass: "fas fa-car",
        content: {
            imgSrc: "https://www.cmaeurope.org/upload/public/images/webpage/Clubhouse/attention%20to%20detail.jpg",
            text: "Interior detail"
        },
        price: 2.15,
        sameClass: "select-package-item"
    },
    {
        id: "full-inside-outside-detail",
        name: "Full inside/outside detail",
        iconClass: "fas fa-car",
        content: {
            imgSrc: "https://www.salesforce.com/content/dam/blogs/ca/Blog%20Posts/details-open-graph.jpg",
            text: "Full inside/outside detail"
        },
        price: 2.15,
        sameClass: "select-package-item"
    },
    {
        id: "paint-correction",
        name: "Paint Correction",
        iconClass: "fas fa-car",
        content: {
            imgSrc: "https://www.cmaeurope.org/upload/public/images/webpage/Clubhouse/attention%20to%20detail.jpg",
            text: "paint correction"
        },
        price: 2.15,
        sameClass: "select-package-item"
    },
    {
        id: "ceramic-coating",
        name: "Ceramic Coating",
        iconClass: "fas fa-car",
        content: {
            imgSrc: "https://www.salesforce.com/content/dam/blogs/ca/Blog%20Posts/details-open-graph.jpg",
            text: "ceramic coating"
        },
        price: 2.15,
        sameClass: "select-package-item"
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
        },
        price: 0.00,
        sameClass: "select-condition-item"
    },
    {
        id: "condition-used",
        name: "Used",
        iconClass: "fas fa-car",
        content: {
            imgSrc: "https://tubecabolivia.com/wp-content/uploads/2019/12/imggg.png",
            text: "Used!"
        },
        price: 3.00,
        sameClass: "select-condition-item"
    },
    {
        id: "condition-abused",
        name: "Abused",
        iconClass: "fas fa-car",
        content: {
            imgSrc: "https://tubecabolivia.com/wp-content/uploads/2019/12/imggg.png",
            text: "Abused!"
        },
        price: 5.00,
        sameClass: "select-condition-item"
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
        },
        price: 4.52,
        sameClass: ""
    },
    {
        id: "hard-water-spot-removal",
        name: "Hard Water Spot Removal",
        iconClass: "fas fa-car",
        content: {
            imgSrc: "https://tubecabolivia.com/wp-content/uploads/2019/12/imggg.png",
            text: "Used!"
        },
        price: 3.85,
        sameClass: ""
    },
    {
        id: "headliner-steam-cleaning",
        name: "Headliner Steam Cleaning",
        iconClass: "fas fa-car",
        content: {
            imgSrc: "https://tubecabolivia.com/wp-content/uploads/2019/12/imggg.png",
            text: "headliner-steam-cleaning"
        },
        price: 17.50,
        sameClass: ""
    },
    {
        id: "scratch-removal",
        name: "Scratch Removal",
        iconClass: "fas fa-car",
        content: {
            imgSrc: "https://tubecabolivia.com/wp-content/uploads/2019/12/imggg.png",
            text: "Scratch Removal"
        },
        price: 4.00,
        sameClass: ""
    },
    {
        id: "excessive-crumbs-stains-removal",
        name: "Excessive Crumbs/Stains Removal",
        iconClass: "fas fa-car",
        content: {
            imgSrc: "https://tubecabolivia.com/wp-content/uploads/2019/12/imggg.png",
            text: "headliner-steam-cleaning"
        },
        price: 8.00,
        sameClass: ""
    },
    {
        id: "headlight-restoration",
        name: "Headlight Restoration",
        iconClass: "fas fa-car",
        content: {
            imgSrc: "https://tubecabolivia.com/wp-content/uploads/2019/12/imggg.png",
            text: "Scratch Removal"
        },
        price: 3.75,
        sameClass: ""
    },
    {
        id: "engine-detailing",
        name: "Engine Detailing",
        iconClass: "fas fa-car",
        content: {
            imgSrc: "https://tubecabolivia.com/wp-content/uploads/2019/12/imggg.png",
            text: "headliner-steam-cleaning"
        },
        price: 12.15,
        sameClass: ""
    },
    {
        id: "trim-restoration",
        name: "Trim Restoration",
        iconClass: "fas fa-car",
        content: {
            imgSrc: "https://tubecabolivia.com/wp-content/uploads/2019/12/imggg.png",
            text: "Trim Restoration"
        },
        price: 2.15,
        sameClass: ""
    },
    {
        id: "black-trim-restoration",
        name: "Black Trim Restoration",
        iconClass: "fas fa-car",
        content: {
            imgSrc: "https://tubecabolivia.com/wp-content/uploads/2019/12/imggg.png",
            text: "Black Trim Restoration"
        },
        price: 9.25,
        sameClass: ""
    },
    {
        id: "ozone",
        name: "Ozone",
        iconClass: "fas fa-car",
        content: {
            imgSrc: "https://tubecabolivia.com/wp-content/uploads/2019/12/imggg.png",
            text: "ozone is gut"
        },
        price: 5.15,
        sameClass: ""
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








// BOAT OBJECTS

const boatSize = [
    {
        id: "boat-input",
        name: "Size of your vehicle",
        iconClass: "size-of-vehicle-input input-boat",
        content: {
            imgSrc: "",
            text: ""
        },
        price: 1.35,
        coefficient: 1.35,
        sameClass: "boat-size-item"
    }
]

function displayBoatSize() {
    let selectBoatSizeWrapper = document.querySelector(".select-size-boat-wrapper")
    selectBoatSizeWrapper.appendChild(createInput(boatSize[0]));
}

displayBoatSize();





const boatPackage = [
    {
        id: "boat-wash",
        name: "Wash",
        iconClass: "fas fa-hammer",
        content: {
            imgSrc: "",
            text: ""
        },
        price: 2.00,
        sameClass: "boat-package-item"
    },
    {
        id: "boat-wash-and-wax",
        name: "Wash and Wax",
        iconClass: "fas fa-hammer",
        content: {
            imgSrc: "",
            text: ""
        },
        price: 3.00,
        sameClass: "boat-package-item"
    },
    {
        id: "boat-restauration",
        name: "Restauration",
        iconClass: "fas fa-hammer",
        content: {
            imgSrc: "",
            text: ""
        },
        price: 5.00,
        sameClass: "boat-package-item"
    }
]

function displayBoatPackage() {
    let selectBoatPackageWrapper = document.querySelector(".select-package-boat-wrapper")

    for (let i = 0; i < boatPackage.length; i++) {
        let current = selectBoatPackageWrapper.innerHTML
        selectBoatPackageWrapper.innerHTML = current + createSingleCard(boatPackage[i])
    }
}

displayBoatPackage();










// BOAT OBJECTS

const rvSize = [
    {
        id: "rv-input",
        name: "Size of your vehicle",
        iconClass: "size-of-vehicle-input input-rv",
        content: {
            imgSrc: "",
            text: ""
        },
        price: 1.15,
        coefficient: 1.15,
        sameClass: "rv-size-item"
    }
]

function displayRvSize() {
    let selectRvSizeWrapper = document.querySelector(".select-size-rv-wrapper")

    selectRvSizeWrapper.appendChild(createInput(rvSize[0]));
}

displayRvSize();

const rvPackage = [
    {
        id: "rv-wash",
        name: "Wash",
        iconClass: "fas fa-egg",
        content: {
            imgSrc: "",
            text: ""
        },
        price: 2.00,
        sameClass: "rv-package-item"
    },
    {
        id: "rv-wash-and-wax",
        name: "Wash and Wax",
        iconClass: "fas fa-egg",
        content: {
            imgSrc: "",
            text: ""
        },
        price: 3.00,
        sameClass: "rv-package-item"
    },
    {
        id: "rv-restauration",
        name: "Restauration",
        iconClass: "fas fa-egg",
        content: {
            imgSrc: "",
            text: ""
        },
        price: 5.00,
        sameClass: "rv-package-item"
    }
]

function displayRvPackage() {
    let selectRvPackageWrapper = document.querySelector(".select-package-rv-wrapper")

    for (let i = 0; i < rvPackage.length; i++) {
        let current = selectRvPackageWrapper.innerHTML
        selectRvPackageWrapper.innerHTML = current + createSingleCard(rvPackage[i])
    }
}

displayRvPackage();















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






// USING FUNCTION FROM MAIN TYPES TO IMPLEMENT ON ALL OTHER SINGLE CARDS
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






// KORISCENJE NOVE FUNKCIJE ZA RV
// const bookingRvSize = document.querySelectorAll(".select-size-rv-wrapper .single-card")

// for (let i = 0; i < bookingRvSize.length; i++) {
//     bookingRvSize[i].addEventListener("click", () => {
//         paintTheCards(i, bookingRvSize)

//     })
// }

// KORISCENJE NOVE FUNKCIJE ZA RV PACKAGE
const bookingRvPackage = document.querySelectorAll(".select-package-rv-wrapper .single-card")

for (let i = 0; i < bookingRvPackage.length; i++) {
    bookingRvPackage[i].addEventListener("click", () => {
        paintTheCards(i, bookingRvPackage)

    })
}






// KORISCENJE NOVE FUNKCIJE ZA BOAT
const bookingBoatSize = document.querySelectorAll(".select-size-boat-wrapper .single-card")

for (let i = 0; i < bookingBoatSize.length; i++) {
    bookingBoatSize[i].addEventListener("click", () => {
        paintTheCards(i, bookingBoatSize)

    })
}

// KORISCENJE NOVE FUNKCIJE ZA BIKE
const bookingBoatPackage = document.querySelectorAll(".select-package-boat-wrapper .single-card")

for (let i = 0; i < bookingBoatPackage.length; i++) {
    bookingBoatPackage[i].addEventListener("click", () => {
        paintTheCards(i, bookingBoatPackage)

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
        let parentWrapperFullId = infoIs[i].parentElement.parentElement.parentElement.parentElement.parentElement.id

        let parentIdArray = parentWrapperFullId.split("-")
        let parentId = parentIdArray[0]

        let niz = mergeArrays(parentId);

        for (let j = 0; j < niz.length; j++) {
            if (id == niz[j].id) {
                fillContentPopup(niz[j].content.imgSrc, niz[j].content.text)
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


//funkcija za update-ovanje secondary-ul
function updateProducts(clickedItem, mergeNizIme) {
    let item = clickedItem
    let secondaryUl = document.querySelector(".secondary-ul")

    let niz = mergeArrays(mergeNizIme)


    for (let i = 0; i < niz.length; i++) {

        if (item.id == niz[i].id) {
            console.log(niz[i], "objekat kliknutog el")
            let klasa = niz[i].sameClass + "-li"



            if (document.querySelector("." + klasa)) {

                // check for the extras
                if (klasa != "-li") {
                    let secondaryLi = document.querySelector("." + klasa)

                    console.log(secondaryLi.children[0].innerText, "obrisan")

                    for (let j = 0; j < korpa.length; j++) {
                        if (secondaryLi.children[0].innerText == korpa[j].name) {
                            korpa.splice(korpa.indexOf(korpa[j]), 1)
                        }
                        console.log(korpa[j])
                    }

                    secondaryLi.remove()

                } else {
                    console.log("Extras kliknut")
                    console.log(item.children[1].innerText)

                    console.log(document.querySelectorAll(".-li"))

                    let listExtrasCalc = document.querySelectorAll(".-li")

                    for (let k = 0; k < listExtrasCalc.length; k++) {
                        console.log(listExtrasCalc[k].children[0].innerText)
                        if (item.children[1].innerText == listExtrasCalc[k].children[0].innerText) {

                            console.log()
                            for (let j = 0; j < korpa.length; j++) {
                                if (listExtrasCalc[k].children[0].innerText == korpa[j].name) {
                                    korpa.splice(korpa.indexOf(korpa[j]), 1)
                                }
                                console.log(korpa[j])
                            }

                            listExtrasCalc[k].remove()
                            updateTotal()
                            return
                        }
                    }
                }


            } else {

            }





            let singleLiTag = document.createElement("li")
            singleLiTag.classList.add("secondary-li")
            singleLiTag.classList.add(klasa)

            let objContent = `<div class="secondary-content-left">${niz[i].name}</div>
            <div class="secondary-content-right">$${niz[i].price.toFixed(2)}</div>`

            singleLiTag.innerHTML = objContent;
            secondaryUl.appendChild(singleLiTag)

            korpa.push(niz[i])
            updateTotal()

        }

    }






}


// funkcija za update-ovanje ukupne svote novca
function updateTotal() {
    let subTotal = 0;
    let salesTax = 0;

    for (let i = 0; i < korpa.length; i++) {
        if (typeof (korpa[i].price) == "string") {
            document.querySelector(".value-subtotal").innerHTML = "$" + korpa[i].price;
            document.querySelector(".value-taxes").innerHTML = "/"
            document.querySelector(".value-total").innerHTML = "$" + korpa[i].price

            return
        }
        subTotal += korpa[i].price
    }

    salesTax = subTotal * 10.3 / 100

    document.querySelector(".value-subtotal").innerHTML = "$" + subTotal.toFixed(2)
    document.querySelector(".value-taxes").innerHTML = "$" + salesTax.toFixed(2)
    document.querySelector(".value-total").innerHTML = "$" + (subTotal + salesTax).toFixed(2)
}




function mergeArrays(nameTypeVehicle) {
    let name = nameTypeVehicle;
    let array = [];

    if (name == "auto") {
        for (let i = 0; i < cardsSelectSize.length; i++) {
            array.push(cardsSelectSize[i])
        }
        for (let i = 0; i < cardsSelectPackage.length; i++) {
            array.push(cardsSelectPackage[i])
        }
        for (let i = 0; i < cardsSelectCondition.length; i++) {
            array.push(cardsSelectCondition[i])
        }
        for (let i = 0; i < cardsSelectExtras.length; i++) {
            array.push(cardsSelectExtras[i])
        }
    }

    if (name == "rv") {
        for (let i = 0; i < rvSize.length; i++) {
            array.push(rvSize[i])
        }
        for (let i = 0; i < rvPackage.length; i++) {
            array.push(rvPackage[i])
        }
    }
    if (name == "boat") {
        for (let i = 0; i < boatSize.length; i++) {
            array.push(boatSize[i])
        }
        for (let i = 0; i < boatPackage.length; i++) {
            array.push(boatPackage[i])
        }
    }


    return array;
}



function getFirstMainLiItem(itemId, className, parentClassName) {
    let id = itemId;
    let childEl = document.createElement("div");
    childEl.classList.add(className)


    korpa.length = 0;

    for (let i = 0; i < mainVehicleTypes.length; i++) {
        if (mainVehicleTypes[i].id == id) {
            korpa.push(mainVehicleTypes[i])
        }
    }

    updateTotal()

    let childUl = document.createElement("ul")
    childUl.classList.add("secondary-ul")

    removeAllChildren(parentClassName)
    let parentEl = document.querySelector(parentClassName)

    for (let i = 0; i < mainVehicleTypes.length; i++) {
        if (mainVehicleTypes[i].id == id) {
            // console.log(id)
            let arrayToPushIntoCart = []

            // na osnovu id-a ispisujemo kontent za sub-services
            let activeSubIds = []







            let allActiveSubServices = document.querySelectorAll("." + id + "-chosen-options .mainVehicleType-active")

            if ((id == "rv" || id == "boat") && document.querySelector(".input-" + id).value != "") {
                let inputValue = document.querySelector(".input-" + id).value;


                //SADA MENJAMO PRICE OBJEKTA
                if (id == "rv") {
                    rvSize[0].price = inputValue * rvSize[0].coefficient
                    korpa.push(rvSize[0])

                    let inputLiCalc = document.createElement("li")
                    inputLiCalc.classList.add("secondary-li")
                    inputLiCalc.classList.add(rvSize[0].sameClass + "-li")

                    let inputVal = document.querySelector(".input-rv").value
                    let outputLi = `<div class="secondary-content-left">${rvSize[0].name} - ${inputVal}ft</div><div class="secondary-content-right">$${rvSize[0].price.toFixed(2)}</div>`;

                    inputLiCalc.innerHTML = outputLi

                    childUl.appendChild(inputLiCalc)

                    console.log(korpa)
                }

                if (id == "boat") {
                    boatSize[0].price = inputValue * boatSize[0].coefficient
                    korpa.push(boatSize[0])

                    let inputLiCalc = document.createElement("li")
                    inputLiCalc.classList.add("secondary-li")
                    inputLiCalc.classList.add(boatSize[0].sameClass + "-li")

                    let inputVal = document.querySelector(".input-boat").value
                    let outputLi = `<div class="secondary-content-left">${boatSize[0].name} - ${inputVal}ft</div><div class="secondary-content-right">$${boatSize[0].price.toFixed(2)}</div>`;

                    inputLiCalc.innerHTML = outputLi

                    childUl.appendChild(inputLiCalc)

                    console.log(korpa)
                }

            }







            let niz = mergeArrays(id);
            // console.log(niz, "autoniz")

            if (allActiveSubServices.length > 0) {
                // console.log(allActiveSubServices)
                for (let j = 0; j < allActiveSubServices.length; j++) {

                    // console.log(allActiveSubServices[j].parentElement.id)

                    for (let k = 0; k < niz.length; k++) {
                        if (niz[k].id == allActiveSubServices[j].parentElement.id) {
                            // console.log(niz[k])
                            arrayToPushIntoCart.push(niz[k])
                        }
                    }
                    // activeSubIds.push(allActiveSubServices[i].parentElement.id)
                }
                console.log(arrayToPushIntoCart, "ovo je mladenov consolelog")

                for (let j = 0; j < arrayToPushIntoCart.length; j++) {
                    // console.log(arrayToPushIntoCart[j])
                    if (korpa.includes(arrayToPushIntoCart[j])) {
                        console.log("Already exists into cart!")
                    } else {
                        korpa.push(arrayToPushIntoCart[j])
                    }
                }

            } else {
                console.log("No subservices")
            }


            if (korpa.length == 1 || korpa.length == 0) {

            } else {
                for (let i = 0; i < arrayToPushIntoCart.length; i++) {

                    let singleLiTag = document.createElement("li")
                    singleLiTag.classList.add("secondary-li")
                    singleLiTag.classList.add(arrayToPushIntoCart[i].sameClass + "-li")

                    let objContent = `<div class="secondary-content-left">${arrayToPushIntoCart[i].name}</div>
                        <div class="secondary-content-right">$${arrayToPushIntoCart[i].price.toFixed(2)}</div>`

                    singleLiTag.innerHTML = objContent;
                    childUl.appendChild(singleLiTag)

                }
            }







            let ispis = `
            <div class="main-li-left"><i class="${mainVehicleTypes[i].iconClasses}"></i><p>${mainVehicleTypes[i].name}</p></div>
            <div class="main-li-right">$${mainVehicleTypes[i].price}</div>`
            childEl.innerHTML = ispis;



            if (korpa.length == 0) {
                // console.log(mainVehicleTypes[i])

                korpa.push(mainVehicleTypes[i])

                console.log(korpa)
            } else {
                console.log(korpa)
                console.log(korpa[0].id)
                console.log(mainVehicleTypes[i].id)
            }

        }
    }
    parentEl.appendChild(childEl)
    parentEl.appendChild(childUl)
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


// function ispisSecondaryLiItem(array) {
//     let myArray = array
//     let secondaryUl = document.querySelector(".secondary-ul")
//     for (let i = 0; i < myArray.length; i++) {


//         let singleLiTag = document.createElement("li")
//         singleLiTag.classList.add("secondary-li")

//         let objContent = `<div class="secondary-content-left">${myArray[i].name}</div>
//         <div class="secondary-content-right">$${myArray[i].price}</div>`

//         singleLiTag.innerHTML = objContent;
//         secondaryUl.appendChild(singleLiTag)

//     }
// }


function getParentParentId(div) {
    let childDiv = div;
    let parentWrapperFullId = childDiv.parentElement.parentElement.parentElement.id

    let parentIdArray = parentWrapperFullId.split("-")
    let parentId = parentIdArray[0]

    return parentId
}


// EVENT LISTENERI ZA SIZE INPUTE
document.querySelector(".input-rv").addEventListener("change", () => {
    let inputValue = document.querySelector(".input-rv").value
    rvSize[0].price = inputValue * rvSize[0].coefficient

    let korpaContains = false

    for (let i = 0; i < korpa.length; i++) {
        if (korpa[i].id == rvSize[0].id) {
            korpaContains = true
        }
    }

    if (korpaContains) {
        for (let i = 0; i < korpa.length; i++) {
            if (korpa[i].id == rvSize[0].id) {
                korpa[i].price = rvSize[0].price

                if (inputValue == "") {
                    document.querySelector(".rv-size-item-li").remove()
                } else {
                    let inputLiCalc = document.querySelector(".rv-size-item-li")
                    let leftChildInputLiCalc = inputLiCalc.children[0]
                    let rightChildInputLiCalc = inputLiCalc.children[1]

                    leftChildInputLiCalc.innerHTML = `Size of your vehicle - ${inputValue}ft`
                    rightChildInputLiCalc.innerHTML = `$${rvSize[0].price.toFixed(2)}`
                }

            }
        }
    } else {
        korpa.push(rvSize[0])

        let childUl = document.querySelector(".secondary-ul")

        let inputLiCalc = document.createElement("li")
        inputLiCalc.classList.add("secondary-li")
        inputLiCalc.classList.add(rvSize[0].sameClass + "-li")

        let inputVal = document.querySelector(".input-rv").value
        let outputLi = `<div class="secondary-content-left">${rvSize[0].name} - ${inputVal}ft</div><div class="secondary-content-right">$${rvSize[0].price.toFixed(2)}</div>`;

        inputLiCalc.innerHTML = outputLi

        childUl.appendChild(inputLiCalc)

    }




    updateTotal()
    console.log(korpa)
})


document.querySelector(".input-boat").addEventListener("change", () => {
    let inputValue = document.querySelector(".input-boat").value
    boatSize[0].price = inputValue * boatSize[0].coefficient

    let korpaContains = false

    for (let i = 0; i < korpa.length; i++) {
        if (korpa[i].id == boatSize[0].id) {
            korpaContains = true
        }
    }

    if (korpaContains) {
        for (let i = 0; i < korpa.length; i++) {
            if (korpa[i].id == boatSize[0].id) {
                korpa[i].price = boatSize[0].price

                if (inputValue == "") {
                    document.querySelector(".boat-size-item-li").remove()
                } else {
                    let inputLiCalc = document.querySelector(".boat-size-item-li")
                    let leftChildInputLiCalc = inputLiCalc.children[0]
                    let rightChildInputLiCalc = inputLiCalc.children[1]

                    leftChildInputLiCalc.innerHTML = `Size of your vehicle - ${inputValue}ft`
                    rightChildInputLiCalc.innerHTML = `$${boatSize[0].price.toFixed(2)}`
                }

            }
        }
    } else {
        korpa.push(boatSize[0])

        let childUl = document.querySelector(".secondary-ul")

        let inputLiCalc = document.createElement("li")
        inputLiCalc.classList.add("secondary-li")
        inputLiCalc.classList.add(boatSize[0].sameClass + "-li")

        let inputVal = document.querySelector(".input-boat").value
        let outputLi = `<div class="secondary-content-left">${boatSize[0].name} - ${inputVal}ft</div><div class="secondary-content-right">$${boatSize[0].price.toFixed(2)}</div>`;

        inputLiCalc.innerHTML = outputLi

        childUl.appendChild(inputLiCalc)
    }

    updateTotal()
    console.log(korpa)

})




// POZIV ZA CALCULATE KADA SE ODABERE TIP VOZILA
const calcTypeVehicle = document.querySelectorAll(".booking-field-icon-main")

let lastI = -1;

for (let i = 0; i < calcTypeVehicle.length; i++) {
    calcTypeVehicle[i].addEventListener('click', () => {
        if (lastI != i) {

            getFirstMainLiItem(calcTypeVehicle[i].id, "main-li-holder", "#main-ul-first-child")
            updateTotal()



            lastI = i;
            // console.log(calcTypeVehicle[i].id, lastI)
        }
    })
}


//POZIV ZA ODABIR SUB-SERVICES
let subServices = document.querySelectorAll(".single-card")

for (let i = 0; i < subServices.length; i++) {
    subServices[i].addEventListener("click", () => {
        console.log(korpa)

        updateTotal()

        // prvi prosledjeni parametar je kliknut div subServisa, isti se prosledjuje funkciji koji vraca prvi deo id-a glavnog wrapper-a tog subServisa (auto, rv, boat ili bike)
        updateProducts(subServices[i], getParentParentId(subServices[i]))


    })
}