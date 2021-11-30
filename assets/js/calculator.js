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