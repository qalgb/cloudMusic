<template>
  <div class="pagesHead">
    <div class="pagesHeadInner">
      <h1 class="headLogo">
        <a href="##">
          <img
            src="https://y.gtimg.cn/mediastyle/yqq/img/logo.png?nowebp=1"
            alt=""
          />
        </a>
      </h1>
      <ul class="headNav">
        <li class="musicPavilion">音乐馆</li>
        <li class="myMusic active">我的音乐</li>
        <li class="client">客户端</li>
        <li class="openPlatform">开放平台</li>
        <li class="vip">VIP</li>
      </ul>
      <div class="search">
        <input
          type="text"
          class="searchInput"
          aria-label="请输入搜索内容"
          placeholder="搜索音乐、MV、歌单、用户"
          v-model="searchInfo"
        />
        <div class="searchInfo"></div>
        <button><i class="iconSearch"></i></button>
      </div>
      <a href="##" class="userPic">
        <img
          src="https://thirdqq.qlogo.cn/g?b=sdk&k=1YbOrqzCA3SE8j6F2n6KMw&s=140&t=1596873891"
          class="userPicImg"
          alt=""
        />
      </a>
      <button class="openVip selectChoose isSelect">开通VIP</button>
      <button class="topUp selectChoose">充值</button>
    </div>
    <ul class="musicPavilionNav">
      <li><a href="javascript:;">首页</a></li>
      <li><a href="javascript:;">歌手</a></li>
      <li><a href="javascript:;">新碟</a></li>
      <li>
        <router-link to="home/rank">排行榜</router-link>
      </li>
      <li><a href="javascript:;">分类歌单</a></li>
      <li><a href="javascript:;">电台</a></li>
      <li><a href="javascript:;">MV</a></li>
      <li><a href="javascript:;">数字专辑</a></li>
      <li><a href="javascript:;">票务</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      searchInfo: "",
    };
  },
};
</script>

<style scoped>
.headLogo {
  width: 170px;
  height: 46px;
}

.pagesHead {
  width: 100%;
  background-color: #fff;
}

.pagesHeadInner {
  max-width: 1200px;
  height: 90px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.headNav {
  display: flex;
}

.headNav li {
  height: 90px;
  line-height: 90px;
  text-align: center;
  padding: 0 20px;
  font-size: 18px;
  cursor: pointer;
}

.headNav li:hover {
  color: #31C27C;
}

.active {
  background-color: #31C27C;
  color: #fff !important;
}

.search {
  border: 1px solid #c9c9c9;
  padding: 0 33px 0 11px;
  line-height: 36px;
  height: 36px;
  border-radius: 3px;
  background-color: #fff;
  position: relative;
}

.searchInput {
  width: 174px;
  height: 36px;
  border: 0 none;
  font-size: 14px;
  background: 0 0;
  outline: none;
}

.search button {
  position: absolute;
  top: 0;
  right: 0;
  border: 0 none;
  width: 38px;
  height: 35px;
  overflow: visible;
  background: 0 0;
  outline: none;
}

.iconSearch {
  position: absolute;
  top: 50%;
  right: 11px;
  margin-top: -8px;
  width: 16px;
  height: 16px;
  background-image: url("https://y.gtimg.cn/mediastyle/yqq/img/icon_sprite.png?max_age=2592000&v=85678e8f28c7b4bcad5c209b21b7e3b3&v=85678e8f28c7b4bcad5c209b21b7e3b3");
  background-position: 0 -40px;
  cursor: pointer;
}

.userPic {
  position: relative;
  z-index: 12;
  font-size: 16px;
  float: left;
  width: 38px;
  margin-right: 10px;
  text-align: center;
}

.userPicImg {
  width: 38px;
  height: 38px;
  border-radius: 90px;
  vertical-align: -14px;
}

.selectChoose {
  display: block;
  line-height: 38px;
  padding: 0 15px 0 10px;
  text-align: center;
  white-space: nowrap;
  border: 1px solid #c9c9c9;
  border-radius: 3px;
  outline: none;
  cursor: pointer;
}

.selectChoose:hover {
  background-color: #31c27c;
  color: #fff;
  border-color: #31c27c;
}

.openVip {
  width: 122px;
}

.isSelect {
  background-color: #31c27c;
  color: #fff;
  border-color: #31c27c;
}

.topUp {
  width: 83px;
}

.musicPavilionNav {
  height: 51px;
  line-height: 51px;
  border-top: 1px solid #f2f2f2;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
}

.musicPavilionNav > li {
  float: left;
  font-size: 15px;
  color: #c1c1c1;
  margin-right: 47px;
}

.musicPavilionNav > li > a {
  display: block;
  text-decoration: none;
}

.musicPavilionNav > li > a:hover {
  color: #31c27c !important;
  text-decoration: none;
}


</style>
