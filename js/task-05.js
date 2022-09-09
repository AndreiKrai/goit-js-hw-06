// Напиши скрипт, який під час набору тексту в інпуті
// input#name - input(подія input), підставляє його поточне
// значення в span#name - output.Якщо інпут порожній, у
// спані повинен відображатися рядок "Anonymous".
const inputRef = document.querySelector('#name-input');
const outpurRef = document.querySelector('#name-output');
inputRef.addEventListener('input', onInputEvent);
function onInputEvent(event) {
  outpurRef.textContent = event.target.value;
  if (outpurRef.textContent.length === 0) {
    outpurRef.textContent = 'Anonymous';
  }
}
