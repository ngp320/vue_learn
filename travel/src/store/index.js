import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import state from './state'
Vue.use(Vuex)

export default new Vuex.Store({
  // state数据, mutation同步数据改变, actions异步数据, getter有点类似vue里的计算属性,
  //  module用于单个文件内部拆分, 每个模块拥有自己的 state、mutation.....  https://vuex.vuejs.org/zh/guide/modules.html
  // 根据vuex图 https://vuex.vuejs.org/zh/#:~:text=%E5%8F%AF%E4%BB%A5%E9%9A%8F%E6%97%B6%E6%9A%82%E5%81%9C%E5%B9%B6-,%E5%B0%9D%E8%AF%95,-%E3%80%82
  // this.$store.dispatch('changeCity', city) 通过 actions 调用 mutations 去修改 state
  // 组件其实可以 this.$store.commit('changeCity', city) 直接调用 mutations

  // actions: {
  //   // ctx context 上下文
  //   changeCity (ctx, city) {
  //     // console.log(city)
  //     ctx.commit('changeCity', city)
  //   }
  // },
  // 拆分 state.js + mutations.js 后 以如下格式放置
  // state: state,
  // mutations: mutations
  // 进一步简化 ↓
  state,
  mutations,
  getters: {
    doubleCity (state) {
      return state.city + ' ' + state.city
    }
  }
})
