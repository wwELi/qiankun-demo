import Vue from 'vue'
import App from './App.vue'
import { registerMicroApps, start } from 'qiankun'

Vue.config.productionTip = false;

window.vue = Vue;
window.portal = 'wwwww';

new Vue({
  render: h => h(App),
}).$mount('#app')

registerMicroApps([
  {
    name: 'order',
    entry: '//localhost:3001',
    container: '#container',
    activeRule: (location) => location.pathname === '/order',
  },
  {
    name: 'predict',
    entry: '//localhost:3002',
    container: '#container',
    activeRule: (location) => location.pathname === '/predict',
  }
]);

start({
  sandbox: { strictStyleIsolation: true }
});
