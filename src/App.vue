<template>
  <div id="app">
    <h1>Final Countdown</h1>
    <h1>{{astroData.title}}</h1>
    <h3>{{astroData.date}}</h3>
    <img v-bind:src="astroData.url"/>
    <p>{{astroData.explanation}}</p>
    <button v-on:click="oldData()">Yesturdays Info</button>
    <button v-on:click="currentData()">Current Info</button>
  </div>
</template>

<script>
import { apiKey } from '../apiKey.js';
import date from 'date-and-time';

export default {
  name: 'app',
  data() {
    return {
      astroData: null
    }
  },
  methods: {
    oldData: function () {
      let now = new Date();
      let yesterday = date.addDays(now, -1);
      yesterday = date.format(yesterday, 'YYYY-MM-DD');
      fetch(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=${yesterday}`)
        .then(response => response.json())
        .then(data => this.astroData = data);
    },
    currentData: function () {
      fetch(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}`)
        .then(response => response.json())
        .then(data => this.astroData = data);
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
