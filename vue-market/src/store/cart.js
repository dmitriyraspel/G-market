const state = () => ({
  cartPopUpVisible: false,
  itemsInCart: []
})

const mutations = {
  TOGGLE_POPUP( state ) {
    state.cartPopUpVisible = !state.cartPopUpVisible
  }
}

const actions = {
  toggle_popup({ commit }) {
    commit('TOGGLE_POPUP')
  }
}

const getters = {
  cartPopUpVisible: ({ cartPopUpVisible }) => cartPopUpVisible,
  itemsInCart: ({ itemsInCart }) => itemsInCart
}

export default {
  state,
  mutations,
  actions,
  getters
}