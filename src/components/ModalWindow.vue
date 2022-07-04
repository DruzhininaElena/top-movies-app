<template>
  <div class="movie-modal">
    <v-dialog v-model="propModel" width="80%">
      <v-card>
        <MovieInfoContent :movie="selectedMovie"/>
        <v-card-actions>
          <v-btn color="primary" block @click="propModel = false"
            >Close</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>

import MovieInfoContent from "./MovieInfoContent.vue"
export default {
  name: "ModalWindow",
  components: {
    MovieInfoContent
  },
  props: {
    dialog: {
      type: Boolean,
      require: true,
    },
    selectedMovie: {
      type: Object,
      require: true
    }
  },
  computed: {
    propModel: {
      get() {
        return this.dialog;
      },
      set() {
        this.$emit("update:dialog");
      },
    },
  },
};
</script>

<style scoped>

</style>
