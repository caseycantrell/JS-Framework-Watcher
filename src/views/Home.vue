<template>
  <div class="home">
    <div class="data">
      <div align="center">
        <br />
        <h1>JS FRAMEWORK WATCHER</h1>
      </div>
      <br />
      <br />
      <div class="container-xl">
        <div class="row row-cols-1 row-cols-md-3 g-5 justify-content-between">
          <div class="col">
            <div class="card" style="width: 18rem">
              <img class="card-img-top" :src="vueThumb" alt="Card image cap" />
              <!-- <div class="card-body bg-info text-dark" align="center">
                <h5 class="card-title">Vue</h5>
                <p class="card-text"></p>
              </div> -->
              <ul class="list-group list-group-flush" align="center">
                <li class="list-group-item">&#127860; Forks: {{ vueData.forks }}</li>
                <li class="list-group-item">&#128064; Watchers: {{ vueData.subscribers_count }}</li>
                <li class="list-group-item">&#x2b50; Stars: {{ vueData.watchers }}</li>
                <li class="list-group-item">
                  Popularity Score:
                  {{ Math.floor(vueData.watchers + vueData.subscribers_count + vueData.forks / 3) }}
                </li>
              </ul>
            </div>
          </div>
          <div class="col">
            <div class="card" style="width: 18rem">
              <img class="card-img-top" :src="angularThumb" alt="Card image cap" />
              <!-- <div class="card-body bg-info text-dark" align="center">
                <h5 class="card-title">Angular</h5>
                <p class="card-text"></p>
              </div> -->
              <ul class="list-group list-group-flush" align="center">
                <li class="list-group-item">&#127860; Forks: {{ angularData.forks }}</li>
                <li class="list-group-item">&#128064; Watchers: {{ angularData.subscribers_count }}</li>
                <li class="list-group-item">&#x2b50; Stars: {{ angularData.watchers }}</li>
                <li class="list-group-item">
                  Popularity Score:
                  {{ Math.floor(angularData.watchers + angularData.subscribers_count + angularData.forks / 3) }}
                </li>
              </ul>
            </div>
          </div>
          <div class="col">
            <div class="card" style="width: 18rem">
              <img class="card-img-top" :src="emberThumb" alt="Card image cap" />
              <!-- <div class="card-body bg-info text-dark" align="center">
                <h5 class="card-title">Ember</h5>
                <p class="card-text"></p>
              </div> -->
              <ul class="list-group list-group-flush" align="center">
                <li class="list-group-item">&#127860; Forks: {{ emberData.forks }}</li>
                <li class="list-group-item">&#128064; Watchers: {{ emberData.subscribers_count }}</li>
                <li class="list-group-item">&#x2b50; Stars: {{ emberData.watchers }}</li>
                <li class="list-group-item">
                  Popularity Score:
                  {{ Math.floor(emberData.watchers + emberData.subscribers_count + emberData.forks / 3) }}
                </li>
              </ul>
            </div>
          </div>
          <div class="col">
            <div class="card" style="width: 18rem">
              <img class="card-img-top" :src="svelteThumb" alt="Card image cap" />
              <!-- <div class="card-body bg-info text-dark" align="center">
                <h5 class="card-title">Svelte</h5>
                <p class="card-text"></p>
              </div> -->
              <ul class="list-group list-group-flush" align="center">
                <li class="list-group-item">&#127860; Forks: {{ svelteData.forks }}</li>
                <li class="list-group-item">&#128064; Watchers: {{ svelteData.subscribers_count }}</li>
                <li class="list-group-item">&#x2b50; Stars: {{ svelteData.watchers }}</li>
                <li class="list-group-item">
                  Popularity Score:
                  {{ Math.floor(svelteData.watchers + svelteData.subscribers_count + svelteData.forks / 3) }}
                </li>
              </ul>
            </div>
          </div>
          <div class="col">
            <div class="card" style="width: 18rem">
              <img class="card-img-top" :src="jqueryThumb" alt="Card image cap" />
              <!-- <div class="card-body bg-info text-dark" align="center">
                <h5 class="card-title">jQuery</h5>
                <p class="card-text"></p>
              </div> -->
              <ul class="list-group list-group-flush" align="center">
                <li class="list-group-item">&#127860; Forks: {{ jqueryData.forks }}</li>
                <li class="list-group-item">&#128064; Watchers: {{ jqueryData.subscribers_count }}</li>
                <li class="list-group-item">&#x2b50; Stars: {{ jqueryData.watchers }}</li>
                <li class="list-group-item">
                  Popularity Score:
                  {{ Math.floor(jqueryData.watchers + jqueryData.subscribers_count + jqueryData.forks / 3) }}
                </li>
              </ul>
            </div>
          </div>
          <div class="col">
            <div class="card" style="width: 18rem">
              <img class="card-img-top" :src="reactThumb" alt="Card image cap" />
              <!-- <div class="card-body bg-info text-dark" align="center">
                <h5 class="card-title">React</h5>
                <p class="card-text"></p>
              </div> -->
              <ul class="list-group list-group-flush" align="center">
                <li class="list-group-item">&#127860; Forks: {{ reactData.forks }}</li>
                <li class="list-group-item">&#128064; Watchers: {{ reactData.subscribers_count }}</li>
                <li class="list-group-item">&#x2b50; Stars: {{ reactData.watchers }}</li>
                <li class="list-group-item">
                  Popularity Score:
                  {{ Math.floor(reactData.watchers + reactData.subscribers_count + reactData.forks / 3) }}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <br />
    <br />
    <div class="d-flex p-2">
      <div class="mx-1 row row-cols-1 row-cols-md-1 g-4">
        <div class="card w-75 d-flex flex-column">
          <div class="card-body justify-content-between">
            <h5 class="card-title" align="center">Forks</h5>
            <div v-if="forks.series[0]['values'].length > 5">
              <zingchart :data="forks" :height="300" :width="1200" />
            </div>
          </div>
        </div>
        <div class="card w-75">
          <div class="card-body">
            <h5 class="card-title" align="center">Watchers</h5>
            <div align="center" v-if="watchers.series[0]['values'].length > 5">
              <zingchart :data="watchers" :height="300" :width="1200" />
            </div>
          </div>
        </div>
        <div class="card w-75">
          <div class="card-body">
            <h5 class="card-title" align="center">Stars</h5>
            <div align="center" v-if="stars.series[0]['values'].length > 5">
              <zingchart :data="stars" :height="300" :width="1200" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
