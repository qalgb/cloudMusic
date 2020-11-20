<template>
  <div class="outer">
    <div class="swiper-container" ref="notable">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="banner in banners" :key="banner">
          <img class="registerImg" :src="banner" />
        </div>
      </div>
    </div>
    <div class="goRegister">
      <div class="registerList_header">
        <router-link to="/"
          ><a-button class="goBack" type="primary">
            <a-icon type="left" /> 返回首页
          </a-button></router-link
        >
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
      <div class="registerInfo_box">
        <div class="registerInfo">
          <div class="registerTit">欢迎注册网易账号</div>
          <div class="tag_box">
            <div class="registerTag">每一天，乐在听歌。</div>
            <router-link to="/" class="isHave">不注册了</router-link>
          </div>
          <div class="inputInfo">
            <input
              type="text"
              placeholder="昵称"
              v-model="nickname"
              @change="setName"
            />
            <input
              type="text"
              placeholder="手机号"
              @focus="codeShow"
              @change="inputPhone"
              @blur="codeNone"
              v-model="phoneNum"
            />
            <div
              class="codeBox"
              :style="{ display: isShow ? 'block' : 'none' }"
            >
              <input
                type="text"
                placeholder="验证码"
                class="authCode"
                v-model="code"
              />
              <a-button
                type="primary"
                class="getCode"
                :disabled="!codeDisplay"
                @click="getCode"
                v-if="!sendSuccess"
              >
                获取验证码
              </a-button>
              <a-button type="primary" class="getCode" disabled v-else>
                重新验证码 {{ timer }} s
              </a-button>
            </div>
            <input
              type="password"
              placeholder="密码"
              @change="inputPswd"
              @focus="secShow"
              v-model="password"
            />
            <input
              type="password"
              placeholder="确认密码"
              @change="inputSecPswd"
              v-model="secondPswd"
              :style="{ display: isSecond ? 'block' : 'none' }"
            />
            <a-button
              type="primary"
              class="goRegiset"
              :disabled="!isRegister"
              @click="goRegiset"
            >
              立即注册
            </a-button>
            <a-checkbox @change="onChange">
              <a-dropdown>
                <a class="agreen" @click="(e) => e.preventDefault()">
                  我已阅读并同意相关服务条款和隐私政策 <a-icon type="down" />
                </a>
                <a-menu slot="overlay">
                  <a-menu-item>
                    <a
                      href="https://st.music.163.com/official-terms/service"
                      target="_blank"
                      >《服务条款》</a
                    >
                  </a-menu-item>
                  <a-menu-item>
                    <a
                      href="https://st.music.163.com/official-terms/privacy"
                      target="_blank"
                      >《隐私政策》</a
                    >
                  </a-menu-item>
                  <a-menu-item>
                    <a
                      href="https://st.music.163.com/official-terms/children"
                      target="_blank"
                      >《儿童隐私政策》</a
                    >
                  </a-menu-item>
                </a-menu>
              </a-dropdown>
            </a-checkbox>
          </div>
        </div>
      </div>
    </div>
    <div class="footer">
      Copyright <span>©</span> 1998- 2020Tencent All Rights Reserved
    </div>
  </div>
</template>

