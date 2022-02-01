
function submitForm(event) {
    event.preventDefault();

    console.log('form submitted')
    
}

function showError(input, errorContainer, {inputErrorClass, errorVisibleClass})  {
    input.classList.add(inputErrorClass);
    errorContainer.classList.add(errorVisibleClass);
}

function hideError(input, errorContainer, {inputErrorClass, errorVisibleClass})  {
    input.classList.remove(inputErrorClass);
    errorContainer.classList.remove(errorVisibleClass);
    errorContainer.textContent = '';
}

function toggleButton(form, {submitButtonSelector, inactiveButtonClass}) {
    const button = form.querySelector(submitButtonSelector);
    const isFormValid = form.checkValidity();
    console.log('isFormValid');

    if (isFormValid) {
        button.classList.remove(inactiveButtonClass);
        button.removeAttribute('disabled');

    } else {
        button.classList.add(inactiveButtonClass);
        button.setAttribute('disabled', '');
    }
}

const toggleButtonObject = {
    submitButtonSelector: '.popup__save',
    inactiveButtonClass: 'popup__save_disabled'
}

function validateInput(form, input, classes) {
    const errorContainer = form.querySelector(`#error-${input.id}`);
    console.log(input.validationMessage);
    
    if (input.validity.valid) {
        hideError(input, errorContainer, classes);
        errorContainer.textContent = '';

    } else {
        showError(input, errorContainer, classes);
        errorContainer.textContent = input.validationMessage;
    }

    toggleButton(form, classes);
}


function enableValidation({formSelector, inputSelector, ...rest}) {
    console.log('enable validation')
    const forms = document.querySelectorAll(formSelector);

    forms.forEach(form => {
        form.addEventListener('submit', submitForm)

        const inputs = form.querySelectorAll(inputSelector);

        inputs.forEach(input => {
            input.addEventListener('input', () => {
                validateInput(form, input, rest);
            });
        });

        toggleButton(form, rest);
    });

} 


enableValidation({
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    inputErrorClass: 'popup__input_type_error',
    errorVisibleClass: 'popup__error_visible',
    errorClass: '.popup__error',
    submitButtonSelector: '.popup__save',
    inactiveButtonClass: 'popup__save_disabled'
});