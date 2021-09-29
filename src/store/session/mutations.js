export function setSessionID (state, sessionID) {
  state.sessionID = sessionID
  return state.sessionID
}
export function setShoppingCart (state, shoppingCart) {
  state.shoppingCart = shoppingCart
  return state.shoppingCart
}
export function addToShoppingCart (state, productId) {
  state.shoppingCart.products.push(productId)
  return state.shoppingCart
}
