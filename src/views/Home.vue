<template>
  <div class="home">
    <MySearchLogo class="my-search-logo"></MySearchLogo>
    <HomeSearchBar class="home-search-bar"></HomeSearchBar>
  </div>
</template>

<script>
// @ is an alias to /src
import MySearchLogo from "@/components/MySearchLogo.vue";
import HomeSearchBar from '@/components/HomeSearchBar.vue'

export default {
  name: "home",
  components: {
    MySearchLogo,
    HomeSearchBar
  }
};
</script>

<style lang="less" scoped>
.home{
  
}
.my-search-logo {
  margin-top: 60px;
  margin-bottom: 30px;
}
.home-search-bar{
  margin: auto;
}
</style>

