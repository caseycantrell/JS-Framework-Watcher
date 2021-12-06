<template>
  <div class="home">
    <div class="data">
      <h1>JS Framework Watcher</h1>
      <div class="container-xxl">
        <div class="row row-cols-1 row-cols-md-2 g-4">
          <div class="col">
            <div class="card">
              <img src="" class="card-img-top" alt="" />
              <div class="card-body">
                <h5 class="card-title">Vue.js</h5>
                <p class="card-text">
                  Forks: {{ vueData.forks }}
                  <br />
                  Watchers: {{ vueData.subscribers_count }}
                  <br />
                  Stars: {{ vueData.watchers }}
                </p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card">
              <img src="" class="card-img-top" alt="" />
              <div class="card-body">
                <h5 class="card-title">Angular</h5>
                <p class="card-text">
                  Forks: {{ angularData.forks }}
                  <br />
                  Watchers: {{ angularData.subscribers_count }}
                  <br />
                  Stars: {{ angularData.watchers }}
                </p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card">
              <img src="" class="card-img-top" alt="" />
              <div class="card-body">
                <h5 class="card-title">emberJS</h5>
                <p class="card-text">
                  Forks: {{ emberData.forks }}
                  <br />
                  Watchers: {{ emberData.subscribers_count }}
                  <br />
                  Stars: {{ emberData.watchers }}
                </p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card">
              <img src="" class="card-img-top" alt="" />
              <div class="card-body">
                <h5 class="card-title">Svelte</h5>
                <p class="card-text">
                  Forks: {{ svelteData.forks }}
                  <br />
                  Watchers: {{ svelteData.subscribers_count }}
                  <br />
                  Stars: {{ svelteData.watchers }}
                </p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card">
              <img src="" class="card-img-top" alt="" />
              <div class="card-body">
                <h5 class="card-title">React</h5>
                <p class="card-text">
                  Forks: {{ reactData.forks }}
                  <br />
                  Watchers: {{ reactData.subscribers_count }}
                  <br />
                  Stars: {{ reactData.watchers }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div align="center" v-if="forks.series[0]['values'].length > 4">
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
      console.log(response.data);
      this.vueData = response.data;
      var forksArray = this.forks.series[0]["values"];
      forksArray.push(response.data.forks);
      var watchersArray = this.watchers.series[0]["values"];
      watchersArray.push(response.data.subscribers_count);
      var starsArray = this.stars.series[0]["values"];
      starsArray.push(response.data.watchers);
      console.log(forksArray);
    });
    axios.get("https://api.github.com/repos/angular/angular.js").then((response) => {
      console.log(response.data);
      this.angularData = response.data;
      var forksArray = this.forks.series[0]["values"];
      forksArray.push(response.data.forks);
      var watchersArray = this.watchers.series[0]["values"];
      watchersArray.push(response.data.subscribers_count);
      var starsArray = this.stars.series[0]["values"];
      starsArray.push(response.data.watchers);
      console.log(forksArray);
    });
    axios.get("https://api.github.com/repos/emberjs/ember.js").then((response) => {
      console.log(response.data);
      this.emberData = response.data;
      var forksArray = this.forks.series[0]["values"];
      forksArray.push(response.data.forks);
      var watchersArray = this.watchers.series[0]["values"];
      watchersArray.push(response.data.subscribers_count);
      var starsArray = this.stars.series[0]["values"];
      starsArray.push(response.data.watchers);
      console.log(forksArray);
    });
    axios.get("https://api.github.com/repos/sveltejs/svelte").then((response) => {
      console.log(response.data);
      this.svelteData = response.data;
      var forksArray = this.forks.series[0]["values"];
      forksArray.push(response.data.forks);
      var watchersArray = this.watchers.series[0]["values"];
      watchersArray.push(response.data.subscribers_count);
      var starsArray = this.stars.series[0]["values"];
      starsArray.push(response.data.watchers);
      console.log(forksArray);
    });
    axios.get("https://api.github.com/repos/facebook/react").then((response) => {
      console.log(response.data);
      this.reactData = response.data;
      var forksArray = this.forks.series[0]["values"];
      forksArray.push(response.data.forks);
      var watchersArray = this.watchers.series[0]["values"];
      watchersArray.push(response.data.subscribers_count);
      var starsArray = this.stars.series[0]["values"];
      starsArray.push(response.data.watchers);
      console.log(forksArray);
    });
  },
  mounted: function () {},
  methods: {},
};
</script>
