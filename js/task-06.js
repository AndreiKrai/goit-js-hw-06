// Напиши скрипт, який під час втрати фокусу на інпуті(подія blur),
//     перевіряє його вміст щодо правильної кількості введених
// символів.
// -Яка кількість смиволів повинна бути в інпуті, зазначається в
// його атрибуті data - length.
// -Якщо введена правильна кількість символів, то border інпуту
// стає зеленим, якщо неправильна кількість - червоним.
// Для додавання стилів використовуй CSS - класи valid і invalid,
//     які ми вже додали у вихідні файли завдання.

const inputRef = document.querySelector('#validation-input');
inputRef.addEventListener('input', onInputBlur);
const inputLength = inputRef.dataset.length;
console.log(inputLength);
console.log(inputRef);
function onInputBlur(event) {
  if (event.target.value.length == inputLength) {
    inputRef.classList.add('valid');
    inputRef.classList.remove('invalid');
  } else {
    inputRef.classList.add('invalid');
    inputRef.classList.remove('valid');
  }
}
