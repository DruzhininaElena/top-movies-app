<template>
  <div class="movies-notification">
    <v-alert :type="typeMsg">{{ msg }}</v-alert>
  </div>
</template>

<script>

export default {
  name: "MoviesNotification",
  props: {
    typeMsg: {
      type: String,
      default: 'info'
    },
    msg: {
      type: String,
      required: true
    }
  },
};
</script>

<style scoped>
.movies-notification {
  position: fixed;
  top: 0;
  right: 0;
  margin: 25px 25px 0 0;
  z-index: 50;
}
</style>
