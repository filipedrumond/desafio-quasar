export function setSessionIdAction ({ commit }, sessionID) {
  commit('setSessionID', sessionID)
}
export function setShoppingCart ({ commit }, shoppingCart) {
  commit('setShoppingCart', shoppingCart)
}
export function addToShoppingCart ({ commit }, productId) {
  commit('addToShoppingCart', productId)
}
