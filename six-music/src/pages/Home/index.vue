<template>
  <div>
    <!-- 歌单推荐 -->
    <Recommend />
    <!-- 新歌首发 -->
    <Launch />
    <!-- 精彩委托 -->
    <Focus />
    <!-- 新碟首发 -->
    <DiscList />
    <!-- 排行榜 -->
    <RankList />
    <!-- Mv -->
    <Mv />
  </div>
</template>

<script>
import Recommend from './Recommend'
import Launch from './Launch'
import Focus from './Focus'
import DiscList from './DiscList'
import RankList from './RankList'
import Mv from './Mv'

export default {
  name: "Home",
  components: {
    Recommend,
    Launch,
    Focus,
    DiscList,
    RankList,
    Mv
  },
}
</script>

<style scoped></style>
