<template>
  <el-card class="box">
    <el-container>
      <el-header>
        <img src="../assets/layer1497.png" alt="windows3-logo" />
        <h2>1990:&nbsp;&nbsp;Windows 3.0</h2>
      </el-header>
      <el-container class="content">
        <el-aside width="65%">
          <img src="../assets/windows3.png" alt="windows3-screenshot" />
        </el-aside>
        <el-main>
          <p>
            Windows 3 introduced the ability to run MS-DOS programmes in
            windows, which brought multitasking to legacy programmes, and
            supported 256 colours bringing a more modern, colourful look to the
            interface. More important, it introduced the card-moving timesink
            (and mouse use trainer) Solitaire.
          </p>
          <div>
            <el-button type="primary" round>Learn More</el-button>
            <el-button type="primary" round @click="setPage(4)"
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
