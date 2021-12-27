const btnEdit = document.querySelector('.profile__button-edit');
const overlay = document.querySelector('.popup');
const form = document.querySelector('.form');
const nameInput = form.querySelector('.form__input_name');
const jobInput = document.querySelector('.form__input_description');
const btnClose = document.querySelector('.form__button-close');
const pname = document.querySelector('.profile__name');
const description = document.querySelector('.profile__description');
const elementsContainer = document.querySelector('.elements');

const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

function addElement(name, link) {
  const elementTemplate = document.querySelector('#element-template').content;
  const element = elementTemplate.querySelector('.element').cloneNode(true);

  element.querySelector('.element__image').setAttribute('src',link);
  element.querySelector('.element__image').setAttribute('alt',name);
  element.querySelector('.element__title').textContent = name;
  elementsContainer.prepend(element);
}

function openDialog() {
  overlay.classList.add('popup_active');
  form.classList.add('form_active');
  nameInput.value = pname.textContent;
  jobInput.value = description.textContent;
}

function closeDialog() {
  overlay.classList.remove('popup_active');
  form.classList.remove('form_active');
}

btnEdit.addEventListener('click', openDialog);
btnClose.addEventListener('click', closeDialog);

// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function formSubmitHandler (evt) {
	evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
	// Получите значение полей из свойства value
  nameValue = nameInput.value;
  jobValue = jobInput.value;
	// Выберите элементы, куда должны быть вставлены значения полей

	// Вставьте новые значения с помощью textContent
  pname.textContent = nameValue;
  description.textContent = jobValue;
  closeDialog();
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
form.addEventListener('submit', formSubmitHandler);

for (let i = 0; i < initialCards.length; i++) {
  addElement(initialCards[i].name, initialCards[i].link);
}
