<template>
  <div>
    <div class="title">周末去哪儿</div>
    <ul>
      <li class="item border-buttom" v-for="item of recommendList"
          :key="item.id">
        <!-- img包裹一层div -->
        <div class="item-img-wrapper">
          <img class="item-img" :src="item.imgUrl"/>
        </div>
        <div class="item-info">
          <p class="item-title">{{ item.title }}</p>
          <p class="item-desc">{{ item.desc }}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeWeekend',
  data () {
    return {
      // 更多是通过 浏览器 console里的提示, 来排查错误
      recommendList: [
        {
          id: '0001',
          imgUrl: 'https://imgs.qunarzz.com/vs_ceph_vs_tts/f18fd7b2-220a-4dce-9ee9-b789f0079e95.jpg_336x320_1dd5ce8a.jpg',
          title: '横店影视城一日游',
          desc: '👉主城区接+纯玩线路|广州香港街+秦王宫+明清宫苑+旅行险  ¥186起'
        }, {
          id: '0002',
          imgUrl: 'https://imgs.qunarzz.com/vs_ceph_vs_tts/f18fd7b2-220a-4dce-9ee9-b789f0079e95.jpg_336x320_1dd5ce8a.jpg',
          title: '横店影视城一日游',
          desc: '👉主城区接+纯玩线路|广州香港街+秦王宫+明清宫苑+旅行险  ¥186起'
        }, {
          id: '0003',
          imgUrl: 'https://imgs.qunarzz.com/vs_ceph_vs_tts/f18fd7b2-220a-4dce-9ee9-b789f0079e95.jpg_336x320_1dd5ce8a.jpg',
          title: '横店影视城一日游',
          desc: '👉主城区接+纯玩线路|广州香港街+秦王宫+明清宫苑+旅行险  ¥186起'
        }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
@import "~styles/mixins.styl"
.title
  margin-top: .2rem
  line-height: .8rem
  background: #eee
  //text-indent 属性规定文本块中首行文本的缩进。
  text-index: .2rem

  .item-img-wrapper
    overflow: hidden
    height: 0
    padding-bottom: 99.2%

.item-img
  // 通过 .item-img-wrapper 改固定宽高为自适应, 固定宽高比
  width: 100%

.item-info
  flex: 1
  padding: .1rem
  //父元素配置 min-width: 0 解决 子元素 ellipsis() 不起作用
  min-width: 0

  .item-title
    line-height: .54rem
    font-size: .32rem
    ellipsis()

  .item-desc
    line-height: .4rem
    color: #ccc
    ellipsis()

</style>
