<template>
  <div>
<!--    <div class="home">Home</div>-->
<!--    &lt;!&ndash; vue中, 用router-link而不是a标签, 切换页面 &ndash;&gt;-->
<!--    <router-link to="/list" class="home">列表页</router-link>-->
<!--    hello world-->
    <home-header></home-header>
    <home-swiper></home-swiper>
    <home-icons></home-icons>
  </div>

</template>

<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/Icons'
export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons
  }
}
</script>

<style scoped>
/*.home {*/
/*  font-size: 50px;*/
/*}*/
</style>
