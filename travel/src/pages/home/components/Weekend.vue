<template>
  <div>
    <div class="title">周末去哪儿</div>
    <ul>
      <li class="item border-buttom" v-for="item of list"
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
  props: {
    list: Array
  },
  data () {
    return {
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
  padding-bottom: 49.2%
  .item-img
    // 通过 .item-img-wrapper 改固定宽高为自适应, 固定宽高比
    //width: 100%
    /////////////////// 自己添加部分, css裁剪图片 object-fit:cover 保持原有尺寸比例。但部分内容可能被剪切
    height: 4rem;
    width: 100%;
    object-fit: cover;
    /////////////////// 详见 https://www.runoob.com/cssref/pr-object-fit.html
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
