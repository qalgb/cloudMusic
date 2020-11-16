<template>
  <div>
    <div class="mylikeNav">
      <a href="javascript:;" class="active">歌曲 0</a>
      <a href="javascript:;">歌单 0</a>
      <a href="javascript:;">专辑 0</a>
      <a href="javascript:;">视频 0</a>
    </div>
    <div class="myLikeInfo">
      <i class="noInfo-icon"></i>
      <p>
        什么也没有，去<a href="javascript:;" class="active">音乐馆</a
        >发现好音乐！
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "MyLike",
};
</script>

<style scoped>
.mylikeNav {
  display: flex;
  min-width: 1200px;
  max-width: 1200px;
  margin-bottom: -20px;
  border-bottom: 0 none;
}

.mylikeNav > a {
  font-size: 16px;
  margin-right: 55px;
  height: 56px;
  line-height: 56px;
  color: #000;
}

.active {
  color: #31c27c !important;
}

.myLikeInfo {
  font-size: 20px;
  color: #666;
  line-height: 38px;
  text-align: center;
  padding: 90px 0 100px;
}

.noInfo-icon {
  display: block;
  width: 213px;
  height: 203px;
  margin: 0 auto 27px;
  background-image: url(https://y.gtimg.cn/mediastyle/yqq/img/symbol_none.png?max_age=2592000&v=056e33119d5748360c67d7f5a33e25a0);
}
</style>