import Vue from 'vue'
import { apiKey } from './apiKey.js';

Vue.config.productionTip = false

new Vue({
<<<<<<< HEAD
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
=======
  render: h => h(App)
}).$mount('#app')
>>>>>>> 365e2b713bbeeef231de53d5f87e4652af0a2791
