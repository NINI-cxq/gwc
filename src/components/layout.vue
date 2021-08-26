<template>
    <div id="layout">
        <navigation></navigation>
        <router-view/>
    </div>
</template>

<script>
    export default {
        name: "layout",
        components:{
            navigation:()=>import('@/components/navigation')
        },
        data(){
            return{

            }
        }
    }
</script>

<style scoped>

</style>