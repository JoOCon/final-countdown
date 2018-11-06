const app = new Vue({
  el: '#app',
  data: {
    astroData: 'show this info'
  },
  mounted() {
    fetch('https://api.nasa.gov/planetary/apod?api_key=PpsMSUDtp43F9KeswYphKmlJFArYNrZycwBT36qv')
      .then(response => response.json())
      .then(data => this.astroData = data);
  }
});
