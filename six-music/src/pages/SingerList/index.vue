<template>
  <div>
    <div>
      <img src="./img/bg.png" />
    </div>
    <div class="mian">
      <ul class="mod_singer_tag">
        <li v-for="(item, indexs) in SimulationData" :key="indexs">
          <span>{{ Object.keys(item)[0] }}</span>
          <span v-for="(i, index) in Object.values(item)[0]" :key="index">{{
            i
          }}</span>
        </li>
      </ul>

      <div>
        <img src="./img/01.jpg" />
        <p>花潼</p>
      </div>

      <div>
        <p>许嵩</p>
      </div>
    </div>
  </div>
</template>
<script>
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
    };
  },

  //界面渲染之后的生命周期回调
  mounted() {},
};
</script>
<style scoped>
/* 最外层 */
.mian {
  min-width: 900px;
  max-width: 1200px;
  margin: 0 auto;
}
/* 标签栏 */
.mod_singer_tag {
}
</style>