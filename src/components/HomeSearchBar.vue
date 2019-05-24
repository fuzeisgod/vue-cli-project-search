<template>
  <div class="home-search-bar">
    <input class="input-search" v-model="searchText" @keydown.enter="doSearch">
    <button class="btn-search" @click="doSearch">搜索一下</button>
  </div>
</template>

<script>
import Util from "@/common/Util.js";
export default {
  data() {
    return {
      searchText: ""
    };
  },
  methods: {
    doSearch() {
      Util.SearchAPI(this.$router, this.searchText)
    }
  }
};
</script>

<style lang="less" scoped>
@import "./../themes/base.less";
.home-search-bar {
  max-width: 650px;
}
.input-search {
  outline: none;
  width: 70%;
  height: @home-search-bar-height;
  box-sizing: border-box;
  border: 1px solid #dfe1e5;
  vertical-align: bottom;
  font-size: 1.2em;
  border-radius: @home-search-bar-border-radius 0 0
    @home-search-bar-border-radius;
  padding: 20px;
}
.btn-search {
  outline: none;
  width: 30%;
  height: @home-search-bar-height;
  box-sizing: border-box;
  background-color: @color-primary;
  color: #fff;
  font-size: 1.5em;
  border: none;
  border-radius: 0 @home-search-bar-border-radius @home-search-bar-border-radius
    0;
}
</style>
