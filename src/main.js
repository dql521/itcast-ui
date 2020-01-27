import Vue from 'vue'
import App from './App.vue'
import DoButton from './components/Button.vue'
import './assets/fonts/font.scss'

Vue.config.productionTip = false
Vue.component(DoButton.name, DoButton)

new Vue({
  render: h => h(App)
}).$mount('#app')
