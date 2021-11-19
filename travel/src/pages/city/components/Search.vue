<template>
  <div>
    <div class="search">
      <input v-model="keyword"
             class="search-input"
             type="text"
             placeholder="输入城市名或拼音" />
    </div>
    <!--   keyword 有值时显示,  "div class="search-content"" -->
    <div class="search-content"
         ref="search"
         v-show="keyword">
      <ul>
        <li class="search-item border-bottom"
            v-for="item of list"
            :key="item.id"
            @click="handleCityClick(item.name)">
          {{item.name}}
        </li>
        <!--   list 长度为0显示, 这个 "没有找到匹配数据" -->
        <li class="search-item border-bottom"
            v-show="hasNoData">
          没有找到匹配数据
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Bscroll from 'better-scroll'
import { mapMutations } from 'vuex'
export default {
  name: 'CitySearch',
  props: {
    cities: Object
  },
  data () {
    return {
      keyword: '',
      list: [],
      timer: null
    }
  },

  computed: {
    hasNoData () {
      return !this.list.length
    }
  },
  watch: {
    keyword () {
      if (this.timer) {
        clearTimeout(this.timer)
      }
      // 如果 输入为空, 则不显示
      if (!this.keyword) {
        this.list = []
        return
      }
      this.timer = setTimeout(() => {
        const result = []
        for (let i in this.cities) {
          this.cities[i].forEach(value => {
            if (
              value.spell.indexOf(this.keyword) > -1 ||
              value.name.indexOf(this.keyword) > -1
            ) {
              result.push(value)
            }
          })
        }
        this.list = result
      }, 100)
    }
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
  mounted () {
    this.scroll = new Bscroll(this.$refs.search, {
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

.search {
  height: 0.62rem;
  padding: 0.1rem 0.2rem;
  background: $bgColor;

  .search-input {
    box-sizing: border-box;
    // border-box 告诉浏览器：你想要设置的边框和内边距的值是包含在width内的。
    // content-box  是默认值。如果你设置一个元素的宽为100px，那么这个元素的内容区会有100px 宽, 并且任何边框和内边距的宽度都会被增加到最后绘制出来的元素宽度中。
    // 来源: https://developer.mozilla.org/zh-CN/docs/Web/CSS/box-sizing
    width: 100%;
    height: 0.62rem;
    padding: 0 0.1rem;
    // padding 左右留一点间隙
    line-height: 0.62rem;
    text-align: center;
    // vue cli 会自动在打包代码的过程中补充 "厂商前缀"(音) ? 没看到作用在哪, 待处理
    border-radius: 0.06rem;
    color: #666;
  }
}

.search-content {
  z-index: 1;
  overflow: hidden;
  position: absolute;
  top: 1.68rem;
  left: 0;
  right: 0;
  bottom: 0;
  background: #eee;

  .search-item {
    line-height: 0.62rem;
    padding-left: 0.2rem;
    background: #fff;
    color: #666;
  }
}
</style>
