<template>
  <div class="mod_bg mod_index">
    <div class="section_inner">
      <div class="index_hd">
        <h2 class="index_tit">
          <i class="icon_txt">歌单推荐</i>
        </h2>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Recommend',
}
</script>

<style scoped>
.mod_bg {
  background: url('./images/bg_detail.jpg') 50% 0 repeat-x ;
}
.mod_index {
  position: relative;
}
.mod_index .section_inner {
  z-index: 2;
  overflow: hidden;
}
.section_inner {
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
}
.index__hd {
  position: relative;
  padding-top: 4.16667%;
  padding-bottom: 2%;
}
.index_hd .index_tit {
  display: block;
  margin: 0 auto;
  width: 196px;
  height: 40px;
  background-image: url('./images/index_tit.png');
}
.icon_txt {
    font: 0/0 a;
}
</style>
