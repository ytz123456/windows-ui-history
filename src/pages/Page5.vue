<template>
  <el-card class="box">
    <el-container>
      <el-header>
        <img src="../assets/Windows_logo_-_1992.svg" alt="windows95-logo" />
        <h2>1995:&nbsp;&nbsp;Windows 95</h2>
      </el-header>
      <el-container class="content">
        <el-aside width="65%">
          <img src="../assets/windows95.png" alt="windows95-screenshot" />
        </el-aside>
        <el-main>
          <p>
            As the name implies, Windows 95 arrived in August 1995 and with it
            brought the first ever Start button and Start menu. It also
            introduced the concept of “plug and play” – connect a peripheral and
            the operating system finds the appropriate drivers for it and makes
            it work. That was the idea; it didn’t always work in practice.
          </p>
          <div>
            <el-button type="primary" round>Learn More</el-button>
            <el-button type="primary" round @click="setPage(6)"
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
