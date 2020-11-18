<template>
  <div>
    <Video />
    <Comment />
  </div>
</template>
<script>
import Comment from "../../components/Comment"
import Video from "./Video"
export default {
  name:"MvVideo",
  components: {
    Video,
    Comment,
  }
}
</script>
<style scoped>
</style>