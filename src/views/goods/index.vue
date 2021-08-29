<template>
    <div id="goodsIndex">
        <el-row>
            <el-col :span="10">
                <el-image :src="checkedImgUrl" style="width:450px;height: 500px" :previewSrcList="viewSrcList"></el-image>
                <ul style="width:450px">
                    <li v-for="(item,index) in imgUl" :key="index" class="img_li" :class="{img_li_checked:item.checked}" @click="checkedImg(index)">
                        <el-image :src="item.url" style="width:50px;height: 50px"></el-image>
                    </li>
                </ul>
            </el-col>
            <el-col :span="14"></el-col>
        </el-row>
    </div>
</template>

<script>
    export default {
        name: "goodsIndex",
        props:["id"],
        component:{},
        data(){
            return{
                activeIndex:'1',
                goodsDetail:{},
                checkedImgUrl:"",
            }
        },
        computed:{
            viewSrcList(){
                //eslint-disable-next-line no-unused-vars
                let previewSrcList = []
                this.goodsDetail.colorList.forEach((item)=>{
                    if(item.checked){
                        previewSrcList = item.imgUrlList
                    }
                })
                return previewSrcList
            },
            imgUl(){
                let imgUl = []
                this.goodsDetail.colorList.forEach((item)=>{
                    if(item.checked){
                        for(let i =0;i < item.imgUrlList.length;i++){
                            let img = {url:item.imgUrlList[i],checked:false}
                            if(i===0){
                                img.checked = true
                            }
                            imgUl.push(img)
                        }
                    }
                })
                return imgUl
            }

        },
        methods:{
            toDetail(){
                this.$router.push({path:"/goods/:id/detail"})
            },
            toSpec(){
                this.$router.push({path:"/goods/:id/spec"})
            },
            toService(){
                this.$router.push({path:"/goods/:id/service"})
            },
            toComments(){
                this.$router.push({path:"/goods/:id/comments"})
            },
            checkedImg(index){
                this.imgUl.forEach((item)=>{
                    item.checked = false
                })
                this.imgUl.forEach((item,index1)=>{
                    if(index1 === index){
                        item.checked = true
                        this.checkedImgUrl = item.url
                    }
                })
            }
        },
        created(){
            let goodsDetail = {
                id: "123456",
                name: "Apple iPhone 11 (A2223) 128GB 黑色 移动联通电信4G手机 双卡双待",
                price: 5299.00,
                discount: 4799.00,
                couponList: [],
                wight: 0.368,
                colorList: [
                    {
                        color: "黑色",
                        imgUrlList: [
                            "https://img12.360buyimg.com/n1/s450x450_jfs/t1/199862/27/4519/178919/6124c719E097f0bd6/e69e1313009b7a7f.jpg",
                            "https://img12.360buyimg.com/n1/s450x450_jfs/t1/148767/39/18017/86358/5fd32ff0E5ca41721/d885f7c401dfa557.jpg",
                            "https://img12.360buyimg.com/n1/s450x450_jfs/t1/142574/9/17878/51690/5fd34693E1d6142e2/d2d35afca393e566.jpg",
                            "https://img12.360buyimg.com/n1/s450x450_jfs/t1/136123/20/19495/50331/5fd34697E35ee8d84/9e542233d66da7c1.jpg",
                            "https://img12.360buyimg.com/n1/s450x450_jfs/t1/133295/19/19538/138037/5fd3469bE861a6bd9/f8b640b7d732a93c.jpg",
                            "https://img12.360buyimg.com/n1/s450x450_jfs/t1/141270/6/17695/85325/5fd3469eE061669e3/4ace6b708fd72215.jpg",
                            "https://img12.360buyimg.com/n1/s450x450_jfs/t1/153813/18/9324/54747/5fd346a0Ecede298c/672e726c375828a6.jpg"
                        ]
                    },
                    {
                        color: "白色",
                        imgUrlList: [
                            "https://img10.360buyimg.com/n1/s450x450_jfs/t1/178616/28/20703/176483/6124c73cEebbf678e/4d51252b54f1784d.jpg",
                            "https://img10.360buyimg.com/n1/s450x450_jfs/t1/153457/35/9377/80509/5fd3300bEa14f6b0f/f60a95a9f1731200.jpg",
                            "https://img10.360buyimg.com/n1/s450x450_jfs/t1/149047/25/18194/49137/5fd346c5Ee424ff8d/ffcc4ee8cc62905f.jpg",
                            "https://img10.360buyimg.com/n1/s450x450_jfs/t1/142613/5/18084/50114/5fd346c7E24cb8b6b/1f1271b3bfed34b6.jpg",
                            "https://img10.360buyimg.com/n1/s450x450_jfs/t1/139707/40/18012/138037/5fd346caEa8be9e7a/88da23dcff9d772a.jpg",
                            "https://img10.360buyimg.com/n1/s450x450_jfs/t1/141930/5/18182/85325/5fd346cfEc024158b/df6fe498b38221c1.jpg",
                            "https://img10.360buyimg.com/n1/s450x450_jfs/t1/151150/22/10290/53487/5fd346d1E7b178c03/8787b6d210763244.jpg"
                        ]
                    }
                ]
            }
                for(let i = 0;i < goodsDetail.colorList.length;i++){
                i === 0 ? goodsDetail.colorList[i] = Object.assign(goodsDetail.colorList[i],{checked:true})
                    : goodsDetail.colorList[i] = Object.assign(goodsDetail.colorList[i],{checked:false})
            }
            this.goodsDetail = goodsDetail
            this.checkedImgUrl = this.imgUl[0].url

        }
    }
</script>

<style scoped>
.img_li{
    list-style-type:none;
    float: left;
    padding: 5px;
    border: 2px solid #ffffff;
}
.img_li_checked{
    list-style-type:none;
    float: left;
    padding: 5px;
    border: 2px solid red;
}
</style>