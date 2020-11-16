<template>
  <div>
<<<<<<< HEAD
      <Header/>
      <Rank></Rank>
=======
    <Header />
    <router-view></router-view>
    <Footer />
>>>>>>> hjy
  </div>
</template>

<script>
<<<<<<< HEAD
import Rank from "./pages/Rank"
import Header from "./components/Header"
=======
import Header from "./components/Header";
import Footer from "./components/Footer";
>>>>>>> hjy
export default {
  name: 'App',
  components: {
<<<<<<< HEAD
    Rank,
    Header
  }
}
=======
    Header,
    Footer,
  },
};
>>>>>>> hjy
</script>

<style scoped>
</style>
