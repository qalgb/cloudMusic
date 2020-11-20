<template>
  <div class="outer">
    <div class="box">
      <img src="./img/bg.png" />
      <div class="mod_singer_text">
        <p class="p1">万千歌手 尽在眼前</p>
        <p class="p2">登陆查看你的关注歌手</p>
        <p class="p3">立即登陆</p>
      </div>
    </div>
    <div class="mian">
      <ul class="mod_singer_tag">
        <li v-for="(item, indexs) in SimulationData" :key="indexs">
          <span class="mod_singer_remeng">{{ Object.keys(item)[0] }}</span>
          <span
            class="mod_singer_neirong"
            v-for="(i, index) in Object.values(item)[0]"
            :key="index"
            >{{ i }}</span
          >
        </li>
      </ul>

      <div class="mod_singer_Information_box">
        <div
          class="mod_singer_Information"
          v-for="(item, index) in InformationList"
          :key="index"
        >
          <img :src="item.img1v1Url" />
          <p>{{ item.name }}</p>
        </div>
      </div>

      <div class="mod_singer_name">
        <p v-for="(item, index) in singerName" :key="index">{{ item.name }}</p>
        <img src="./img/02.png" />
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  name: "SingerList",

  data() {
    return {
      SimulationData: [
        {
          热门: [
            "A",
            "B",
            "C",
            "D",
            "E",
            "F",
            "G",
            "H",
            "I",
            "J",
            "K",
            "L",
            "M",
            "N",
            "O",
            "P",
            "Q",
            "R",
            "S",
            "T",
            "U",
            "V",
            "W",
            "X",
            "Y",
            "Z",
            "#",
          ],
        },
        { 全部: ["内地", "港台", "欧美", "日本", "韩国", "其他"] },
        { 全部: ["男", "女", "组合"] },
        {
          全部: [
            "流行",
            "嘻哈",
            "摇滚",
            "电子",
            "民谣",
            "R&B",
            "民歌",
            "轻音乐",
            "爵士",
            "古典",
            "乡村",
            "蓝调",
          ],
        },
      ], //模拟的数据
      InformationList: [], //前十个歌手的信息列表
      singerName: [], //歌手名字
    };
  },
  //计算属性
  computed: {
    ...mapState({
      result: (state) => state.singerlist,
    }),
  },

  //界面渲染之后的生命周期回调
  async mounted() {
    await this.$store.dispatch("getSingerList");
    this.InformationList = this.result.singerList.artists.slice(0, 10);
    this.singerName = this.result.singerList.artists.slice(10);
    // console.log(this.result.singerList.artists);
  },
};
</script>
<style scoped>
* {
  margin: 0;
  padding: 0;
  list-style: none;
}
.outer {
  background-color: rgb(250, 250, 250);
}
.box {
  position: relative;
}
/* 图里面的字 */
.mod_singer_text {
  color: #fff;
  position: absolute;
  left: 35%;
  top: 20%;
  text-align: center;
}
.mod_singer_text .p1 {
  font-size: 60px;
}
.mod_singer_text .p2 {
  font-size: 21px;
  margin: 10px;
}
.mod_singer_text .p3 {
  border: 1px solid #4e4d4d;
  width: 150px;
  height: 40px;
  line-height: 36px;
  margin: 0 auto;
  font-size: 18px;
  transition: all 0.5s;
}
.mod_singer_text .p3:hover {
  border: 1px solid #fff;
  font-size: 20px;
  transition: all 0.5s;
}

/* 出大图部分剩余的box */
.mian {
  min-width: 900px;
  max-width: 1200px;
  margin: 0 auto;
}

/* 标签栏BOX */
.mod_singer_tag {
  margin-top: 80px;
  margin-bottom: 50px;
}
/* 标签头 */
.mod_singer_remeng {
  display: inline-block;
  padding: 4px 9px;
  background-color: #31c27c;
  color: #fff;
  margin-bottom: 15px;
  border-color: #31c27c !important;
  margin-right: 20px;
}
/* 标签 */
.mod_singer_neirong {
  margin: 0 16px;
}
.mod_singer_neirong:hover {
  color: #31c27c;
}
/* 头像列表BOX */
.mod_singer_Information_box {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

/* 头像列表 */
.mod_singer_Information {
  width: 18%;
  height: 300px;
}
.mod_singer_Information img {
  width: 70%;
  border-radius: 50%;
  margin: 0 auto 20px;
}
.mod_singer_Information p {
  text-align: center;
}

.mod_singer_name {
  display: flex;
  flex-wrap: wrap;
}

.mod_singer_name p {
  width: 20%;
  margin: 10px 0;
}
.mod_singer_name img {
  margin: 40px auto;
}
</style>