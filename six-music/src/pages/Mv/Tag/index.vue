<template>
  <!-- 筛选 -->
    <div class="mod_tag">
      <div class="tag_list" >
        <h3 class="tag_tit">区域</h3>
        <a href="javascript:;" class="tag_item " v-for="(item,index) in areamv" :key="item.id" :class="[ereaTag === index ?'contentTag' :'' ]" @click="areaTitle(ereaTag,index)"  >{{item.title}}</a>
      </div>
    </div>
</template>
<script>
export default {
  name: "Tag",
  data () {
    return {
      areamv:[
        {id:'1',title:"全部"},
        {id:'2',title:"内地"},
        {id:'3',title:"港台"},
        {id:'4',title:"欧美"},
        {id:'5',title:"日本"},
        {id:'6',title:"韩国"}
      ],
      ereaTag:''
    }
  },
  mounted () {
  },
  methods: {
    areaTitle(ereaTag,index){
      this.ereaTag = index
      
    }
    
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