// Altere somente este valor quando quiser trocar a senha da carta.
const SENHA_DA_CARTA = '10/09/2026';

const form = document.querySelector('#password-form');
const passwordInput = document.querySelector('#password');
const accessScreen = document.querySelector('#access-screen');
const letter = document.querySelector('#letter');
const errorMessage = document.querySelector('#error-message');

// Mantém o formato visual da data como DD/MM/AAAA.
passwordInput.addEventListener('input', (event) => {
  const numbersOnly = event.target.value.replace(/\D/g, '').slice(0, 8);
  const parts = [];

  if (numbersOnly.length > 0) parts.push(numbersOnly.slice(0, 2));
  if (numbersOnly.length > 2) parts.push(numbersOnly.slice(2, 4));
  if (numbersOnly.length > 4) parts.push(numbersOnly.slice(4, 8));

  event.target.value = parts.join('/');
  errorMessage.textContent = '';
});

form.addEventListener('submit', (event) => {
  event.preventDefault();

  if (passwordInput.value === SENHA_DA_CARTA) {
    accessScreen.hidden = true;
    letter.hidden = false;
    letter.scrollIntoView({ behavior: 'smooth', block: 'center' });
  } else {
    errorMessage.textContent = 'Hmm... acho que essa não é a senha 💗';
    passwordInput.focus();
    passwordInput.select();
  }
});
