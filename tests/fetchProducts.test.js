require('../mocks/fetchSimulator');
const { fetchProducts } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');

describe('1 - Teste a função fetchProducts', () => {
  test('Testa se fetchProducts eh uma funcao', () => {
    expect(typeof fetchProducts).toBe('function')
  })

  test('Testa se fetchProducts com argumento computador chama fetch', async () => {
    expect.assertions(1);
    await fetchProducts('computador')
    expect(fetch).toBeCalled()
  })

  test(`Testa se fetchProducts com argumento computador chama fetch com endpoint
   'https://api.mercadolibre.com/sites/MLB/search?q=computador'`, async () => {
    expect.assertions(1);
    await fetchProducts('computador')
    expect(fetch).toBeCalledWith('https://api.mercadolibre.com/sites/MLB/search?q=computador')
  })

  test('Testa se fetchProducts com argumento computador retorna lista de produtos', async () => {
    expect.assertions(1);
    const lista = await fetchProducts('computador')
    expect(lista).toEqual(computadorSearch)
  })

  test('Testa se fetchProducts sem argumento retorna erro', async () => {
    expect.assertions(1);
    const lista = await fetchProducts()
    expect(lista).toBe('You must provide an url')
  })  
});
