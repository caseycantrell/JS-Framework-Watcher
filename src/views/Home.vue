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
        <div class="row row-cols-2 row-cols-lg-3 g-5 justify-content-between">
          <div class="col">
            <div class="card" style="width: 18rem">
              <img class="card-img-top" :src="vueThumb" alt="Card image cap" />
              <div class="card-body bg-info text-dark" align="center">
                <h5 class="card-title">Vue</h5>
                <p class="card-text"></p>
              </div>
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
              <div class="card-body bg-info text-dark" align="center">
                <h5 class="card-title">Angular</h5>
                <p class="card-text"></p>
              </div>
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
              <div class="card-body bg-info text-dark" align="center">
                <h5 class="card-title">Ember</h5>
                <p class="card-text"></p>
              </div>
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
              <div class="card-body bg-info text-dark" align="center">
                <h5 class="card-title">Svelte</h5>
                <p class="card-text"></p>
              </div>
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
              <img class="card-img-top" :src="reactThumb" alt="Card image cap" />
              <div class="card-body bg-info text-dark" align="center">
                <h5 class="card-title">jQuery</h5>
                <p class="card-text"></p>
              </div>
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
              <div class="card-body bg-info text-dark" align="center">
                <h5 class="card-title">React</h5>
                <p class="card-text"></p>
              </div>
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
    <div class="mx-1 container-fluid">
      <div class="mx-1 row">
        <div class="card" style="">
          <div class="card-body">
            <h5 class="card-title" align="center">Forks</h5>
            <div align="center" v-if="forks.series[0]['values'].length > 4">
              <zingchart :data="forks" :height="300" :width="1200" />
            </div>
          </div>
        </div>
        <div class="card" style="">
          <div class="card-body">
            <h5 class="card-title" align="center">Watchers</h5>
            <div align="center" v-if="watchers.series[0]['values'].length > 4">
              <zingchart :data="forks" :height="300" :width="1200" />
            </div>
          </div>
        </div>
        <div class="card" style="">
          <div class="card-body">
            <h5 class="card-title" align="center">Stars</h5>
            <div align="center" v-if="stars.series[0]['values'].length > 4">
              <zingchart :data="stars" :height="300" :width="1200" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
img {
  width: 150px;
}
body {
  background: white;
}
.card {
  /* Add shadows to create the "card" effect */
  background: black;
  box-shadow: 0 8px 22px 0 rgba(0, 0, 0, 0.44);
  transition: 0.5s;
  border-radius: 5px;
}
.card-title {
  color: white;
}

/* On mouse-over, add a deeper shadow */
.card:hover {
  box-shadow: 0 12px 22px 0 rgba(0, 0, 0, 0.44);
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
      jqueryData: [],
      reactData: [],
      forks: {
        type: "bar",
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
        type: "bar",
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
        type: "bar",
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
    });
    axios.get("https://api.github.com/repos/jquery/jquery").then((response) => {
      console.log(response.data);
      this.jqueryData = response.data;
      var forksArray = this.forks.series[0]["values"];
      forksArray.push(response.data.forks);
      var watchersArray = this.watchers.series[0]["values"];
      watchersArray.push(response.data.subscribers_count);
      var starsArray = this.stars.series[0]["values"];
      starsArray.push(response.data.watchers);
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
    });
  },
  methods: function () {},
};
</script>
