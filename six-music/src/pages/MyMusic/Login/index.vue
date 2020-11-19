<template>
  <div class="outer">
    <div class="login">
      <div class="bgImg">
        <div class="bgImgInner">
          <div class="box">
            <h2 class="slide-top-a">私人音乐空间，听我想听的歌</h2>
            <div class="slide-top-b">登录管理我的音乐，多终端同步</div>
            <button class="slide-top-c">立即登录</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
};
</script>

<style scoped>
.bgImg {
  height: 922px;
  background: url(https://y.gtimg.cn/mediastyle/yqq/img/bg_profile_unlogin.jpg?max_age=2592000&v=13351eccb28020677a18a0f57349e5e6) 50% no-repeat;
  background-size: cover;
  overflow: hidden;
  position: relative;
}

.bgImgInner {
  max-width: 1200px;
  height: 208px;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
}

.box {
  color: #fff;
  text-align: center;
  font-weight: 200;
  margin-top: 100px;
}

.slide-top-a {
  font-size: 58px;
  font-weight: 200;
  color: #fff;
  animation: slide-top-a 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
}

@keyframes slide-top-a {
  0% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateY(-100px);
    transform: translateY(-100px);
    opacity: 1;
  }
}

.slide-top-b {
  font-size: 26px;
  height: 30px;
  margin-top: 30px;
  margin-bottom: 36px;
  animation: slide-top-b 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.1s both;
}

@keyframes slide-top-b {
  0% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateY(-100px);
    transform: translateY(-100px);
    opacity: 1;
  }
}

.slide-top-c {
  display: block;
  font-size: 20px;
  height: 48px;
  line-height: 48px;
  width: 128px;
  text-align: center;
  margin: 0 auto;
  border: 1px solid #31c27c;
  background-color: #31c27c;
  color: #fff;
  outline: none;
  cursor: pointer;
  animation: slide-top-b 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.2s both;
}

@keyframes slide-top-c {
  0% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateY(-100px);
    transform: translateY(-100px);
    opacity: 1;
  }
}
</style>