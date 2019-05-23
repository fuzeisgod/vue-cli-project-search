<template>
  <div class="round-search-bar">
    <input type="text" class="input-search">
    <button class="btn-search">
      <img class="icon-search" src="./../assets/icon_search.svg" alt>
    </button>
  </div>
</template>

<script>
export default {
  name: "round-search-bar"
};
</script>

<style lang="less" scoped>
@import "./../themes/base.less";
.round-search-bar {
  .input-search {
    height: @round-search-bar-height;
    border-radius: @round-search-bar-border-radius;
    border: 1px solid #dfe1e5;
    padding: 20px;
  }
  .btn-search {
    height: @round-search-bar-height;
    .icon-search {
      width: 30px;
      height: 30px;
    }
  }
}
</style>