<script>
import Swiper from "swiper";
import { reqIsHavePhoNum, reqCodeNum, reqRegister } from "@/api";
export default {
  data() {
    return {
      banners: [
        "https://cdn-go.cn/qq-web/zc.qq.com/latest/v3/img/01-1.jpg",
        "https://cdn-go.cn/qq-web/zc.qq.com/latest/v3/img/01-2.jpg",
        "https://cdn-go.cn/qq-web/zc.qq.com/latest/v3/img/01-3.jpg",
        "https://cdn-go.cn/qq-web/zc.qq.com/latest/v3/img/01-4.jpg",
      ],
      nickname: "",
      phoneNum: "", //手机号
      hasPhoneNum: false, //手机号是否合法
      password: "", //密码
      secondPswd: "", //第二次密码
      isAgree: false, //是否同意协议
      code: "", //验证码
      sendSuccess: false,
      isShow: false, //验证码区域是否显示
      timer: 10, //倒计时
      codeDisplay: false, //验证码按钮是否禁用
      isSecond: false, //再次确认密码框是否显示
      isSame: false, //两次密码是否相同
    };
  },
  methods: {
    setName() {
      if (this.nickname.indexOf(" ") !== -1) {
        this.nickname = "";
        this.$message.warn("昵称中不可以有空格");
      }
    },
    //手机合法性验证
    async inputPhone() {
      if (
        !/^(13[0-9]|14[01456879]|15[0-3,5-9]|16[2567]|17[0-8]|18[0-9]|19[0-3,5-9])\d{8}$/.test(
          this.phoneNum
        )
      ) {
        this.$message.warn("请输入正确的手机号");
        this.phoneNum = "";
      } else {
        //..
      }
    },
    //验证码框显示
    codeShow() {
      this.isShow = true;
      this.codeDisplay = true;
    },
    // 验证码按钮禁用
    codeNone() {
      if (!this.phoneNum) {
        this.codeDisplay = false;
      }
    },
    //密码合法性验证
    inputPswd() {
      if (this.password.length < 6) {
        this.$message.warn("密码长度至少为6个字符");
        this.password = "";
      } else if (this.password.length > 15) {
        this.$message.warn("密码长度至多为16个字符");
        this.password = "";
      } else if (!/^(\w){6,16}$/.test(this.password)) {
        this.$message.warn("密码含有非法字符");
        this.password = "";
      }
    },
    //二次密码显示
    secShow() {
      this.isSecond = true;
    },
    //二次验证密码
    inputSecPswd() {
      if (this.secondPswd !== this.password) {
        this.$message.warn("两次密码不相同");
        this.isSame = false;
      } else {
        this.isSame = true;
      }
    },
    onChange() {
      //同意协议
      this.isAgree = !this.isAgree;
    },
    //发送验证码
    async getCode() {
      const result = await reqIsHavePhoNum(this.phoneNum);
      if (result.exist === 1) {
        this.$message.warn("手机号已注册");
        this.phoneNum = "";
      } else {
        this.hasPhoneNum = true;
        const result = await reqCodeNum(this.phoneNum);
        if (result.code === 200) {
          this.$message.success("发送成功！");
          this.sendSuccess = true;
          const timing = setInterval(() => {
            this.timer--;
            if (this.timer <= 0) {
              this.timer = 10;
              this.sendSuccess = false;
              clearInterval(timing);
              return;
            }
          }, 1000);
        }
      }
    },
    async goRegiset() {
      const result = await reqRegister(
        this.phoneNum,
        this.password,
        this.code,
        this.nickname
      );
      if (result.code === 505) {
        this.$message.warn("昵称已存在");
      } else if (result.code === 200) {
        this.$message.success("注册成功，快去登录吧！");
        setTimeout(() => {
          this.router.replace("/");
        }, 1000);
      }
    },
  },
  computed: {
    isRegister: function () {
      if (
        this.isSecond &&
        this.isAgree &&
        this.code &&
        this.nickname &&
        this.isSame
      ) {
        return true;
      } else {
        return false;
      }
    },
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

.goBack {
  background-color: #31c27c;
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
  color: #e29393 !important;
}

.isHave:hover {
  color: #f70000 !important;
}

.inputInfo {
  display: flex;
  flex-direction: column;
}

.inputInfo input {
  border: 1px #aaa solid;
  border-radius: 4px;
  background: 0 0;
  text-align: left;
  font-size: 20px;
  width: 478px;
  height: 50px;
  line-height: 50px;
  padding: 0 20px;
  margin: 15px 0;
}

.codeBox {
  display: flex;
  align-items: center;
}

.codeBox .authCode {
  width: 152px;
}

.codeBox .getCode {
  width: 307px;
  height: 50px;
  line-height: 50px;
  font-size: 20px;
  margin-left: 20px;
  background-color: #31c27c;
}

.goRegiset {
  width: 478px;
  height: 65px;
  line-height: 65px;
  padding: 0 20px;
  margin: 15px 0;
  text-align: center;
  font-size: 20px;
  background-color: #31c27c;
}

.goRegiset:hover,
.getCode:hover {
  background-color: #2daf70;
}
.agreen {
  color: #999 !important;
}
.footer {
  position: relative;
  bottom: 30px;
  width: 100%;
  font-size: 14px;
  color: #bbb;
  text-align: center;
  font-weight: lighter;
  margin-left: 240px;
}
</style>