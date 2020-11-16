<template>
  <div class="mod_playlist_tag">
    <div class="playlist_tag__list playlist_tag__list--lang">
      <h3 class="playlist_tag__tit c_tx_thin">语种</h3>
      <ul class="playlist_tag__tags">
        <li class="playlist_tag__itembox">国语</li>
        <li class="playlist_tag__itembox">英语</li>
        <li class="playlist_tag__itembox">韩语</li>
        <li class="playlist_tag__itembox">粤语</li>
        <li class="playlist_tag__itembox">日语</li>
        <li class="playlist_tag__itembox">更多∨</li>
      </ul>
    </div>

    <div class="playlist_tag__list playlist_tag__list--lang">
      <h3 class="playlist_tag__tit c_tx_thin">语种</h3>
      <ul class="playlist_tag__tags">
        <li class="playlist_tag__itembox">国语</li>
        <li class="playlist_tag__itembox">英语</li>
        <li class="playlist_tag__itembox">韩语</li>
        <li class="playlist_tag__itembox">粤语</li>
        <li class="playlist_tag__itembox">日语</li>
        <li class="playlist_tag__itembox">更多∨</li>
      </ul>
    </div>

    <div class="playlist_tag__list playlist_tag__list--lang">
      <h3 class="playlist_tag__tit c_tx_thin">语种</h3>
      <ul class="playlist_tag__tags">
        <li class="playlist_tag__itembox">国语</li>
        <li class="playlist_tag__itembox">英语</li>
        <li class="playlist_tag__itembox">韩语</li>
        <li class="playlist_tag__itembox">粤语</li>
        <li class="playlist_tag__itembox">日语</li>
        <li class="playlist_tag__itembox">更多∨</li>
      </ul>
    </div>

    <div class="playlist_tag__list playlist_tag__list--lang">
      <h3 class="playlist_tag__tit c_tx_thin">语种</h3>
      <ul class="playlist_tag__tags">
        <li class="playlist_tag__itembox">国语</li>
        <li class="playlist_tag__itembox">英语</li>
        <li class="playlist_tag__itembox">韩语</li>
        <li class="playlist_tag__itembox">粤语</li>
        <li class="playlist_tag__itembox">日语</li>
        <li class="playlist_tag__itembox">更多∨</li>
      </ul>
    </div>

    <div class="playlist_tag__list playlist_tag__list--lang">
      <h3 class="playlist_tag__tit c_tx_thin">语种</h3>
      <ul class="playlist_tag__tags">
        <li class="playlist_tag__itembox">国语</li>
        <li class="playlist_tag__itembox">英语</li>
        <li class="playlist_tag__itembox">韩语</li>
        <li class="playlist_tag__itembox">粤语</li>
        <li class="playlist_tag__itembox">日语</li>
        <li class="playlist_tag__itembox">更多∨</li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: "PlaylistTop",
};
</script>
<style>
/* 上半部分大容器 */
.mod_playlist_tag {
  display: flex;
  margin-bottom: 20px;
  /* background-color: #ddd; */
}
/* 小容器，包含h3与ul */
.playlist_tag__list {
  width: 20%;
  line-height: 26px;
}
/* h3标题标签 */
.playlist_tag__tit {
  color: #999;
  font-weight: 400;
  font-size: 14px;
  padding-left: 8px;
  margin-bottom: 8px;
  margin-top: -6px;
}
/* 包含li的ul */
.playlist_tag__tags {
  display: flex;
  flex-wrap: wrap;
}
/* 每一个li */
.playlist_tag__itembox {
  width: 40%;
  padding: 0 8px;
  margin-bottom: 4px;
}
</style>
