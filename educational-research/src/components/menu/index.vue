<template>
  <div :class="$store.state.isCollapse == false ? 'menulist':'menulista'">
    <el-menu
      :collapse="$store.state.isCollapse"
      background-color="#091325"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
    >
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span slot="title">活动列表</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="1-1">活动列表</el-menu-item>
          <el-menu-item index="1-2">活动列表</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <span slot="title">导航二</span>
      </el-menu-item>
      <el-menu-item index="3">
        <i class="el-icon-document"></i>
        <span slot="title">导航三</span>
      </el-menu-item>
      <el-menu-item index="4">
        <i class="el-icon-setting"></i>
        <span slot="title">导航四</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>
<script>
export default {
  data() {
    return {
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
@import './index.styl';
</style>
