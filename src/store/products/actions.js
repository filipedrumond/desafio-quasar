import { api } from 'boot/axios'
/**
 *
 * @todo verificar se já existe na store antes de fazer a request denovo
 */
export function getProducts ({ commit }) {
  api.get('/produtos')
    .then(response => {
      commit('setProducts', response.data)
    })
}

/**
 *
 * @todo verificar se já existe na store antes de fazer a request denovo
 * @todo usar da store fazer um filter
 */
export function getOneProduct ({ commit, state }, productId) {
  api.get('/produtos/' + productId)
    .then(response => {
      commit('setCurrentProduct', response.data)
    })
}
