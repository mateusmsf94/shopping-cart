// Esse tipo de comentário que estão antes de todas as funções são chamados de JSdoc,
// experimente passar o mouse sobre o nome das funções e verá que elas possuem descrições! 

// Fique a vontade para modificar o código já escrito e criar suas próprias funções!
const items = document.querySelector('.items');
const cart = document.querySelector('.cart__items');
const subtotal = document.querySelector('.total-price');
let lista = getSavedCartItems() || [];
const resetCartBtn = document.querySelector('.empty-cart');
/**
 * Função responsável por criar e retornar o elemento de imagem do produto.
 * @param {string} imageSource - URL da imagem.
 * @returns {Element} Elemento de imagem do produto.
 */
const createProductImageElement = (imageSource) => {
  const img = document.createElement('img');
  img.className = 'item__image';
  img.src = imageSource;
  return img;
};

/**
 * Função responsável por criar e retornar qualquer elemento.
 * @param {string} element - Nome do elemento a ser criado.
 * @param {string} className - Classe do elemento.
 * @param {string} innerText - Texto do elemento.
 * @returns {Element} Elemento criado.
 */
const createCustomElement = (element, className, innerText) => {
  const e = document.createElement(element);
  e.className = className;
  e.innerText = innerText;
  return e;
};

const subtotalCal = () => {
  const total = lista.reduce((acc, curr) => acc + curr.price, 0).toFixed(2);
  
  subtotal.innerText = `Subtotal: R$${total}`;
};

const cartItemClickListener = (e) => {
  const i = lista.indexOf(e.target);
  lista.splice(i, 1);
  saveCartItems(lista);
  e.target.remove();
  subtotalCal();
};
 
/**
 * Função responsável por criar e retornar um item do carrinho.
 * @param {Object} product - Objeto do produto.
 * @param {string} product.id - ID do produto.
 * @param {string} product.title - Título do produto.
 * @param {string} product.price - Preço do produto.
 * @returns {Element} Elemento de um item do carrinho.
 */
const createCartItemElement = ({ id, title, price }) => {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `ID: ${id} | TITLE: ${title} | PRICE: $${price}`;
  li.addEventListener('click', cartItemClickListener);
  return li;
};

const addToCart = async (item) => {
  const id = item.target.parentNode.firstChild.innerText;
  const itemCart = await fetchItem(id);
  cart.appendChild(createCartItemElement(itemCart));
  lista.push(itemCart);
  saveCartItems(lista);
  subtotalCal();
};

/**
 * Função responsável por criar e retornar o elemento do produto.
 * @param {Object} product - Objeto do produto. 
 * @param {string} product.id - ID do produto.
 * @param {string} product.title - Título do produto.
 * @param {string} product.thumbnail - URL da imagem do produto.
 * @returns {Element} Elemento de produto.
 */
const createProductItemElement = ({ id, title, thumbnail }) => {
  const section = document.createElement('section');
  section.className = 'item';

  section.appendChild(createCustomElement('span', 'item_id', id));
  section.appendChild(createCustomElement('span', 'item__title', title));
  section.appendChild(createProductImageElement(thumbnail));
  section.appendChild(createCustomElement('button', 'item__add', 'Adicionar ao carrinho!'))
                      .addEventListener('click', addToCart);

  return section;
};

/**
 * Função que recupera o ID do produto passado como parâmetro.
 * @param {Element} product - Elemento do produto.
 * @returns {string} ID do produto.
 */
// const getIdFromProductItem = (product) => product.querySelector('span.id').innerText;

const render = async () => {
  const data = await fetchProducts('computador');
  data.results.forEach((product) => {
    const prod = createProductItemElement(product);
    items.appendChild(prod);
  });
};

render();

resetCartBtn.addEventListener('click', () => {
  cart.innerHTML = '';
  lista = [];
  saveCartItems(lista);
  subtotalCal();
});

const cartLoad = () => {
  lista.forEach((el) => cart.appendChild(createCartItemElement(el)));
  subtotalCal();
};

window.onload = () => {
  cartLoad(); 
};
