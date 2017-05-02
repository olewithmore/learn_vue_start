// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import 'element-ui/lib/theme-default/index.css'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import Message from './Message.vue'
import Introduce from './components/Introduction'

import {store} from './store'

Vue.component('app-message', Message)
Vue.component('introduce', Introduce)

Vue.use(ElementUI)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'.split('').reverse().join()
    }
  }
})
