<template>
  <div class="list">
    <ul v-for="(item, key) of cities"
        :key="key">
      <li class="item">{{key}}</li>
    </ul>

  </div>
</template>

<script>
export default {
  name: 'CityAlphabet',
  props: {
    cities: Object
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl';

.list {
  display: flex;
  flex-direction: column;
  justify-content: center;
  // 垂直居中
  // text-align 和 justify-content 区别 来源: https://juejin.cn/post/6844903911690600456
  position: absolute;
  top: 1.58rem;
  right: 0;
  bottom: 0;
  width: 0.4rem;

  // background: red;
  .item {
    line-height: 0.4rem;
    text-align: center;
    color: $bgColor;
  }
}
</style>
