import axios from 'axios';

export { getAllProducts, getCategoriesProducts, getDiscountProducts,
  getPopularProducts, getProductById, createNewOrder, sendSubscription };

async function getAllProducts() {
  const response = await axios.get(
    'https://food-boutique.b.goit.study/api/products',
  );
  return response.data;
}

async function getPopularProducts() {
  const response = await axios.get(
    'https://food-boutique.b.goit.study/api/products/popular',
  );
  return response.data;
}

async function getDiscountProducts() {
  const response = await axios.get(
    'https://food-boutique.b.goit.study/api/products/discount',
  );
  return response.data;
}

async function getCategoriesProducts() {
  const response = await axios.get(
    'https://food-boutique.b.goit.study/api/products/categories',
  );
  return response.data;
}

async function getProductById(id) {
  const response = await axios.get(
    `https://food-boutique.b.goit.study/api/products/${id}`,
  );
  return response.data;
}

async function createNewOrder(email, productList) {

  try {
    const apiUrl = 'https://food-boutique.b.goit.study/api/orders';
    const requestBody = {
      email: email,
      products: productList,
    };
    const response = await axios.post(apiUrl, requestBody);
      return response.data;

  } catch (e) {
    console.log("Something went wrong:" + " " + e)
    throw e;
  }
}

async function sendSubscription(email){

  try {

  const apiUrl = 'https://food-boutique.b.goit.study/api/subscription'
  const requestBody = { email: email }

  const response = await axios.post(apiUrl, requestBody)
  return response.data
  } catch(e) {
    console.log("Something went wrong:" + " " + e)
    throw e;
  }

}