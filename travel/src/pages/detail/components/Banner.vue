<template>
  <div>
    <div class="banner"
         @click="handleBannerClick">
      <img class="banner-img"
           src="https://imgs.qunarzz.com/p/tts1/1905/65/7d1a87c3c455ed02.jpg_750x440_ad50499b.jpg">
      <div class="banner-info">
        <div class="banner-title">出发地:杭州 神威旅游 </div>
        <div class="banner-number">
          <span class="iconfont banner-icon">&#xeb4f;</span>
          5
        </div>
      </div>
    </div>
    <!-- common-gallary 一开始是隐藏的, 轮播图计算宽度会有问题, swiper增加参数...解决  -->
    <common-gallary :imgs="imgs"
                    v-show="showGallary"
                    @close="handleGallaryClose"></common-gallary>
  </div>
</template>

<script>
import CommonGallary from 'common/gallary/Gallary'
export default {
  name: 'DetailBanner',
  data () {
    return {
      showGallary: false,
      imgs: [
        'https://imgs.qunarzz.com/p/tts1/1905/65/7d1a87c3c455ed02.jpg_750x440_ad50499b.jpg',
        'https://imgs.qunarzz.com/p/tts4/2006/a3/9570d626408e4c02.jpg_750x440_5aa0bacc.jpg'
      ]
    }
  },
  methods: {
    handleBannerClick () {
      this.showGallary = true
    },
    handleGallaryClose () {
      this.showGallary = false
    }
  },
  components: {
    CommonGallary
  }
}
</script>

<style lang="stylus" scoped>
.banner {
  position: relative;
  overflow: hidden;
  height: 0;
  padding-bottom: 55%;

  // 上面三句 防止页面抖动， 55%经过了计算
  .banner-img {
    width: 100%;
  }

  .banner-info {
    display: flex;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    line-height: 0.6rem;
    color: #fff;
    background-image: linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8));

    .banner-tittle {
      flex: 1;
      font-size: 0.32rem;
      padding: 0.2rem;
    }

    .banner-number {
      height: 0.2rem;
      line-height: 0.2rem;
      padding: 0.2rem;
      margin-left: 50%;
      border-radius: 0.2rem;
      background: rgba(0, 0, 0, 0.8);

      .banner-icon {
        font-size: 0.24rem;
      }
    }
  }
}
</style>
