const fetchItem = async (id) => {
  try {
    if (!id) throw new Error('You must provide an url');
    const res = await fetch(`https://api.mercadolibre.com/items/${id}`);
    const data = await res.json();
    return data;
  } catch (error) {
    return error;
  }
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
  };
}
