const localStorageSimulator = require('../mocks/localStorageSimulator');
const getSavedCartItems = require('../helpers/getSavedCartItems');

localStorageSimulator('getItem');

describe('4 - Teste a função getSavedCartItems', () => {
  test('se o metodo getItem eh chamado', async() => {
    expect.assertions(1)
    await getSavedCartItems()
    expect(localStorage.getItem).toBeCalled()
  })

  test('se o metodo getItem eh chamado', async() => {
    expect.assertions(1)
    await getSavedCartItems('cartItems')
    expect(localStorage.getItem).toBeCalledWith('cartItems')
  })  
});
