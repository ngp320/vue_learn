<template>
  <div>
    <detail-banner></detail-banner>
    <detail-header></detail-header>
    <!-- div.content用于撑开页面高度 -->
    <div class="content">
      <detail-list :list="list">
      </detail-list>
    </div>
  </div>
</template>

<script>
import DetailBanner from './components/Banner'
import DetailHeader from './components/Header'
import DetailList from './components/List'
export default {
  name: 'Detail',
  components: {
    DetailBanner,
    DetailHeader,
    DetailList
  },
  data () {
    return {
      list: [
        {
          title: '园区主体',
          children: [
            {
              title: ' 免费 ',
              price: ''
            }
          ]
        },
        {
          title: '成人票',
          children: [
            {
              title: '雷峰塔门票成人票-13:00-14:00入园 ',
              price: '¥40'
            },
            {
              title: '雷峰塔门票成人票-14:00-15:00入园 ',
              price: '¥40'
            },
            {
              title: '雷峰塔门票成人票-15:00-16:00入园 ',
              price: '¥40'
            },
            {
              title: '西湖游船休闲船+三潭印月登岛票成人票-08:00-12:00场 ',
              price: '¥55'
            }
          ]
        },
        {
          title: '儿童票',
          children: [
            {
              title:
                '灵隐飞来峰景区门票+灵隐寺门票+祈福福袋+漫步法云古村+深度讲解服务儿童票-07:30入园 ',
              price: '¥168'
            }
          ]
        }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
.content {
  height: 50rem;
}</style>
