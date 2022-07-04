<template>
  <header class="header">
    <v-toolbar dark prominent color="deep-purple lighten-3">
      <v-container>
        <div class="d-flex">
          <v-toolbar-title> MovieDB </v-toolbar-title>
          <form>
            <input class="search-input" type="text" v-model="searchValue" />
          </form>
        </div>
      </v-container>
    </v-toolbar>
  </header>
</template>

<script>
import { mapActions } from "vuex";
import _ from "lodash";

export default {
  name: "MoviesHeader",
  data: () => ({
    searchValue: "",
  }),
  watch: {
    searchValue: "onSearchValueChanged",
  },
  methods: {
    ...mapActions("movies", [
      "searchMovies",
      "fetchMovies",
      "toggleSearchState",
    ]),
    onSearchValueChanged: _.debounce(function (val) {
      if (val) {
        this.searchMovies(val);
        this.toggleSearchState(true);
      } else {
        this.fetchMovies();
        this.toggleSearchState(false);
      }
    }, 750),
  },
};
</script>

<style scoped>
.header {
  opacity: 0.7;
}
a {
  text-decoration: none;
  color: inherit;
}
.search-input {
  color: #fff;
  border: 2px solid #fff;
  border-radius: 5px;
  background: url("@/assets/search.svg") no-repeat scroll 3px 3px;
  padding-left: 30px;
}
.search-input:focus {
  box-shadow: none;
  color: black;
  background: white;
  border-color: black;
}
.search-btn {
  color: #fff;
  margin-left: 10px;
}
.search-btn:hover {
  background-color: #fff;
  color: black;
}
</style>
