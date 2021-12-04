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
    <div align="center" v-if="forks.series[0]['values'].length > 0">
      <zingchart :data="forks" :height="300" :width="800" />
    </div>
    <div align="center" v-if="watchers.series[0]['values'].length > 4">
      <zingchart :data="watchers" :height="300" :width="800" />
    </div>
    <div align="center" v-if="stars.series[0]['values'].length > 4">
      <zingchart :data="stars" :height="300" :width="800" />
    </div>
  </div>
</template>

<style></style>

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
      forks: {
        type: "bar",
        title: {
          text: "Forks",
        },
        series: [
          {
            values: [],
          },
        ],
        scaleX: {
          label: { text: "Framework" },
          labels: ["Vue", "Angular", "Ember", "Svelte", "React"],
        },
        scaleY: {
          label: { text: "Total" },
        },
        plot: {
          animation: {
            effect: "ANIMATION_EXPAND_BOTTOM",
            method: "ANIMATION_STRONG_EASE_IN",
            sequence: "ANIMATION_BY_NODE",
            speed: 750,
          },
        },
      },
      watchers: {
        type: "bar",
        title: {
          text: "Watchers",
        },
        series: [
          {
            values: [],
          },
        ],
        scaleX: {
          label: { text: "Framework" },
          labels: ["Vue", "Angular", "Ember", "Svelte", "React"],
        },
        scaleY: {
          label: { text: "Total" },
        },
        plot: {
          animation: {
            effect: "ANIMATION_EXPAND_BOTTOM",
            method: "ANIMATION_STRONG_EASE_IN",
            sequence: "ANIMATION_BY_NODE",
            speed: 750,
          },
        },
      },
      stars: {
        type: "bar",
        title: {
          text: "Stars",
        },
        series: [
          {
            values: [],
          },
        ],
        scaleX: {
          label: { text: "Framework" },
          labels: ["Vue", "Angular", "Ember", "Svelte", "React"],
        },
        scaleY: {
          label: { text: "Total" },
        },
        plot: {
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
      // console.log(response.data);
      this.vueData = response.data;
      // var forksArray = this.forks.series[0]["values"];
      // forksArray.push(response.data.forks);
      var watchersArray = this.watchers.series[0]["values"];
      watchersArray.push(response.data.subscribers_count);
      var starsArray = this.stars.series[0]["values"];
      starsArray.push(response.data.watchers);
      // console.log(forksArray);
    });
    axios.get("https://api.github.com/repos/angular/angular.js").then((response) => {
      // console.log(response.data);
      this.angularData = response.data;
      // var forksArray = this.forks.series[0]["values"];
      // forksArray.push(response.data.forks);
      var watchersArray = this.watchers.series[0]["values"];
      watchersArray.push(response.data.subscribers_count);
      var starsArray = this.stars.series[0]["values"];
      starsArray.push(response.data.watchers);
      // console.log(forksArray);
    });
    axios.get("https://api.github.com/repos/emberjs/ember.js").then((response) => {
      // console.log(response.data);
      this.emberData = response.data;
      // var forksArray = this.forks.series[0]["values"];
      // forksArray.push(response.data.forks);
      var watchersArray = this.watchers.series[0]["values"];
      watchersArray.push(response.data.subscribers_count);
      var starsArray = this.stars.series[0]["values"];
      starsArray.push(response.data.watchers);
      // console.log(forksArray);
    });
    axios.get("https://api.github.com/repos/sveltejs/svelte").then((response) => {
      // console.log(response.data);
      this.svelteData = response.data;
      // var forksArray = this.forks.series[0]["values"];
      // forksArray.push(response.data.forks);
      var watchersArray = this.watchers.series[0]["values"];
      watchersArray.push(response.data.subscribers_count);
      var starsArray = this.stars.series[0]["values"];
      starsArray.push(response.data.watchers);
      // console.log(forksArray);
    });
    axios.get("https://api.github.com/repos/facebook/react").then((response) => {
      // console.log(response.data);
      this.reactData = response.data;
      // var forksArray = this.forks.series[0]["values"];
      // forksArray.push(response.data.forks);
      var watchersArray = this.watchers.series[0]["values"];
      watchersArray.push(response.data.subscribers_count);
      var starsArray = this.stars.series[0]["values"];
      starsArray.push(response.data.watchers);
      // console.log(forksArray);
    });
  },
  mounted: function () {
    // console.log(this.forks.series[0]["values"][0]);
  },
  methods: {},
};
</script>
