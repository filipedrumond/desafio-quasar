export function setSessionID (state, sessionID) {
  state.sessionID = sessionID
  return state.sessionID
}
export function setShoppingCart (state, shoppingCart) {
  state.shoppingCart = shoppingCart
  return state.shoppingCart
}
export function addToShoppingCart (state, product) {
  state.shoppingCart.products.push(product)
  return state.shoppingCart
}
export function removeFromShoppingCart (state, products) {
  state.shoppingCart.products = products
  return state.shoppingCart
}
export function cleanShoppingCart (state) {
  state.shoppingCart.products = []
  return state.shoppingCart
}
