const btnEdit = document.querySelector('.profile__button-edit');
const overlay = document.querySelector('.popup');
const form = document.querySelector('.form');
const nameInput = form.querySelector('.form__input_name');
const jobInput = document.querySelector('.form__input_description');
const btnClose = document.querySelector('.form__button-close');
const pname = document.querySelector('.profile__name');
const description = document.querySelector('.profile__description');

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
