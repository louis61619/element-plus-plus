import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import axios from 'axios'

if (process.env.NODE_ENV === 'production') {
  const { mockXHR } = require('../mock')
  mockXHR()
}

createApp(App).use(store).use(router).mount('#app')

axios
  .post('/dev-api/vue-element-admin/user/login', {
    username: 'admin'
  })
  .then((response) => {
    if (response.data) {
      console.log(response.data)
    }
  })
