<template>
  <div>
    <Header v-if="!this.$route.meta.isHide" />
    <router-view></router-view>
    <Footer v-if="!this.$route.meta.isHide" />
  </div>
</template>
<script>
import Header from "./components/Header";
import Footer from "./components/Footer";

export default {
  name: "App",
  components: {
    Header,
    Footer,
  },
};
</script>

<style scoped>
</style>
