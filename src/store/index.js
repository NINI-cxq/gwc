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
            access_token:null,
            refresh_token:null
        }
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
        access_token: state => {
            return state.user.access_token
        },
        refresh_token: state => {
            return state.user.refresh_token
        },
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
        SET_ACCESS_TOKEN(state,access_token) {
            state.user.access_token = access_token
        },
        SET_REFRESH_TOKEN(state,refresh_token) {
            state.user.refresh_token = refresh_token
        }
    },
    //action里面写的是很多mutations的集合
    //比如用户登录之后,会从后台获得一个用户信息对象, 这个对象包括了用户名,id等基础信息, 和用户的姓名等拓展信息, 以及用户凭证等安全信息
    //这些信息需要每个都set进store中的user对象中, 但是每个信息的修改方法都已经在mustaions里写死了, 我们要做的其实是创建一个新的action,在其中提交多个mutation
    actions: {
        login({ commit }) {
            let userInfo = {
                username : "Cara",
                password : "jiazhihan",
                realName : "贾智涵",
                id: "1147824",
                avatar: "https://video.codeseeding.com/image/default/AE03865608444CB389BA0334CD67F1AC-6-2.jpg",
                addressList:["广东省广州市天河区棠下街道快乐星球","甘肃省兰州市七里河区银光路宝宝花园5-1"],
                access_token: "kjandkawdlawkdbawnodawdlkawldkmawlkdmalwmdawdlal",
                refresh_token: "kjandkawdlawkdbawnodawdlkawldkmawlkdmalwmdawdlal"
            }
            commit('SER_USERNAME', userInfo.username)
            commit('SER_PASSWORD', userInfo.password)
            commit('SET_REAL_NAME', userInfo.realName)
            commit('SET_ID', userInfo.id)
            commit('SET_AVATAR', userInfo.avatar)
            commit('SET_ADDRESS_LIST', userInfo.addressList)
            commit('SET_ACCESS_TOKEN', userInfo.access_token)
            commit('SET_REFRESH_TOKEN', userInfo.refresh_token)
        },
        logout({ commit }) {
            commit('SER_USERNAME', '')
            commit('SER_PASSWORD', '')
            commit('SET_REAL_NAME', '')
            commit('SET_ID', '')
            commit('SET_AVATAR', '')
            commit('SET_ADDRESS_LIST', '')
            commit('SET_ACCESS_TOKEN', '')
            commit('SET_REFRESH_TOKEN', '')
        }
    },
    modules: {
    }
})
