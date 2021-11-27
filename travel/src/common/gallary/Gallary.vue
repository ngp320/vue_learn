<template>
  <div class="container"
       @click="handleGallaryClick">
    <div class="wrapper">
      <swiper :options="swiperOption">
        <swiper-slide v-for="(item,index) in imgs"
                      :key="index">
          <img class="gallary-img"
               :src="item" />
        </swiper-slide>
        <div class="swiper-pagination"
             slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CommonGallary',
  props: {
    imgs: {
      type: Array,
      default () {
        return [
          // 默认为空, 从父组件传过来
          // 'https://imgs.qunarzz.com/p/tts1/1905/65/7d1a87c3c455ed02.jpg_750x440_ad50499b.jpg',
          // 'https://imgs.qunarzz.com/p/tts4/2006/a3/9570d626408e4c02.jpg_750x440_5aa0bacc.jpg'
        ]
      }
    }
  },
  data () {
    return {
      swiperOption: {
        // 不知道为什么 这里是 swiper版本是 swiper5 即 swiper@5.4.5,
        // observer  observeParents 当监听到 本元素或者父级元素变化时 自我刷新一次
        observer: true,
        observeParents: true,
        pagination: {
          el: '.swiper-pagination',
          type: 'fraction'
        }
      }
    }
  },
  methods: {
    handleGallaryClick () {
      this.$emit('close')
    }
  }
}
</script>

<style lang="stylus" scoped>
// 注意这里是 swiper-container
.container >>> .swiper-container {
  overflow: inherit;
}

.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  z-index: 99;
  // absolute 或 fixed 都是绝对定位
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: #000;

  .wrapper {
    background: #000;
    // overflow: hidden; 限制死了高度, 注释 以实现 bottom: -1rem;
    height: 0;
    width: 100%;
    padding-bottom: 100%;

    .gallary-img {
      width: 100%;
    }

    .swiper-pagination {
      color: #fff;
      bottom: -1rem;
    }
  }
}
</style>
