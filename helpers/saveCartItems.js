const saveCartItems = async (cartItem) => {
  localStorage.setItem('cartItem', cartItem);
};

if (typeof module !== 'undefined') {
  module.exports = saveCartItems;
}
