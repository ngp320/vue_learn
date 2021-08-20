// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
import 'styles/reset.css'

// 移动端 有一个 1像素边框问题
// 手机像素比较高, 有一个二倍屏 三倍屏 问题. 可参考:https://www.zhihu.com/question/26195746
// 为解决这种多倍屏里, 1像素边框会被显示成多像素的问题呢. 我们需要引入一个 1像素边框的解决方案
import 'styles/border.css'

// 在某些机型上, click会延迟300ms, 可引入fastclick库解决
// npm install fastclick --save
import fastClick from 'fastclick'

// 引入字体
import 'styles/iconfont.css'

fastClick.attach(document.body)
Vue.use(VueAwesomeSwiper)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  // src/main.js 的挂载点 #app 指的就是 /index.html 里的<div id="app"></div>
  el: '#app',
  // es6里面, 键和值相等可以省略一部分内容, 实际为 router: router, 点击 import router 可知实际
  router,
  // components: {App},是 es6写法, 省略了一部分, components: {App: App}
  components: {App},
  // template 模版把App局部组件显示在页面之上. App是从当前目录下导入进来的 import App from './App'
  // webpack没有写后缀, 但会默认从一些后缀里选择. 例如App.vue, App.js, App.json 等待, 知道找到为止.
  template: '<App/>'
})

// 路由就是根据网址的不同，返回不同的内容给用户
