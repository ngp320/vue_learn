<template>
  <div>
    <div class="title">热销推荐</div>
    <ul>
      <!-- 通过border-buttom直接设置1像素边框 -->
      <li class="item border-buttom" v-for="item of recommendList"
          :key="item.id">
        <!-- : === v-bind -->
        <!-- @ === v-on -->
        <img class="item-img" :src="item.imgUrl"/>
        <div class="item-info">
          <p class="item-title">{{ item.title }}</p>
          <p class="item-desc">{{ item.desc }}</p>
          <button class="item-button">查看详情</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  data () {
    return {
      // 更多是通过 浏览器 console里的提示, 来排查错误
      recommendList: [
        {
          id: '0001',
          imgUrl: 'https://img1.qunarzz.com/vs_ceph_b2c_001/80b76488-305a-41c5-af8d-67a62f0c8c2d.jpg_r_640x420x95_5c540809.jpg',
          title: '杭州西湖 纯玩一日游',
          desc: '杭州出发-跟团游：🔥市区可接▶登雷峰塔▶西湖游船▶花港观鱼▶飞来峰灵隐寺 ¥145起'
        }, {
          id: '0002',
          imgUrl: 'https://imgs.qunarzz.com/p/tts2/1710/34/7d036a522a128502.jpg_336x320_7800755d.jpg',
          title: '杭州西溪湿地+宋城千古情一日游',
          desc: '含表演🔥深度家庭游、主城可接、含游船电瓶车 ¥299起'
        }, {
          id: '0003',
          imgUrl: 'https://imgs.qunarzz.com/vs_ceph_vs_tts/bb27d576-5b8e-4d39-8faa-6b7a1ee1797c.jpg_336x320_6c3b34eb.jpg',
          title: '横店影视城3日游',
          desc: '双人5景区/9景区+商务/三星/四星/雷迪森2晚，送儿童票 ¥884起'
        }, {
          id: '0004',
          imgUrl: 'https://imgs.qunarzz.com/vs_ceph_vs_tts/d3229fbf-2d90-45ff-a3eb-b1f288bf5f45.jpg_336x320_bf57a3dc.jpg',
          title: '千岛湖+豪华游船+千岛湖森林氧吧 1日游',
          desc: '纯玩（千岛湖+豪华游船+千岛湖森林氧吧1日游）-门票全含 ¥169起'
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

.item
  overflow: hidden
  display: flex
  height: 1.9rem
  //background: red

  .item-img
    width: 1.7rem
    height: 1.7rem
    padding: .1rem

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

    .item-button
      line-height: .44rem
      margin-top: .16rem
      background: #ff9300
      padding: 0 .1rem
      border-radius: .06rem
      color: #fff
</style>
