<template>
<div class="bg">
  <div class="main">
    <Tag />
    
    <MvContent />
  </div>
</div>
  
</template>
<script>
import Tag from './Tag'
import MvContent from './MvContent'
export default {
  name: "Mv",
  
  components: {
    Tag,
    MvContent,
  },
  
};
</script>
<style scoped>
.bg{
background: url("./images/bg_detail.jpg") 50% 0 repeat-x;
}
.main {
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
}


</style>
