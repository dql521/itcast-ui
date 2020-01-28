import Vue from 'vue'
import App from './App.vue'
import DoButton from './components/Button.vue'
import DoDialog from './components/Dialog.vue'
import './assets/fonts/font.scss'

Vue.config.productionTip = false
Vue.component(DoButton.name, DoButton)
Vue.component(DoDialog.name, DoDialog)

new Vue({
  render: h => h(App)
}).$mount('#app')
