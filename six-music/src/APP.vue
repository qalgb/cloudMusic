<template>
  <div>
    <!-- <AudioPlay /> -->
    <Header />
    <Rank></Rank>
    <router-view></router-view>
    <Footer />
  </div>
</template>
<script>
import AudioPlay from './components/AudioPlay'
import Rank from "./pages/Rank"
import Header from "./components/Header";
import Footer from "./components/Footer";
export default {
  name: '',
  components: {
    AudioPlay,
    Rank,
    Header,
    Footer
  }
}
</script>

<style scoped>
</style>
