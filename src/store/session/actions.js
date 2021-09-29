export function setSessionIdAction ({ commit }, sessionID) {
  commit('setSessionID', sessionID)
}
export function setShoppingCart ({ commit }, shoppingCart) {
  commit('setShoppingCart', shoppingCart)
}
export function addToShoppingCart ({ commit }, product) {
  commit('addToShoppingCart', product)
}
export function removeFromShoppingCart ({ commit, state }, productId) {
  const array = state.shoppingCart.products
  const filtered = array.filter(elem => {
    return elem.id !== productId
  })

  commit('removeFromShoppingCart', filtered)
}
