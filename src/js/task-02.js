const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsEl = document.querySelector('ul');

const elements = ingredients.map(option => {
  const ingredient = document.createElement('li');
  ingredient.textContent = option;
  ingredient.classList.add('item');

  return ingredient;
});

console.log(elements);

ingredientsEl.append(...elements);

