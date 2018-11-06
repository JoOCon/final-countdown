import Vue from 'vue'
import { apiKey } from './apiKey.js';

Vue.config.productionTip = false

new Vue({
  el: '#app',
  data: {
    astroData: 'show this info'
  },
  mounted() {
    fetch(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}`)
      .then(response => response.json())
      .then(data => this.astroData = data);
  }
})
