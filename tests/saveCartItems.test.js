const localStorageSimulator = require('../mocks/localStorageSimulator');
const saveCartItems = require('../helpers/saveCartItems');

localStorageSimulator('setItem');

describe('3 - Teste a função saveCartItems', () => {
  test('se o metodo setItem eh chamado', async() => {
    expect.assertions(1)
    await saveCartItems()
    expect(localStorage.setItem).toBeCalled()
  })

  test('se o metodo setItem eh chamado com parametros', async() => {
    expect.assertions(1)
    await saveCartItems('MLB2772861416')
    expect(localStorage.setItem).toBeCalledWith('cartItem', 'MLB2772861416')
  })
});
