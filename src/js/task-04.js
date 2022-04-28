
const counter = document.querySelector('#counter');
const counterValue = document.querySelector('#value');
const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');


const calk = {
  value: 0,
  increment() {
    this.value -= 1;
  },
  dicrement() {
    this.value += 1;
  }
}

decrementBtn.addEventListener('click', function () {
  calk.increment();
  counterValue.textContent = calk.value;
})

incrementBtn.addEventListener('click', function () {
  calk.dicrement();
  counterValue.textContent = calk.value;
})

