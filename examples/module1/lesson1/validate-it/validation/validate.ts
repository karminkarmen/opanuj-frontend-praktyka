const isInteger = (inputValue: number) => Number.isInteger(inputValue);
const isEven = (inputValue: number) => inputValue % 2 === 0;
const getIfIsGreaterThan = (min: number) => (inputValue: number) =>  inputValue > min;
const getIfIsLowerThan = (max: number) => (inputValue: number) => inputValue < max;

export const validate = (inputValue: number): boolean => {
  if (!inputValue) {
    return false;
  }
  const isGreaterThan = getIfIsGreaterThan(0);
  const isLowerThan = getIfIsLowerThan(100);

  return [isInteger, isEven, isGreaterThan, isLowerThan].every(validator => validator(inputValue));
}