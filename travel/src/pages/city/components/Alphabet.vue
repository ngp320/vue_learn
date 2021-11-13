<template>
  <div class="list">
    <ul v-for="item of letters"
        :key="item"
        :ref="item"
        @touchstart="handleTouchStart"
        @touchmove="handleTouchMove"
        @touchend="handleTouchEnd"
        @click="handleLetterClick">
      <li class="item">{{item}}</li>
    </ul>

  </div>
</template>

<script>
export default {
  name: 'CityAlphabet',
  props: {
    cities: Object
  },
  computed: {
    letters () {
      const letters = []
      for (let i in this.cities) {
        letters.push(i)
      }
      return letters
      // 用计算属性把 Object 变成Array --> ['A','B','C',]
      // 然后可以改 <li 中的 of letter
    }
  },
  data () {
    return {
      // 标识位, 使得 touchstart之后 才能 touchmove
      touchStatus: false,
      startY: 0,
      timer: null
    }
  },
  updated () {
    // 之所以 放到updated里, 是因为, ajax获取到数据之后会触发 updated钩子
    // startY固定值, 放到updated里 提高性能
    // 获取A元素的顶部高度, 此高度不包括 header组件高度
    this.startY = this.$refs['A'][0].offsetTop
    // console.log(startY)
  },
  methods: {
    handleLetterClick (e) {
      this.$emit('change', e.target.innerText)
      // console.log(e.target.innerText)
    },
    handleTouchStart () {
      // 当可以上下拖动的时候
      this.touchStatus = true
    },
    handleTouchMove (e) {
      if (this.touchStatus === true) {
        // 限制 handleTouchMove 执行频率, 以提高网页性能
        if (this.timer) {
          clearTimeout(this.timer)
        }
        this.timer = setTimeout(() => {
          // 当前div到顶部的高度 , 减去测量出来的 header组件高度
          const touchY = e.touches[0].clientY - 85
          // 每个字母高度 20, Math.floor向下取整
          const index = Math.floor((touchY - this.startY) / 20)
          // console.log(index)
          if (index >= 0 && index < this.letters.length) {
            this.$emit('change', this.letters[index])
          }
        }, 16)
      }
    },
    handleTouchEnd () {
      this.touchStatus = false
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl';

.list {
  display: flex;
  flex-direction: column;
  justify-content: center;
  // 垂直居中
  // text-align 和 justify-content 区别 来源: https://juejin.cn/post/6844903911690600456
  position: absolute;
  top: 1.58rem;
  right: 0;
  bottom: 0;
  width: 0.4rem;

  // background: red;
  .item {
    line-height: 0.4rem;
    text-align: center;
    color: $bgColor;
  }
}
</style>
