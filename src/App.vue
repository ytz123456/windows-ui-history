<template>
  <div id="background"></div>
  <el-container>
    <el-header>
      <i class="el-icon-menu"></i>
      Evolution of Windows GUI: <br />
      from Windows 1 to Windows 11
    </el-header>
    <el-main>
      <router-view></router-view>
    </el-main>
    <el-footer>
      <the-footer></the-footer>
    </el-footer>
  </el-container>
</template>

<script>
import TheFooter from "./components/TheFooter.vue";

export default {
  components: {
    TheFooter,
  },
};
</script>

<style lang="scss">
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: "Roboto", sans-serif;
}
#background {
  width: 100%;
  height: 100%;
  z-index: -1;
  position: absolute;
  background-color: #547ea8;
  // img {
  //   width: 100%;
  //   height: 100%;
  // }
}
.el-container {
  .el-header {
    text-align: center;
    margin: 35px auto 10px auto;
    font-size: 3.8rem;
    height: 20%;
    width: 80%;
    color: rgb(255, 255, 255);
  }
  .el-footer {
    padding: 20px;
    width: 80%;
    margin: auto;
  }
}
</style>
