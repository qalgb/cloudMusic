<template>
  <div>
    <!-- <AudioPlay /> -->
    <Header v-if="!this.$route.meta.isHide" />
    <router-view></router-view>
    <Footer v-if="!this.$route.meta.isHide" />
  </div>
</template>
<script>
import Header from "./components/Header";
import Footer from "./components/Footer";
// import AudioPlay from './components/AudioPlay'

export default {
  name: "App",
  components: {
    // AudioPlay,
    Header,
    Footer,
  },
  watch: {
    "$route.fullPath"() {
      if (this.$route.fullPath.indexOf("audioplay") !== -1) {
        document.documentElement.style.overflow = "hidden";
        document.body.style.overflow = "hidden";
      } else {
        document.documentElement.style.overflow = "";
        document.body.style.overflow = "";
      }
    },
  },
};
</script>

<style scoped>
</style>
