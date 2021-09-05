<template>
  <el-card class="box">
    <el-container>
      <el-header>
        <img src="../assets/me.svg" alt="windowsme-logo" />
        <h2>2000:&nbsp;&nbsp;Windows ME</h2>
      </el-header>
      <el-container class="content">
        <el-aside width="65%">
          <img src="../assets/windowsme.png" alt="windowsme-screenshot" />
        </el-aside>
        <el-main>
          <p>
            Considered a low point in the Windows series by many, Windows
            Millennium Edition was the last Windows to be based on MS-DOS, and
            the last in the Windows 9x line. Released in September 2000, it
            introduced some important concepts to consumers, including more
            automated system recovery tools.
          </p>
          <div>
            <el-button type="primary" round>Learn More</el-button>
            <el-button type="primary" round @click="setPage(8)"
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