body {
  background-image: url("https://images.unsplash.com/photo-1523821741446-edb2b68bb7a0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80");
  background-color: #cccccc;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: auto;
}
.card {
  box-shadow: 0 8px 12px 0 rgba(0, 0, 0, 0.502);
  transition: 0.3s;
  border-radius: 5px; /* 5px rounded corners */
}

/* Add rounded corners to the top left and the top right corner of the image */
img {
  border-radius: 5px 5px 0 0;
}

h1 {
  color: white;
}
</style>

<script>
import axios from "axios";
import vueThumb from "/src/assets/img/vuethumb.jpg";
import angularThumb from "/src/assets/img/angularthumb.jpg";
import emberThumb from "/src/assets/img/emberthumb.jpg";
import svelteThumb from "/src/assets/img/sveltethumb.jpg";
import reactThumb from "/src/assets/img/reactthumb.jpg";
import jqueryThumb from "/src/assets/img/jquerythumb.jpg";

export default {
  data: function () {
    return {
      vueThumb,
      angularThumb,
      emberThumb,
      svelteThumb,
      jqueryThumb,
      reactThumb,
      vueData: [],
      angularData: [],
      emberData: [],
      svelteData: [],
      jqueryData: [],
      reactData: [],
      forks: {
        theme: "light",
        type: "bar3d",
        "3d-aspect": {
          true3d: false,
          depth: "30px",
        },
        title: {
          text: "",
        },
        series: [
          {
            values: [],
          },
        ],
        scaleX: {
          label: { text: "Framework" },
          labels: ["Vue", "Angular", "Ember", "Svelte", "jQuery", "React"],
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
        theme: "light",
        type: "bar3d",
        "3d-aspect": {
          true3d: false,
          depth: "30px",
        },
        title: {
          text: "",
        },
        series: [
          {
            values: [],
          },
        ],
        scaleX: {
          label: { text: "Framework" },
          labels: ["Vue", "Angular", "Ember", "Svelte", "jQuery", "React"],
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
        theme: "light",
        type: "bar3d",
        "3d-aspect": {
          true3d: false,
          depth: "30px",
        },
        title: {
          text: "",
        },
        series: [
          {
            values: [],
          },
        ],
        scaleX: {
          label: { text: "Framework" },
          labels: ["Vue", "Angular", "Ember", "Svelte", "jQuery", "React"],
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
      this.forks.series[0].values[0] = response.data.forks;
      this.watchers.series[0].values[0] = response.data.subscribers_count;
      this.stars.series[0].values[0] = response.data.watchers;
    });
    axios.get("https://api.github.com/repos/angular/angular.js").then((response) => {
      console.log(response.data);
      this.angularData = response.data;
      this.forks.series[0].values[1] = response.data.forks;
      this.watchers.series[0].values[1] = response.data.subscribers_count;
      this.stars.series[0].values[1] = response.data.watchers;
    });
    axios.get("https://api.github.com/repos/emberjs/ember.js").then((response) => {
      console.log(response.data);
      this.emberData = response.data;
      this.forks.series[0].values[2] = response.data.forks;
      this.watchers.series[0].values[2] = response.data.subscribers_count;
      this.stars.series[0].values[2] = response.data.watchers;
    });
    axios.get("https://api.github.com/repos/sveltejs/svelte").then((response) => {
      console.log(response.data);
      this.svelteData = response.data;
      this.forks.series[0].values[3] = response.data.forks;
      this.watchers.series[0].values[3] = response.data.subscribers_count;
      this.stars.series[0].values[3] = response.data.watchers;
    });
    axios.get("https://api.github.com/repos/jquery/jquery").then((response) => {
      console.log(response.data);
      this.jqueryData = response.data;
      this.forks.series[0].values[4] = response.data.forks;
      this.watchers.series[0].values[4] = response.data.subscribers_count;
      this.stars.series[0].values[4] = response.data.watchers;
    });
    axios.get("https://api.github.com/repos/facebook/react").then((response) => {
      console.log(response.data);
      this.reactData = response.data;
      this.forks.series[0].values[5] = response.data.forks;
      this.watchers.series[0].values[5] = response.data.subscribers_count;
      this.stars.series[0].values[5] = response.data.watchers;
    });
  },
  mounted: function () {},
  methods: function () {},
};
</script>
