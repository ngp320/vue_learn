<template>
  <div class="search">
    <input class="search-input" type="text" placeholder="
    输入城市名或拼音"/>
  </div>

</template>

<script>
export default {
  name: 'CitySearch'
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
  .search
   height: .72rem
   padding: 0.1rem
   background: $bgColor

   .search-input
    box-sizing: border-box
    //  border-box 告诉浏览器：你想要设置的边框和内边距的值是包含在width内的。
    //  content-box  是默认值。如果你设置一个元素的宽为100px，那么这个元素的内容区会有100px 宽, 并且任何边框和内边距的宽度都会被增加到最后绘制出来的元素宽度中。
    //  来源: https://developer.mozilla.org/zh-CN/docs/Web/CSS/box-sizing
    width: 100%
    height: .62rem
    padding: 0 0.1rem
    // padding 左右留一点间隙
    line-height: .62rem
    text-align: center
    // vue cli 会自动在打包代码的过程中补充 "厂商前缀"(音) ? 没看到作用在哪, 待处理
    border-radius: .06rem
    color: #666

 </style>
