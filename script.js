// Get the screens
const lockScreen = document.getElementById("lockScreen");
const passcodeScreen = document.getElementById("passcodeScreen");
const homeScreen = document.getElementById("homeScreen");

// Get keypad buttons and passcode dots
const numberButtons = document.querySelectorAll(".number");
const dots = document.querySelectorAll(".dot");
const deleteButton = document.getElementById("deleteButton");

// Her birthday: 28 September 2005
const correctPasscode = "280905";

// Stores what the player types
let enteredPasscode = "";


// -------------------------
// OPEN PASSCODE SCREEN
// -------------------------

lockScreen.addEventListener("click", function () {

    lockScreen.classList.add("hidden");
    passcodeScreen.classList.remove("hidden");

});


// -------------------------
// NUMBER BUTTONS
// -------------------------

numberButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        // Do not allow more than 6 digits
        if (enteredPasscode.length < 6) {

            enteredPasscode += button.dataset.number;

            updateDots();

        }

        // Automatically check once 6 digits are entered
        if (enteredPasscode.length === 6) {

            checkPasscode();

        }

    });

});


// -------------------------
// UPDATE PASSCODE DOTS
// -------------------------

function updateDots() {

    dots.forEach(function (dot, index) {

        if (index < enteredPasscode.length) {

            dot.classList.add("filled");

        } else {

            dot.classList.remove("filled");

        }

    });

}


// -------------------------
// CHECK PASSCODE
// -------------------------

function checkPasscode() {

    if (enteredPasscode === correctPasscode) {

        // Correct password

        passcodeScreen.classList.add("hidden");
        homeScreen.classList.remove("hidden");

    } else {

        // Wrong password

        enteredPasscode = "";

        updateDots();

        alert("Incorrect Passcode");

    }

}


// -------------------------
// DELETE BUTTON
// -------------------------

deleteButton.addEventListener("click", function () {

    enteredPasscode = enteredPasscode.slice(0, -1);

    updateDots();

});
// -------------------------
// HOME SCREEN SWIPE DOTS
// -------------------------

const homePages = document.getElementById("homePages");
const pageDots = document.querySelectorAll(".page-dot");


homePages.addEventListener("scroll", function () {

    const pageWidth = homePages.clientWidth;

    const currentPage = Math.round(
        homePages.scrollLeft / pageWidth
    );


    pageDots.forEach(function (dot) {

        dot.classList.remove("active-dot");

    });


    pageDots[currentPage].classList.add("active-dot");

});