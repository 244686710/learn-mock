import Vue from 'vue'
import App from './App.vue'
debugger
if (process.env.NODE_ENV === 'mock') {
  require('../mock')
}
Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
