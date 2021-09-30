import { api } from 'boot/axios'

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
export function submitShoppingCart ({ commit, state }) {
  const shoppingCart = {
    products: state.shoppingCart.products,
    sessionID: state.sessionID,
    status: 2
  }

  api.post('/carrinhos', shoppingCart)
    .then(response => {
      commit('cleanShoppingCart')
    })
}
