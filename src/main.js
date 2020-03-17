import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './story'
import Toast from 'components/content/toast'
import FastClick from 'fastclick'

Vue.config.productionTip = false
// 安装插件
Vue.use(Toast)
// 解决移动端300ms延迟
FastClick.attach(document.body)

Vue.prototype.$bus = new Vue()

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
