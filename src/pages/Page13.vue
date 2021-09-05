<template>
  <el-card class="box">
    <el-container>
      <el-header>
        <img src="../assets/win11logo.png" alt="windows11-logo" />
        <h2>2021:&nbsp;&nbsp;Windows 11</h2>
      </el-header>
      <el-container class="content">
        <el-aside width="65%">
          <img src="../assets/windows11.jpg" alt="windows11-screenshot" />
        </el-aside>
        <el-main>
          <p>
            Windows 11 is an upcoming major version of the Windows NT operating
            system, scheduled to be released on October 5, 2021. A redesigned
            interface is present throughout the operating system; translucency,
            shadows, a new color palette, and rounded geometry are prevalent
            throughout the UI.
          </p>
          <div>
            <el-button type="primary" round>Learn More</el-button>
            <a
              href="https://en.wikipedia.org/wiki/Microsoft_Windows_version_history"
              target="_blank"
            >
              <el-button type="primary" round>
                Click for Windows version history
              </el-button>
            </a>
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
