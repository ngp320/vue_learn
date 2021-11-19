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
    <!--  v-if="list.length" 如果list的值不为空时, 才创建轮播图, 使得默认显示第一个轮播图而不是最后一个 -->
    <!-- 在模版里面, 尽量避免出现逻辑性的代码, 所以用 computed -->
    <swiper v-if="showSwiper"
            :options="swiperOption">
      <swiper-slide v-for="item of list"
                    :key="item.id">
        <img class="swiper-img"
             :src="item.imgUrl" />
      </swiper-slide>
      <!-- 当我们希望, 组件的一部分内容, 可以被父组件定制的时候, 我们就会在这采用slot的形式  -->
      <div class="swiper-pagination"
           slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  props: {
    list: Array
  },
  data () {
    return {
      swiperOption: {
        // 轮播图 自动滚动
        // autoplay: --> 3000可以, auto 不行 , 加了 keep-alive以后
        autoplay: 3000,
        // 无论左右可以一直拖 的 "轮播"
        loop: true,
        pagination: {
          el: '.swiper-pagination'
        }
      }
    }
  },
  computed: {
    showSwiper () {
      return this.list.length
    }
  }
}
</script>

<style lang="stylus" scoped>
// 样式穿透
// #fff和#ffffff 没区别, 缩写, 但是, 只有当一二位，三四位，五六位数字都一样时，才能采取缩写形式。
.wrapper >>> .swiper-pagination-bullet-active {
  background: #fff !important;
}

.wrapper {
  // 这里卡了30min 发现是 wrapper 没加 .wrapper, emmm 以后可以改动一下原页面的属性看属性 例如color
  // 隐藏溢出 清除浮动
  // 参考 https://juejin.cn/post/6844903650901540872
  // 参考 https://segmentfault.com/a/1190000015935977 图片自适应
  overflow: hidden;
  width: 100%;
  height: 0; // 如果height里写31.25%, 相对的是父级元素的高度, 而不是wrapper的宽度
  // overflow: hidden + height: 0 + padding-bottom: 31.25% 实现 宽度相对于高度自动撑开
  // 也可用  height: 32vw, 但可能有浏览器兼容问题, 故还是此种标准写法较好
  // 200/640 = 31.25%
  // 我自己下的图 是 96/375= 25.6%
  padding-bottom: 25.6%; // 宽度相对于高度自动撑开 31.25%  图片自适应
  // 图片没显示出来时, 显示灰色背景
  background: #eee;

  .swiper-img {
    width: 100%;
  }
}
</style>
