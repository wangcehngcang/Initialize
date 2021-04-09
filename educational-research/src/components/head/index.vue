<template>
  <div class="head">
    <div class="headtext">
      <div class="zhankaiOrshoqi">
        <el-tooltip class="item" effect="dark" v-if="$store.state.isCollapse == true" content="展开" placement="right">
          <i class="iconfont iconzhankai"  @click="zhuangtai(false)"></i>
        </el-tooltip>
        <el-tooltip class="item" effect="dark"  v-else content="收起" placement="right">
          <i class="iconfont iconshouqi" @click="zhuangtai(true)"></i>
        </el-tooltip>
        
        <!-- <el-radio-group v-model="isCollapse">
          
            <el-radio-button :label="false"><i class="iconfont iconzhankai"></i></el-radio-button>
            <el-radio-button :label="true"><i class="iconfont iconshouqi"></i></el-radio-button>
        </el-radio-group> -->
      </div>
    </div>
    <div class="headrouter">
      <el-breadcrumb separator="/">
        <!-- <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item> -->
        <!-- <el-breadcrumb-item><a href="/">活动管理</a></el-breadcrumb-item> -->
        <el-breadcrumb-item>活动列表</el-breadcrumb-item>
        <el-breadcrumb-item>活动详情</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      
    }
  },
  methods:{
    zhuangtai(val){
      // localStorage.isCollapse = val
      this.$store.commit('setisCollapse',val)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" rel="stylesheet/stylus" scoped>
@import './index.styl';
</style>
