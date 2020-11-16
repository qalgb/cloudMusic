<template>
  <div>
<<<<<<< HEAD
    <Mv />
=======
    <!-- 歌单推荐 -->
    <Recommend />
    <!-- 新歌首发 -->
    <Launch />
>>>>>>> master
  </div>
</template>

<script>
<<<<<<< HEAD
import Mv from './Mv'
export default {
  name: 'Home',
  components: {
    Mv,
=======
import Recommend from './Recommend'
import Launch from './Launch'
export default {
  name: 'Home',
  components: {
    Recommend,
    Launch
>>>>>>> master
  }
}
</script>

<style scoped>
</style>
