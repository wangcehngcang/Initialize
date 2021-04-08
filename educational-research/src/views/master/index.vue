<template>
    <el-container>
        <el-aside height="100%" style="width:auto;">
            <Menua />
        </el-aside>
        <el-container>
            <el-header>
                <Heada />
            </el-header>
            <el-main>
                <Maina />
            </el-main>
        </el-container>
    </el-container>
</template>
<script>
import Menua from '@/components/menu';
import Heada from '@/components/head';
import Maina from '@/components/main'
export default {
    components:{
        Menua,
        Heada,
        Maina
    },
    data(){
        return{

        }
    }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
@import './index.styl';
</style>
