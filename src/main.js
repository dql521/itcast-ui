import Vue from 'vue'
import App from './App.vue'
import DoButton from './components/Button.vue'
import DoDialog from './components/Dialog.vue'
import DoInput from './components/Input.vue'
import DoSwitch from './components/Switch .vue'
import DoRadio from './components/Radio.vue'
import DoRadioGroup from './components/RadioGroup.vue'
import './assets/fonts/font.scss'

Vue.config.productionTip = false
Vue.component(DoButton.name, DoButton)
Vue.component(DoDialog.name, DoDialog)
Vue.component(DoInput.name, DoInput)
Vue.component(DoSwitch.name, DoSwitch)
Vue.component(DoRadio.name, DoRadio)
Vue.component(DoRadioGroup.name, DoRadioGroup)

new Vue({
  render: h => h(App)
}).$mount('#app')
