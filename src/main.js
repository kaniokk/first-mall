import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './story'
import Toast from 'components/content/toast'

Vue.config.productionTip = false
// 安装插件
Vue.use(Toast)

Vue.prototype.$bus = new Vue()

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
