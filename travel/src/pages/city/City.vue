<template>
  <div>
    <city-header></city-header>
    <city-search></city-search>
    <city-list :cities="cities"
               :hot="hotCities"
               :letter="letter"></city-list>
    <city-alphabet :cities="cities"
                   @change="handleLetterChange"></city-alphabet>
  </div>
</template>

<script>
// ajax一般会放到最外层来做, 这样一次就能获得所需的内容
import axios from 'axios'
import CityHeader from './components/Header'
import CitySearch from './components/Search'
import CityList from './components/List'
import CityAlphabet from './components/Alphabet'
export default {
  name: 'City',
  components: {
    CityHeader,
    CitySearch,
    CityList,
    CityAlphabet
  },
  data () {
    return {
      cities: {},
      hotCities: [],
      letter: ''
    }
  },
  methods: {
    getCityInfo () {
      axios.get('/api/city.json').then(this.handleGetCityInfoSucc)
    },
    handleGetCityInfoSucc (res) {
      // console.log(res)
      res = res.data
      // ret 和 data 都不为空
      if (res.ret && res.data) {
        const data = res.data
        this.cities = data.cities
        this.hotCities = data.hotCities
      }
    },
    handleLetterChange (letter) {
      // console.log(letter)
      this.letter = letter
    }
  },
  mounted () {
    // 可以created, 但是建议 mounted
    this.getCityInfo()
  }
}
</script>

<style lang="stylus" scoped></style>
