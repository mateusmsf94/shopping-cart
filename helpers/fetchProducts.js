const fetchProducts = async (term) => {
  try {
    if (!term) throw new Error('You must provide an url');
    const res = await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${term}`);
    const data = await res.json();
    return data;
  } catch (error) {
    return error.message;
  }
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
