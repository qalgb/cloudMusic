<template>
  <div>
    <AudioPlay />
    <!-- <Header />
    <router-view></router-view>
    <Footer /> -->
  </div>
</template>
<script>
// import Header from './components/Header'
// import Footer from './components/Footer'
import AudioPlay from './components/AudioPlay'

export default {
  name: 'App',
  components: {
    AudioPlay,
    // Header,
    // Footer
  },
}
</script>

<style scoped>
</style>
