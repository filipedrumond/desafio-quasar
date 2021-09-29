import { api } from 'boot/axios'

export function getProducts ({ commit }) {
  // console.log('cai na acao')
  api.get('/produtos')
    .then(response => {
      commit('setProducts', response.data)
    })
}

export function getProduct ({ commit }, productId) {
  // console.log('cai na acao')
  // console.log(productId)
  api.get('/produtos/' + productId)
    .then(response => {
      commit('setCurrentProduct', response.data)
    })
}
