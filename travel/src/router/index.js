import City from '@/pages/city/City'
import Detail from '@/pages/detail/Detail'
// @符号指的是src目录
// import HelloWorld from '@/components/HelloWorld'
// 删除 components文件夹, 新建pages文件夹, 放我们写的所有网页
// 不写.vue后缀, vue也会自动帮你去找
import Home from '@/pages/home/Home'
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
// 一组路由的配置项
export default new Router({
  routes: [
    {
      path: '/',
      // 路由项
      name: 'Home',
      component: Home
    }, {
      path: '/city',
      name: 'City',
      component: City
    }, {
      // 动态路由
      path: '/detail/:id',
      name: 'Detail',
      component: Detail
    }
  ],
  // 根据 vuerouter 的 滚动行为, 消除多个栏目 之间 滚动的相互影响
  // 每次做路由切换的时候, 先进入显示的页面, 使其 x y 轴 初始位置为0
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})
