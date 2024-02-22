const VALIDATION_MESSAGES = {
  VALID: 'Valid',
  INVALID: 'Invalid'
}

function validateInput (inputValue) {
  const isInteger = Number.isInteger(inputValue);
  const isEven = inputValue % 2 === 0;
  const getIfIsGreaterThan = min => inputValue > min;
  const getIfIsLowerThan = max => inputValue < max;

  return { isInteger, isEven, getIfIsHigherThan, getIfIsLowerThan };
}

function validator() {
  const input = document.getElementById('input');
  const validateBtn = document.getElementById('validate_button');
  const resetValidationBtn = document.getElementById('reset_validation_button');
  const result = document.getElementById('validation_result');

  validateBtn.addEventListener('click', () => {
    if (!input.value) {
      result.innerHTML = VALIDATION_MESSAGES.INVALID;
      return;
    };

    const { isInteger, isEven, getIfIsGreaterThan, getIfIsLowerThan } = validateInput(Number(input.value));
    result.innerHTML = isInteger && isEven && getIfIsGreaterThan(0) && getIfIsLowerThan(100) ? VALIDATION_MESSAGES.VALID : VALIDATION_MESSAGES.INVALID;
  });

  resetValidationBtn.addEventListener('click', () => {
    input.value = '';
    result.innerHTML = '';
  });
}

validator();
