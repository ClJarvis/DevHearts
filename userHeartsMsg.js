const input = document.querySelector('input');
const enteredInput = document.getElementById('heart');

input.addEventListener('input', userMessage);

function userMessage(e) {
  enteredInput.textContent = e.target.value;
}
