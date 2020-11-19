<template>
  <!-- 筛选 -->
    <div class="mod_tag">
      <div class="tag_list" >
        <h3 class="tag_tit">区域</h3>
        <a href="javascript:;" class="tag_item contentTag" >全部</a>
        <a href="javascript:;" class="tag_item">内地</a>
        <a href="javascript:;" class="tag_item">港台</a>
        <a href="javascript:;" class="tag_item">欧美</a>
        <a href="javascript:;" class="tag_item">日本</a>
        <a href="javascript:;" class="tag_item">韩国</a>
      </div>
      <div class="tag_list">
        <h3 class="tag_tit" >区域</h3>
        <a href="javascript:;" class="tag_item contentTag" >全部</a>
        <a href="javascript:;" class="tag_item" >内地</a>
        <a href="javascript:;" class="tag_item" >内地</a>
        <a href="javascript:;" class="tag_item" >内地</a>
        <a href="javascript:;" class="tag_item" >内地</a>
      </div>
    </div>
</template>
<script>
export default {
  name: "Tag",
  data () {
    return {
    }
  },
  methods: {
  }
}
</script>
<style scoped>
/* 筛选 */
.tag_list {
  position: relative;
  height: auto;
  zoom: 1;
  clear: both;
  overflow: hidden;
  line-height: 26px;
  padding-left: 65px;
}
.mod_tag {
  position: relative;
  padding: 52px 0 0;
}
.tag_tit {
  position: absolute;
  top: 0;
  left: 0;
  font-weight: 400;
  width: 65px;
}

a:hover {
  color: green;
  text-decoration: none;
}
.tag_item {
  float: left;
  padding: 0 8px;
  margin: 0 24px 15px 0;
}
.contentTag {
  background-color: #31c27c;
  color: #fff !important;
}
</style>