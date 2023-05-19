const form = document.getElementById('cadastroForm');
        const firstNameInput = document.getElementById('firstName');
        const lastNameInput = document.getElementById('lastName');
        const emailInput = document.getElementById('email');
        const passwordInput = document.getElementById('password');
        const confirmPasswordInput = document.getElementById('confirmPassword');
      
        form.addEventListener('submit', function (event) {
          event.preventDefault();
          validateForm();
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
      
        const darkModeToggle = document.getElementById('darkModeToggle');
        let isDarkMode = false;
      
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
            setInvalid(firstNameInput, 'O primeiro nome deve ter no mínimo 5 caracteres.');
          } else {
            setValid(firstNameInput);
          }
        }
      
        function validateLastName() {
          const value = lastNameInput.value.trim();
          if (value.length < 5) {
            setInvalid(lastNameInput, 'O segundo nome deve ter no mínimo 5 caracteres.');
          } else {
            setValid(lastNameInput);
          }
        }
      
        function validateEmail() {
          const value = emailInput.value.trim();
          if (value.length < 5 || !value.includes('@')) {
            setInvalid(emailInput, 'Por favor, insira um email válido.');
          } else {
            setValid(emailInput);
          }
        }
      
        function validatePassword() {
          const value = passwordInput.value;
          if (value.length < 6 || value.length > 8) {
            setInvalid(passwordInput, 'A senha deve ter entre 6 e 8 caracteres.');
          } else {
            setValid(passwordInput);
          }
        }
      
        function validateConfirmPassword() {
          const passwordValue = passwordInput.value;
          const confirmPasswordValue = confirmPasswordInput.value;
          if (passwordValue !== confirmPasswordValue) {
            setInvalid(confirmPasswordInput, 'A confirmação de senha não coincide com a senha digitada.');
          } else {
            setValid(confirmPasswordInput);
          }
        }
      
        function setInvalid(input, message) {
          input.classList.add('invalid');
          input.classList.remove('valid');
          input.setCustomValidity(message);
        }
      
        function setValid(input) {
          input.classList.add('valid');
          input.classList.remove('invalid');
          input.setCustomValidity('');
        }
      
        function toggleDarkMode() {
            const body = document.body;
            const formContainer = document.querySelector('.form-container');
            const darkModeToggle = document.getElementById('darkModeToggle');
          
            isDarkMode = !isDarkMode;
          
            if (isDarkMode) {
              body.classList.add('dark-mode');
              formContainer.classList.add('dark-mode');
              darkModeToggle.textContent = 'Desativar Dark Mode';
            } else {
              body.classList.remove('dark-mode');
              formContainer.classList.remove('dark-mode');
              darkModeToggle.textContent = 'Ativar Dark Mode';
            }
          }
          