export function someAction ({ state, commit, rootState }) {
  if ((state.couter + rootState.couter) % 2 === 1) {
    commit('increment')
  }
}
