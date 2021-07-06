<template>
<!-- template模版要求, 最外层只有一个标签, 所以如果多个, 则要放在一个大的div标签下 -->
<div>
  <div>
    <input class="item" v-model="inputValue"/>
    <button @click="handleSubmit">提交</button>
  </div>
  <ul>
    <todo-item
    v-for="(item, index) of list"
    :key="index"
    :contentaaa="item"
    :index="index"
    @delete_one="handleDelete"
    ></todo-item>
  </ul>
</div>
</template>

<script>
// script标签里写的组件的逻辑
import TodoItem from './components/TodoItem'
export default {
  components: {
    'todo-item': TodoItem
  },
  // data: function () {
  // 省略, 表示data是一个函数, 表示返回一个inputValue
  data () {
    return {
      inputValue: '',
      list: []
    }
  },
  methods: {
    handleDelete (index) {
      this.list.splice(index, 1)
    },
    // handleSubmit:function() {}
    // 省略 :function  ()即可表示为一个方法
    handleSubmit () {
      // this.list 等价于 this.$data.list的缩写, vue帮我们做的底层处理
      // 如果data里面没有, vue还回去computed计算属性里面去找.
      this.list.push(this.inputValue)
      this.inputValue = ''
    }
  }
}
</script>

<style>
</style>
