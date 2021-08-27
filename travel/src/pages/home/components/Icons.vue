<template>
  <div class="icons">
    <swiper>
      <!-- swiper-slide控制有多少个轮播页面 -->
      <swiper-slide v-for="(page,index) of pages" :key="index">
        <!-- iconList改page,配合swiper-slide, 实现轮播 -->
        <div class="icon" v-for="item of page" :key="item.id">
          <div class="icon-img">
            <img class="icon-img-content"
                 :src="item.imgUrl"/>
          </div>
          <p class="icon-img-desc">{{item.desc}}</p>
        </div>
      </swiper-slide>
    </swiper>

  </div>
</template>

<script>
export default {
  name: 'HomeIcons',
  data () {
    return {
      iconList: [{
        id: '0001',
        imgUrl: 'https://imgs.qunarzz.com/p/p32/1504/46/5a0a9ac552e26d.jpg_216x190_d7288910.jpg',
        desc: '青岛'
      }, {
        id: '0002',
        imgUrl: 'https://imgs.qunarzz.com/p/p67/1512/a2/0ebfcd965b9391f7.jpg_216x190_cfab0afb.jpg',
        desc: '三亚'
      }, {
        id: '0003',
        imgUrl: 'https://imgs.qunarzz.com/p/p70/1809/e7/4941057a6aae702.jpg_216x190_1d9c854f.jpg',
        desc: '丽江'
      }, {
        id: '0004',
        imgUrl: 'https://imgs.qunarzz.com/p/p71/1809/50/b5597c7332bef702.jpg_216x190_34aea61c.jpg',
        desc: '大理'
      }, {
        id: '0005',
        imgUrl: 'https://imgs.qunarzz.com/p/p32/1504/46/5a0a9ac552e26d.jpg_216x190_d7288910.jpg',
        desc: '青岛'
      }, {
        id: '0006',
        imgUrl: 'https://imgs.qunarzz.com/p/p67/1512/a2/0ebfcd965b9391f7.jpg_216x190_cfab0afb.jpg',
        desc: '三亚'
      }, {
        id: '0007',
        imgUrl: 'https://imgs.qunarzz.com/p/p70/1809/e7/4941057a6aae702.jpg_216x190_1d9c854f.jpg',
        desc: '丽江'
      }, {
        id: '0008',
        imgUrl: 'https://imgs.qunarzz.com/p/p71/1809/50/b5597c7332bef702.jpg_216x190_34aea61c.jpg',
        desc: '大理1'
      }, {
        id: '0009',
        imgUrl: 'https://imgs.qunarzz.com/p/p77/201302/28/ce5fdca7d3940b0193835fbb.jpg_216x190_c3b1e60e.jpg',
        desc: '呼伦贝尔'
      }]
    }
  },
  computed: {
    // 把9条数据, 按8个一页, 拆成2维数组
    pages () {
      const pages = []
      this.iconList.forEach((item, index) => {
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl';
  @import '~styles/mixins.styl';
  // 实现空白区域左滑/右划, 也有轮播图效果
  .icons >>> .swiper-container
    //width:100% //可以不写因为是div标签
    //overflow: hidden //.swiper-container 自带overflow: hidden
    height: 0
    padding-bottom: 50%

  //宽高比2:1
  //background: green //测试用的背景色
  .icons
    margin-top: .1rem
    .icon
      position: relative
      overflow: hidden
      float: left //如果有多个, 就浮动排列
      width: 25%
      // 处理icon-img+文字高度 > icons height的 50% ... emmm找不到解释, 先这样用着
      height: 0
      padding-bottom: 25% // width:25% + padding-bottom: 25% = 宽高比1:1
      //background: red  //测试用的背景色

      .icon-img
        //仅有这个是 根元素的绝对位置, 父元素加上position: relative, 则是相对父元素的绝对位置
        // 参考 http://www.ruanyifeng.com/blog/2019/11/css-position.html
        position: absolute
        // absolute同时设置left，right,top,bottom 参考: https://segmentfault.com/q/1010000011961314
        // 'left' + 'margin-left' + 'border-left-width' + 'padding-left' + 'width' + 'padding-right' + 'border-right-width' + 'margin-right' + 'right' = width of containing block
        top: 0
        left: 0
        right: 0
        bottom: .44rem
        //background:blue //测试用的背景色

        .icon-img-content
          // display block 目测是使得margin生效
          // 参考 https://www.jianshu.com/p/914b76bae7b5
          // 参考 https://segmentfault.com/a/1190000006047872
          display: block
          // css margin参考:https://www.runoob.com/cssref/pr-margin.html
          // 水平居中
          margin: 0 auto
          height: 100%

      .icon-img-desc
        position: absolute
        left: 0
        right: 0
        bottom: 0
        height: .44rem
        line-height: .44rem
        color: $darkTextColor
        text-align: center
        ellipsis()
</style>
