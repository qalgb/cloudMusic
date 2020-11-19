<template>
  <div class="main">
    <!-- 上半部分 -->
    <div class="mod_playlist_tag">
      <div
        v-for="(items, indexs) in dataGroup_qiang"
        :key="indexs"
        class="playlist_tag__list playlist_tag__list--lang"
      >
        <h3 class="playlist_tag__tit c_tx_thin">{{ categories[indexs] }}</h3>
        <ul class="playlist_tag__tags" @click="active">
          <li
            class="playlist_tag__itembox"
            v-for="(item, index) in items"
            :key="index"
            :data-value="item.name"
          >
            {{ item.name }}
          </li>
          <li class="playlist_tag__itembox" @click="pupUp">更多∨</li>
        </ul>
      </div>
      <!-- 下半部分 -->
      <ul
        v-for="items in dataGroup_hou"
        :key="items.id"
        class="playlist_pop_up"
        :style="{ display: isShow ? 'none' : 'flex' }"
      >
        <li
          v-for="(item, index) in items"
          :key="index"
          class="playlist_tag__itembox tag__itembox"
        >
          {{ item.name }}
        </li>
      </ul>
    </div>

    <div>
      <div class="mod_part_detail">
        <div class="mod_part_detail_top">
          <h2 class="part_detail__tit">全部歌单</h2>
          <div class="mod_part_detail_top_right">
            <p
              class="p1"
              :class="[flage ? 'active' : '']"
              @click="dataCollection1"
            >
              推荐
            </p>
            <p
              :class="[flage ? '' : 'active']"
              class="p2"
              @click="dataCollection"
            >
              最新
            </p>
          </div>
        </div>

        <div class="mod_playlist mod_playlist--all">
          <div
            v-for="(item, index) in recommended"
            :key="index"
            class="playlist__item"
          >
            <img :src="item.coverImgUrl" />
            <p class="playlist__title_txt">{{ item.name }}</p>
            <p class="playlist__author">{{ item.creator.nickname }}</p>
            <p class="playlist__other">
              播放量 : <span>{{ item.playCount }}</span>
            </p>
          </div>
        </div>
      </div>

      <div class="client_guide">
        <h2>查看更多内容,请下载客户端</h2>
        <p>立即下载</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";

