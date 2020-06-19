export const toCurrency = (number) => {
  return `$${(number / 100).toFixed(2)}`;
};
