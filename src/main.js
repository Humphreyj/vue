import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import trustpilot from './plugins/trustpilot'

Vue.config.productionTip = false

const app = new Vue({
  router,
  store,
  vuetify,
  trustpilot,
  render: h => h(App)
}).$mount('#app')

if (window.Cypress) {
  window.app = app
}
