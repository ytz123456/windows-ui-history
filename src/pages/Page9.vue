<template>
  <el-card class="box">
    <el-container>
      <el-header>
        <img src="../assets/winvista.png" alt="windowsvista-logo" />
        <h2>2007:&nbsp;&nbsp;Windows Vista</h2>
      </el-header>
      <el-container class="content">
        <el-aside width="65%">
          <img src="../assets/vista.jpeg" alt="windowsvista-screenshot" />
        </el-aside>
        <el-main>
          <p>
            Windows XP stayed the course for about six years before being
            replaced by Windows Vista in 2007. Vista updated the look and feel
            of Windows with more focus on transparent elements. It was buggy,
            burdened the user with hundreds of requests for app permissions
            under “User Account Control”.
          </p>
          <div>
            <el-button type="primary" round>Learn More</el-button>
            <el-button type="primary" round @click="setPage(10)"
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
  background-color: #30a994;
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
