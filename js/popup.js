const showPopupButton = document.querySelector(".help");
const popupContainer = document.querySelector(".popup-container");
const closePopupButton = document.querySelector(".close-btn");
const closePopupButton2 = document.querySelector(".close-btn2");
const showInputPopupButton = document.querySelector(".button");

const popupContainer2 = document.querySelector(".popup-container2");


showPopupButton.onclick = () => {
    popupContainer.classList.add("active");
}

closePopupButton.onclick = () => {
    popupContainer.classList.remove("active");
}

showInputPopupButton.onclick = () => {
    popupContainer2.classList.add("active");
}

closePopupButton2.onclick = () => {
    popupContainer2.classList.remove("active");
}

function togglePopup(){
    document.getElementById("help-popup").classList.toggle("active");
}
