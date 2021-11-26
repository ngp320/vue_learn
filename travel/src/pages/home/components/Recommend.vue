<template>
  <div>
    <div class="title">热销推荐</div>
    <ul>
      <!-- <router-link to="/detail"> 这么写 会改变标签颜色, 可直接 改li 标签为 router-link tag="li" 这样vue就会渲染成li标签 -->
      <!-- 通过border-buttom 直接设置1像素边框 -->
      <router-link tag="li"
                   class="item border-buttom"
                   v-for="item of list"
                   :key="item.id"
                   :to="'/detail/' + item.id">
        <!-- : === v-bind 往子组件传值 -->
        <!-- @ === v-on -->
        <img class="item-img"
             :src="item.imgUrl" />
        <div class="item-info">
          <p class="item-title">{{ item.title }}</p>
          <p class="item-desc">{{ item.desc }}</p>
          <button class="item-button">查看详情</button>
        </div>
      </router-link>

    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  props: {
    list: Array
  },
  data () {
    return {
      // 更多是通过 浏览器 console里的提示, 来排查错误
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/mixins.styl';

.title {
  margin-top: 0.2rem;
  line-height: 0.8rem;
  background: #eee;
  // text-indent 属性规定文本块中首行文本的缩进。
  text-index: 0.2rem;
}

.item {
  overflow: hidden;
  display: flex;
  height: 1.9rem;

  // background: red
  .item-img {
    width: 1.7rem;
    height: 1.7rem;
    padding: 0.1rem;
  }

  .item-info {
    flex: 1;
    padding: 0.1rem;
    // 父元素配置 min-width: 0 解决 子元素 ellipsis() 不起作用
    min-width: 0;

    .item-title {
      line-height: 0.54rem;
      font-size: 0.32rem;
      ellipsis();
    }

    .item-desc {
      line-height: 0.4rem;
      color: #ccc;
      ellipsis();
    }

    .item-button {
      line-height: 0.44rem;
      margin-top: 0.16rem;
      background: #ff9300;
      padding: 0 0.1rem;
      border-radius: 0.06rem;
      color: #fff;
    }
  }
}
</style>
