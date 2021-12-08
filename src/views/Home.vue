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
          <div class="container">
            <div class="card">
              <div class="image">
                <img href="#" :src="vueThumb" class="img-fluid img-thumbnail" />
              </div>
              <div class="content">
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
    </div>
    <br />
    <br />
    <div class="mx-1 container-fluid">
      <div class="mx-1 row">
        <div class="card" style="">
          <div class="card-body">
            <h5 class="card-title" align="center">Forks</h5>
            <div align="center" v-if="forks.series[0]['values'].length > 5">
              <zingchart :data="forks" :height="300" :width="1200" />
            </div>
          </div>
        </div>
        <div class="card" style="">
          <div class="card-body">
            <h5 class="card-title" align="center">Watchers</h5>
            <div align="center" v-if="watchers.series[0]['values'].length > 5">
              <zingchart :data="forks" :height="300" :width="1200" />
            </div>
          </div>
        </div>
        <div class="card" style="">
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
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-familly: "Poppins", sans-serif;
}
body {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #43345d;
  min-height: 800px;
}

.container {
  position: relative;
  width: 1100px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-warp: warp;
  padding: 30px;
}

.container .card {
  position: relative;
  max-width: 300px;
  height: 215px;
  background-color: #fff;
  margin: 30px 10px;
  padding: 20px 15px;

  display: flex;
  flex-direction: column;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.5);
  transition: 0.3s ease-in-out;
  border-radius: 15px;
}
.container .card:hover {
  height: 380px;
}

.container .card .image {
  position: relative;
  width: 260px;
  height: 260px;

  top: -40%;
  left: 0px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);
  z-index: 1;
}

.container .card .image img {
  max-width: 100%;
  border-radius: 15px;
}

.container .card .content {
  position: relative;
  top: -150px;
  padding: 10px 15px;
  color: #111;
  text-align: center;

  visibility: hidden;
  opacity: 0;
  transition: 0.3s ease-in-out;
}

.container .card:hover .content {
  margin-top: 30px;
  visibility: visible;
  opacity: 1;
  transition-delay: 0.2s;
}

.card {
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
