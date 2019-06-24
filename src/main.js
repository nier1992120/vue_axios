import Vue from 'vue'
import App from './App'
import router from './router'
import Axios from 'axios'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import common from './common'
// import echarts from 'echarts'

// Vue.use(echarts)// 使用echarts

Vue.use(ElementUI)// 使用ElementUI

Vue.prototype.common = common // 引入common

require('./mock')// 引入mock

Vue.prototype.$axios = Axios// 引入Axios

// Vue.prototype.Host = '/api' //引入host

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
