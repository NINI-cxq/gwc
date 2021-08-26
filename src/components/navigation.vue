<template>
    <div id="navigation">
        <el-card>
            <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="navigate">
                <el-col :span="2" style="padding: 1px 5px">
                    <el-image src="https://img0.baidu.com/it/u=2173609813,2095459094&fm=26&fmt=auto&gp=0.jpg"></el-image>
                </el-col>
                <el-menu-item index="1">首页</el-menu-item>
                <el-menu-item index="2">全部分类</el-menu-item>
                <!--搜索框-->
                <el-menu-item>
                    <el-autocomplete
                        v-model="searchInput"
                        :fetch-suggestions="querySearchAsync"
                        placeholder="请输入内容"
                        @select="handleSelect"
                        style="width:400px"
                        prefix-icon="el-icon-search"
                        @blur="search"
                        @keyup.enter.native="search" >
                    </el-autocomplete>
                </el-menu-item>
                <el-menu-item index="3">我的购物车</el-menu-item>
                <el-menu-item index="4">我的订单</el-menu-item>
                <el-menu-item index="5" @click="drawer = true" v-if="isLogin">个人中心</el-menu-item>
                <el-menu-item index="5" @click="dialogVisible = true" v-loading.fullscreen.lock="fullscreenLoading" v-if="!isLogin" >登录/注册</el-menu-item>
            </el-menu>
        </el-card>
        <!--登录注册-->
        <el-dialog
                :visible.sync="dialogVisible"
                width="30%">
            <el-form>
                <el-form-item label="账号">
                    <el-input v-model="loginForm.username" placeholder="请输入账号"></el-input>
                </el-form-item>
                <el-form-item label="密码">
                    <el-input placeholder="请输入密码" v-model="loginForm.password" show-password></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="login">登录</el-button>
                    <el-button>注册</el-button>
                </el-form-item>
            </el-form>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
            </span>
        </el-dialog>
        <!--个人主页-->
        <el-drawer
            :visible.sync="drawer"
            direction="rtl"
            size="20%"
            :show-close="false">
            <div class="avator center">
                <el-avatar  :size="70" :src="this.userInfo.avator"></el-avatar>
            </div>
            <div class="username center">
                <span>{{this.userInfo.username}}</span>
            </div>
            <div class="main center">
                <el-menu :default-active="userActiveIndex" class="" mode="vertical" @select="userDrawerMenu" v-loading.fullscreen.lock="fullscreenLoading">
                    <el-menu-item index="1">个人资料</el-menu-item>
                    <el-menu-item index="2">我的订单</el-menu-item>
                    <el-menu-item index="3">我的购物车</el-menu-item>
                    <el-menu-item index="4">我的收藏</el-menu-item>
                    <el-menu-item index="5">浏览历史</el-menu-item>
                    <el-menu-item index="6">注销</el-menu-item>
                </el-menu>
            </div>
        </el-drawer>
    </div>
</template>

