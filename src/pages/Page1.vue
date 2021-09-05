<template>
  <el-card class="box">
    <el-container>
      <el-header>
        <img src="../assets/Windows_logo_-_1985-1989.svg" alt="windows1-logo" />
        <h2>1985: Windows 1.0</h2>
      </el-header>
      <el-container class="content">
        <el-aside width="65%">
          <img src="../assets/windows1.png" alt="windows1-screenshot" />
        </el-aside>
        <el-main>
          <p>
            This is where it all started for Windows. The original Windows 1 was
            released in November 1985 and was Microsoft’s first true attempt at
            a graphical user interface in 16-bit.<br />
            It was notable because it relied heavily on use of a mouse before
            the mouse was a common computer input device.
          </p>
          <div>
            <el-button type="primary" round>Learn More</el-button>
            <el-button type="primary" round @click="setPage(2)"
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
        border-radius: 5%;
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
