import { api } from 'boot/axios'

export function getProducts ({ commit }) {
  console.log('cai na acao')
  api.get('/produtos')
    .then(response => {
      commit('setProducts', response.data)
    })
}
