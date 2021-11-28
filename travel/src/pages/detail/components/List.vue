<template>
  <div>

    <div class="item"
         v-for="(item,index) in list"
         :key="index">
      <div class="item-title border-bottom">
        <div class="item-title-icon"></div>
        {{item.title}}
        <div class="item-title-price"> {{item.price}}</div>
      </div>
      <!-- 如果item有children, 递归调用自己, 显示二级菜单 -->
      <div v-if="item.children"
           class="item-children">
        <detail-list :list="item.children"></detail-list>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailList',
  props: {
    list: Array
  }
}
</script>

<style lang="stylus" scoped>
.item {
  .item-title {
    overflow: hidden;
    line-height: 0.6rem;
    font-size: 0.4rem;
    padding: 0.2rem;

    .item-title-icon {
      float: left;
      position: relative;
      left: 0.05rem;
      top: 0.1rem;
      display: inline-block;
      width: 0.36rem;
      height: 0.36rem;
      background: url('https://s.qunarzz.com/piao/image/touch/sight/detail.png') 0 -0.45rem no-repeat;
      margin-right: 0.1rem;
      background-size: 0.4rem 3rem;
    }

    .item-title-price {
      // float: left; + float: right; 合并两行div
      float: right;
      color: #ff9315;
    }
  }

  .item-children {
    padding: 0 0.2rem;

    .item-title {
      font-size: 0.28rem;
    }
  }
}
</style>
