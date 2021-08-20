<template>
  <div class="header">
    <div class="header-left">
      <!-- 选中https://www.iconfont.cn/中的项目中的图标, 点击复制代码, 粘贴到此处即可 -->
      <div class="iconfont back-icon">&#xe658;</div>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe63c;</span>
      输入城市/景点/游玩主题
    </div>
    <div class="header-right">
      城市
      <span class="iconfont show-city-icon">&#xe65c;</span>
    </div>
  </div>

</template>

<script>
export default {
  name: 'HomeHeader'
}
</script>

<!--// rem 的 r 代表 root，即 root em，表示以根元素的字体大小作为参照。-->
<!--// 1rem等于html根元素设定的font-size的px值-->
<!--// 由于 /src/assets/style/reset.css里设置了font-size:50px;-->
<!--// 二倍图:https://www.zhihu.com/question/26195746-->
<!--// 二倍图px 除以2的问题?-->
<!--// (主要理解图文&ndash;&gt;)https://zhuanlan.zhihu.com/p/29392903-->
<!--// 大概好像了解了. 几倍图 px=实际像素/几... 这里font-size:50px, 所以 rem=50px,-->
<!--// 86px设计图高度 = 43px逻辑高度 应该不是86px, 而是43px-->
<!--// .86rem = font-size:50px*0.86(因为是2倍图) = 43px , 所以这里省去一些计算-->

<!--// div默认100%-->
<!--// 以下flex解释来自于 https://www.ruanyifeng.com/blog/2015/07/flex-grammar.html-->
<!--// flex-grow属性-->
<!--// 如果所有项目的flex-grow属性都为1，则它们将等分剩余空间（如果有的话）。如果一个项目的flex-grow属性为2，其他项目都为1，则前者占据的剩余空间将比其他项多一倍。-->
<!--// flex-shrink属性-->
<!--// 如果所有项目的flex-shrink属性都为1，当空间不足时，都将等比例缩小。如果一个项目的flex-shrink属性为0，其他项目都为1，则空间不足时，前者不缩小。-->
<!--// flex-basis属性-->
<!--// flex-basis属性定义了在分配多余空间之前，项目占据的主轴空间（main size）。浏览器根据这个属性，计算主轴是否有多余空间。它的默认值为auto，即项目的本来大小。-->
<!--// flex属性-->
<!--// flex属性是flex-grow, flex-shrink 和 flex-basis的简写，默认值为0 1 auto。后两个属性可选。-->
<!--// 该属性有两个快捷值：auto (1 1 auto) 和 none (0 0 auto)。-->
<!--// 建议优先使用这个属性，而不是单独写三个分离的属性，因为浏览器会推算相关值。-->
<!--// (图不错)https://segmentfault.com/a/1190000023711200-->
<!--// 以下来源 https://www.zhangxinxu.com/wordpress/2020/10/css-flex-0-1-none/-->
<!--// flex:1 等同于设置flex: 1 1 0% ,等比扩大缩小, flex-basis为每个元素初始宽度, 越接近0% 每个子项目分配宽度越平均-->
<!--// 只设置一个子元素, 则是, 减去左右元素后, 看剩余空间等比放大缩小-->

<!-- 写完之后做一些代码优化, 常用颜色提出来 -->
<style lang="stylus" scoped>
// ~@ 的~, 这种写法其实是webpack中的一个配置。这里用~符号, 然后就会去 webpack.base.conf.js的 alias 配置中找相应的值。
// 修改webpack配置项, 需要重启服务器
@import "~styles/varibles.styl"
.header
  display: flex
  line-height: .86rem
  background: $bgColor
  color: #fff

  .header-left
    width: .64rem
    float: left

    .back-icon
      text-align: center
      font-size: .5rem

  .header-input
    // 字体直接 color设置颜色
    color: #ccc
    // 84 - 12*2 = 64'
    height: .64rem
    line-height: .64rem
    margin-left: .2rem
    margin-top: .12rem
    padding-left: .2rem
    background: #fff
    border-radius: .1rem
    flex: 1

  .header-right
    float: right
    width: 1.24rem
    font-size: .3rem
    text-align: center
    margin-left: .1rem

    .show-city-icon
      margin-left: -.13rem
      font-size: .4rem
</style>
<!-- scoped只对当前组件有效 -->
