<template>
  <div>
    <MyInfo v-if="cookie" />
    <Login v-else />
  </div>
</template>

<script>
import Login from "./Login";
import MyInfo from "./MyInfo";
export default {
  name: "MyMusic",
  components: {
    Login,
    MyInfo,
  },
  data() {
    return {
      cookie: localStorage.getItem("cookie"),
    };
  },
};
</script>

<style scoped>
</style>