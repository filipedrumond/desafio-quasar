export function increment (state) {
  return state.counter++
}
export function decrement (state) {
  return state.counter--
}
export function setProducts (state, products) {
  state.products = products
  return state.products
}
export function setCurrentProduct (state, currentProduct) {
  state.currentProduct = currentProduct
  return state.currentProduct
}
export function setProductsCart (state, listOfProduct) {
  state.productsCart = listOfProduct
  return state.productsCart
}
