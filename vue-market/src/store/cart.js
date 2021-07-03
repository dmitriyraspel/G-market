const state = () => ({
  cartPopUpVisible: false,
  itemsInCart: []
})

const mutations = {
  TOGGLE_POPUP( state ) {
    state.cartPopUpVisible = !state.cartPopUpVisible
  },
  ADD_TO_CART(state, id) {
    state.itemsInCart.push(id)
  }
}

const actions = {
  toggle_popup({ commit }) {
    commit('TOGGLE_POPUP')
  },
  add_to_cart({ commit }, id) {
    commit('ADD_TO_CART', id)
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