<script>
    import {validatenull} from "@/utils/validate";
    export default {
        name: "navigation",
        components:{},
        computed:{
            userInfo(){
                return this.$store.getters.user
            },
            isLogin(){
                return !validatenull(this.userInfo.username)
            }
        },
        data(){
            return{
                activeIndex:'1',
                userActiveIndex:'1',
                drawer:false,

                restaurants:[],
                searchInput:'',
                timeout:null,
                dialogVisible:false,
                loginForm:{
                    username:'',
                    password:''
                },
                fullscreenLoading:false
            }
        },
        methods: {
            loadAll() {
                return [
                    { "value": "三全鲜食（北新泾店）", "address": "长宁区新渔路144号" },
                    { "value": "Hot honey 首尔炸鸡（仙霞路）", "address": "上海市长宁区淞虹路661号" },
                    { "value": "新旺角茶餐厅", "address": "上海市普陀区真北路988号创邑金沙谷6号楼113" },
                    { "value": "泷千家(天山西路店)", "address": "天山西路438号" },
                    { "value": "胖仙女纸杯蛋糕（上海凌空店）", "address": "上海市长宁区金钟路968号1幢18号楼一层商铺18-101" },
                    { "value": "贡茶", "address": "上海市长宁区金钟路633号" },
                    { "value": "豪大大香鸡排超级奶爸", "address": "上海市嘉定区曹安公路曹安路1685号" },
                    { "value": "茶芝兰（奶茶，手抓饼）", "address": "上海市普陀区同普路1435号" },
                    { "value": "十二泷町", "address": "上海市北翟路1444弄81号B幢-107" },
                    { "value": "星移浓缩咖啡", "address": "上海市嘉定区新郁路817号" },
                    { "value": "阿姨奶茶/豪大大", "address": "嘉定区曹安路1611号" },
                    { "value": "新麦甜四季甜品炸鸡", "address": "嘉定区曹安公路2383弄55号" },
                    { "value": "Monica摩托主题咖啡店", "address": "嘉定区江桥镇曹安公路2409号1F，2383弄62号1F" },
                    { "value": "浮生若茶（凌空soho店）", "address": "上海长宁区金钟路968号9号楼地下一层" },
                    { "value": "NONO JUICE  鲜榨果汁", "address": "上海市长宁区天山西路119号" },
                    { "value": "CoCo都可(北新泾店）", "address": "上海市长宁区仙霞西路" },
                    { "value": "快乐柠檬（神州智慧店）", "address": "上海市长宁区天山西路567号1层R117号店铺" },
                    { "value": "Merci Paul cafe", "address": "上海市普陀区光复西路丹巴路28弄6号楼819" },
                    { "value": "猫山王（西郊百联店）", "address": "上海市长宁区仙霞西路88号第一层G05-F01-1-306" },
                    { "value": "枪会山", "address": "上海市普陀区棕榈路" },
                    { "value": "纵食", "address": "元丰天山花园(东门) 双流路267号" },
                    { "value": "钱记", "address": "上海市长宁区天山西路" },
                    { "value": "壹杯加", "address": "上海市长宁区通协路" },
                    { "value": "唦哇嘀咖", "address": "上海市长宁区新泾镇金钟路999号2幢（B幢）第01层第1-02A单元" },
                    { "value": "爱茜茜里(西郊百联)", "address": "长宁区仙霞西路88号1305室" },
                    { "value": "爱茜茜里(近铁广场)", "address": "上海市普陀区真北路818号近铁城市广场北区地下二楼N-B2-O2-C商铺" },
                    { "value": "鲜果榨汁（金沙江路和美广店）", "address": "普陀区金沙江路2239号金沙和美广场B1-10-6" },
                    { "value": "开心丽果（缤谷店）", "address": "上海市长宁区威宁路天山路341号" },
                    { "value": "超级鸡车（丰庄路店）", "address": "上海市嘉定区丰庄路240号" },
                    { "value": "妙生活果园（北新泾店）", "address": "长宁区新渔路144号" },
                    { "value": "香宜度麻辣香锅", "address": "长宁区淞虹路148号" },
                    { "value": "凡仔汉堡（老真北路店）", "address": "上海市普陀区老真北路160号" },
                    { "value": "港式小铺", "address": "上海市长宁区金钟路968号15楼15-105室" },
                    { "value": "蜀香源麻辣香锅（剑河路店）", "address": "剑河路443-1" },
                    { "value": "北京饺子馆", "address": "长宁区北新泾街道天山西路490-1号" },
                    { "value": "饭典*新简餐（凌空SOHO店）", "address": "上海市长宁区金钟路968号9号楼地下一层9-83室" },
                    { "value": "焦耳·川式快餐（金钟路店）", "address": "上海市金钟路633号地下一层甲部" },
                    { "value": "动力鸡车", "address": "长宁区仙霞西路299弄3号101B" },
                    { "value": "浏阳蒸菜", "address": "天山西路430号" },
                    { "value": "四海游龙（天山西路店）", "address": "上海市长宁区天山西路" },
                    { "value": "樱花食堂（凌空店）", "address": "上海市长宁区金钟路968号15楼15-105室" },
                    { "value": "壹分米客家传统调制米粉(天山店)", "address": "天山西路428号" },
                    { "value": "福荣祥烧腊（平溪路店）", "address": "上海市长宁区协和路福泉路255弄57-73号" },
                    { "value": "速记黄焖鸡米饭", "address": "上海市长宁区北新泾街道金钟路180号1层01号摊位" },
                    { "value": "红辣椒麻辣烫", "address": "上海市长宁区天山西路492号" },
                    { "value": "(小杨生煎)西郊百联餐厅", "address": "长宁区仙霞西路88号百联2楼" },
                    { "value": "阳阳麻辣烫", "address": "天山西路389号" },
                    { "value": "南拳妈妈龙虾盖浇饭", "address": "普陀区金沙江路1699号鑫乐惠美食广场A13" }
                ];
            },
            querySearchAsync(queryString, cb) {
                var restaurants = this.restaurants;
                var results = queryString ? restaurants.filter(this.createStateFilter(queryString)) : restaurants;

                clearTimeout(this.timeout);
                this.timeout = setTimeout(() => {
                    cb(results);
                }, 3000 * Math.random());
            },
            createStateFilter(queryString) {
                return (state) => {
                    return (state.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
                };
            },
            handleSelect(item) {
                console.log(item);
            },
            search(){
                console.log(this.searchInput);
                this.$router.push({path:'/category/'+this.searchInput})
            },
            navigate(key){
                switch(key){
                    case "1":this.$router.push({path:'/'});break;
                    case "2":this.$router.push({path:'/category'});break;
                    case "3":this.$router.push({path:'/shopcar'});break;
                }

            },
            userDrawerMenu(key){
                switch(key){
                    case "1":break;
                    case "2":break;
                    case "3":break;
                    case "4":break;
                    case "5":break;
                    case "6": this.logout()
                              ;break;
                }

            },
            login(){
                this.fullscreenLoading=true;
                this.$store.dispatch('login').then(()=>{
                    this.fullscreenLoading=false;
                    this.$message({
                        message:'登录成功',
                        type:'success'
                    })
                })
                this.dialogVisible = false
            },
            logout(){
                this.fullscreenLoading=true;
                this.$store.dispatch('logout').then(()=>{
                    this.fullscreenLoading=false;
                    this.$message({
                        message:'已退出登录',
                        type:'success'
                    })
                })
                this.drawer = false
            }
        },
        mounted() {
            this.restaurants = this.loadAll();
        }
    }
</script>

<style scoped>
.avator{

}
.username{

}
.main{

}

</style>