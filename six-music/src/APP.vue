<template>
  <div>
    <Header />
    <!-- <Rank></Rank> -->
    <router-view></router-view>
    <Footer />
  </div>
</template>

<script>
// import Rank from "./pages/Rank"
import Header from "./components/Header";
import Footer from "./components/Footer";
export default {
  name: "App",
  components: {
    // Rank,
    Header,
    Footer,
  },
};
</script>

<style scoped>
</style>
