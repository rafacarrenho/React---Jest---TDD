export const filter = (arr = [], func = (item) => item) => {
  return arr.filter(func);
};
