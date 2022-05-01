const refs = {
  body: document.querySelector('body'),
  btnChangeColor: document.querySelector('.change-color'),
  textChangeColor: document.querySelector('.color')
  }
  
  refs.btnChangeColor.addEventListener('click', getNewColor);
  
  function getNewColor(event) {
    event.currentTarget.value = color;
    function color(fnColor) {
      refs.body.style.backgroundColor = fnColor();
      refs.textChangeColor.textContent = fnColor();
    }
    color(getRandomHexColor);
  } 

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
