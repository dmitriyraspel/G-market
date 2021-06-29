import { createStore } from 'vuex'

import ticker from './ticker'
import catalog from './catalog'

export default createStore({
  modules: {
    ticker,
    catalog
  }
})
