import createProduct from './products/CreateProduct';

if (document.location.pathname.startsWith('/products') === true) {
  createProduct.init()
}