<template>
  <div class="wrapper">
    <!--    <swiper :options="swiperOption">-->
    <!--      <swiper-slide>-->
    <!--        <img class="swiper-img"-->
    <!--             src=""/>-->
    <!--      </swiper-slide>-->
    <!--      <swiper-slide>-->
    <!--        <img class="swiper-img"-->
    <!--             src=""/>-->
    <!--      </swiper-slide>-->
    <!--      <div class="swiper-pagination" slot="pagination"></div>-->
    <!--    </swiper>-->
    <!-- 简化wrapper -->
    <swiper v-if="swiperList.length>1" :options="swiperOption">
      <swiper-slide v-for="item of swiperList" :key="item.id">
        <img class="swiper-img" :src="item.imgUrl"/>
      </swiper-slide>
      <!-- 当我们希望, 组件的一部分内容, 可以被父组件定制的时候, 我们就会在这采用slot的形式  -->
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  data () {
    return {
      swiperOption: {
        // 无论左右可以一直拖 的 "轮播"
        loop: true,
        pagination: {
          el: '.swiper-pagination'
        }
      },
      swiperList: [{
        id: '0001',
        imgUrl: 'https://source.qunarzz.com/site/images/wns/20210818_qunar_dujia_A750x192_6.jpg'
      }, {
        id: '0002',
        imgUrl: 'https://source.qunarzz.com/site/images/wns/20210818_qunar_homepage_dujia_a750x192_4.jpg'
      }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
  // 样式穿透
  // #fff和#ffffff 没区别, 缩写, 但是, 只有当一二位，三四位，五六位数字都一样时，才能采取缩写形式。
  .wrapper >>> .swiper-pagination-bullet-active
    background: #fff !important

  .wrapper
    // 这里卡了30min 发现是 wrapper 没加 .wrapper, emmm 以后可以改动一下原页面的属性看属性 例如color
    // 隐藏溢出 清除浮动
    // 参考 https://juejin.cn/post/6844903650901540872
    // 参考 https://segmentfault.com/a/1190000015935977 图片自适应
    overflow: hidden
    width: 100%
    height: 0 //如果heght里写31.25%, 相对的是父级元素的高度, 而不是wrapper的宽度
    // overflow: hidden + height: 0 + padding-bottom: 31.25% 实现 宽度相对于高度自动撑开
    // 也可用  height: 32vw, 但可能有浏览器兼容问题, 故还是此种标准写法较好
    // 200/640 = 31.25%
    // 我自己下的图 是 96/375= 25.6%
    padding-bottom: 25.6% //宽度相对于高度自动撑开 31.25%  图片自适应
    // 图片没显示出来时, 显示灰色背景
    background: #eee

    .swiper-img
      width: 100%

  //// 因为 swiper-pagination 里的内容是 swiper 这个组件决定的
  //// 对应的class名字并不在组件上, 所以直接改无效, 但可以 wrapper >>>
  //.swiper-pagination-bullet-active
  //  background: red !important

</style>
