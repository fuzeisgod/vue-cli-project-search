<template>
  <div class="search-page">
    <SearchResultToolBar :search="msg"></SearchResultToolBar>
    <div v-for="info in searchResultList" :key="info.url">
      <SearchResultItem :info="info"></SearchResultItem>
    </div>
  </div>
</template>

<script>
// @ means "src"
import SearchResultToolBar from "@/components/SearchResultToolBar.vue";
import SearchResultItem from "@/components/SearchResultItem.vue";

import DB from "@/data/search.json";

export default {
  data() {
    return {
      msg: this.$route.params.searchText,
      searchResultList: []
    };
  },
  components: {
    SearchResultToolBar,
    SearchResultItem
  },
  created() {
    this.doSearchResult();
  },
  beforeRouteUpdate(to, from, next) {
    next();
    this.doSearchResult();
  },
  methods: {
    doSearchResult() {
      const searchText = this.$route.params.searchText;
      if (DB.hasOwnProperty(searchText)) {
        this.searchResultList = DB[searchText];
      } else {
        this.searchResultList = [];
      }
    }
  }
};
</script>
