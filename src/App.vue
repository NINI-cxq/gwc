<template>
  <div id="app">
    <el-row>
      <el-col :span="3"><div class="none"></div></el-col>
      <el-col :span="18">
        <layout></layout>
      </el-col>
      <el-col :span="5"><div class="none"></div></el-col>
    </el-row>
  </div>
</template>
<script>
    export default {
        name: "App",
        components:{
            layout:()=>import('@/components/layout')
        },

    }
</script>

<style>

  .none{
    min-height: 5px;
  }
  .center{
    text-align: center;
  }
</style>
