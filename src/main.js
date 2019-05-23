import Vue from 'vue'
import App from './App.vue'
// 导入路由模块
import router from './router.js'

Vue.config.productionTip = false

// Vue 中通过 $mount 实例方法挂载 vm
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
