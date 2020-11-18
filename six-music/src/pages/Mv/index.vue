<template>
<div class="bg">
  <div class="main">
    
    <MvContent />
  </div>
</div>
  
</template>
<script>
import MvContent from './MvContent'
export default {
  name: "Mv",
  
  components: {
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
