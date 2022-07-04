<template>
  <v-container>
    <MoviesNotification
      :type-msg="typeMsg"
      :msg="msgSuccess"
      v-if="showNotification"
    />
    <ModalWindow :dialog="dialog" :selected-movie="selectedMovie" @update:dialog="dialog = false" />
    <h3 class="list-title">{{ listTitle }}</h3>
    <v-row>
      <template v-if="isExist">
        <v-col lg="3" md="4" sm="6" cols="12" v-for="(movie, key) in list" :key="key">
          <MovieItem
            :movie="movie"
            @mouseover="onMouseOver(movie.Poster)"
            @removeItem="onRemoveItem"
            @showModal="onShowMovieInfo"
          />
        </v-col>
      </template>
      <template v-else>
        <div>Empty list</div>
      </template>
    </v-row>
  </v-container>
</template>

<script>
import MovieItem from "./MovieItem.vue";
import ModalWindow from "./ModalWindow.vue";
import MoviesNotification from "./MoviesNotification.vue";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "MoviesList",
  data: () => ({
    msgSuccess: "Movie deleted successful",
    typeMsg: "success",
    showNotification: false,
    selectedMovieID: "",
    dialog: false,
  }),
  components: {
    MovieItem,
    MoviesNotification,
    ModalWindow,
  },
  props: {
    list: {
      type: Object,
      default: () => ({}),
    },
  },
  computed: {
    ...mapGetters("movies", ["isSearch"]),
    isExist() {
      return Boolean(Object.keys(this.list).length);
    },
    listTitle() {
      return this.isSearch ? "Search result" : "IMDB Top 250";
    },
    selectedMovie() {
      return this.selectedMovieID ? this.list[this.selectedMovieID] : null;
    },
  },
  methods: {
    ...mapActions("movies", ["removeMovie"]),
    onMouseOver(poster) {
      this.$emit("changePoster", poster);
    },
    onRemoveItem({ id, title }) {
      if (confirm(`Вы уверены, что хотите удалить фильм ${title}?`)) {
        this.removeMovie(id);
        this.showNotification = true;
        setTimeout(() => {
          this.showNotification = false;
        }, 2500);
      }
    },
    onShowMovieInfo(id) {
      this.selectedMovieID = id;
      this.dialog = true;
    },
  },
  emits: ["changePoster"],
};
</script>

<style scoped>
.list-title {
  font-size: 50px;
  margin-bottom: 30px;
  color: #fff;
}
</style>
