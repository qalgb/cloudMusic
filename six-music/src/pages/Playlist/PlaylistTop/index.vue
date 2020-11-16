<template>
  <div class="mod_playlist_tag">
    <div
      v-for="(item, index) in this.result.classIfication.categories"
      :key="index"
      class="playlist_tag__list playlist_tag__list--lang"
    >
      <h3 class="playlist_tag__tit c_tx_thin">{{ item }}</h3>
      <ul class="playlist_tag__tags" @click="active">
        <li class="playlist_tag__itembox">国语</li>
        <li class="playlist_tag__itembox">英语</li>
        <li class="playlist_tag__itembox">韩语</li>
        <li class="playlist_tag__itembox">粤语</li>
        <li class="playlist_tag__itembox">日语</li>
        <li class="playlist_tag__itembox" @click="pupUp">
          更多∨
        </li>
      </ul>
    </div>

    <ul class="playlist_pop_up" :style="{ display: isShow ? 'none' : 'flex' }">
      <li class="playlist_tag__itembox tag__itembox">小语种</li>
      <li class="playlist_tag__itembox tag__itembox">闽南语</li>
      <li class="playlist_tag__itembox tag__itembox">法语</li>
      <li class="playlist_tag__itembox tag__itembox">拉丁语啊</li>
    </ul>
  </div>
</template>
<script>
import { mapState } from "vuex";

export default {
  name: "PlaylistTop",
  data() {
    return {
      isShow: true, //弹出框判断
      dataGroup: {}, //获取的数据重新整理
    };
  },

  //计算属性
  computed: {
    ...mapState({
      result: (state) => state.playlist,
    }),
    // dataGroup:{...this.result.classIfication.categories}
  },
  // 方法
  methods: {
    //点击更多弹出下拉框
    pupUp() {
      //给Window绑定点击事件
      window.onclick = () => {
        this.isShow = !this.isShow;
      };
      const categoriess = this.result.classIfication.categories;
      console.log(categoriess);
    },
    // 点击添加active属性
    active(e) {
      if (e.target.nodeName.toLowerCase() === "li") {
        const oLi = e.target;
        oLi.classList.add("active");
      }
    },
  },

  // 界面渲染之后的生命周期回调
  mounted() {
    // 分发getClassIfication
    this.$store.dispatch("getClassIfication");

    // const categoriess = this.result.classIfication.categories;
    // console.log(categoriess);
    // this.dataGroup = { ...categoriess };
    // console.log(this.dataGroup);
  },

  //监视
  watch: {
    //解绑Window的点击事件，当isShow为true时解绑
    isShow() {
      //清除
      if (this.isShow) {
        window.onclick = "";
      }
    },
  },
};
</script>
<style>
/* 上半部分大容器 */
.mod_playlist_tag {
  display: flex;
  margin-bottom: 20px;
  background-image: url("");
  margin-top: 30px;
  position: relative;
  /* background-color: #ddd; */
}
/* 小容器，包含h3与ul */
.playlist_tag__list {
  width: 20%;
  line-height: 26px;
  min-width: 220px;
}
/* h3标题标签 */
.playlist_tag__tit {
  color: #999;
  font-weight: 400;
  font-size: 14px;
  padding-left: 25px;
  margin-bottom: 8px;
  margin-top: -6px;
}
/* 包含li的ul */
.playlist_tag__tags {
  display: flex;
  flex-wrap: wrap;
  border-right: 1px solid #cccccc;
  min-width: 220px;
}
/* 每一个li */
.playlist_tag__itembox {
  width: 35%;
  padding: 0 8px;
  margin: 0 15px 10px;
}
.playlist_tag__itembox:hover {
  color: #31c27c;
}

/* 更多弹出窗 */
.playlist_pop_up {
  height: 65px;
  position: absolute;
  top: 135px;
  left: 0;
  right: 24px;
  border: 1px solid #bfbfbf;
  background-color: #fff;
  z-index: 4;
  display: flex;
  line-height: 65px;
  width: 100%;
  justify-content: flex-start;
  /* display: none; */
}
.tag__itembox {
  height: 20px;
  padding-left: 30px;
  max-width: 95px;
}

/* 点击添加active样式 */
.active {
  background-color: #31c27c;
  color: #fff;
}
.active:hover {
  color: #fff;
}
</style>
