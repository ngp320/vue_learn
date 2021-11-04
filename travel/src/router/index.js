import Vue from 'vue'
import Router from 'vue-router'
// @符号指的是src目录
// import HelloWorld from '@/components/HelloWorld'
// 删除 components文件夹, 新建pages文件夹, 放我们写的所有网页
// 不写.vue后缀, vue也会自动帮你去找
import Home from '@/pages/home/Home'
import City from '@/pages/city/City'

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
    }
  ]
})
