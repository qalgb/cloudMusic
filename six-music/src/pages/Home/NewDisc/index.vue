<template>
  <div>
    <div class="color">
      <div class="mod_tag"></div>
      <div class="tag_item">
        <span style="background-color: #31c27c;color:#fff">内地</span>
        <span>港台</span>
        <span>欧美</span>
        <span>韩国</span>
        <span>日本</span>
        <span>其他</span>
    </div>
    
      <div class="song_list">
        <div class="song_box">
          <img src="./images/fengmian.jpg">
          <div class="song_name">
            <a href="##">嘻哈帝国 (Empire)</a>
          </div>
          <div class="singer">
            <a href="##">Higher Brothers</a>
          </div>
          <div class="song_date">
           2020-11-09
          </div>
        </div>
        <div class="song_box">
          <img src="./images/fengmian.jpg">
          <div class="song_name">
            <a href="##">嘻哈帝国 (Empire)</a>
          </div>
          <div class="singer">
            <a href="##">Higher Brothers</a>
          </div>
          <div class="song_date">
           2020-11-09
          </div>
        </div>
        <div class="song_box">
          <img src="./images/fengmian.jpg">
          <div class="song_name">
            <a href="##">嘻哈帝国 (Empire)</a>
          </div>
          <div class="singer">
            <a href="##">Higher Brothers</a>
          </div>
          <div class="song_date">
           2020-11-09
          </div>
        </div>
        <div class="song_box">
          <img src="./images/fengmian.jpg">
          <div class="song_name">
            <a href="##">嘻哈帝国 (Empire)</a>
          </div>
          <div class="singer">
            <a href="##">Higher Brothers</a>
          </div>
          <div class="song_date">
           2020-11-09
          </div>
        </div>
        <div class="song_box">
          <img src="./images/fengmian.jpg">
          <div class="song_name">
            <a href="##">嘻哈帝国 (Empire)</a>
          </div>
          <div class="singer">
            <a href="##">Higher Brothers</a>
          </div>
          <div class="song_date">
           2020-11-09
          </div>
        </div>
        <div class="song_box">
          <img src="./images/fengmian.jpg">
          <div class="song_name">
            <a href="##">嘻哈帝国 (Empire)</a>
          </div>
          <div class="singer">
            <a href="##">Higher Brothers</a>
          </div>
          <div class="song_date">
           2020-11-09
          </div>
        </div>
        <div class="song_box">
          <img src="./images/fengmian.jpg">
          <div class="song_name">
            <a href="##">嘻哈帝国 (Empire)</a>
          </div>
          <div class="singer">
            <a href="##">Higher Brothers</a>
          </div>
          <div class="song_date">
           2020-11-09
          </div>
        </div>
        <div class="song_box">
          <img src="./images/fengmian.jpg">
          <div class="song_name">
            <a href="##">嘻哈帝国 (Empire)</a>
          </div>
          <div class="singer">
            <a href="##">Higher Brothers</a>
          </div>
          <div class="song_date">
           2020-11-09
          </div>
        </div>
        <div class="song_box">
          <img src="./images/fengmian.jpg">
          <div class="song_name">
            <a href="##">嘻哈帝国 (Empire)</a>
          </div>
          <div class="singer">
            <a href="##">Higher Brothers</a>
          </div>
          <div class="song_date">
           2020-11-09
          </div>
        </div>
        <div class="song_box">
          <img src="./images/fengmian.jpg">
          <div class="song_name">
            <a href="##">嘻哈帝国 (Empire)</a>
          </div>
          <div class="singer">
            <a href="##">Higher Brothers</a>
          </div>
          <div class="song_date">
           2020-11-09
          </div>
        </div>
        <div class="song_box">
          <img src="./images/fengmian.jpg">
          <div class="song_name">
            <a href="##">嘻哈帝国 (Empire)</a>
          </div>
          <div class="singer">
            <a href="##">Higher Brothers</a>
          </div>
          <div class="song_date">
           2020-11-09
          </div>
        </div>
        <div class="song_box">
          <img src="./images/fengmian.jpg">
          <div class="song_name">
            <a href="##">嘻哈帝国 (Empire)</a>
          </div>
          <div class="singer">
            <a href="##">Higher Brothers</a>
          </div>
          <div class="song_date">
           2020-11-09
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
 <script>
export default {
  name: "NewDisc"
};
</Script>


<style>
.color{
  background: url("./images/bg_detail.jpg") repeat-x;
  height: 400px;
} 
.mod_tag {
  padding-bottom: 40.6px;
}
.tag_item {
  width: 1200px;
  margin: 0 auto;
  overflow: hidden;
}
.tag_item span {
  float: left;
  padding: 0 8px;
  margin: 0 24px 15px 0;
  font-size: 14px;
  line-height: 26px;
  overflow: hidden
}
.song_list{
  height: 1394.4px;
  width: 1200px;
  margin: 0 auto;
}
.song_box{
  display: inline-block;
    width: 20%;
    padding-bottom: 44px;
    font-size: 14px;
    vertical-align: top;
    line-height: 1.5;
    float: left;
}
.song_box img{
  width: 224px;
  height: 224px;
}
.song_name a{
  line-height: 22px;
  font-weight: 400;
  color: #000;
}
.singer+.song_date{
    color: #999;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    height: 22px;
}
</style>