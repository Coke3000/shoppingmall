import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import  "./element-ui/index"
import Toast from "components/common/toast/index.js"
import FastClick from "fastclick"
import VueLazyLoad from 'vue-lazyload'

Vue.config.productionTip = false
Vue.prototype.$bus=new Vue()
//安装toast插件
Vue.use(Toast)
//解决移动端300ms问题
FastClick.attach(document.body)
//安装图片懒加载插件
Vue.use(VueLazyLoad,{
  loading:require("./assets/img/home/timg.gif")
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
