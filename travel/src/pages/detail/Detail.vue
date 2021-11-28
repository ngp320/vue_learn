<template>
  <div>
    <detail-banner :sightName="sightName"
                   :bannerImg="bannerImg"
                   :bannerImgs="gallaryImgs"></detail-banner>
    <detail-header></detail-header>
    <!-- div.content用于撑开页面高度 -->
    <div class="content">
      <detail-list :list="list">
      </detail-list>
    </div>
  </div>
</template>

<script>
import DetailBanner from './components/Banner'
import DetailHeader from './components/Header'
import DetailList from './components/List'
import axios from 'axios'

export default {
  // name的 用途
  // 1 递归组件 2keepalive 取消缓存 3chrome中vue组件调试工具的标签名字
  name: 'Detail',
  components: {
    DetailBanner,
    DetailHeader,
    DetailList
  },
  data () {
    return {
      sightName: '',
      bannerImg: '',
      gallaryImgs: [],
      list: []
    }
  },
  methods: {
    getDetailInfo () {
      // 根据 index.js 中路由配置, 获取路由中的id值
      // axios.get('/api/detail.json?id=' + this.$route.params.id)
      // 更好的写法
      axios
        .get('/api/detail.json', {
          params: {
            id: this.$route.params.id
          }
        })
        .then(this.handleGetDataSucc)
    },
    handleGetDataSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        // console.log(data)
        this.sightName = data.sightName
        this.bannerImg = data.bannerImg
        this.gallaryImgs = data.gallaryImgs
        this.list = data.categoryList
      }
    }
  },

  mounted () {
    this.getDetailInfo()
  }
}
</script>

<style lang="stylus" scoped>
.content {
  height: 50rem;
}</style>
