<template>
  <div class="movie-item mb-2">
    <div class="movie-item-poster" :style="posterBg"></div>
    <div class="movie-info-wrap">
      <div class="movie-item-info">
        <h3 class="movie-title">{{ movie.Title }}</h3>
        <span class="movie-year">{{ movie.Year }}</span>
      </div>
      <div>
        <v-row>
          <v-col>
            <v-btn
              class="movie-btn"
              variant="outlined"
              @click="showInfoModalEvent"
              block
              >Info</v-btn
            >
          </v-col>
          <v-col>
            <v-btn
              class="movie-btn"
              variant="outlined"
              block
              @click="emitRemoveEvent"
              >Remove</v-btn
            >
          </v-col>
        </v-row>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MovieItem",
  props: {
    movie: {
      type: Object,
      required: true,
    },
  },
  computed: {
    posterBg() {
      if(this.movie.Poster) {
        return {
          "background-image": `url(${this.movie.Poster})`,
        };
      } else {
        return {
          "background-image": `url("@/assets/bg-card.webp")`,
        };
      }

    },
  },
  methods: {
    emitRemoveEvent() {
      this.$emit("removeItem", {
        id: this.movie.imdbID,
        title: this.movie.Title,
      });
    },
    showInfoModalEvent() {
      this.$emit("showModal", this.movie.imdbID);
    }
  },
};
</script>

<style scoped>
.movie-item {
  position: relative;
  cursor: pointer;
  border-radius: 5px;
  overflow: hidden;
  transition: all 0.2s ease;
  height: 500px;
}
.movie-item:hover {
  box-shadow: 0 5px 30px rgba(0, 0, 0, 0.7);
  transform: scale(1.02);
}
.movie-item-poster {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  z-index: -1;
}
.movie-info-wrap {
  padding: 20px 10px;
  height: 100%;
  opacity: 0;
  transition: all 0.2s ease;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.movie-title {
  font-size: 20px;
  color: #fff;
}

.movie-year {
  font-size: 14px;
  color: #fff;
}

.movie-item:hover .movie-info-wrap {
  opacity: 1;
  background-color: rgba(0, 0, 0, 0.7);
}

.movie-btn {
  color: #fff;
}
.movie-btn:hover {
  background-color: #fff;
  color: black;
}
</style>
