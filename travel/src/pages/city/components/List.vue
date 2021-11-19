<template>
  <div class="list"
       ref="wrapper">
    <div>
      <div class="area">
        <div class="title border-topbottom">当前城市</div>
        <div class="button-list">
          <div class="button-wrapper">
            <!-- 利用 vuex 简化 this.$store.state.city为 this.currentCity -->
            <div class="button">{{this.currentCity}}</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">热门城市</div>
        <div class="button-list">
          <!-- Elements in iteration expect to have 'v-bind:key' directives
          Vue 2.2.0+的版本里，当在组件中使用v-for时，key是必须的 -->
          <div class="button-wrapper"
               v-for="item of hot"
               :key="item.id"
               @click="handleCityClick(item.name)">
            <div class="button">{{item.name}}</div>
          </div>
        </div>
      </div>
      <!-- cities是对象  循环就不是 item index 而是 item key -->
      <!-- 与下一层key值不重复即可, 只要保证当前层级key值不重复 -->
      <div class="area"
           v-for="(item,key) of cities"
           :key="key"
           :ref="key">
        <!-- :ref 不加冒号表示后面是个字符串，否则表示后面是个js表达式。 -->
        <div class="title border-topbottom">{{key}}</div>
        <div class="item-list">
          <div class="item border-bottom"
               v-for="innerItem of item"
               :key="innerItem.id"
               @click="handleCityClick(innerItem.name)">
            {{innerItem.name}}
          </div>

        </div>
      </div>

    </div>
  </div>
</template>

<script>
import Bscroll from 'better-scroll'
import { mapState, mapMutations } from 'vuex'
export default {
  name: 'CityList',
  props: {
    hot: Array,
    cities: Object,
    letter: String
  },
  computed: {
    ...mapState({
      currentCity: 'city'
    })
  },
  methods: {
    handleCityClick (city) {
      // vuex 简化 this.$store.commit('changeCity', city) -->  this.changeCity(city)
      // this.$store.commit('changeCity', city)
      this.changeCity(city)
      // console.log(city)
      this.$router.push('/')
    },
    ...mapMutations(['changeCity'])
  },
  // vue侦听器, 检查letter的改变, 也就是 Alphabet组件传过来的值 的 改变
  watch: {
    letter () {
      if (this.letter) {
        // 通过 设置的ref, 获取对应area区域 (div class="area")
        const element = this.$refs[this.letter][0]
        // 获得的element 是一个数组, 不是一个dom元素 或者 dom选择器 -解决加[0]-> [this.letter][0]
        // console.log(element)
        this.scroll.scrollToElement(element)
      }
      // console.log(this.letter)
    }
  },
  mounted () {
    //   click: true 解决 bscroll 和 handleCityClick(city) {console.log(city)} 冲突问题
    this.scroll = new Bscroll(this.$refs.wrapper, {
      click: true
    })
  },
  updated () {
    this.scroll.refresh()
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl';

.border-topbottom {
  &:before {
    border-color: #ccc;
  }

  &:after {
    border-color: #ccc;
  }
}

.border-bottom {
  &:before {
    border-color: #ccc;
  }

  &:after {
    border-color: #ccc;
    // & 表示上一级元素
    // after before 创建伪元素 <span> 初始属性内容为空 (个人理解)
  }
}

.list {
  overflow: hidden;
  // 超过list区域的内容无法控制, 所以用 overflow: hidden; 不显示超出内容, 但是造成无法滚动, 之后用插件达到类似原生的效果
  position: absolute;
  top: 1.68rem;
  left: 0;
  right: 0;
  bottom: 0;

  .title {
    line-height: 0.44rem;
    background: #eee;
    padding-left: 0.2rem;
    color: #666;
    font-size: 0.26rem;
  }

  .button-list {
    overflow: hidden;
    // 设置外层元素overflow:hidden/auto触发BFC清除浮动
    // BFC：Block Format Context MDN 块格式化上下文
    padding: 0.1rem 0.6rem 0.1rem 0.1rem;

    // padding: 上.1rem 右.6rem 下.1rem 左.1rem 留出abcdefg跳转位置
    .button-wrapper {
      float: left;
      width: 33.33%;

      .button {
        margin: 0.1rem;
        padding: 0.1rem 0;
        text-align: center;
        border: 0.02rem solid #ccc;
        border-radius: 0.06rem;
      }
    }
  }

  .item-list {
    .item {
      line-height: 0.54rem;
      padding-left: 0.2rem;
    }
  }
}
</style>
