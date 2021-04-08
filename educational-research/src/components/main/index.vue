<template>
  <div id="default">
    <!-- 路由切换时的切入效果， 从右边进入从左边出去 -->
        <transition enter-active-class="animated bounceInRight" leave-active-class="animated bounceOutLeft">
            <router-view></router-view>
        </transition>
  </div>
</template>

<script>
export default {
  data () {
    return {
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" rel="stylesheet/stylus" scoped>
@import './index.styl';
</style>
