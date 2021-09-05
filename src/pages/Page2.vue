<template>
  <el-card class="box">
    <el-container>
      <el-header>
        <img src="../assets/Windows_logo_-_1985-1989.svg" alt="windows2-logo" />
        <h2>1987:&nbsp;&nbsp;Windows 2.0</h2>
      </el-header>
      <el-container class="content">
        <el-aside width="65%">
          <img src="../assets/windows2.png" alt="windows2-screenshot" />
        </el-aside>
        <el-main>
          <p>
            Two years after the release of Windows 1, Windows 2 replaced it in
            December 1987. A big innovation was that windows could overlap each
            other, and it also introduced the ability to minimise or maximise
            windows. The control panel with various system settings was
            introduced in Windows 2 and survives to this day.
          </p>
          <div>
            <el-button type="primary" round>Learn More</el-button>
            <el-button type="primary" round @click="setPage(3)">
              See Next
            </el-button>
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
