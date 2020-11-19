<template>
  <div>
    <button @click="showModal" class="loginButton" v-if="isButton === 1">
      立即登录
    </button>
    <a @click="showModal" class="audioText" v-else-if="isButton === 2">
      登录
    </a>
    <a @click="showModal" class="loginText" v-else-if="isButton === 3"> 登录 </a>
    <a-modal v-model="visible" title="安全登录">
      <template slot="footer">
        <div class="goLoginFooter">
          <a href="javascript:;">忘了密码？</a>
          <span>|</span>
          <router-link to="/register">注册新账号</router-link>
          <span>|</span>
          <a href="javascript:;">意见反馈</a>
        </div>
      </template>
      <div class="goLoginMid">
        <div class="Logintit">账号密码登录</div>
        <div class="inputOut">
          <input
            type="text"
            placeholder="请输入网易账号"
            class="account"
            v-model="phoneNum"
          />
        </div>
        <div class="inputOut">
          <input
            type="password"
            placeholder="密码"
            class="account"
            v-model="password"
          />
        </div>
        <a-checkbox class="agreenList" @change="onChange">
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
        <button class="submit" @click="logining">授权并登录</button>
      </div>
    </a-modal>
  </div>
</template>

<script>
import { reqLoginInfo, reqUserInfo } from "../../api";
export default {
  name: "GoLogin",
  props: {
    isButton: Number,
  },
  data() {
    return {
      visible: false,
      phoneNum: "13970028131",
      password: "",
      isAgree: "",
    };
  },
  methods: {
    //登录弹窗显示
    showModal() {
      this.visible = true;
    },
    //是否勾选同意协议
    onChange() {
      this.isAgree = !this.isAgree;
    },
    //点击授权登录
    async logining() {
      if (this.phoneNum.trim() && this.password.trim() && this.isAgree) {
        const result = await reqLoginInfo(this.phoneNum, this.password);
        if (result.code === 200) {
          localStorage.setItem("cookie", result.cookie);
          //成功提示消息
          this.$message.success("登录成功!");
          location.reload();
          this.visible = false;
        } else {
          //失败提示消息
          this.$message.error("账号或密码错误，请重新登录");
          this.password = "";
        }
      } else if (!this.isAgree) {
        this.$message.warn("请阅读并勾选相关协议");
      } else {
        this.$message.warn("账号和密码不能为空");
      }
    },
  },
};
</script>

<style scoped>
.loginText {
  color: #000;
  font-size: 16px;
}
.goLoginBg {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  background: rgba(0, 0, 0, 0.2);
  z-index: 999;
}

.goLogin {
  position: fixed;
  z-index: 100000;
  top: calc(50% - 487px / 2);
  margin: 10px;
  left: calc(50% - 700px / 2);
  width: 700px;
  background-color: #fff;
  font-size: 14px;
  color: #333;
  height: 487px;
  overflow: hidden;
}

.goLoginHeader {
  position: relative;
  line-height: 55px;
  text-align: center;
  border-bottom: 1px solid #f2f2f2;
}

.goLoginTit {
  font-size: 20px;
  font-weight: 400;
  cursor: default;
}

.close {
  position: absolute;
  top: 6px;
  right: 6px;
  width: 24px;
  height: 24px;
  overflow: hidden;
  z-index: 2;
  color: #000;
  text-decoration: none;
}

.closeImg {
  display: block;
  margin: 6px auto;
  width: 12px;
  height: 12px;
  background-position: 0 -200px;
  background-image: url(https://y.gtimg.cn/mediastyle/yqq/img/icon_popup.png?max_age=2592000&v=ed195508548a1da6862e0b4a53dcb9f1&v=ed195508548a1da6862e0b4a53dcb9f1);
}

.closeImg:hover {
  background-position-x: -14px;
}

.goLoginMid {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 300px;
  justify-content: space-around;
}

.goLoginMid .Logintit {
  font-size: 20px;
  color: #333;
  margin-bottom: 16px;
  text-align: center;
  margin-top: 10px;
}

.inputOut {
  display: flex;
  align-items: center;
  width: 272px;
  height: 42px;
  background: url(https://imgcache.qq.com/ptlogin/v4/style/40/images/icon_3_tiny.png) -1px -1px;
}

.inputOut > input {
  text-rendering: auto;
  color: -internal-light-dark(black, white);
  letter-spacing: normal;
  word-spacing: normal;
  text-transform: none;
  text-indent: 0px;
  text-shadow: none;
  display: inline-block;
  text-align: start;
  appearance: textfield;
  -webkit-rtl-ordering: logical;
  cursor: text;
  margin: 0em;
  font: 400 13.3333px Arial;
}

.inputOut .account {
  width: 258px;
  position: relative;
  top: 2px;
  left: 2px;
  height: 18px;
  padding: 20px 0 20px 10px;
  line-height: 18px;
  border: none;
  background: 0 0;
  color: #aaa;
  font-family: Verdana, Tahoma, Arial;
  font-size: 16px;
}

.inputOut .account:focus {
  outline: 0;
}
.submit {
  color: #fff;
  height: 40px;
  line-height: 35px;
  font-size: 17px;
  background: #31c27c;
  width: 272px;
  border: none;
}

.goLoginFooter {
  text-align: center;
  height: 16px;
  line-height: 16px;
  margin-bottom: 8px;
  font-size: 12px;
}

.goLoginFooter > a {
  color: #666;
  margin: 0 5px;
}

.loginButton {
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
}

.agreenList {
  width: 272px;
}

.agreenList a {
  color: #666;
  font-size: 12px;
}

.audioText {
  font-size: 14px;
  line-height: 30px;
  vertical-align: top;
  opacity: 0.3;
  color: white !important;
  padding-right: 15px;
}
</style>
