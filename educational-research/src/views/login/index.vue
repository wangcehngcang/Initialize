<template>
    <div class="login">
        <div class="registerDom">
            <div class="namepassword">
                
            </div>
            <el-button type="primary" @click="login">登录</el-button>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{

        }
    },
    methods:{
        login(){
            this.$router.push({path:'/master/overview'})
        }
    }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
    @import './index.styl';
</style>
