// Напиши скрипт, який реагує на зміну значення
// input#font - size - control
//     (подія input) і змінює інлайн - стиль span#text, оновлюючи
//     властивість font - size.В результаті, перетягуючи повзунок,
//     буде змінюватися розмір тексту.

const sizeContolRef = document.querySelector('#font-size-control');
const textRef = document.querySelector('#text');

sizeContolRef.addEventListener('input', changeFontSize);
function changeFontSize(event) {
  textRef.style.fontSize = sizeContolRef.value + 'px';
  //   console.log(sizeContolRef.value);
}
