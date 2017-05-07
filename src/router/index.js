import Vue from 'vue'
import Router from 'vue-router'
// import Hello from 'components/Hello'

// import Home from '../Home'
import User from '../Users'
import Message from '../Message'
import Hello from '../components/Hello'
// import Introduce from '../components/Introduction'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Message
    },
    {
      path: '/user/:teamId',
      name: 'Somename',
      component: User
    },
    {
      path: '/test',
      name: 'test',
      component: Hello
    }

  ]
})
