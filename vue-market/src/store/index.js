import { createStore } from 'vuex'

import ticker from './ticker'
import catalog from './catalog'
import cart from './cart'

export default createStore({
  modules: {
    ticker,
    catalog,
    cart
  }
})
