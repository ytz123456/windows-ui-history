<template>
  <el-card class="box">
    <el-container>
      <el-header>
        <img
          src="../assets/Windows_Logo_(1992-2001).svg"
          alt="windows98-logo"
        />
        <h2>1998:&nbsp;&nbsp;Windows 98</h2>
      </el-header>
      <el-container class="content">
        <el-aside width="65%">
          <img src="../assets/windows98.png" alt="windows98-screenshot" />
        </el-aside>
        <el-main>
          <p>
            Released in June 1998, Windows 98 built on Windows 95 and brought
            with it IE 4, Outlook Express, Windows Address Book and so on.
            Windows 98 introduced the back and forward navigation buttons and
            the address bar in Windows Explorer. USB support was much improved
            and led to its widespread adoption.
          </p>
          <div>
            <el-button type="primary" round>Learn More</el-button>
            <el-button type="primary" round @click="setPage(7)"
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
