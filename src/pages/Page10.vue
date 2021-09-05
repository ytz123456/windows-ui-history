<template>
  <el-card class="box">
    <el-container>
      <el-header>
        <img
          src="../assets/Unofficial_Windows_logo_variant_-_2002–2012_(Multicolored).svg"
          alt="windows7-logo"
        />
        <h2>2009:&nbsp;&nbsp;Windows 7</h2>
      </el-header>
      <el-container class="content">
        <el-aside width="65%">
          <img src="../assets/windows7.png" alt="windows7-screenshot" />
        </el-aside>
        <el-main>
          <p>
            Considered by many as what Windows Vista should have been, Windows 7
            was first released in October 2009. It was intended to fix the
            problems faced by Vista, with slight tweaks to its appearance and a
            concentration on user-friendly features and less “dialogue box
            overload”. It was faster, more stable and easier to use.
          </p>
          <div>
            <el-button type="primary" round>Learn More</el-button>
            <el-button type="primary" round @click="setPage(11)"
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
