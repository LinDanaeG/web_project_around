let editButton = document.querySelector(".profile__edit-button");
let popupElement = document.querySelector(".popup");
let closeEditButtons = document.querySelectorAll(".popup__close-button");
let saveEditButton = document.querySelector(".popup__save-button");
let popupContainer = document.querySelector(".poup__container");

let formElement = document.querySelector(".popup__form");
let nameInput = document.querySelector(".popup__name");
let jobInput = document.querySelector(".popup__about");
let profileName = document.querySelector(".profile__name");
let profileAbout = document.querySelector(".profile__about");

let addButton = document.querySelector(".profile__add-button");
let newPlacePopup = document.getElementById("new-image-popup");
let createButton = document.getElementById("popup-create-btn");
const newPlaceForm = newPlacePopup.querySelector(".popup__form");
const newPlaceNameInput = newPlacePopup.querySelector(".popup__name");
const newPlaceLinkInput = newPlacePopup.querySelector(".popup__link");

const elementsArea = document.querySelector(".elements");

const imagePopup = document.getElementById("image-popup");

const formInputs = Array.from(document.querySelectorAll("#inputs-form"));

const initialCards = [
  {
    name: "Valle de Yosemite",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/yosemite.jpg",
  },
  {
    name: "Lago Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lake-louise.jpg",
  },
  {
    name: "Montañas Calvas",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/latemar.jpg",
  },
  {
    name: "Parque Nacional de la Vanoise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lago.jpg",
  },
];

function handleEsc(event) {
  if (event.key === "Escape") {
    closePopup();
  }
}

// popup edit profile

function openPopup() {
  popupElement.classList.add("popup_opened");
  nameInput.value = profileName.textContent;
  jobInput.value = profileAbout.textContent;
  document.addEventListener("keydown", handleEsc);
}

editButton.addEventListener("click", openPopup);

function closePopup() {
  popupElement.classList.remove("popup_opened");
  newPlacePopup.classList.remove("popup_opened");
  imagePopup.classList.remove("popup_opened");
  document.removeEventListener("keydown", handleEsc);
}

Array.from(closeEditButtons).forEach((item) => {
  item.addEventListener("click", closePopup);
});

function handleProfileFormSubmit(event) {
  event.preventDefault();
  profileName.textContent = nameInput.value;
  profileAbout.textContent = jobInput.value;
}

function changeProfileInfo(event) {
  event.preventDefault();
  profileName.textContent = nameInput.value;
  profileAbout.textContent = jobInput.value;
  closePopup();
}

popupElement.addEventListener("submit", changeProfileInfo);

// add button

function openNewPlacePopup() {
  newPlacePopup.classList.add("popup_opened");
  document.addEventListener("keydown", handleEsc);
}
addButton.addEventListener("click", openNewPlacePopup);

function addCard(event) {
  event.preventDefault();

  const cardNode = createCard(newPlaceNameInput.value, newPlaceLinkInput.value);
  elementsArea.prepend(cardNode);
  newPlacePopup.classList.remove("popup_opened");
}

newPlaceForm.addEventListener("submit", addCard);

// Generate new card

function createCard(name, link) {
  const template = document.querySelector(".template");
  const templateNode = template.content.querySelector(".element");
  const cardNode = templateNode.cloneNode(true);

  cardNode.querySelector(".element__image").src = link;
  cardNode.querySelector(".element__image").alt = "Imagen de : " + name;

  cardNode.querySelector(".element__info-name").textContent = name;

  cardNode
    .querySelector(".element__info-delete-btn")
    .addEventListener("click", () => {
      cardNode.remove();
    });

  const likeButton = cardNode.querySelector(".element__info-like-btn");
  likeButton.addEventListener("click", () => {
    likeButton.classList.toggle("element__infor-like-btn_active");
  });

  cardNode.querySelector(".element__image").addEventListener("click", () => {
    imagePopup.classList.add("popup_opened");
    imagePopup.querySelector(".popup__image").src = link;
    imagePopup.querySelector(".popup__image-title").textContent = name;
    document.addEventListener("keydown", handleEsc);
  });

  return cardNode;
}

initialCards.forEach((item) => {
  const cardNode = createCard(item.name, item.link);

  elementsArea.append(cardNode);
});

// Validacion de formularios
formInputs.forEach((inputElement) => {
  inputElement.addEventListener("input", (event) => {
    let errorNode = popupElement.querySelector(
      `.popup__error_type_${inputElement.name}`
    );
    if (!inputElement.validity.valid) {
      errorNode.textContent = "Por favor, rellena este campo";
    } else {
      errorNode.textContent = "";
    }
  });
});
