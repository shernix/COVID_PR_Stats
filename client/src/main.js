// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'

window.axios = require('axios')
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  mounted: function () {
    axios.get('https://coronavirus-19-api.herokuapp.com/countries/')
      .then(response => (this.stats = response.data))
  },
  data: {
    stats: null
  }
})
