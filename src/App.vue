<template>
  <div id="app">
    <h1>{{astroData.title}}</h1>
    <h3>{{astroData.date}}</h3>
    <img v-bind:src="astroData.url"/>
    <p>{{astroData.explanation}}</p>
  </div>
</template>

<script>
import { apiKey } from '../apiKey.js';

export default {
  name: 'app',
  data() {
    return {
      astroData: null
    }
  },
  created() {
    fetch(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}`)
      .then(response => response.json())
      .then(data => this.astroData = data);
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
