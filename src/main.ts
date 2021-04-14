import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

import 'tailwindcss/tailwind.css'

import VueTailwind from 'vue-tailwind'
import TInput from 'vue-tailwind/dist/t-input'
import TButton from 'vue-tailwind/dist/t-button'
import TSelect from 'vue-tailwind/dist/t-select'

import VueMeta from 'vue-meta'

Vue.config.productionTip = false

const components = {
  TButton: {
    component: TButton,
  },
  TInput: {
    component: TInput,
  },
  TSelect: {
    component: TSelect,
  },
}

Vue.use(VueTailwind, components)
Vue.use(VueMeta)

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app')
