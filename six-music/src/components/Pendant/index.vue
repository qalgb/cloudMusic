<template>
  <div class="popup_guide">
    <img
      src="@/assets/images/logo.png"
      class="popup_guide__logo"
      alt="QQ音乐"
    />
    <p class="popup_guide__txt">千万高品质曲库尽享</p>
    <a href="javascript:;" class="popup_guide__btn js_floatLayer_download"
      ><i class="popup_guide__btn_icon sprite"></i>客户端下载</a
    >
  </div>
</template>
<script>
export default {
  name: "Pendant",
};
</script>
<style scoped>
.popup_guide {
  position: fixed;
  top: 164px;
  right: 40px;
  z-index: 1001;
  padding: 18px;
  border-radius: 4px;
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.07);
  background-color: #fff;
}
.popup_guide__logo {
  width: 102px;
  height: 27.6px;
  margin: 0 auto 10px;
}
.popup_guide__txt {
  margin: 0 auto 10px;
}
.popup_guide__btn {
  display: block;
  margin: 0 auto;
  width: 130px;
  height: 26px;
  border-radius: 26px;
  line-height: 26px;
  font-size: 15px;
  color: #fff !important;
  text-align: center;
  background-color: #31c27c;
}
</style>