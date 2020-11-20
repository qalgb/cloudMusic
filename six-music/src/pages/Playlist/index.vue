<template>
  <div class="main">
    <!-- 上半部分 -->
    <div class="mod_playlist_tag" id="box">
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
          <!-- :class="
              myFlage ? 'playlist_tag__itembox avtive' : 'playlist_tag__itembox'
            " -->
          <p
            class="playlist_tag__itembox"
            ref="more"
            @click="pupUp(indexs)"
            v-show="dataList[indexs].length >= 6"
          >
            更多∨
          </p>
        </ul>
        <!-- 点击更多 -->
        <!-- v-for="(items,index) in dataGroup_hou"
          :key="index" -->
      </div>

      <ul
        class="playlist_pop_up"
        :style="{ display: isShow ? 'none' : 'flex' }"
      >
        <li
          v-for="(item, index) in dataGroup_hou"
          :key="index"
          class="playlist_tag__itembox tag__itembox"
          @click="moreData(item.name, index)"
        >
          {{ item.name }}
        </li>
      </ul>
    </div>
    
    <!-- 下半部分 -->
    <div>
      <div class="mod_part_detail">
        <div class="mod_part_detail_top">
          <h2 v-if="showHide" class="part_detail__tit">全部歌单</h2>
          <p v-else class="part_detail__p">
            <span class="span1">{{ name }} </span>
            <span class="span2" @click="backToAll">x</span>
          </p>
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
            <div class="mod_playlist__img__box">
              <img
                class="mod_playlist__img"
                v-lazy="item.coverImgUrl"
                @click="goToplaylistDetail(item.id)"
              />
              <img class="mod_playlist__bg_img" src="./image/p5.png" />
            </div>
            <!-- 点击跳转到playlistDetail -->
            <p class="playlist__title_txt" @click="goToplaylistDetail(item.id)">
              {{ item.name }}
            </p>

            <p class="playlist__author">{{ item.creator.nickname }}</p>
            <p class="playlist__other">
              播放量 :
              <span>{{
                item.playCount > 9999
                  ? (item.playCount / 10000).toFixed(1) + " 万"
                  : item.playCount
              }}</span>
            </p>
            <!-- item.bMusic.playTime>9999 ? (item.bMusic.playTime/10000).toFixed(1)+'万':item.bMusic.playTime -->
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
      name: "", //保存点击的类别名
      flage: true, //推荐,最新样式标记
      showHide: true, //全部歌单的显示隐藏
      myIndex: "", //点击更多里面的得到的下标
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
    pupUp(indexs) {
      //给Window绑定点击事件
      window.onclick = () => {
        this.isShow = !this.isShow;
      };
      let temporary = this.dataGroup.map((item) => {
        return item.slice(5);
      });
      this.dataGroup_hou = temporary[indexs];

      // this.$refs.more[this.myIndex].className = "playlist_tag__itembox active";
      // console.log(this.dataGroup_hou);
      // console.log(indexs)
    },
    async getCategoryPlaylist(name) {
      await this.$store.dispatch("getCategoryPlaylist", name);
    },
    // 点击添加active属性,并获取数据渲染界面
    async active(e) {
      //active样式的单选
      this.test ? (this.test.className = "playlist_tag__itembox") : "";
      if (e.target.nodeName.toLowerCase() === "li") {
        this.test = e.target;
        e.target.className = "active playlist_tag__itembox";

        // this.indexpd = e.target.dataset.index;
        // console.log(e.target.dataset.value);

        //点击(华语,日语)之类的获取想的数据并渲染界面
        this.name = e.target.dataset.value;
        await this.getCategoryPlaylist(this.name);
        this.recommended = this.result.categoryPlaylist;

        //更改下半部分标题
        this.showHide = false;

        this.myIndex
          ? (this.$refs.more[this.myIndex * 1].innerText = "更多∨")
          : "";
        this.myIndex
          ? (this.$refs.more[this.myIndex].className = "playlist_tag__itembox")
          : "";

        this.myIndex = "";
      }
    },
    //更多弹出框里面数据的点击事件
    async moreData(name, index) {
      this.name = name;
      await this.getCategoryPlaylist(this.name);
      this.recommended = this.result.categoryPlaylist;

      //更改下半部分标题
      this.showHide = false;
      this.myIndex = this.dataGroup_hou[index].category;
      this.$refs.more[this.myIndex].innerText = this.name;
      this.myFlage = this.$refs.more[this.myIndex].innerText;
      this.$refs.more[this.myIndex].className = "playlist_tag__itembox active";
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

    //点击X返回全部
    backToAll() {
      this.showHide = true;
      // 重新渲染歌单详情
      this.$nextTick(() => {
        this.recommended = this.result.cecommended.playlists.slice(0, 20);
      });

      // 清除歌单active样式
      this.test ? (this.test.className = "playlist_tag__itembox") : "";

      this.myIndex ? (this.$refs.more[this.myIndex].innerText = "更多∨") : "";
      this.myIndex
        ? (this.$refs.more[this.myIndex].className = "playlist_tag__itembox")
        : "";

      this.myIndex = "";
      //  this.$refs.more[this.myIndex].innerText='更多∨'
      // console.log(1);
      // console.log(this.$refs.more[this.myIndex]);
      // this.$refs.more[this.index].className = "playlist_tag__itembox";
    },

    //点击跳转到goToplaylistDetail
    goToplaylistDetail(id) {
      //获取歌单的id进行路由跳转，通过Query传参

      this.$router.push({ path: "/playlistdetail", query: { id: id } });
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

      // this.dataGroup_hou = this.dataGroup.map((item) => {
      //   return item.slice(5);
      // });
    });
    // 推荐全部歌单详情
    this.$nextTick(() => {
      this.recommended = this.result.cecommended.playlists.slice(0, 20);
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
    // name(){

    // }
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
  /*margin-left: 20px; */
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
  min-height: 37px;

  width: 100%;
  overflow: hidden;
  flex-wrap: wrap;
  justify-content: flex-start;
  /* display: none; */
}
.tag__itembox {
  height: 20px;
  padding-left: 30px;
  margin-top: 5px;
  max-width: 95px;
  padding-bottom: 5px;
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
/* 全部歌单切换的p */
.part_detail__p {
  /* display: flex; */
  border: 1px solid #cccccc;
  padding: 0 10px;
  height: 40px;
  border-radius: 2px;
  line-height: 40px;
  margin-top: 15px;
  margin-bottom: 15px;
}
.part_detail__p:hover {
  background-color: #31c27c;
  color: #fff;
  border-color: #31c27c !important;
}
.part_detail__p .span1 {
  margin-right: 10px;
}
.part_detail__p .span2 {
  /* display: block; */
  width: 15px;
  height: 15px;
  padding: 0 5px 3px;
  line-height: 15px;
}
.part_detail__p .span2:hover {
  border-radius: 50%;
  background-color: #999;
  opacity: 0.5;
}

/* 头部右边部分 */
.mod_part_detail_top_right {
  display: flex;
  height: 40px;
  line-height: 40px;
  margin-top: 10px;
  margin-bottom: 10px;
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
  justify-content: space-between;
}
/* 歌单展示列表小容器 */
.playlist__item {
  width: 18%;
  padding-bottom: 44px;
  font-size: 14px;
  vertical-align: top;
}
/* 歌单列表标题图所在的盒子 */
.playlist__item .mod_playlist__img__box {
  position: relative;
  widows: 100%px;
  height: 0;
  padding-bottom: 100%;
  overflow: hidden;
}
/* 歌单列表背景图 */
.mod_playlist__img__box .mod_playlist__img {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  transition: all 1s;
}
.playlist__item .mod_playlist__img__box:hover .mod_playlist__img {
  transform: scale(1.1);
  transition: all 1s;
}
/* 播放图的图片 */
.mod_playlist__bg_img {
  position: absolute;
  left: 40%;
  top: 40%;
  width: 20%;
  height: 20%;
  opacity: 0;
  transition: all 1s;
}
.playlist__item .mod_playlist__img__box:hover .mod_playlist__bg_img {
  opacity: 1;
  transform: scale(1.7);
  transition: all 1s;
}

/* 列表标题名字 */
.playlist__title_txt {
  margin-top: 10px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  width: 100%;
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

