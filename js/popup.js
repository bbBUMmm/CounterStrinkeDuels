const showPopupButton = document.querySelector(".help");
const popupContainer = document.querySelector(".popup-container");
const closePopupButton = document.querySelector(".close-btn");

showPopupButton.onclick = () => {
    popupContainer.classList.add("active");
}

closePopupButton.onclick = () => {
    popupContainer.classList.remove("active");
}

function togglePopup(){
    document.getElementById("help-popup").classList.toggle("active");
}