export default {
  name: "Playlist",

  data() {
    return {
      isShow: true, //弹出框判断
      dataGroup: [], //获取的数据重新整理
      dataGroup_qiang: [], //前五个数据的集合
      dataGroup_hou: [], //后面的数据集合
      recommended: [], //歌单数据集合
      test: "", //上一次点击的类名
      flage: true, //推荐,最新样式标记
      // listdata: [], //(国语,日语,欧美...)
    };
  },

  //计算属性
  computed: {
    ...mapState({
      result: (state) => state.playlist,
    }),
    ...mapGetters(["dataList", "categories"]),
  },
  // 方法
  methods: {
    //点击更多弹出下拉框
    pupUp() {
      //给Window绑定点击事件
      window.onclick = () => {
        this.isShow = !this.isShow;
      };
    },
    async getCategoryPlaylist(name) {
      await this.$store.dispatch("getCategoryPlaylist", name);
    },
    // 点击添加active属性
    async active(e) {
      this.test ? (this.test.className = "playlist_tag__itembox") : "";
      if (e.target.nodeName.toLowerCase() === "li") {
        this.test = e.target;
        e.target.className = "active playlist_tag__itembox";
        // this.indexpd = e.target.dataset.index;
        // console.log(e.target.dataset.value);
        let name = e.target.dataset.value;
        console.log(name);
        await this.getCategoryPlaylist(name);
        // console.log(this.result);

        this.recommended = this.result.categoryPlaylist;
      }
    },
    //点击更新推荐/最新数据/添加active样式
    dataCollection() {
      this.flage = false;
      this.recommended = this.result.latestPlaylist.playlists;
    },
    dataCollection1() {
      this.flage = true;
      this.recommended = this.result.cecommended.playlists.slice(0, 20);
    },
  },
  // 界面渲染之后的生命周期回调
  async mounted() {
    // 分发getClassIfication,标签
    await this.$store.dispatch("getClassIfication");
    // 分发getRecommended,推荐
    await this.$store.dispatch("getRecommended");
    // 分发getLatestPlaylist,最新
    await this.$store.dispatch("getLatestPlaylist");
    //分发getCategoryPlaylist,(国语,日语)
    // await this.$store.dispatch("getCategoryPlaylist");

    this.$nextTick(() => {
      this.dataGroup = this.dataList;

      this.dataGroup_qiang = this.dataGroup.map((item) => {
        return item.slice(0, 5);
      });

      this.dataGroup_hou = this.dataGroup.map((item) => {
        return item.slice(5);
      });

      this.$nextTick(() => {
        this.recommended = this.result.cecommended.playlists.slice(0, 20);
      });
    });
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

<style scoped>
* {
  margin: 0;
  padding: 0;
  list-style: none;
}
/* Playlist总容器 */
.main {
  margin: 0 auto;
  min-width: 900px;
  max-width: 1200px;
  color: #000;
  font-size: 14px;
  line-height: 1.5;
  /* background-color: #ccc; */
}
/* 上半部分大容器 */
.mod_playlist_tag {
  display: flex;
  margin-bottom: 20px;
  /* background-image: url(""); */
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
  /* height: 110px;
  overflow: hidden; */
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
  position: absolute;
  top: 135px;
  left: 0;
  right: 24px;
  border: 1px solid #bfbfbf;
  background-color: #fff;
  z-index: 4;
  display: flex;

  width: 100%;
  overflow: hidden;
  flex-wrap: wrap;
  justify-content: flex-start;
  /* display: none; */
}
.tag__itembox {
  height: 20px;
  padding-left: 30px;
  margin-top: 10px;
  max-width: 95px;
}

/* 点击添加active样式 */
.active {
  background-color: #31c27c;
  color: #fff;
  border-color: #31c27c !important;
}
.active:hover {
  color: #fff;
}

/* 下半部分大容器 */
.mod_part_detail {
  position: relative;
  margin-bottom: 30px;
}
/* 下班部分头部 */
.mod_part_detail_top {
  display: flex;
  justify-content: space-between;
}
/* 全部歌单h2标签 */
.part_detail__tit {
  font-size: 24px;
  font-weight: 400;
  line-height: 58px;
}
/* 头部右边部分 */
.mod_part_detail_top_right {
  display: flex;
  height: 40px;
  line-height: 40px;
  margin-top: 15px;
}
.mod_part_detail_top_right .p1 {
  padding: 0 20px;
  border-radius: 2px;
  height: 40px;
  border: 1px solid #ccc;
  border-right: 0;
}
.mod_part_detail_top_right p {
  height: 40px;
  border: 1px solid #ccc;
  border-left: 0;
  border-radius: 2px;
  padding: 0 20px;
}

/* 歌单展示列表大容器 */
.mod_playlist {
  background-color: white;
  display: flex;
  font-size: 0;
  flex-wrap: wrap;
}
/* 歌单展示列表小容器 */
.playlist__item {
  /* display: inline-block; */
  width: 20%;
  padding-bottom: 44px;
  /* overflow: hidden; */
  font-size: 14px;
  vertical-align: top;
}
/* 歌单列表标题图 */
.playlist__item img {
  widows: 224px;
  height: 224px;
}
/* 列表标题名字 */
.playlist__title_txt {
  margin-top: 10px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  width: 224px;
}
.playlist__title_txt:hover {
  color: #31c27c;
}

/* 列表提供者 */
.playlist__author {
  color: #999;
  height: 22px;
  display: inline;
}
.playlist__author:hover {
  color: #31c27c;
}

/* 播放量 */
.playlist__other {
  color: #999;
  height: 22px;
}
.playlist__other span {
  margin-left: 8px;
}

/* ---------分割线-------- */
/* 底部内容 */
.client_guide {
  margin-bottom: 20px;
}

.client_guide h2 {
  font-size: 18px;
  color: #000;
  text-align: center;
  margin: 0 auto;
}

.client_guide p {
  margin: 20px auto 0;
  width: 175px;
  height: 41px;
  line-height: 41px;
  font-size: 16px;
  color: #fff;
  text-align: center;
  border-radius: 41px;
  background-color: #31c27c;
}
</style>

