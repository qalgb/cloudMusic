<template>
  <div class="outer">
    <div class="swiper-container" ref="notable">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="banner in banners" :key="banner">
          <img class="registerImg" :src="banner" />
        </div>
      </div>
    </div>
    <div class="registerList_header">
      <a-button class="goBack" type="primary">
        <a-icon type="left" /> 返回首页
      </a-button>
      <a-dropdown class="changeLanguage">
        <a-menu slot="overlay">
          <a-menu-item key="1">简体中文</a-menu-item>
          <a-menu-item key="2">ENGLISH</a-menu-item>
        </a-menu>
        <a-button style="margin-left: 8px">
          简体中文 <a-icon type="down" />
        </a-button>
      </a-dropdown>
    </div>
    <div class="goRegister">
      <div class="registerInfo_box">
        <div class="registerInfo">
          <div class="registerTit">欢迎注册网易账号</div>
          <div class="tag_box">
            <div class="registerTag">每一天，乐在听歌。</div>
            <a class="isHave">不注册了</a>
          </div>
          <div class="inputInfo">
            <div class="phoneNum">
              <a-dropdown class="loginWay">
                <a-menu slot="overlay">
                  <a-menu-item key="1">手机号</a-menu-item>
                  <a-menu-item key="2">邮箱</a-menu-item>
                </a-menu>
                <a-button style="margin-left: 8px">
                  手机号 <a-icon type="down" />
                </a-button>
              </a-dropdown>
              <input type="text" placeholder="账号" class="account" />
            </div>
            <input type="passwo" placeholder="密码" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Swiper from "swiper";
export default {
  data() {
    return {
      banners: [
        "https://cdn-go.cn/qq-web/zc.qq.com/latest/v3/img/01-1.jpg",
        "https://cdn-go.cn/qq-web/zc.qq.com/latest/v3/img/01-2.jpg",
        "https://cdn-go.cn/qq-web/zc.qq.com/latest/v3/img/01-3.jpg",
        "https://cdn-go.cn/qq-web/zc.qq.com/latest/v3/img/01-4.jpg",
      ],
    };
  },
  mounted() {
    this.$nextTick(() => {
      var mySwiper = new Swiper(this.$refs.notable, {
        slidesPerView: 1, // 每一行显示图片的数量
        touchRatio: 0, //拖动效果
        preventClicks: false, //阻止点击的默认行为
        effect: "fade", //图片切换效果
        loop: true, //循环
        autoplay: true, //自动播放
        speed: "1000ms", //切换延迟
      });
    });
  },
};
</script>

<style scoped>
.outer {
  overflow: hidden;
  height: 968px;
}
.swiper-container {
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  max-width: 480px;
  min-width: 280px;
  float: left;
  overflow: hidden;
}
.registerImg {
  height: 100%;
}

.goRegister {
  margin-left: 480px;
  position: relative;
  height: 100%;
}

.registerList_header {
  float: right;
  margin: 15px;
}
.registerInfo_box {
  top: 50%;
  margin-top: -372px;
  position: absolute;
  padding-bottom: 10px;
  width: 100%;
}
.registerInfo {
  position: relative;
  margin: 0 auto;
  width: 480px;
}

.registerTit {
  font-size: 44px;
  margin-bottom: 20px;
  color: #000;
}

.tag_box {
  display: flex;
  justify-content: space-between;
}

.registerTag {
  font-size: 28px;
  margin-bottom: 64px;
  line-height: 1.2;
  color: #000;
}

.isHave {
  font-size: 24px;
  outline: 0;
  text-decoration: none;
  color: #31c27c !important;
}

.inputInfo {
  display: flex;
  flex-direction: column;
}

.inputInfo > input {
  border: 1px #aaa solid;
  border-radius: 4px;
  background: 0 0;
  text-align: left;
  font-size: 20px;
  width: 438px;
  height: 50px;
  line-height: 50px;
  padding: 0 20px;
}

.loginWay {
  height: 50px;
  width: 138px;
  font-size: 24px;
  caret-color: #000;
  border: 1px #aaa solid;
  margin: 0 30px 30px 0 !important;
}

.account {
  border: 1px #aaa solid;
  border-radius: 4px;
  background: 0 0;
  text-align: left;
  font-size: 20px;
  width: 270px;
  height: 50px;
  line-height: 50px;
  padding: 0 20px;
  margin-top: -3px !important;
}
</style>