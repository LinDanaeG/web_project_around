// popup edit profile

let editButton = document.querySelector(".profile__edit-button");
let popupElement = document.querySelector(".popup");
let closeEditButton = document.querySelector(".popup__close-button");

function openPopup() {
  popupElement.classList.add("popup_opened");
}

editButton.addEventListener("click", openPopup);

function closePopup() {
  popupElement.classList.remove("popup_opened");
}

closeEditButton.addEventListener("click", closePopup);

let formElement = document.querySelector(".popup__form");
let nameInput = document.querySelector(".popup__name");
let jobInput = document.querySelector("popup__about");
let profileName = document.querySelector(".profile__name");
let profileAbout = document.querySelector(".profile__about");

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  openPopup();
  nameInput.value = profileName.textContent;
  jobInput.value = profileAbout.textContent;
}

// add button

let addButton = document.querySelector(".profile__add-button");
let newPlacePopup = document.querySelector("#new-image-popup");
let createButton = document.querySelector("#popup-create-btn");

function openImagePopup() {
  newPlacePopup.classList.add("popup__opened");
}
addButton.addEventListener("click", openImagePopup);

// anadir places
let elementSection = document.querySelector(".elements");

function addPlace() {
  elementSection.innerAdjacentHTML =
    ("beforeend",
    `<div class="element">
  <img class="element__image" alt="image" />
  <div class="element__info">
    <h3 class="element__info-name"></h3>
    <button class="card__delete-btn"></button>
    <button class="card__like-btn"></button>
  </div>
</div>`);
}

addPlace.addEventListener("click", createButton);
