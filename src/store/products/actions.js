import { api } from 'boot/axios'
/**
 *
 * @todo verificar se já existe na store antes de fazer a request denovo
 */
export function getProducts ({ commit }) {
  // console.log('cai na acao')
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
export function getOneProduct ({ commit }, productId) {
  // console.log('cai na acao')
  // console.log(productId)
  api.get('/produtos/' + productId)
    .then(response => {
      commit('setCurrentProduct', response.data)
    })
}

// Será se vou conseguir??
// sim
// export function getProductsFromList ({ commit, state }, productIdList) {
//   const temp = state.products.filter(i => {
//     if (Array.prototype.indexOf(productIdList.products, i.id) !== -1) return true
//     return false
//   })
//   console.log(productIdList.products)
//   console.log(state.products)
//   console.log(temp)
//   commit('setProductsCart', temp)
// }
