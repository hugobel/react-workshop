export const filterByName = (products, pattern) => {
  if (pattern.trim().length < 1) return [];

  return products.filter((product) => {
    return product.name.toLowerCase().includes(pattern.toLowerCase());
  });
};
