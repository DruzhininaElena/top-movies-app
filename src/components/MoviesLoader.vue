<template>
  <div class="loader-wrap d-flex justify-center align-center" v-if="isShowLoader">
    <v-progress-circular indeterminate color="purple"></v-progress-circular>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "MoviesLoader",
  computed: {
    ...mapGetters(["isShowLoader"]),
  },
};
</script>

<style scoped>
.loader-wrap {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 999;
}
</style>
