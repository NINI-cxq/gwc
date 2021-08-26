<template>
    <div id="category">
        <el-card>
            <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="console.log('select menu')">
                <el-menu-item index="1">手机</el-menu-item>
                <el-menu-item index="2">电脑</el-menu-item>
                <el-menu-item index="3">服装</el-menu-item>
                <el-menu-item index="4">家具</el-menu-item>
                <el-menu-item index="5">生鲜</el-menu-item>
                <el-menu-item index="6">母婴</el-menu-item>
                <el-menu-item index="7">艺术</el-menu-item>
                <el-menu-item index="8">学习</el-menu-item>
                <el-menu-item index="9">美妆</el-menu-item>
                <el-menu-item index="10">医疗</el-menu-item>
                <el-menu-item index="11">交通</el-menu-item>
                <el-menu-item index="12">理财</el-menu-item>
            </el-menu>
            <el-row style="padding:10px">
                    <el-breadcrumb separator="/">
                        <el-breadcrumb-item :to="{ path: '/' }">全部分类</el-breadcrumb-item>
                        <el-breadcrumb-item><a href="/">手机</a></el-breadcrumb-item>
                    </el-breadcrumb>
            </el-row>
            <el-row style="padding:5px">
                <span>已选标签：</span>
                <el-tag
                        :key="tag"
                        v-for="tag in dynamicTags"
                        closable
                        :disable-transitions="false"
                        @close="handleClose(tag)">
                    {{tag}}
                </el-tag>
            </el-row>
            <div>
                <el-row v-for="(category,catIndex) in categoryList" :key="catIndex">
                    <el-col :span="1.7" class="title"><span>{{category.name}}</span></el-col>
                    <el-col :span="22">
                        <el-row >
                            <el-col class="tag" :span="3" v-for="(tag,tagIndex) in category.tagList" :key="tagIndex">
                                <span @click="printTag(catIndex,tagIndex)">{{tag}}</span>
                            </el-col>
                        </el-row>
                    </el-col>
                </el-row>
            </div>
        </el-card>
        <el-row>
            <el-card>
                <el-row>
                    <el-col :span="3">
                        <el-image src="https://img13.360buyimg.com/babel/s320x320_jfs/t1/181908/15/200/45273/607fbe15E82aac16e/1f8b2323f5b2590f.jpg!cc_320x320.webp"></el-image>
                        <span class="info">Apple iPhone 12（A2404）紫色</span>
                        <span class="price">￥5899.00</span>
                    </el-col>
                    <el-col :span="1"><div class="none"></div></el-col>
                    <el-col :span="3">
                        <el-image src="https://img10.360buyimg.com/babel/s320x320_jfs/t1/194648/10/16098/173905/61076718E41232205/52c996d753ee11b5.jpg!cc_320x320.webp"></el-image>
                        <span class="info">HUAWEI P50 Pro 4G全网通  麒麟9000芯片</span>
                        <span class="price">￥7488.00</span>
                    </el-col>
                    <el-col :span="1"><div class="none"></div></el-col>
                    <el-col :span="3">
                        <el-image src="https://img12.360buyimg.com/babel/s320x320_jfs/t1/179050/4/10914/366094/60d42961E4af23837/c3365df1bacd3ad9.jpg!cc_320x320.webp"></el-image>
                        <span class="info">努比亚 nubia Z30Pro 16GB + 512GB 黑色</span>
                        <span class="price">￥5999.00</span>
                    </el-col>
                    <el-col :span="1"><div class="none"></div></el-col>
                    <el-col :span="3">
                        <el-image src="https://img13.360buyimg.com/babel/s320x320_jfs/t1/153021/14/11977/67298/5fe949d2E2a2e2cbc/f726437882607c3e.jpg!cc_320x320.webp"></el-image>
                        <span class="info">小米11 5G 骁龙888 2K AMOLE曲面屏 </span>
                        <span class="price">￥3799.00</span>
                    </el-col>
                    <el-col :span="1"><div class="none"></div></el-col>
                    <el-col :span="3">
                        <el-image src="https://img10.360buyimg.com/babel/s320x320_jfs/t1/179154/7/20590/224539/61232324Ed96178a7/98d8ad97970f31f0.jpg!cc_320x320.webp"></el-image>
                        <span class="info">联想拯救者电竞手机2骁龙888黑色256GB  </span>
                        <span class="price">￥5299.00</span>
                    </el-col>
                    <el-col :span="1"><div class="none"></div></el-col>
                    <el-col :span="3">
                        <el-image src="https://img14.360buyimg.com/babel/s320x320_jfs/t1/120407/8/18203/48564/5fab06c3E62aa043b/8634834af77c3cc5.jpg!cc_320x320.webp"></el-image>
                        <span class="info">Apple MacBook Air 13.3 8G 256G 银色</span>
                        <span class="price">￥9999.00</span>
                    </el-col>
                    <el-col :span="1"><div class="none"></div></el-col>
                </el-row>
            </el-card>
        </el-row>
    </div>
</template>

<script>
    export default {
        name: "category",
        components:{},
        props:['keyword'],
        data(){
            return{
                activeIndex:'',
                inputVisible: false,
                inputValue: '',
                categoryList:[
                    {
                        name:'品牌',
                        tagList:
                            ['华为(HUAWEI)','OPPO','黑鲨','一加','三星','小米(MI)','荣耀','魅族','Apple','真我(realme)','摩托罗拉','联想','中兴','努比亚(nubia)','ROG'],
                        checked:undefined
                    },
                    {
                        name:'功能',
                        tagList:['超大字体','超大音量','SOS功能','语音命令','语音识别','远程协助','极简桌面模式'],
                        checked:undefined
                    },
                    {
                        name:'系统',
                        tagList:['Android','EMUI 11.0','HarmoryOS2','IOS','其他OS'],
                        checked:undefined
                    },
                    {
                        name:'CPU',
                        tagList:['骁龙855plus','麒麟990','麒麟990 5G','骁龙 768G','Exynos980','MTK Hello G85','MT6873','紫光展锐','骁龙865plus','天玑1000plus'],
                        checked:undefined
                    }
                ]
            }
        },
        computed:{
            dynamicTags(){
                let dynamicTags=[]
                dynamicTags.push(this.keyword)
                this.categoryList.forEach((item)=>{
                    let tag = item.checked
                    if(tag) {
                        dynamicTags.push(item.checked)
                    }
                })
                return dynamicTags
            }
        },
        methods: {
            handleClose(tag) {
                this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);
            },
            printTag(catIndex,tagIndex){
                this.categoryList[catIndex].checked= this.categoryList[catIndex].tagList[tagIndex];
            }
        },

    }
</script>

<style scoped>
    .el-tag + .el-tag {
        margin-left: 10px;
    }
    .button-new-tag {
        margin-left: 10px;
        height: 32px;
        line-height: 30px;
        padding-top: 0;
        padding-bottom: 0;
    }
    .input-new-tag {
        width: 90px;
        margin-left: 10px;
        vertical-align: bottom;
    }
    .tag{
        font-size: 0.8em;
        padding:3px;
    }
    .title{
        background-color: gainsboro;
        font-size:1em;
        padding:10px 5px 10px 5px;
    }
    .info{
        font-size:0.7em;

    }
    .price{
        font-size:1em;
        color:red;
    }
</style>