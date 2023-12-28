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
}

function isExistInCart(id) {
  const existingData = JSON.parse(localStorage.getItem('cart'));
  const updatedData = Array(existingData).flat(Infinity);

  return updatedData.some(item => item === id);
}

export { addToStorageCart, removeFromStorageCart, isExistInCart };

// ПОТІМ ВИДАЛИТИ

// addToStorageCart('640c2dd963a319ea671e3825');
// addToStorageCart('640c2dd963a319ea671e37bf');
// addToStorageCart('640c2dd963a319ea671e3812');
// addToStorageCart('640c2dd963a319ea671e3661');
// addToStorageCart('640c2dd963a319ea671e3662');
// addToStorageCart('640c2dd963a319ea671e365f');
// addToStorageCart('640c2dd963a319ea671e3663');
