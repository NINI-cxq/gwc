<template>
    <div id="indexContent">
        <el-row>
            <el-card>
                <el-carousel :interval="4000" type="card" height="330px">
                    <el-carousel-item v-for="item in imgList" :key="item">
                        <el-tooltip class="item" effect="dark" :content="item.title" placement="top">
                            <el-image :src="item.url" ></el-image>
                        </el-tooltip>
                    </el-carousel-item>
                </el-carousel>
            </el-card>
        </el-row>

        <el-row>
            <el-card>
                <el-row>
                    <el-col :span="5">
                        <el-image src="https://img10.360buyimg.com/n1/jfs/t19948/97/79644370/65285/55939d3/5ae4119fNa9bb1451.jpg!q90"></el-image>
                    </el-col>
                    <el-col :span="1"><div class="none"></div></el-col>
                    <el-col :span="5">
                        <el-image src="https://img10.360buyimg.com/n1/jfs/t1/22592/29/1047/125535/5c0f17f8E522eb767/80a752c83e98324a.jpg!q90"></el-image>
                    </el-col>
                    <el-col :span="1"><div class="none"></div></el-col>
                    <el-col :span="6">
                        <el-row class="customCard">
                            <el-row >

                                <span class="channelItemName">商城国际</span>
                                <span class="channelItemTitle">一站尽享进口好物</span>
                            </el-row>
                            <el-row >
                                <el-col :span="2"><div class="none"></div></el-col>
                                <el-col :span="9">
                                <el-image src="https://img12.360buyimg.com/cms/jfs/t15283/114/2080121558/25159/f58fb156/5a6a8539N2c20d7d6.jpg!q90"></el-image>
                                </el-col>
                                <el-col :span="2"><div class="none"></div></el-col>
                                <el-col :span="9">
                                    <el-image src="https://img13.360buyimg.com/cms/jfs/t21793/160/551722342/24358/5db3045c/5b3f2b21N3b76639d.jpg!q90"></el-image>
                                </el-col>

                            </el-row>
                        </el-row>
                    </el-col>
                </el-row>
            </el-card>
        </el-row>
    </div>
</template>

<script>
    export default {
        name: "indexContent",
        components:{},
        data(){
            return{
                imgList:[
                    {title:"兰蔻精华液",url:"https://imgcps.jd.com/img-cubic/creative_server_cia/v2/2000366/100006341283/FocusFullshop/CkNqZnMvdDEvMTkwMzc0LzgvMTIyNzcvMTgyOTc5LzYwZTZlNTU1RTQ4NzNkZWZiLzU5N2JjZWY1MmIxNmQ0YWYucG5nEgkyLXR5XzBfNTMwAjjui3pCEwoP5YWw6JS757K-5Y2O5rayEABCFgoS5byA5ZCv57K-6Ie055Sf5rS7EAFCEAoM56uL5Y2z5oqi6LStEAJCCgoG6LaF5YC8EAdYo9XexvQC/cr/s/q.jpg"},
                                     {title:"泉枫电竞椅",url:"https://img30.360buyimg.com/jdcms/s300x300_jfs/t1/179659/26/18485/92348/6112588eE43ee93d6/4b15f0c16a586daa.jpg.webp"},
                                     {title:"易享道松滋老母鸡",url:"https://img11.360buyimg.com/jdcms/s300x300_jfs/t1/185875/13/20825/159117/6125fe46E80a68aca/9f85edf44c45cb32.jpg.webp"},
                                     {title:"360儿童电话手表9X",url:"https://m.360buyimg.com/babel/jfs/t1/187161/3/19790/119570/61245a4dEe7ec84cc/79009c846205fd59.jpg"},
                                     {title:"联想蓝牙耳机",url:"https://img11.360buyimg.com/mobilecms/s460x460_jfs/t1/188013/22/18870/154995/611ca51fE5d159fa2/43e2b1f78c68910f.jpg!cc_460x460.webp"},
                                     {title:"乔思伯散热器",url:"https://img10.360buyimg.com/img/s460x460_jfs/t1/188102/20/16644/358621/6109ecceEff720225/7a9e9afa0023f049.png!cc_460x460.webp"},

                                 ]
            }
        }
    }
</script>

<style scoped>
.channelItemName{
    margin-left:17px;
    font-size: 1.3em;
    font-weight: bolder;
}
.channelItemTitle{
    margin-left:10px;
    font-size: 0.7em;
    color:#909399;
}
.customCard{
    border:1px solid #DCDFE6;
    border-radius: 5px;
    padding:20px 0;
}
</style>