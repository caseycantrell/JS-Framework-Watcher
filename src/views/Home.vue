<template>
  <div class="home">
    <h1>Javascript Framework Watcher</h1>
    <h2>Vue</h2>
    <p>Forks: {{ vueData.forks }}</p>
    <p>Watchers: {{ vueData.subscribers_count }}</p>
    <p>Stars: {{ vueData.watchers }}</p>
    <h2>Angular</h2>
    <p>Forks: {{ angularData.forks }}</p>
    <p>Watchers: {{ angularData.subscribers_count }}</p>
    <p>Stars: {{ angularData.watchers }}</p>
    <h2>Ember</h2>
    <p>Forks: {{ emberData.forks }}</p>
    <p>Watchers: {{ emberData.subscribers_count }}</p>
    <p>Stars: {{ emberData.watchers }}</p>
    <h2>Svelte</h2>
    <p>Forks: {{ svelteData.forks }}</p>
    <p>Watchers: {{ svelteData.subscribers_count }}</p>
    <p>Stars: {{ svelteData.watchers }}</p>
    <h2>React</h2>
    <p>Forks: {{ reactData.forks }}</p>
    <p>Watchers: {{ reactData.subscribers_count }}</p>
    <p>Stars: {{ reactData.watchers }}</p>
  </div>
</template>

<style></style>

<script>
import axios from "axios";

export default {
  data: function () {
    return {
      message: "Welcome to Vue.js!",
      vueData: [],
      angularData: [],
      emberData: [],
      svelteData: [],
      reactData: [],
    };
  },
  created: function () {
    axios.get("https://api.github.com/repos/vuejs/vue").then((response) => {
      console.log(response.data);
      this.vueData = response.data;
    });
    axios.get("https://api.github.com/repos/angular/angular.js").then((response) => {
      console.log(response.data);
      this.angularData = response.data;
    });
    axios.get("https://api.github.com/repos/emberjs/ember.js").then((response) => {
      console.log(response.data);
      this.emberData = response.data;
    });
    axios.get("https://api.github.com/repos/sveltejs/svelte").then((response) => {
      console.log(response.data);
      this.svelteData = response.data;
    });
    axios.get("https://api.github.com/repos/facebook/react").then((response) => {
      console.log(response.data);
      this.reactData = response.data;
    });
  },
  methods: {},
};
</script>
