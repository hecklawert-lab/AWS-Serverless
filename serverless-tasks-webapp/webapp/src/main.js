import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import router from './router'

Vue.config.productionTip = false

axios.defaults.baseURL = "https://hvmyi0sxs9.execute-api.us-west-2.amazonaws.com/v1"

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
