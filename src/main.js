import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
//引入全局css
import './assets/global.css'

import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:8088/api/private/v1/'
Vue.prototype.$http = axios

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
