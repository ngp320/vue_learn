
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
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
</style>
