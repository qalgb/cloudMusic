<template>
  <div class="pagesHead">
    <div class="pagesHeadInner">
      <!-- 头部logo -->
      <h1 class="headLogo">
        <router-link to="/">
          <img
            src="https://y.gtimg.cn/mediastyle/yqq/img/logo.png?nowebp=1"
            alt=""
          />
        </router-link>
      </h1>
      <!-- 头部导航栏 -->
      <ul class="headNav">
        <li
          class="musicPavilion"
          :class="{ active: isShow }"
          @click="goMusicPavilion"
        >
          音乐馆
        </li>
        <li class="myMusic" :class="{ active: !isShow }" @click="goMyMusic">
          我的音乐
        </li>
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
      <a-dropdown v-if="isSuccess">
        <a class="ant-dropdown-link">
          <img :src="userInfo.avatarUrl" class="userPicImg" alt="" />
        </a>
        <div class="backLogin" slot="overlay">
          <div class="userHead_backLogin">
            <a href="javascript:;"
              ><a href="javascript:;"
                ><img
                  :src="userInfo.avatarUrl"
                  class="userPicImg_backLogin"
                  alt=""
                  @click="goMyMusic"
                />
              </a>
            </a>
            <div class="userInfo_backLogin">
              <a
                href="javascript:;"
                class="userName_backLogin"
                @click="goMyMusic"
                >{{ userInfo.nickname }}</a
              >
              <div class="userLevel_backLogin">Lv.{{level}}</div>
            </div>
          </div>
          <div class="backLoginButtonBox">
            <a href="javascript:;" class="backLoginButton" @click="backLogin"
              >退出登录</a
            >
          </div>
        </div>
      </a-dropdown>
      <!-- 登录组件 -->
      <GoLogin :isButton="this.isButton" v-else />
      <button class="openVip selectChoose isSelect">开通VIP</button>
      <button class="topUp selectChoose">充值</button>
    </div>
    <!-- 音乐馆导航栏 -->
    <ul class="musicPavilionNav" :style="{ display: isShow ? '' : 'none' }" @click="handleClick">
      <li><router-link to="/" class="samllActive">首页</router-link></li>
      <li><a href="javascript:;">歌手</a></li>
      <li><router-link to="/newdisc">新碟</router-link></li>
      <li>
        <router-link to="/rank">排行榜</router-link>
      </li>
      <li>
        <router-link to="/playlist">分类歌单</router-link>
      </li>
      <li><router-link to="/radio">电台</router-link></li>
      <li><router-link to="/mv">MV</router-link></li>
      <li><a href="javascript:;">数字专辑</a></li>
      <li><a href="javascript:;">票务</a></li>
    </ul>
  </div>
</template>

<script>
import GoLogin from "../GoLogin";
import { reqUserInfo, reqUserLevel } from "../../api";
export default {
  name: "Header",
  data() {
    return {
      searchInfo: "", //搜索框内容
      isShow: true, //音乐馆nav是否显示
      isSuccess: false, //是否处于登录状态（是否有cookie）
      userInfo: [], //用户信息
      isButton: 3, //登录按钮是否显示
      level: "", //用户等级
      cookie: localStorage.getItem("cookie"),
      current: '' // 点击导航栏初始值
    };
  },
  components: {
    GoLogin,
  },
  methods: {
    // 点击导航栏高亮
    handleClick(e) {
      // 判断current
      this.current ? (this.current.className = '') : ''
      if (e.target.nodeName === 'A') {
        e.target.className = 'samllActive'
        // 更新current
        this.current = e.target
      }
    },
    //跳转到首页（音乐馆）
    goMusicPavilion() {
      this.isShow = true;
      this.$router.replace({ path: "/" });
    },
    //跳转到我的音乐
    goMyMusic() {
      this.isShow = false;
      this.$router.replace({ path: "/mymusic" });
    },
    async getUserInfo() {
      const result = await reqUserInfo(localStorage.getItem("cookie"));
      this.userInfo = result.profile;
    },
    //退出登录
    backLogin() {
      localStorage.removeItem("cookie");
      this.$message.success("已退出登录!");
      setTimeout(() => {
        location.reload();
      }, 500);
    },
    getPath() {
      if (this.$route.fullPath === "/mymusic") {
        this.isShow = false;
      } else if (this.$route.fullPath === "/") {
        this.isShow = true;
      }
    },
  },
  async mounted() {
    //判断cookie是否存在
    if (localStorage.getItem("cookie")) {
      //获取用户信息
      const result = await reqUserInfo(localStorage.getItem("cookie"));
      //获取用户等级
      const level = (await reqUserLevel(localStorage.getItem("cookie"))).data
        .level;
      this.level = level;
      //判断是否获取成功
      if (result.code === 200) {
        this.userInfo = result.profile;
        this.isSuccess = true;
      } else {
        this.isSuccess = false;
      }
    }
  },
  watch: {
    "$route.path"() {
       this.getPath();
    },
  },
};
</script>

<style scoped>
.backLogin {
  width: 200px;
  display: flex;
  flex-direction: column;
  background: #fff;
  border: 1px solid #f2f2f2;
}
.userPicImg_backLogin {
  width: 50px;
  height: 50px;
  border-radius: 90px;
  vertical-align: -14px;
}
.userHead_backLogin {
  display: flex;
  align-items: center;
  justify-content: center;
}
.userLevel_backLogin {
  font-style: italic;
  font-size: 10px;
}
.userInfo_backLogin {
  margin: 20px 0 20px 20px;
  text-align: center;
}
.backLoginButtonBox {
  width: 100%;
}

.backLoginButtonBox:hover {
  background-color: #c9c9c9;
}

.backLoginButton {
  display: block;
  width: 100%;
  border-top: 1px solid #f2f2f2;
  text-align: center;
  height: 50px;
  line-height: 50px;
  font-size: 20px;
  color: #fc5152 !important;
}
ul {
  padding: 0;
  margin: 0;
}
a {
  color: #000;
}
.headLogo {
  width: 170px;
  height: 46px;
}

.pagesHead {
  width: 100%;
  background-color: #fff;
}

.pagesHeadInner {
  min-width: 1200px;
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
  color: #000;
}

.headNav li:hover {
  color: #31c27c;
}

.active {
  background-color: #31c27c;
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

.userPic,
.loginMag {
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
  min-width: 1200px;
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

.samllActive {
  color: #31c27c !important;
}
</style>
