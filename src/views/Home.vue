<template>
  <div class="home">
    <!-- title -->

    <div align="center"><img :src="watcher" style="width: 500px" /></div>
    <br />
    <br />
    <!-- cards start -->

    <div class="container-xl">
      <div class="row row-cols-1 row-cols-md-3 g-5">
        <div class="col">
          <div class="card" style="width: 18rem">
            <img class="card-img-top" :src="vueThumb" alt="Card image cap" />
            <ul class="list-group" align="center">
              <li class="list-group-item">
                <i class="bi bi-share-fill" />
                &nbsp;Forks: {{ vueData.forks }}
              </li>
              <li class="list-group-item">
                <i class="bi bi-eye-fill" />
                &nbsp;Watchers: {{ vueData.subscribers_count }}
              </li>
              <li class="list-group-item">
                <i class="bi bi-star-fill" />
                &nbsp;Stars: {{ vueData.watchers }}
              </li>
              <li class="list-group-item">
                Popularity Score:
                {{ Math.round((vueData.watchers + vueData.subscribers_count + vueData.forks) / 3) }}
              </li>
            </ul>
          </div>
        </div>
        <div class="col">
          <div class="card" style="width: 18rem">
            <img class="card-img-top" :src="angularThumb" alt="Card image cap" />
            <ul class="list-group" align="center">
              <li class="list-group-item">
                <i class="bi bi-share-fill" />
                &nbsp;Forks: {{ angularData.forks }}
              </li>
              <li class="list-group-item">
                <i class="bi bi-eye-fill" />
                &nbsp; Watchers: {{ angularData.subscribers_count }}
              </li>
              <li class="list-group-item">
                <i class="bi bi-star-fill" />
                &nbsp;Stars: {{ angularData.watchers }}
              </li>
              <li class="list-group-item">
                Popularity Score:
                {{ Math.round((angularData.watchers + angularData.subscribers_count + angularData.forks) / 3) }}
              </li>
            </ul>
          </div>
        </div>
        <div class="col">
          <div class="card" style="width: 18rem">
            <img class="card-img-top" :src="emberThumb" alt="Card image cap" />
            <ul class="list-group" align="center">
              <li class="list-group-item">
                <i class="bi bi-share-fill"></i>
                &nbsp;Forks: {{ emberData.forks }}
              </li>
              <li class="list-group-item">
                <i class="bi bi-eye-fill" />
                &nbsp;Watchers: {{ emberData.subscribers_count }}
              </li>
              <li class="list-group-item">
                <i class="bi bi-star-fill" />
                &nbsp;Stars: {{ emberData.watchers }}
              </li>
              <li class="list-group-item">
                Popularity Score:
                {{ Math.round((emberData.watchers + emberData.subscribers_count + emberData.forks) / 3) }}
              </li>
            </ul>
          </div>
        </div>
        <div class="col">
          <div class="card" style="width: 18rem">
            <img class="card-img-top" :src="svelteThumb" alt="Card image cap" />
            <ul class="list-group" align="center">
              <li class="list-group-item">
                <i class="bi bi-share-fill" />
                &nbsp;Forks: {{ svelteData.forks }}
              </li>
              <li class="list-group-item">
                <i class="bi bi-eye-fill" />
                &nbsp;Watchers: {{ svelteData.subscribers_count }}
              </li>
              <li class="list-group-item">
                <i class="bi bi-star-fill" />
                &nbsp;Stars: {{ svelteData.watchers }}
              </li>
              <li class="list-group-item">
                Popularity Score:
                {{ Math.round((svelteData.watchers + svelteData.subscribers_count + svelteData.forks) / 3) }}
              </li>
            </ul>
          </div>
        </div>
        <div class="col">
          <div class="card" style="width: 18rem">
            <img class="card-img-top" :src="jqueryThumb" alt="Card image cap" />
            <ul class="list-group" align="center">
              <li class="list-group-item">
                <i class="bi bi-share-fill" />
                &nbsp;Forks: {{ jqueryData.forks }}
              </li>
              <li class="list-group-item">
                <i class="bi bi-eye-fill" />
                &nbsp;Watchers: {{ jqueryData.subscribers_count }}
              </li>
              <li class="list-group-item">
                <i class="bi bi-star-fill" />
                &nbsp;Stars: {{ jqueryData.watchers }}
              </li>
              <li class="list-group-item">
                Popularity Score:
                {{ Math.round((jqueryData.watchers + jqueryData.subscribers_count + jqueryData.forks) / 3) }}
              </li>
            </ul>
          </div>
        </div>
        <div class="col">
          <div class="card" style="width: 18rem">
            <img class="card-img-top" :src="reactThumb" alt="Card image cap" />
            <ul class="list-group" align="center">
              <li class="list-group-item">
                <i class="bi bi-share-fill" />
                &nbsp;Forks: {{ reactData.forks }}
              </li>
              <li class="list-group-item">
                <i class="bi bi-eye-fill" />
                &nbsp;Watchers: {{ reactData.subscribers_count }}
              </li>
              <li class="list-group-item">
                <i class="bi bi-star-fill" />
                &nbsp;Stars: {{ reactData.watchers }}
              </li>
              <li class="list-group-item">
                Popularity Score:
                {{ Math.round((reactData.watchers + reactData.subscribers_count + reactData.forks) / 3) }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <!-- end cards -->

    <br />
    <br />

    <!-- start charts -->

    <div class="mx-1 row row-cols-1 row-cols-md-1">
      <div class="card w-75">
        <div class="card-body">
          <div align="center" v-if="forks.series[0].values.length > 5">
            <zingchart :data="forks" :height="350" :width="600" />
          </div>
        </div>
      </div>
      <div class="card w-75">
        <div class="card-body">
          <div align="center" v-if="watchers.series[0].values.length > 5">
            <zingchart :data="watchers" :height="350" :width="600" />
          </div>
        </div>
      </div>
      <div class="card w-75">
        <div class="card-body">
          <div align="center" v-if="stars.series[0].values.length > 5">
            <zingchart :data="stars" :height="350" :width="600" />
          </div>
        </div>
      </div>
      <div class="card w-75">
        <div class="card-body">
          <div align="center" v-if="popularity.series[0].values.length > 5">
            <zingchart :data="popularity" :height="350" :width="600" />
          </div>
        </div>
      </div>
    </div>

    <!-- end charts -->
  </div>
</template>

<style>
body {
  padding-top: 30px;
  padding-bottom: 40px;
  padding-left: 20px;
  padding-right: 20px;
}

ul {
  padding-top: 20px;
}

i {
  color: rgb(143, 143, 143);
}

h1 {
  color: white;
  font-family: Roboto;
  text-shadow: 1px 1px 4px #00c3ffd4;
  font-size: 60px;
}

body {
  background-image: url("https://www.teahub.io/photos/full/212-2124160_4uv0t9-blue-polygon-wallpaper-4k.jpg");
  background-color: #0073ff;
  background-attachment: fixed;
  background-size: auto;
}

.card,
li {
  box-shadow: 0 8px 12px 0 rgba(0, 0, 0, 0.502);
  transition: 0.3s;
  border-radius: 5px;
  margin: 0 auto;
  float: none;
  margin-bottom: 20px;
  background-color: #ffffff10;
  backdrop-filter: blur(6px);
  -webkit-backdrop-filter: blur(6px);
}

.card:hover {
  width: 284px;
  box-shadow: 0px 0px 25px #00c3ffd4;
}

li:hover {
  -webkit-animation: animation 1000ms linear both;
  animation: animation 1000ms linear both;
  box-shadow: 0px 0px 6px #00c3ffd4;
}

@-webkit-keyframes animation {
  0% {
    -webkit-transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
    transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
  }
  3.4% {
    -webkit-transform: matrix3d(1.237, 0, 0, 0, 0, 1.305, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
    transform: matrix3d(1.237, 0, 0, 0, 0, 1.305, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
  }
  4.7% {
    -webkit-transform: matrix3d(1.337, 0, 0, 0, 0, 1.449, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
    transform: matrix3d(1.337, 0, 0, 0, 0, 1.449, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
  }
  6.81% {
    -webkit-transform: matrix3d(1.494, 0, 0, 0, 0, 1.67, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
    transform: matrix3d(1.494, 0, 0, 0, 0, 1.67, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
  }
  9.41% {
    -webkit-transform: matrix3d(1.663, 0, 0, 0, 0, 1.876, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
    transform: matrix3d(1.663, 0, 0, 0, 0, 1.876, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
  }
  10.21% {
    -webkit-transform: matrix3d(1.706, 0, 0, 0, 0, 1.92, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
    transform: matrix3d(1.706, 0, 0, 0, 0, 1.92, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
  }
  13.61% {
    -webkit-transform: matrix3d(1.842, 0, 0, 0, 0, 1.999, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
    transform: matrix3d(1.842, 0, 0, 0, 0, 1.999, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
  }
  14.11% {
    -webkit-transform: matrix3d(1.856, 0, 0, 0, 0, 1.998, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
    transform: matrix3d(1.856, 0, 0, 0, 0, 1.998, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
  }
  17.52% {
    -webkit-transform: matrix3d(1.906, 0, 0, 0, 0, 1.93, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
    transform: matrix3d(1.906, 0, 0, 0, 0, 1.93, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
  }
  18.72% {
    -webkit-transform: matrix3d(1.909, 0, 0, 0, 0, 1.89, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
    transform: matrix3d(1.909, 0, 0, 0, 0, 1.89, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
  }
  21.32% {
    -webkit-transform: matrix3d(1.897, 0, 0, 0, 0, 1.802, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
    transform: matrix3d(1.897, 0, 0, 0, 0, 1.802, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
  }
  24.32% {
    -webkit-transform: matrix3d(1.863, 0, 0, 0, 0, 1.72, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
    transform: matrix3d(1.863, 0, 0, 0, 0, 1.72, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
  }
  25.23% {
    -webkit-transform: matrix3d(1.85, 0, 0, 0, 0, 1.703, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
    transform: matrix3d(1.85, 0, 0, 0, 0, 1.703, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
  }
  29.03% {
    -webkit-transform: matrix3d(1.797, 0, 0, 0, 0, 1.673, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
    transform: matrix3d(1.797, 0, 0, 0, 0, 1.673, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
  }
  29.93% {
    -webkit-transform: matrix3d(1.786, 0, 0, 0, 0, 1.674, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
    transform: matrix3d(1.786, 0, 0, 0, 0, 1.674, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
  }
  35.54% {
    -webkit-transform: matrix3d(1.735, 0, 0, 0, 0, 1.722, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
    transform: matrix3d(1.735, 0, 0, 0, 0, 1.722, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
  }
  36.74% {
    -webkit-transform: matrix3d(1.729, 0, 0, 0, 0, 1.734, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
    transform: matrix3d(1.729, 0, 0, 0, 0, 1.734, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
  }
  41.04% {
    -webkit-transform: matrix3d(1.721, 0, 0, 0, 0, 1.767, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
    transform: matrix3d(1.721, 0, 0, 0, 0, 1.767, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
  }
  44.44% {
    -webkit-transform: matrix3d(1.724, 0, 0, 0, 0, 1.774, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
    transform: matrix3d(1.724, 0, 0, 0, 0, 1.774, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
  }
  52.15% {
    -webkit-transform: matrix3d(1.743, 0, 0, 0, 0, 1.755, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
    transform: matrix3d(1.743, 0, 0, 0, 0, 1.755, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
  }
  59.86% {
    -webkit-transform: matrix3d(1.755, 0, 0, 0, 0, 1.743, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
    transform: matrix3d(1.755, 0, 0, 0, 0, 1.743, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
  }
  63.26% {
    -webkit-transform: matrix3d(1.755, 0, 0, 0, 0, 1.744, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
    transform: matrix3d(1.755, 0, 0, 0, 0, 1.744, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
  }
  75.28% {
    -webkit-transform: matrix3d(1.751, 0, 0, 0, 0, 1.752, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
    transform: matrix3d(1.751, 0, 0, 0, 0, 1.752, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
  }
  85.49% {
    -webkit-transform: matrix3d(1.749, 0, 0, 0, 0, 1.75, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
    transform: matrix3d(1.749, 0, 0, 0, 0, 1.75, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
  }
  90.69% {
    -webkit-transform: matrix3d(1.749, 0, 0, 0, 0, 1.749, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
    transform: matrix3d(1.749, 0, 0, 0, 0, 1.749, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
  }
  100% {
    -webkit-transform: matrix3d(1.75, 0, 0, 0, 0, 1.75, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
    transform: matrix3d(1.75, 0, 0, 0, 0, 1.75, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
  }
}

@keyframes animation {
  0% {
    -webkit-transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
    transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
  }
  3.4% {
    -webkit-transform: matrix3d(1.237, 0, 0, 0, 0, 1.305, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
    transform: matrix3d(1.237, 0, 0, 0, 0, 1.305, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
  }
  4.7% {
    -webkit-transform: matrix3d(1.337, 0, 0, 0, 0, 1.449, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
    transform: matrix3d(1.337, 0, 0, 0, 0, 1.449, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
  }
  6.81% {
    -webkit-transform: matrix3d(1.494, 0, 0, 0, 0, 1.67, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
    transform: matrix3d(1.494, 0, 0, 0, 0, 1.67, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
  }
  9.41% {
    -webkit-transform: matrix3d(1.663, 0, 0, 0, 0, 1.876, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
    transform: matrix3d(1.663, 0, 0, 0, 0, 1.876, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
  }
  10.21% {
    -webkit-transform: matrix3d(1.706, 0, 0, 0, 0, 1.92, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
    transform: matrix3d(1.706, 0, 0, 0, 0, 1.92, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
  }
  13.61% {
    -webkit-transform: matrix3d(1.842, 0, 0, 0, 0, 1.999, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
    transform: matrix3d(1.842, 0, 0, 0, 0, 1.999, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
  }
  14.11% {
    -webkit-transform: matrix3d(1.856, 0, 0, 0, 0, 1.998, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
    transform: matrix3d(1.856, 0, 0, 0, 0, 1.998, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
  }
  17.52% {
    -webkit-transform: matrix3d(1.906, 0, 0, 0, 0, 1.93, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
    transform: matrix3d(1.906, 0, 0, 0, 0, 1.93, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
  }
  18.72% {
    -webkit-transform: matrix3d(1.909, 0, 0, 0, 0, 1.89, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
    transform: matrix3d(1.909, 0, 0, 0, 0, 1.89, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
  }
  21.32% {
    -webkit-transform: matrix3d(1.897, 0, 0, 0, 0, 1.802, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
    transform: matrix3d(1.897, 0, 0, 0, 0, 1.802, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
  }
  24.32% {
    -webkit-transform: matrix3d(1.863, 0, 0, 0, 0, 1.72, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
    transform: matrix3d(1.863, 0, 0, 0, 0, 1.72, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
  }
  25.23% {
    -webkit-transform: matrix3d(1.85, 0, 0, 0, 0, 1.703, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
    transform: matrix3d(1.85, 0, 0, 0, 0, 1.703, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
  }
  29.03% {
    -webkit-transform: matrix3d(1.797, 0, 0, 0, 0, 1.673, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
    transform: matrix3d(1.797, 0, 0, 0, 0, 1.673, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
  }
  29.93% {
    -webkit-transform: matrix3d(1.786, 0, 0, 0, 0, 1.674, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
    transform: matrix3d(1.786, 0, 0, 0, 0, 1.674, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
  }
  35.54% {
    -webkit-transform: matrix3d(1.735, 0, 0, 0, 0, 1.722, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
    transform: matrix3d(1.735, 0, 0, 0, 0, 1.722, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
  }
  36.74% {
    -webkit-transform: matrix3d(1.729, 0, 0, 0, 0, 1.734, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
    transform: matrix3d(1.729, 0, 0, 0, 0, 1.734, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
  }
  41.04% {
    -webkit-transform: matrix3d(1.721, 0, 0, 0, 0, 1.767, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
    transform: matrix3d(1.721, 0, 0, 0, 0, 1.767, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
  }
  44.44% {
    -webkit-transform: matrix3d(1.724, 0, 0, 0, 0, 1.774, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
    transform: matrix3d(1.724, 0, 0, 0, 0, 1.774, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
  }
  52.15% {
    -webkit-transform: matrix3d(1.743, 0, 0, 0, 0, 1.755, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
    transform: matrix3d(1.743, 0, 0, 0, 0, 1.755, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
  }
  59.86% {
    -webkit-transform: matrix3d(1.755, 0, 0, 0, 0, 1.743, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
    transform: matrix3d(1.755, 0, 0, 0, 0, 1.743, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
  }
  63.26% {
    -webkit-transform: matrix3d(1.755, 0, 0, 0, 0, 1.744, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
    transform: matrix3d(1.755, 0, 0, 0, 0, 1.744, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
  }
  75.28% {
    -webkit-transform: matrix3d(1.751, 0, 0, 0, 0, 1.752, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
    transform: matrix3d(1.751, 0, 0, 0, 0, 1.752, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
  }
  85.49% {
    -webkit-transform: matrix3d(1.749, 0, 0, 0, 0, 1.75, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
    transform: matrix3d(1.749, 0, 0, 0, 0, 1.75, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
  }
  90.69% {
    -webkit-transform: matrix3d(1.749, 0, 0, 0, 0, 1.749, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
    transform: matrix3d(1.749, 0, 0, 0, 0, 1.749, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
  }
  100% {
    -webkit-transform: matrix3d(1.75, 0, 0, 0, 0, 1.75, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
    transform: matrix3d(1.75, 0, 0, 0, 0, 1.75, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
  }
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
import watcher from "/src/assets/img/watcher.gif";

export default {
  data: function () {
    return {
      vueThumb,
      angularThumb,
      emberThumb,
      svelteThumb,
      jqueryThumb,
      reactThumb,
      watcher,
      vueData: [],
      angularData: [],
      emberData: [],
      svelteData: [],
      jqueryData: [],
      reactData: [],
      forks: {
        theme: "dark",
        backgroundColor: "none",
        type: "bar3d",
        "3d-aspect": {
          true3d: false,
          depth: "5px",
        },
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
          labels: ["Vue", "Angular", "Ember", "Svelte", "jQuery", "React"],
        },
        scaleY: {
          label: { text: "" },
        },
        plot: {
          animation: {
            effect: "ANIMATION_EXPAND_BOTTOM",
            method: "ANIMATION_STRONG_EASE_IN",
            sequence: "ANIMATION_BY_NODE",
            speed: 750,
          },
          facets: {
            front: {
              "background-color": "#3EA4F9 #0055BF",
            },
            right: {
              "background-color": "#3EA4F9 #0055BF",
            },
            left: {
              "background-color": "#3EA4F9 #0055BF",
            },
            top: {
              "background-color": "white",
            },
            bottom: {
              "background-color": "white",
            },
          },
        },
      },
      watchers: {
        theme: "dark",
        backgroundColor: "none",
        type: "bar3d",
        "3d-aspect": {
          true3d: false,
          depth: "5px",
        },
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
          labels: ["Vue", "Angular", "Ember", "Svelte", "jQuery", "React"],
        },
        scaleY: {
          label: { text: "" },
        },
        plot: {
          animation: {
            effect: "ANIMATION_EXPAND_BOTTOM",
            method: "ANIMATION_STRONG_EASE_IN",
            sequence: "ANIMATION_BY_NODE",
            speed: 750,
          },
          facets: {
            front: {
              "background-color": "#3EA4F9 #0055BF",
            },
            right: {
              "background-color": "#3EA4F9 #0055BF",
            },
            left: {
              "background-color": "#3EA4F9 #0055BF",
            },
            top: {
              "background-color": "white",
            },
            bottom: {
              "background-color": "white",
            },
          },
        },
      },
      stars: {
        theme: "dark",
        backgroundColor: "none",
        type: "bar3d",
        "3d-aspect": {
          true3d: false,
          depth: "5px",
        },
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
          labels: ["Vue", "Angular", "Ember", "Svelte", "jQuery", "React"],
        },
        scaleY: {
          label: { text: "" },
        },
        plot: {
          animation: {
            effect: "ANIMATION_EXPAND_BOTTOM",
            method: "ANIMATION_STRONG_EASE_IN",
            sequence: "ANIMATION_BY_NODE",
            speed: 750,
          },
          facets: {
            front: {
              "background-color": "#3EA4F9 #0055BF",
            },
            right: {
              "background-color": "#3EA4F9 #0055BF",
            },
            left: {
              "background-color": "#3EA4F9 #0055BF",
            },
            top: {
              "background-color": "white",
            },
            bottom: {
              "background-color": "white",
            },
          },
        },
      },
      popularity: {
        theme: "dark",
        backgroundColor: "none",
        type: "bar3d",
        "3d-aspect": {
          true3d: false,
          depth: "5px",
        },
        title: {
          text: "Popularity Score",
        },
        subtitle: {
          text: "Based on average number of total Forks, Watchers, and Stars",
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
          label: { text: "" },
        },
        plot: {
          animation: {
            effect: "ANIMATION_EXPAND_BOTTOM",
            method: "ANIMATION_STRONG_EASE_IN",
            sequence: "ANIMATION_BY_NODE",
            speed: 750,
          },
          facets: {
            front: {
              "background-color": "#3EA4F9 #0055BF",
            },
            right: {
              "background-color": "#3EA4F9 #0055BF",
            },
            left: {
              "background-color": "#3EA4F9 #0055BF",
            },
            top: {
              "background-color": "white",
            },
            bottom: {
              "background-color": "white",
            },
          },
        },
      },
    };
  },
  created: function () {
    axios.get("https://api.github.com/repos/vuejs/vue").then((response) => {
      this.vueData = response.data;
      this.forks.series[0].values[0] = response.data.forks;
      this.watchers.series[0].values[0] = response.data.subscribers_count;
      this.stars.series[0].values[0] = response.data.watchers;
      this.popularity.series[0].values[0] = Math.round(
        (response.data.watchers + response.data.forks + response.data.subscribers_count) / 3
      );
    });
    axios.get("https://api.github.com/repos/angular/angular.js").then((response) => {
      this.angularData = response.data;
      this.forks.series[0].values[1] = response.data.forks;
      this.watchers.series[0].values[1] = response.data.subscribers_count;
      this.stars.series[0].values[1] = response.data.watchers;
      this.popularity.series[0].values[1] = Math.round(
        (response.data.watchers + response.data.forks + response.data.subscribers_count) / 3
      );
    });
    axios.get("https://api.github.com/repos/emberjs/ember.js").then((response) => {
      this.emberData = response.data;
      this.forks.series[0].values[2] = response.data.forks;
      this.watchers.series[0].values[2] = response.data.subscribers_count;
      this.stars.series[0].values[2] = response.data.watchers;
      this.popularity.series[0].values[2] = Math.round(
        (response.data.watchers + response.data.forks + response.data.subscribers_count) / 3
      );
    });
    axios.get("https://api.github.com/repos/sveltejs/svelte").then((response) => {
      this.svelteData = response.data;
      this.forks.series[0].values[3] = response.data.forks;
      this.watchers.series[0].values[3] = response.data.subscribers_count;
      this.stars.series[0].values[3] = response.data.watchers;
      this.popularity.series[0].values[3] = Math.round(
        (response.data.watchers + response.data.forks + response.data.subscribers_count) / 3
      );
    });
    axios.get("https://api.github.com/repos/jquery/jquery").then((response) => {
      this.jqueryData = response.data;
      this.forks.series[0].values[4] = response.data.forks;
      this.watchers.series[0].values[4] = response.data.subscribers_count;
      this.stars.series[0].values[4] = response.data.watchers;
      this.popularity.series[0].values[4] = Math.round(
        (response.data.watchers + response.data.forks + response.data.subscribers_count) / 3
      );
    });
    axios.get("https://api.github.com/repos/facebook/react").then((response) => {
      this.reactData = response.data;
      this.forks.series[0].values[5] = response.data.forks;
      this.watchers.series[0].values[5] = response.data.subscribers_count;
      this.stars.series[0].values[5] = response.data.watchers;
      this.popularity.series[0].values[5] = Math.round(
        (response.data.watchers + response.data.forks + response.data.subscribers_count) / 3
      );
    });
  },
  mounted: function () {},
  methods: function () {},
};
</script>
