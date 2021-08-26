import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
export default new Vuex.Store({
    //state就是共享的数据
    state: {
        user: {
            username:null,
            password:null,
            realName:null,
            id:null,
            avatar:null,
            addressList:null,
            accessToken:null,
            refreshToken:null
        },
        shopCar:[]
    },
    //当我们直接调用store.state中的数据时, 会不可避免的产生数据安全的问题, 有时候出了错,我们根本不知道是谁修改了这个数据
    //所以, 我们应该使用get和set, 也就是getters和mutations+actions
    //state中的每一个对象都应该有对应的getter
    getters: {
        user: state => {
            return state.user
        },
        username: state => {
            return state.user.username
        },
        password: state => {
            return state.user.password
        },
        realName: state => {
            return state.user.realName
        },
        id: state => {
            return state.user.id
        },
        avatar: state => {
            return state.user.avatar
        },
        addressList: state => {
            return state.user.addressList
        },
        accessToken: state => {
            return state.user.accessToken
        },
        refreshToken: state => {
            return state.user.refreshToken
        },
        shopCar: state => {
            return state.shopCar
        }
    },
    //更改store中的数据唯一的方式就是 提交 mutation
    //mutations里面写的是一个个修改数据的方法
    mutations: {
        //每个mutation中的第一参数都应该是state
        SER_USER_INFO(state,userInfo) {
            state.user = userInfo
        },
        SER_USERNAME(state,username) {
            state.user.username = username
        },
        SER_PASSWORD(state,password) {
            state.user.password = password
        },
        SET_REAL_NAME(state,realName) {
            state.user.realName = realName
        },
        SET_ID(state,id) {
            state.user.id = id
        },
        SET_AVATAR(state,avatar) {
            state.user.avatar = avatar
        },
        SET_ADDRESS_LIST(state,addressList) {
            state.user.addressList = addressList
        },
        SET_ACCESS_TOKEN(state,accessToken) {
            state.user.accessToken = accessToken
        },
        SET_REFRESH_TOKEN(state,refreshToken) {
            state.user.refreshToken = refreshToken
        },
        SET_SHOP_CAR(state,shopCar) {
            state.shopCar = shopCar
        }
    },
    //action里面写的是很多mutations的集合
    //比如用户登录之后,会从后台获得一个用户信息对象, 这个对象包括了用户名,id等基础信息, 和用户的姓名等拓展信息, 以及用户凭证等安全信息
    //这些信息需要每个都set进store中的user对象中, 但是每个信息的修改方法都已经在mustaions里写死了, 我们要做的其实是创建一个新的action,在其中提交多个mutation
    actions: {
        login({ commit }) {
            //eslint-disable-next-line
            return new Promise((resolve,reject)=>{
                setTimeout(()=>{
                    let userInfo = {
                        username : "NINI",
                        password : "123",
                        realName : "CXQ",
                        id: "123",
                        avatar:"https://gimg2.baidu.com/image_search/src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20171221%2F7951c4f37ee948a2a1fb1f662a1b2feb.jpeg&refer=http%3A%2F%2F5b0988e595225.cdn.sohucs.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1632582120&t=6e1df2b338df8d3ff69e853a321e250b",
                        addressList:["快乐星球一号","M78星云"],
                        accessToken: "kjandkawdlawkdbawnodawdlkawldkmawlkdmalwmdawdlal",
                        refreshToken: "kjandkawdlawkdbawnodawdlkawldkmawlkdmalwmdawdlal"
                    }
                    let shopCar=[
                        {
                            name:'联想拯救者电竞手机2 Pro 12GB+256GB 骁龙888 双涡扇增压液冷 八指操控',
                            imgUrl:'https://img11.360buyimg.com/babel/s200x200_jfs/t1/179154/7/20590/224539/61232324Ed96178a7/98d8ad97970f31f0.jpg',
                            category:'联想',
                            unitPrice:'3699.00',
                            count:'2',
                            checked:false
                        },
                        {
                            name:' 鸿星尔克男士运动跑步防风服立领薄款休闲夹克外套男 51221182183 暮夕黄 ',
                            imgUrl:'https://img10.360buyimg.com/n7/jfs/t1/156585/8/5985/74631/6000120cE205ba69e/08580585f1fc7b7c.jpg',
                            category:'鸿星尔克',
                            unitPrice:'229.00',
                            count:'1',
                            checked:false
                        },
                        {
                            name:'柯思娜妮真皮马丁靴女春秋2021秋季新款英伦风平底女士靴子系带机车女靴',
                            imgUrl:'https://img13.360buyimg.com/n7/jfs/t1/178070/34/18661/419859/61127ec0E83ff7d23/a189691ae88a15e3.png',
                            category:'马丁靴女',
                            unitPrice:'189.00',
                            count:'1',
                            checked:false
                        }

                    ]
                    commit('SET_SHOP_CAR',shopCar)
                    commit('SER_USERNAME', userInfo.username)
                    commit('SER_PASSWORD', userInfo.password)
                    commit('SET_REAL_NAME', userInfo.realName)
                    commit('SET_ID', userInfo.id)
                    commit('SET_AVATAR', userInfo.avatar)
                    commit('SET_ADDRESS_LIST', userInfo.addressList)
                    commit('SET_ACCESS_TOKEN', userInfo.access_token)
                    commit('SET_REFRESH_TOKEN', userInfo.refresh_token)

                    resolve()
                },1500)
            })

        },
        logout({ commit }) {
            //eslint-disable-next-line
            return new Promise((resolve,reject)=>{
                setTimeout(()=>{
                        commit('SER_USERNAME', '')
                        commit('SER_PASSWORD', '')
                        commit('SET_REAL_NAME', '')
                        commit('SET_ID', '')
                        commit('SET_AVATAR', '')
                        commit('SET_ADDRESS_LIST', '')
                        commit('SET_ACCESS_TOKEN', '')
                        commit('SET_REFRESH_TOKEN', '')
                        resolve()
                    },1500)
            })
        }
    },
    modules: {
    }
})
