import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify';
import VueQuagga from 'vue-quaggajs';


Vue.config.productionTip = false
// register component 'v-quagga'


Vue.use(VueQuagga);

new Vue({
  router,
  vuetify,
  VueQuagga,
  render: h => h(App)
}).$mount('#app')
