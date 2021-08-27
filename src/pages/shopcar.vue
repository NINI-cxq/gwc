<template >
    <div id="shopcar">
        <el-card ref="contents">
            <el-row>
                <div >
                    <span style="font-size: 1.3em;color: #409EFF">全部商品&nbsp;{{shopCar.length}}</span>
                </div>
                <div class="trans">
                    <span>配送至：</span>
                    <el-select v-model="address" placeholder="请选择" >
                        <el-option
                                v-for="(item,index) in userInfo.addressList"
                                :key="index"
                                :label="item"
                                :value="item">
                        </el-option>
                    </el-select>
                </div>
            </el-row>

            <el-row style="padding: 35px 0 0 25px">
                <el-col :span="3"><el-checkbox v-model="allChecked">全选</el-checkbox></el-col>
                <el-col :span="11"><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;商品</span></el-col>
                <el-col :span="3"><span>单价</span></el-col>
                <el-col :span="3"><span>数量</span></el-col>
                <el-col :span="2"><span>小计</span></el-col>
                <el-col :span="2"><span>操作</span></el-col>
            </el-row>
            <el-card shadow="none" v-for="(item,index) in shopCar" :key="index">
                <el-row style="padding: 20px 0 0 0">
                    <el-col class="padding10" :span="1"><el-checkbox v-model="item.checked"></el-checkbox></el-col>
                    <el-col class="padding10" :span="3"><el-image :src="item.imgUrl"></el-image>&nbsp;&nbsp;&nbsp;&nbsp;</el-col>
                    <el-col class="padding10" :span="10"><span>{{item.name}}</span></el-col>
                    <el-col class="padding10" :span="2"><span>&nbsp;&nbsp;{{item.unitPrice}}</span></el-col>
                    <el-col class="padding10" :span="4">&nbsp;&nbsp;<el-input-number v-model="item.count" :min="1" label="" size="mini"></el-input-number></el-col>
                    <el-col class="padding10" :span="2"><span>&nbsp;&nbsp;&nbsp;&nbsp;{{item.unitPrice*item.count}}</span></el-col>
                    <el-col class="padding10" :span="2" >&nbsp;&nbsp;<el-button size="mini" @click="deleteItem(item)" style="background-color: aliceblue">删除</el-button></el-col>
                </el-row>
            </el-card>
        </el-card>
        <el-card class="footer">
            <el-row style="width:100%">
                <el-col style="padding: 18px 0 0 0" :span="3"><el-checkbox v-model="allChecked">全选</el-checkbox></el-col>
                <el-col class="padding10" :span="9" ><el-button type="text" @click="deleteChecked()">删除选中商品</el-button></el-col>
                <el-col class="padding10" :span="3"><el-button type="text">移入关注</el-button></el-col>
                <el-col style="padding: 18px 0 0 0" :span="3"><span>已选{{totalChecked}}件商品</span></el-col>
                <el-col style="padding: 18px 0 0 0" :span="4"><span>总价：￥{{totalPrice}}</span></el-col>
                <el-col  :span="2"><el-button style="background-color: aliceblue;box-shadow: 5px 5px 5px 0" @click="purchase" >结算</el-button></el-col>
            </el-row>
        </el-card>

    </div>
</template>

<script>
    export default {
        name: "shopcar",
        components:{},
        data(){
            return{
                total:0,
                address:'',
                allChecked:false,
            }
        },
        watch:{
            allChecked(val){
                if(val === true){
                    this.shopCar.forEach((item)=>{
                        item.checked = true
                    })
                }else if(val === false){
                    this.shopCar.forEach((item)=>{
                        item.checked = false
                    })
                }

            }
        },
        computed:{
            userInfo(){
                return this.$store.getters.user
            },
            shopCar(){
                return this.$store.getters.shopCar
            },
            totalChecked(){
                let totalChecked = 0;
                this.shopCar.forEach((item)=>{
                    if(item.checked){
                        totalChecked += item.count
                    }
                })
                return totalChecked;
            },
            totalPrice(){
                let totalPrice = 0;
                this.shopCar.forEach((item)=>{
                    if(item.checked){
                        totalPrice +=item.unitPrice * item.count
                    }
                })
                return totalPrice;
            },


        },
        methods:{
            deleteItem(item){
                this.$confirm('确认删除？')
                    .then(()=>{
                        this.shopCar.splice(this.shopCar.indexOf(item),1)
                    })
                    .catch(()=>{
                        this.$message.error('这么纠结吗？')
                    })
            },
            deleteChecked(){
                this.$confirm('确认删除？')
                    .then(()=>{
                        [...this.shopCar].forEach((item)=>{
                            if(item.checked){
                                this.shopCar.splice(this.shopCar.indexOf(item,1))
                            }
                        })
                    })
                    .catch(()=>{
                        this.$message.error('这么纠结吗？')
                    })

            },
            purchase(){

            },
        },

    }
</script>

<style scoped>
    .trans{
        position: absolute;
        left:65%;
        top:0%;
        padding: 0 15px;

    }
    .padding10{
        padding: 10px 0 0 0;
    }
    .footer{
        position: fixed;
        bottom:0;
        width: 74%;
    }

</style>