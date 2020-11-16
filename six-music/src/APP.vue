<template>
  <div>
    <Header />
    <router-view></router-view>
    <!-- <Footer /> -->
  </div>
</template>

<script>
// 引入Header组件
import Header from './components/Header'
// 引入Footer组件
// import Footer from './components/Footer'
// import {reqSongRecommend} from '@/api'
export default {
  name: 'App',
  components: {
    Header,
  },
  mounted () {
    
  }
}
</script>

<style scoped>
</style>
