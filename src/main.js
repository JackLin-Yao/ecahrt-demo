import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import * as echarts from 'echarts';
import ECharts from 'vue-echarts'
import './plugins/element.js'
import 'element-ui/lib/theme-chalk/index.css';
// 全局注册组件（也可以使用局部注册）
Vue.component('v-chart', ECharts)
Vue.config.productionTip = false
Vue.prototype.$echarts = echarts;
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
