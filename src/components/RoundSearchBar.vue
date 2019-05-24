<template>
  <div class="round-search-bar">
    <input v-model="searchText" type="text" class="input-search" @keydown.enter="doSearch">
    <button class="btn-search" @click="doSearch">
      <img class="icon-search" src="./../assets/icon_search.svg" alt>
    </button>
  </div>
</template>

<script>
import Util from "@/common/Util.js";
export default {
  name: "round-search-bar",
  props: ["search"],
  data() {
    return {
      searchText: this.search
    };
  },
  methods: {
    doSearch() {
      Util.SearchAPI(this.$router, this.searchText);
    }
  }
};
</script>

<style lang="less" scoped>
@import "./../themes/base.less";
.round-search-bar {
  width: 400px;
  position: relative;
  display: inline-block;
  .input-search {
    outline: none;
    width: 100%;
    height: @round-search-bar-height;
    border-radius: @round-search-bar-border-radius;
    border: 1px solid #dfe1e5;
    padding: 20px;
    box-sizing: border-box;
    font-size: 1.2em;
  }
  .btn-search {
    height: @round-search-bar-height;
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    background: none;
    border: none;
    outline: none;
    .icon-search {
      width: 30px;
      height: 30px;
      margin-right: 15px;
    }
  }
}
</style>
