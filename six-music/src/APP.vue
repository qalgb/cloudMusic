<template>
  <div>
    <Header />
    <!-- <Rank></Rank> -->
    <!-- <router-view></router-view> -->
    <Playlist />
    <Footer />
  </div>
</template>

<script>
import Playlist from "./pages/Playlist";
// import Rank from "./pages/Rank";
import Header from "./components/Header";
import Footer from "./components/Footer";
export default {
  name: "App",
  components: {
    Playlist,
    Header,
    Footer,
  },
  
};
</script>

<style>

</style>
