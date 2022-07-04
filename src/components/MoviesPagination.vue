<template>
  <div class="movies-pagination">
     <v-container>
        <v-row justify="center">
          <v-col cols="4">
            <v-container class="max-width">
              <v-pagination
                v-model="page"
                :length="paginationLength"
                :total-visible="4"
              ></v-pagination>
            </v-container>
          </v-col>
        </v-row>
      </v-container>
  </div>
</template>

<script>
export default {
  name: "MoviesPagination",
  data: () => ({
    page: 1,
  }),
  props: {
    currentPage: {
      type: Number,
      default: 1
    },
    total: {
      type: Number,
      default: 1
    },
    perPage: {
      type: Number,
      default: 1
    }
  },
  watch: {
    page(newCurrentPage) {
      this.$emit("pageChanged", newCurrentPage);
    }
  },
  computed: {
    paginationLength() {
      return Math.ceil(this.total / this.perPage)
    }
  },
  created() {
    this.page = this.currentPage;
  }
};
</script>

<style scoped>
.movies-pagination {
  margin-top: auto;
  color: #fff;
}

.movies-pagination >>> .v-pagination .v-btn {
  border: 1px solid #fff;
}

.movies-pagination >>> .v-btn--disabled.v-btn--disabled {
  color: rgb(172, 172, 172);
}

.movies-pagination >>> .v-theme--light {
  --v-border-opacity: 0.5;
}
</style>
