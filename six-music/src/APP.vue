<template>
  <div>
<Header />
    <router-view></router-view>
    <Footer />
  </div>

</template>
  
<script>
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from './pages/Home';
export default {
  name: 'App',
  components: {
    Header,
    Footer,
    Home
  }
}
</script>

<style scoped>
</style>
