export function increment (state) {
  return state.counter++
}
export function decrement (state) {
  return state.counter--
}
export function setProducts (state, products) {
  state.products = products
  return state.products
}
