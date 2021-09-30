import { api } from 'boot/axios'
import dataAtualFormatada from '../../helpers/formatDate'

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
  const date = dataAtualFormatada()
  const shoppingCart = {
    products: state.shoppingCart.products,
    sessionID: state.sessionID,
    status: 2,
    date: date.dataFormatada,
    time: date.horaMinutos
  }
  api.post('/carrinhos', shoppingCart)
    .then(response => {
      commit('cleanShoppingCart')
    })
  commit('cleanShoppingCart')
}
export function loadOrders ({ commit, state }) {
  api.get(`/carrinhos?sessionID=${state.sessionID}`)
    .then(response => {
      commit('setOrders', response.data)
    })
}
