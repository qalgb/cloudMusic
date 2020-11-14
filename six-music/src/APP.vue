<template>
  <div>
    <!-- <Header /> -->
    <!-- <router-view></router-view> -->
    <Recommend />
    <!-- <Footer /> -->
  </div>
</template>

<script>
// 引入Header组件
// import Header from './components/Header'
// 引入Footer组件
// import Footer from './components/Footer'
import Recommend from './pages/Home/Recommend'
export default {
  name: 'App',
  components: {
    Recommend,
  },
}
</script>

<style scoped>
</style>
