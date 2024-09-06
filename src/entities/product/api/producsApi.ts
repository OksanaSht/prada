export const productsApi = {
  getProducts() {
    return fetch("https://dummyjson.com/products").then((res) => res.json());
  },
};
