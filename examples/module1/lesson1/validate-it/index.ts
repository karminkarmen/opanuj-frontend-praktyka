import { VALIDATION_MESSAGES, validate } from "./validator";

function app() {
  const input: HTMLInputElement | null = document.querySelector('#input_to_validate');

  const validateBtn: HTMLElement | null = document.getElementById('validate_button');
  const resetValidationBtn: HTMLElement | null = document.getElementById('reset_validation_button');
  const result: HTMLElement | null = document.getElementById('validation_result');

  const allFormElementsExists = input && validateBtn && resetValidationBtn && result;

  if (allFormElementsExists) {
    validateBtn.addEventListener('click', () => {
      const isValidInput = validate(Number(input.value));
      result.innerHTML = isValidInput ? VALIDATION_MESSAGES.VALID : VALIDATION_MESSAGES.INVALID;
    });
  
    resetValidationBtn.addEventListener('click', () => {
      input.value = '';
      result.innerHTML = '';
    });
  }
}

app();
