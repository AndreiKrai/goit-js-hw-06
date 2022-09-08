let counterValue = 0;
const valueCounter = document.querySelector('#value');
const decrement = document.querySelector('[data-action="decrement"]');
decrement.addEventListener('click', () => {
  counterValue -= 1;
  valueCounter.textContent = counterValue;
});
const increment = document.querySelector('[data-action="increment"]');
increment.addEventListener('click', () => {
  counterValue += 1;
  valueCounter.textContent = counterValue;
});
