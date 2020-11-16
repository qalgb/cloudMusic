<template>
  <div>
      <Header/>
      <Rank></Rank>
  </div>
</template>

<script>
import Rank from "./pages/Rank"
import Header from "./components/Header"
export default {
  name: 'App',
  components: {
    Rank,
    Header
  }
}
</script>

<style scoped>
</style>
