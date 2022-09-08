const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

const ingredientsRef = document.querySelector('#ingredients');

const list = ingredients.map(ingredient => {
  const listItem = document.createElement('li');
  listItem.classList.add('item');
  listItem.textContent = ingredient;
  return listItem;
});
ingredientsRef.append(...list);
console.log(list);
