import Vue from 'vue'

import VueCompositionAPI from '@vue/composition-api'

// import css files
// import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap-vue/dist/bootstrap-vue.css'

import {
  ToastPlugin,
  ModalPlugin,
  TablePlugin,
  BootstrapVue,
  IconsPlugin,
} from 'bootstrap-vue'
import 'core-js/stable'
// import 'regenerator-runtime/runtime'

import VueModular from 'vue-modular'
import * as VueGoogleMaps from 'vue2-google-maps'
// importing the modules
import ride from './modules/ride'
import customer from './modules/customer'
import contact from './modules/Contact'
import map from './modules/map'
import manual from './modules/manual'
import driver from './modules/driver'
import dynamic from './modules/Dynamics'
import promotion from './modules/Promotion'
import pop from './modules/pop'
import Settings from './modules/Settings'
import analytics from './modules/analytics'

import router from './router'
import store from './store'
import App from './App.vue'

// Global Components
import './global-components'

// 3rd party plugins
import '@/libs/portal-vue'
import '@/libs/toastification'
import '@/plugins/echarts'
import '@/libs/axios'

// BSV Plugin Registration
Vue.use(ToastPlugin)
Vue.use(ModalPlugin)

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(TablePlugin)
// Composition API
Vue.use(VueCompositionAPI)

// use the plugin and pass modules, vuex store and vue router
Vue.use(VueModular, {
  modules: {
    ride,
    customer,
    contact,
    map,
    manual,
    driver,
    dynamic,
    promotion,
    pop,
    Settings,
    analytics,
  },
  store,
  router,
})
// Access to google maps
Vue.use(VueGoogleMaps, {
  load: {
    Key: 'AIzaSyDwUr-_zfVZsZ5VzlGRJy5iqWt1GzdoKYg',
    libraries: 'places',
  },
})

// import core styles
require('@core/scss/core.scss')

// import assets styles
require('@/assets/scss/style.scss')

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
