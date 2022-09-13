require('../mocks/fetchSimulator');
const { fetchItem } = require('../helpers/fetchItem');
const item = require('../mocks/item');

describe('2 - Teste a função fetchItem', () => {
  test('fetchItem deve ser uma funcao', () => {
    expect(typeof fetchItem).toBe('function')
  })

  test('fetchItem com o argumento do item "MLB1615760527" chama fetch', async() => {
    expect.assertions(1)
    await fetchItem('"MLB1615760527"')
    expect(fetch).toBeCalled()
  })

  test('fetchItem com o argumento do item "MLB1615760527" utiliza o endpoint "https://api.mercadolibre.com/items/MLB1615760527"', async() => {
    expect.assertions(1)
    await fetchItem("MLB1615760527")
    expect(fetch).toBeCalledWith("https://api.mercadolibre.com/items/MLB1615760527")
  })

  test('fetchItem retorna item', async() => {
    expect.assertions(1)
    const itemFetched = await fetchItem("MLB1615760527")
    expect(itemFetched).toEqual(item)
  })

  test('fetchItem sem parametro lanca erro', async () => {
    expect.assertions(1)
    const erro = await fetchItem()
    expect(erro.message).toBe('You must provide an url')
  })
});
