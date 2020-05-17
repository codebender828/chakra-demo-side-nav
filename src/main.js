import Vue from 'vue'
import Chakra, { CThemeProvider, CReset } from '@chakra-ui/vue'
import App from './App.vue'
import iconSet from './utils/icons'

Vue.use(Chakra, {
  icons: {
    iconPack: 'fa',
    iconSet
  }
})

Vue.config.productionTip = false

new Vue({
  el: '#app',
  render: (h) => h(CThemeProvider, [h(CReset), h(App)])
}).$mount()
