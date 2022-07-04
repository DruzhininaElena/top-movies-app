<template>
  <div class="movie-info-wrap">
    <header class="movie-info-header">
      <h6 class="movie-header-title">Movie info</h6>
    </header>
    <div class="movie-info-content">
      <v-row>
        <v-col md="3">
          <div class="movie-poster-wrap">
            <div class="movie-poster" :style="posterStyle"></div>
          </div>
        </v-col>
        <v-col md="9">
          <h3 class="movie-title">{{ movie.Title }}</h3>
          <div class="d-flex align-center">
            <v-rating
              v-model="rating"
              density="compact"
              length="10"
              bg-color="orange-lighten-1"
              color="yellow-accent-4"
            ></v-rating>
            <div class="ml-2">({{ rating }}/10)</div>
          </div>
          <p class="movie-description unselectable">{{ movie.Plot }}</p>
          <div class="mt-3 mb-4">
            <v-badge color="success" :content="movie.Year" inline></v-badge>
            <v-badge color="success" :content="movie.Runtime" inline></v-badge>
            <v-badge color="success" :content="movie.Genre" inline></v-badge>
            <v-badge color="success" :content=" movie.Language" inline></v-badge>
          </div>
          <div class="movie-table">
            <v-table>
            <tbody>
              <tr>
                <th>Production</th>
                <td>{{ movie.Production }}</td>
              </tr>
              <tr>
                <th>Country</th>
                <td>{{ movie.Country }}</td>
              </tr>
              <tr>
                <th>Director</th>
                <td>{{ movie.Director }}</td>
              </tr>
              <tr>
                <th>Writer</th>
                <td>{{ movie.Writer }}</td>
              </tr>
              <tr>
                <th>Actors</th>
                <td>{{ movie.Actors }}</td>
              </tr>
              <tr>
                <th>Awards</th>
                <td>{{ movie.Awards }}</td>
              </tr>
            </tbody>
          </v-table>
          </div>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
export default {
  name: "MovieInfoContent",
  props: {
    movie: {
      type: Object,
      required: true,
    },
  },
  data: () => ({
    defaultPosterBg:
      "linear-gradient(45deg,rgb(0, 3, 38) 0%,rgb(82, 15, 117) 100%)",
  }),
  computed: {
    posterStyle() {
      return {
        "background-image": this.posterBg,
      };
    },
    posterBg() {
      return this.movie ? `url(${this.movie.Poster})` : this.defaultPosterBg;
    },
    rating() {
      return Number(this.movie.imdbRating);
    },
  },
};
</script>

<style scoped>
.unselectable {
  -webkit-touch-callout: none; 
  -webkit-user-select: none;   
  -khtml-user-select: none;    
  -moz-user-select: none;      
  -ms-user-select: none;       
  user-select: none;
}
.movie-info-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background: linear-gradient(45deg, rgb(0, 3, 38) 0%, rgb(82, 15, 117) 100%);
  color: #fff;
}

.movie-header-title {
  margin-bottom: 0;
  line-height: 1.5;
  font-size: 1.25rem;
}

.movie-info-content {
  padding: 1rem;
  background-color: #fff;
}

.movie-poster-wrap {
  position: relative;
  padding-bottom: 150%;
  border-radius: 5px;
  overflow: hidden;
  transition: all 0.2s ease;
}

.movie-poster {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center center;
}

.movie-title {
  font-size: 3.5rem;
  font-weight: 300;
  line-height: 1.2;
}

.movie-description {
  font-size: 1.25rem;
  font-weight: 300;
}

.movie-table >>> .v-theme--light {
  --v-hover-opacity: none;
}

</style>
