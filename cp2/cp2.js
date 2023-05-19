const form = document.getElementById('cadastroForm');
const firstNameInput = document.getElementById('firstName');
const lastNameInput = document.getElementById('lastName');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirmPassword');
const darkModeToggle = document.getElementById('darkModeToggle');
let isDarkMode = false;

form.addEventListener('submit', function (event) {
  event.preventDefault();
  validateForm();
  showConfirmation();
});

firstNameInput.addEventListener('input', function () {
  validateFirstName();
});

lastNameInput.addEventListener('input', function () {
  validateLastName();
});

emailInput.addEventListener('input', function () {
  validateEmail();
});

passwordInput.addEventListener('input', function () {
  validatePassword();
});

confirmPasswordInput.addEventListener('input', function () {
  validateConfirmPassword();
});

darkModeToggle.addEventListener('click', function () {
  toggleDarkMode();
});

function validateForm() {
  validateFirstName();
  validateLastName();
  validateEmail();
  validatePassword();
  validateConfirmPassword();
}

function validateFirstName() {
  const value = firstNameInput.value.trim();
  if (value.length < 5) {
    setInvalid(firstNameInput);
  } else {
    setValid(firstNameInput);
  }
}

function validateLastName() {
  const value = lastNameInput.value.trim();
  if (value.length < 5) {
    setInvalid(lastNameInput);
  } else {
    setValid(lastNameInput);
  }
}

function validateEmail() {
  const value = emailInput.value.trim();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(value)) {
    setInvalid(emailInput);
  } else {
    setValid(emailInput);
  }
}

function validatePassword() {
  const value = passwordInput.value;
  if (value.length < 6 || value.length > 8) {
    setInvalid(passwordInput);
  } else {
    setValid(passwordInput);
  }
}

function validateConfirmPassword() {
  const passwordValue = passwordInput.value;
  const confirmPasswordValue = confirmPasswordInput.value;
  if (passwordValue !== confirmPasswordValue) {
    setInvalid(confirmPasswordInput);
  } else {
    setValid(confirmPasswordInput);
  }
}

function setInvalid(input) {
  input.classList.add('invalid');
  input.classList.remove('valid');
}

function setValid(input) {
  input.classList.add('valid');
  input.classList.remove('invalid');
}

function showConfirmation() {
  const confirmationMessage = document.createElement('p');
  confirmationMessage.textContent = 'Formulário enviado com sucesso!';
  confirmationMessage.classList.add('confirmation-message');
  form.appendChild(confirmationMessage);
}

function toggleDarkMode() {
  const body = document.body;
  const formContainer = document.querySelector('.form-container');

  isDarkMode = !isDarkMode;

  if (isDarkMode) {
    body.classList.add('dark-mode');
    formContainer.classList.add('dark-mode');
    darkModeToggle.textContent = 'Ativar Light Mode';
  } else {
    body.classList.remove('dark-mode');
    formContainer.classList.remove('dark-mode');
    darkModeToggle.textContent = 'Ativar Dark Mode';
  }
}
