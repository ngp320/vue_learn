
<!-- template script styles三部分
  当一个文件以.vue结尾, 就称为单文件组件
  以前的组件 这么写Vue.component('abc'....
  现在不一样了.
  组件模版放在 template
  组件的逻辑放在 scripts
  组件的css样式放在 style
  -->

<template>
  <div id="app">
    <!--    <img src="./assets/logo.png">-->
    <!-- 页面内容来自 router-view  显示的是当前路由地址所对应的内容 -->
    <!-- 其与src/main.js中的router相关 -->
    <!--  <router-view/> 外面 包裹一层 keep-alive 防止 切换页面重复请求ajax,  -->
    <!--  keep-alive 直接缓存了起来, 使用 其时, 会多出一个 activated 生命周期函数 -->
    <!-- exclude 排除这个页面的 keep-alive缓存, 相比于activated, 会影响其子组件 -->
    <keep-alive exclude="Detail">
      <router-view />
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
</style>
