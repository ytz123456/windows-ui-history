<template>
  <el-card class="box">
    <el-container>
      <el-header>
        <img src="../assets/Windows_logo_-_2012.svg" alt="windows8-logo" />
        <h2>2012:&nbsp;&nbsp;Windows 8</h2>
      </el-header>
      <el-container class="content">
        <el-aside width="65%">
          <img src="../assets/windows8.jpeg" alt="windows8-screenshot" />
        </el-aside>
        <el-main>
          <p>
            Released in October 2012, Windows 8 was Microsoft’s most radical
            overhaul of the Windows interface, ditching the Start button and
            Start menu in favour of a more touch-friendly Start screen. The new
            tiled interface saw programme icons and live tiles, replace the
            lists of programmes and icons.
          </p>
          <div>
            <el-button type="primary" round>Learn More</el-button>
            <el-button type="primary" round @click="setPage(12)"
              >See Next</el-button
            >
          </div>
        </el-main>
      </el-container>
    </el-container>
  </el-card>
</template>

<style lang="scss" scoped>
.box {
  background-color: #373a9e;
  width: 70%;
  margin: 20px auto;
  height: 60vh;
  color: white;
  border: none;
  border-radius: 10px;
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
  .el-header {
    display: flex;
    padding: 0;
    margin-top: 0;
    justify-content: space-evenly;
    margin-bottom: 0;
    h2 {
      margin: 20px;
      font-size: 3vw;
      text-align: center;
      max-width: 60%;
    }
    img {
      height: 90px;
      width: 140px;
    }
  }
  .content {
    .el-aside {
      height: 45vh;
      img {
        width: 100%;
        height: 44vh;
        object-fit: fill;
      }
      margin: 10px;
    }
    .el-main {
      p {
        font-size: 1.3vw;
        line-height: 1.5;
        font-family: "Times New Roman", Times, serif;
      }
      div {
        display: flex;
        margin: 30px auto;
        justify-content: space-evenly;
      }
    }
  }
}
</style>
