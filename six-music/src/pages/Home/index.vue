<template>
  <div>
    <!-- 歌单推荐 -->
    <Recommend />
    <!-- 新歌首发 -->
    <Launch />
  </div>
</template>

<script>
import Recommend from './Recommend'
import Launch from './Launch'
export default {
  name: 'Home',
  components: {
    Recommend,
    Launch
  }
}
</script>

<style scoped>
</style>
