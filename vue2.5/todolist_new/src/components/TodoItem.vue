<template>
<li class="item" @click="handleDelete_li">{{contentaaa}}</li>
</template>

<script>
export default {
  props: ['contentaaa', 'index'],
  methods: {
    handleDelete_li () {
      this.$emit('delete_one', this.index)
      // alert(this.index)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
// scoped 限制此css只影响此组件, 作用域限制, 取消即可影响其他组件
<style scoped>
.item {
  color: green;
}
</style>
