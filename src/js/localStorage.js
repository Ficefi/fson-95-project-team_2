function addToStorageCart(id) {
  const existingData = JSON.parse(localStorage.getItem('cart')) || [];
  const updatedData = Array(existingData).flat(Infinity);
  updatedData.push(id);

  if (existingData.includes(id)) {

  } else {
    localStorage.setItem('cart', JSON.stringify(updatedData));
  }
}

function removeFromStorageCart(id) {
  const existingData = JSON.parse(localStorage.getItem('cart'));
  const updatedData = Array(existingData).flat(Infinity);

  const deleteItemId = updatedData.indexOf(id);
  updatedData.splice(deleteItemId, 1);

  localStorage.setItem('cart', JSON.stringify(updatedData));

  console.log(localStorage.getItem('cart'));
}

function isExistInCart(id) {
  const existingData = JSON.parse(localStorage.getItem('cart'));
  const updatedData = Array(existingData).flat(Infinity);

  return updatedData.some(item => item === id);
}

export { addToStorageCart, removeFromStorageCart, isExistInCart };

