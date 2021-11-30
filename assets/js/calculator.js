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


// KREIRANJE STRUKTURE KARTICE
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

// Calculator - show fields based on vehicle choose
let bookingFieldIcon = document.querySelectorAll('.booking-field-icon')

for (let i = 0; i < bookingFieldIcon.length; i++) {
    bookingFieldIcon[i].addEventListener('click', function () {
        if (bookingFieldIcon[i].id == 'auto') {
            document.querySelector('.auto-chosen-options').style.display = "block"
            document.querySelector('.other-chosen-options').style.display = "none"
        }
        else {
            document.querySelector('.auto-chosen-options').style.display = "none"
            document.querySelector('.other-chosen-options').style.display = "block"
        }
    })
}