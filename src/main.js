import Vue from 'vue'
import App from './App.vue'
// import { apiKey } from '../apiKey';

Vue.config.productionTip = false

new Vue({
  data: {
    astroData: {}
  },
  mounded() {
    fetch('https://api.nasa.gov/planetary/apod?api_key=PpsMSUDtp43F9KeswYphKmlJFArYNrZycwBT36qv')
      .then(response => response.json())
      .then(data => console.log(data))
  },
  render: h => h(App),
}).$mount('#app')
