<template>
  <el-card class="box">
    <el-container>
      <el-header>
        <img src="../assets/xp.svg" alt="windowsxp-logo" />
        <h2>2001:&nbsp;&nbsp;Windows XP</h2>
      </el-header>
      <el-container class="content">
        <el-aside width="65%">
          <img src="../assets/windowsxp.png" alt="windowsxp-screenshot" />
        </el-aside>
        <el-main>
          <p>
            Arguably one of the best Windows versions, Windows XP was released
            in October 2001 and brought Microsoft’s enterprise line and consumer
            line of operating systems under one roof.The Start menu and task bar
            got a visual overhaul, bringing the familiar green Start button,
            blue task bar and vista wallpaper.
          </p>
          <div>
            <el-button type="primary" round>Learn More</el-button>
            <el-button type="primary" round @click="setPage(9)"
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
  background-color: #adaf2c;
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
