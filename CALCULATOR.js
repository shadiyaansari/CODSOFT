const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn');
const clear = document.getElementById('clear');
const equals = document.getElementById('equals');

let currentInput = '';
let operatorSet = false;

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const value = button.getAttribute('data-value');

    if (value) {
      if (display.innerText === '0' || operatorSet) {
        display.innerText = value;
        operatorSet = false;
      } else {
        display.innerText += value;
      }
      currentInput += value;
    }
  });
});

clear.addEventListener('click', () => {
  currentInput = '';
  display.innerText = '0';
});

equals.addEventListener('click', () => {
  try {
    const result = eval(currentInput);
    display.innerText = result;
    currentInput = result.toString();
  } catch {
    display.innerText = 'Error';
    currentInput = '';
  }
  operatorSet = true;
});
