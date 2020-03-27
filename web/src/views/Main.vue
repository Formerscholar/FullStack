<template>
  <div id="Main">
    <div class="topbar bg-black d-flex ai-center">
      <img src="../assets/logo.png" alt height="35" />
      <div class="flex-1">
        <div class="text-white">王者荣耀</div>
        <div class="text-grey fs-xss">团队成就更多</div>
      </div>
      <button type="button" class="btn bg-primay">立即下载</button>
    </div>
    <div class="nav bg-primay">
      <div class="s-nav d-flex text-white jc-around">
        <div class="nav-item active">
          <router-link class="nav-link" tag="div" to="/">首页</router-link>
        </div>
        <div class="nav-item">
          <router-link class="nav-link" tag="div" to="/">攻略中心</router-link>
        </div>
        <div class="nav-item">
          <router-link class="nav-link" tag="div" to="/">赛事中心</router-link>
        </div>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>
    
<script>
export default {
  name: "Main",
  components: {}
};
</script>
    
<style lang="scss">
.topbar {
  padding: 0.625rem;
  text-align: left;
  img {
    margin-right: 0.625rem;
  }
}
.nav {
  padding: 0.625rem;
}
</style>
