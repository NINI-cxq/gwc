<template>
    <div id="app">
        <indexContent></indexContent>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: "index",
        components:{
            indexContent:()=>import('@/views/indexContent')
        },
        data(){
            return{
                activeIndex:'1'
            }
        }
    }
</script>

<style scoped>

</style>