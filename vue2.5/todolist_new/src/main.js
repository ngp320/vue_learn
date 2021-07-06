// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import TodoList from './TodoList'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  // 如果conponent 键值相同, 写一个即可
  components: { TodoList },
  // 页面显示的内容就是App组件
  template: '<TodoList/>'
})
