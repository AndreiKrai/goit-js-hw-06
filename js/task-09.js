// Напиши скрипт, який змінює кольори фону елемента <body> через інлайн-стиль по кліку на button.change-color і виводить значення кольору в span.color.

function getRandomHexColor() {
  console;
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const btnEl = document.querySelector('.change-color');
const body = document.querySelector('body');
const spanTextEl = document.querySelector('.color');
btnEl.addEventListener('click', onBtnClick);
function onBtnClick(event) {
  const color = getRandomHexColor();
  body.style.backgroundColor = color;
  spanTextEl.textContent = color;
}
