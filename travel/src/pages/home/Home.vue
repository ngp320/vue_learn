<template>
  <div>
    <!--    <div class="home">Home</div>-->
    <!--    &lt;!&ndash; vue中, 用router-link而不是a标签, 切换页面 &ndash;&gt;-->
    <!--    <router-link to="/list" class="home">列表页</router-link>-->
    <!--    hello world-->
    <home-header></home-header>
    <home-swiper :list="swiperList"></home-swiper>
    <home-icons :list="iconList"></home-icons>
    <home-recommend :list="recommendList"></home-recommend>
    <home-weekend :list="weekendList"></home-weekend>
  </div>

</template>

<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/Icons'
import HomeRecommend from './components/Recommend'
import HomeWeekend from './components/Weekend'
import axios from 'axios'
import { mapState } from 'vuex'
export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeRecommend,
    HomeWeekend
  },
  data () {
    return {
      swiperList: [],
      iconList: [],
      recommendList: [],
      weekendList: []
    }
  },
  computed: {
    ...mapState(['city'])
  },
  methods: {
    getHomeInfo () {
      // 结合 配置项, 自动跳转
      axios.get('/api/index.json?city=' + this.city).then(this.getHomeInfoSucc)

      // 只有 travel/static 下的内容, 可以被外部访问, 故, 用以模拟后端.
      // 此种写法, 上线前需要改动代码, vue提供了 转发机制以解决这个问题. /config/index.js
      // module.exports = { dev: { proxyTable: {},
      // 改动 配置项, 需要重启服务器
      // axios.get('/static/mock/index.json')
      //   .then(this.getHomeInfoSucc)
    },
    getHomeInfoSucc (res) {
      res = res.data
      // 如果后端返回正确, 且 data有内容
      if (res.ret && res.data) {
        const data = res.data
        this.swiperList = data.swiperList
        this.iconList = data.iconList
        this.recommendList = data.recommendList
        this.weekendList = data.weekendList
      }
      console.log(res)
    }
  },
  // 通过生命周期函数 mounted 一次性通过 axios 获取数据, 然后分发到各个组件里
  mounted () {
    // mounted 初次挂载的时候
    // console.log('mounted')
    this.lastCity = this.city
    this.getHomeInfo()
  },
  activated () {
    // activated 页面重新显示的时候
    // console.log('activated')
    if (this.lastCity !== this.city) {
      this.lastCity = this.city
      this.getHomeInfo()
    }
  }
}
</script>

<style scoped>
/*.home {*/
/*  font-size: 50px;*/
/*}*/
</style>
