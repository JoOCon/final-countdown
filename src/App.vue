<template>
  <div id="app">
    <div class="main-container">
      <div class='left-container'>
        <button v-on:click="oldData()">Yesturdays Info</button>
        <button v-on:click="currentData()">Current Info</button>
        <h1>{{astroData.title}}</h1>
        <h3>{{astroData.date}}</h3>
        <p>{{astroData.explanation}}</p>
      </div>
      <img class='main-image' v-bind:src="astroData.url"/>
    </div>
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
button {
  padding: .3em .7em;
  font-size: 1em;
  border-radius: .5em;
  margin: 0 1em;
  background: silver;
  border: 0em;
}

button:hover {
  background: #616161;
  color: white;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  text-align: center;
}

.left-container {
  margin-right: 2em;
  background: steelblue;
  border-radius: 1em;
  color: white;
  padding: 1em;
}

.main-container {
  display: flex;
}

.main-image {
  width: 50em;
  height: 50em;
  border-radius: 1em;
}
</style>
