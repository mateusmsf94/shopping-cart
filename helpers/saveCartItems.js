const saveCartItems = async (cartItem) => {
  localStorage.setItem('cartItems', cartItem);
};

if (typeof module !== 'undefined') {
  module.exports = saveCartItems;
}
