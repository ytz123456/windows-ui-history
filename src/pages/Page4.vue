<template>
  <el-card class="box">
    <el-container>
      <el-header>
        <img src="../assets/Windows_logo_-_1992.svg" alt="windows3-logo" />
        <h2>1992:&nbsp;&nbsp;Windows 3.1</h2>
      </el-header>
      <el-container class="content">
        <el-aside width="65%">
          <img src="../assets/windows3.1.png" alt="windows3.1-screenshot" />
        </el-aside>
        <el-main>
          <p>
            Windows 1 and 2 both had point release updates, but Windows 3.1
            released in 1992 is notable because it introduced TrueType fonts
            making Windows a viable publishing platform for the first time.<br />
            Windows 3.1 was the first in a series of 16-bit operating systems.
          </p>
          <div>
            <el-button type="primary" round>Learn More</el-button>
            <el-button type="primary" round @click="setPage(5)"
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
        font-size: 1.35vw;
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
