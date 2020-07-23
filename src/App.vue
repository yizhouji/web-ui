/*
 * @Author: zhaojingyu
 * @Date: 2020-05-21 11:01:33
 * @Last Modified by: zhaojingyu
 * @Last Modified time: 2020-05-26 19:33:54
 */
<template>
  <div id="app">
    <div class="loading" v-if="loading">
      <loading />
    </div>
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"></router-view>
  </div>
</template>

<script>
import loading from './components/loading'
export default {
  name: 'App',
  components: {
    loading
  },
  computed: {
    loading () {
      return this.$store.state.loading
    }
  },
  created () {
  }
}
</script>

<style lang="scss">

  * {
    margin: 0;
    padding: 0;
    border: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
  .loading {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #ffffff;
    z-index: 999999;
  }
  img {
    display: block;
  }
  .van-dialog {
    border-radius: 5px;
  }
  #app {
    // max-width: 500Px;
    margin: 0 auto;
    padding-bottom: constant(safe-area-inset-bottom);
    padding-bottom: env(safe-area-inset-bottom); // 兼容 ios11
  }
</style>
