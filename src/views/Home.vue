<template>
  <div class="home">
    <div class="data">
      <h1>JS Framework Watcher</h1>
      <br />
      <br />
      <div class="container-xl">
        <div class="row row-cols-1 row-cols-md-2 g-4">
          <div class="col">
            <div class="card mb-3" style="max-width: 540px">
              <div class="row g-0">
                <div class="col-md-4">
                  <img :src="vueThumb" class="img-fluid rounded-start" alt="" />
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h5 class="card-title">Vue.js</h5>
                    <p class="card-text">&#127860; Forks: {{ vueData.forks }}</p>
                    <p class="card-text">&#128064; Watchers: {{ vueData.subscribers_count }}</p>
                    <p class="card-text">&#x2b50; Stars: {{ vueData.watchers }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card mb-3" style="max-width: 540px">
              <div class="row g-0">
                <div class="col-md-4">
                  <img :src="angularThumb" class="img-fluid rounded-start" alt="" />
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h5 class="card-title">Angular</h5>
                    <p class="card-text">&#127860; Forks: {{ angularData.forks }}</p>
                    <p class="card-text">&#128064; Watchers: {{ angularData.subscribers_count }}</p>
                    <p class="card-text">&#x2b50; Stars: {{ angularData.watchers }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card mb-3" style="max-width: 540px">
              <div class="row g-0">
                <div class="col-md-4">
                  <img :src="emberThumb" class="img-fluid rounded-start" alt="" />
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h5 class="card-title">Ember</h5>
                    <p class="card-text">&#127860; Forks: {{ emberData.forks }}</p>
                    <p class="card-text">&#128064; Watchers: {{ emberData.subscribers_count }}</p>
                    <p class="card-text">&#x2b50; Stars: {{ emberData.watchers }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card mb-3" style="max-width: 540px">
              <div class="row g-0">
                <div class="col-md-4">
                  <img :src="svelteThumb" class="img-fluid rounded-start" alt="" />
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h5 class="card-title">Svelte</h5>
                    <p class="card-text">&#127860; Forks: {{ svelteData.forks }}</p>
                    <p class="card-text">&#128064; Watchers: {{ svelteData.subscribers_count }}</p>
                    <p class="card-text">&#x2b50; Stars: {{ svelteData.watchers }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card mb-3" style="max-width: 540px">
              <div class="row g-0">
                <div class="col-md-4">
                  <img :src="reactThumb" class="img-fluid rounded-start" alt="" />
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h5 class="card-title">React</h5>
                    <p class="card-text">&#127860; Forks: {{ reactData.forks }}</p>
                    <p class="card-text">&#128064; Watchers: {{ reactData.subscribers_count }}</p>
                    <p class="card-text">&#x2b50; Stars: {{ reactData.watchers }}</p>
                  </div>
                </div>
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

<style>
img {
  width: 150px;
}
</style>

<script>
import axios from "axios";
import vueThumb from "/src/assets/img/vuethumb.jpg";
import angularThumb from "/src/assets/img/angularthumb.jpg";
import emberThumb from "/src/assets/img/emberthumb.jpg";
import svelteThumb from "/src/assets/img/sveltethumb.jpg";
import reactThumb from "/src/assets/img/reactthumb.jpg";

export default {
  data: function () {
    return {
      vueThumb,
      angularThumb,
      emberThumb,
      svelteThumb,
      reactThumb,
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
  created: function () {},
  mounted: function () {
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
  methods: function () {},
};
</script>
