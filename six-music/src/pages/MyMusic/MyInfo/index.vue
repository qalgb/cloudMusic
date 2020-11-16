<template>
  <div>
    <div class="loginTop">
      <div class="LoginTopInner">
        <div class="userHeadPic">
          <img
            src="https://thirdqq.qlogo.cn/g?b=sdk&k=1YbOrqzCA3SE8j6F2n6KMw&s=140&t=1596873891"
            alt=""
          />
        </div>
        <h3 class="userTit"><span class="userName">龙国斌</span></h3>
        <ul class="follow">
          <li class="focus">
            <a href="javascript:;">
              <strong class="focusNum">1</strong>
              <span class="focusTit">关注</span>
            </a>
          </li>
          <li class="fans">
            <a href="javascript:;">
              <strong class="fansNum">4396</strong>
              <span class="fansTit">粉丝</span></a
            >
          </li>
        </ul>
      </div>
    </div>
    <div class="profile">
      <div class="profileNav">
        <a href="javascript:;" class="myLike active">我喜欢</a>
        <a href="javascript:;" class="myMusicList">我创建的歌单</a>
        <a href="javascript:;" class="myFocus">关注</a>
        <a href="javascript:;" class="myFans">粉丝</a>
        <a href="javascript:;" class="myVideo">我上传的视频</a>
      </div>
      <MyLike />
    </div>
  </div>
</template>

<script>
import MyLike from "./MyLike";
export default {
  name: "MyInfo",
  components: {
    MyLike,
  },
};
</script>

<style scoped>
.loginTop {
  height: 315px;
  padding-top: 65px;
  background-image: url(https://y.gtimg.cn/mediastyle/yqq/img/bg_profile.jpg?max_age=2592000&v=a81e58d2beb14c0122de6513faaead8d);
  background-size: cover;
  text-align: center;
  color: #fff;
  box-sizing: content-box;
}

.LoginTopInner {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.userHeadPic {
  width: 102px;
  height: 102px;
}

.userHeadPic > img {
  display: block;
  width: 100%;
  height: 100%;
  border: 4px solid #fff;
  border-radius: 99px;
  background: #fff;
}

.userTit {
  font-size: 0;
}

.userName {
  font-size: 30px;
  font-weight: 400;
  line-height: 64px;
  margin-right: 4px;
  color: #fff;
}

.follow {
  display: flex;
  height: 40px;
  margin: 4px 15px 26px;
  font-size: 0;
}

.follow > li {
  display: inline-block;
  width: auto;
  text-align: center;
  padding: 0 25px;
}
.follow > li:first-child {
  border-right: solid 1px #24313d;
}

.follow > li > a {
  display: flex;
  color: #000;
  text-decoration: none;
  cursor: pointer;
  flex-direction: column;
  align-items: center;
}

.follow > li > a:hover strong {
  color: #31C27C;
}

.follow > li > a > strong {
  color: #fff;
  display: block;
  font-size: 22px;
  line-height: 24px;
  margin-top: -1px;
  font-weight: 400;
}

.follow > li > a > span {
  display: block;
  color: #fff;
  font-size: 14px;
}

.profile {
  position: relative;
  min-height: 500px;
  max-width: 1200px;
  margin: 0 auto;
}

.profileNav {
  margin-top: -56px;
  width: 80%;
  display: flex;
  height: 56px;
  line-height: 56px;
}

.profileNav > a {
  color: #fff;
  margin-right: 40px;
  font-size: 16px;
}

.active {
  color: #31C27C !important;
}
</style>