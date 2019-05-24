<template>
  <div class="search-result-toolbar">
    <img class="logo" src="./../assets/mysearch_logo_small.png" @click="goHome">
    <RoundSearchBar :search="search"></RoundSearchBar>
  </div>
</template>

<script>
// @ means "src"
import RoundSearchBar from "@/components/RoundSearchBar";
export default {
  components: {
    RoundSearchBar
  },
  methods: {
    goHome() {
      this.$router.push("/");
    }
  },
  props: ["search"]
};
</script>

<style lang="less" scoped>
@import "./../themes/base.less";
.search-result-toolbar {
  text-align: left;
  padding: 20px;
  border-bottom: 1px solid #dfe1e5;
  .logo {
    height: @round-search-bar-height * 0.8;
    vertical-align: middle;
    margin-right: 20px;
  }
}
</style>

