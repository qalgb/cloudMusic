<template>
  <div>
<<<<<<< HEAD
    <router-view></router-view>
=======
    <Header />
    <Rank></Rank>
    <router-view></router-view>
    <Footer />
>>>>>>> master
  </div>
</template>

<script>
import Rank from "./pages/Rank"
import Header from "./components/Header";
import Footer from "./components/Footer";
export default {
<<<<<<< HEAD
  name: "App",
};
=======
  name: 'App',
  components: {
    Rank,
    Header,
    Footer
  }
}
>>>>>>> master
</script>

<style scoped></style>
