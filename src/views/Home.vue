<template>
  <div class="home">
    <div class="data">
      <h1>JS Framework Watcher</h1>
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
    <div align="center">
      <zingchart :data="Forks" :height="300" :width="800" />
    </div>
  </div>
</template>

<style>
html,
body {
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
}

.chart--container {
  height: 100%;
  width: 100%;
  min-height: 150px;
}

.zc-ref {
  display: none;
}
</style>

<script>
import axios from "axios";

export default {
  data: function () {
    return {
      vueData: [],
      angularData: [],
      emberData: [],
      svelteData: [],
      reactData: [],
      Forks: {
        type: "bar",
        title: {
          text: "Forks",
        },
        series: [
          {
            values: [23, 54, 54, 39, 47],
            text: "React",
          },
        ],
        scaleX: {
          // Set scale label
          label: { text: "Framework" },
          // Convert text on scale indices
          labels: ["Vue", "Angular", "Ember", "Svelte", "React"],
        },
        scaleY: {
          // Scale label with unicode character
          label: { text: "Total" },
        },
        plot: {
          // Animation docs here:
          // https://www.zingchart.com/docs/tutorials/styling/animation#effect
          animation: {
            effect: "ANIMATION_EXPAND_BOTTOM",
            method: "ANIMATION_STRONG_EASE_IN",
            sequence: "ANIMATION_BY_NODE",
            speed: 750,
          },
        },
      },
    };
  },
  created: function () {
    axios.get("https://api.github.com/repos/vuejs/vue").then((response) => {
      console.log(response.data);
      this.vueData = response.data;
      // this.forks.series.values.push(response.data.forks);
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
