import axios from 'axios';

export { getAllProducs, getCategoriesProducs, getDiscountProducs,
  getPopularProducs, getProductById, createNewOrder, sendSubscription };

async function getAllProducs() {
  const response = await axios.get(
    'https://food-boutique.b.goit.study/api/products',
  );
  return response.data;
}

async function getPopularProducs() {
  const response = await axios.get(
    'https://food-boutique.b.goit.study/api/products/popular',
  );
  return response.data;
}

async function getDiscountProducs() {
  const response = await axios.get(
    'https://food-boutique.b.goit.study/api/products/discount',
  );
  return response.data;
}

async function getCategoriesProducs() {
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