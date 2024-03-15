let editButton = document.querySelector(".profile__edit-button");
let popupElement = document.querySelector(".popup");
let closeEditButton = document.querySelector(".popup__close-button");
let saveEditButton = document.querySelector(".popup__save-button");

let formElement = document.querySelector(".popup__form");
let nameInput = document.querySelector(".popup__name");
let jobInput = document.querySelector(".popup__about");
let profileName = document.querySelector(".profile__name");
let profileAbout = document.querySelector(".profile__about");

let addButton = document.querySelector(".profile__add-button");
let newPlacePopup = document.getElementById("new-image-popup");
let createButton = document.getElementById("popup-create-btn");

// popup edit profile

function openPopup() {
  popupElement.classList.add("popup_opened");
  nameInput.value = profileName.textContent;
  jobInput.value = profileAbout.textContent;
}

editButton.addEventListener("click", openPopup);

function closePopup() {
  popupElement.classList.remove("popup_opened");
}

closeEditButton.addEventListener("click", closePopup);

function handleProfileFormSubmit(event) {
  event.preventDefault();
  profileName.textContent = nameInput.value;
  profileAbout.textContent = jobInput.value;
}

function changeProfileInfo(event) {
  event.preventDefault();
  nameInput.value = profileName.textContent;
  jobInput.value = profileAbout.textContent;
  closePopup();
}

saveEditButton.addEventListener("click", changeProfileInfo);

// add button

function openNewPlacePopup() {
  newPlacePopup.classList.add("popup_opened");
}
addButton.addEventListener("click", openNewPlacePopup);
