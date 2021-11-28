const btnEdit = document.querySelector('.button_edit');
const overlay = document.querySelector('.page__overlay');
const form = document.querySelector('.form');
const nameInput = document.querySelector('.input__name');
const jobInput = document.querySelector('.input__description');
const btnClose = document.querySelector('.button_close');
const pname = document.querySelector('.profile__name');
const description = document.querySelector('.profile__description');

function openDialog() {
  overlay.classList.add('page__overlay_active');
  form.classList.add('form_active');
}

function closeDialog() {
  overlay.classList.remove('page__overlay_active');
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
  console.log(nameValue);
  console.log(jobValue);
	// Выберите элементы, куда должны быть вставлены значения полей

	// Вставьте новые значения с помощью textContent
  pname.textContent = nameValue;
  description.textContent = jobValue;
  console.log(pname.textContent);
  console.log(description.textContent);
  closeDialog();
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
form.addEventListener('submit', formSubmitHandler);
