const input = document.querySelector('#name-input');
const output = document.querySelector('#name-output');

const onInput = () => {
	const DEFAULT_NAME = 'Anonymous';
	const { value } = input;

	value
		? (output.textContent = value)
		: (output.textContent = DEFAULT_NAME);
};

input.addEventListener('input', onInput);