<template>
    <div id="shopcar">
        <el-row>
            <div>
                <span>全部商品{{total}}</span>
            </div>
            <div>
                <span>配送至：</span>
                <el-select v-model="address" placeholder="请选择">
                    <el-option
                        v-for="(item,index) in userInfo.addressList"
                        :key="index"
                        :label="item"
                        :value="item">
                    </el-option>
                </el-select>
            </div>
        </el-row>
    </div>
</template>

<script>
    export default {
        name: "shopcar",
        components:{},
        data(){
            return{
                total:0,
                address:''
            }
        },
        computed:{
            userInfo(){
                return this.$store.getters.user
            }
        }
    }
</script>

<style scoped>

</style>