<template>
  <v-app class="main">
    <MoviesHeader />
    <MoviesLoader />
    <MoviesNotification
      :type-msg="typeMsg"
      :msg="msg"
      v-if="showNotification"
    />
    <PosterBg :poster="posterBg" />
    <MoviesList :list="moviesList" @changePoster="onChangePoster" />
    <MoviesPagination
      :currentPage="currentPage"
      :per-page="moviesPerPage"
      :total="moviesLength"
      @pageChanged="onPageChanged"
    />
  </v-app>
</template>

<script>
import MoviesList from "@/components/MoviesList.vue";
import PosterBg from "@/components/PosterBg.vue";
import MoviesPagination from "@/components/MoviesPagination.vue";
import MoviesLoader from "@/components/MoviesLoader.vue";
import MoviesHeader from "@/components/MoviesHeader.vue";
import MoviesNotification from "@/components/MoviesNotification.vue";
import { mapActions, mapGetters, mapMutations } from "vuex";

export default {
  name: "App",
  components: {
    MoviesList,
    PosterBg,
    MoviesPagination,
    MoviesLoader,
    MoviesHeader,
    MoviesNotification,
  },
  data: () => ({
    posterBg: "",
    msg: "",
    typeMsg: "error",
    showNotification: false,
  }),
  computed: {
    ...mapGetters("movies", [
      "moviesList",
      "moviesPerPage",
      "moviesLength",
      "currentPage",
      "msgError",
    ]),
  },
  watch: {
    "$route.query": {
      handler: "onPageQueryChange",
      immediate: true,
      deep: true,
    },
    msgError: "showMsg",
  },
  methods: {
    ...mapActions("movies", ["fetchMovies", "changeCurrentPage"]),
    ...mapMutations("movies", ["MSG_ERROR"]),
    onChangePoster(poster) {
      this.posterBg = poster;
    },
    onPageChanged(page) {
      this.$router.push({ query: { page } });
    },
    onPageQueryChange({ page = this.currentPage }) {
      this.changeCurrentPage(Number(page));
    },
    showMsg() {
      this.msg = this.msgError;
      if (this.msg) {
        this.showNotification = true;
        setTimeout(() => {
          this.showNotification = false;
        }, 2500); 
      }
      setTimeout(() => {
          this.MSG_ERROR("");
        }, 2500);
      
    },
  },
};
</script>

<style>
.main {
  font-family: Arial, Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  position: relative;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
</style>
