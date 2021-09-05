<template>
  <el-card class="box">
    <div class="header">
      <h2>
        The History of Microsoft Windows: from a design perspective
      </h2>
    </div>
    <div class="content">
      <div>
        Microsoft Windows operating system was first introduced in 1985. Over 36
        years, a lot has changed for Windows, but what stayed the same is the
        basic WIMP paradigm: "window, icon, menu and pointing device".
      </div>
      <div>
        Without doubts, Windows releases have successfully changed the face of
        business and personal computing. To mark this incredible journey, let's
        have a brief look at the history of Windows, and observe how the design
        of Windows' Graphical User Interface (GUI) evolves over time.
      </div>
      <div>
        <el-button type="primary" round @click="setPage(1)">
          Start the journey
        </el-button>
      </div>
    </div>
  </el-card>
</template>

<script>
// export default {
//   methods: {
//     setPage(num) {
//       this.$store.commit("changePage", num);
//       this.$router.push("page" + num);
//     },
//   },
// };
</script>

<style lang="scss" scoped>
.box {
  width: 70%;
  margin: 20px auto;
  height: 60vh;
  z-index: 100;
  border-radius: 10px;
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
  .header {
    padding: 0 20px 20px 20px;
    h2 {
      margin: 10px auto;
      max-width: 60%;
      font-size: 2.2vw;
      text-align: center;
    }
  }
  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    div {
      text-align: center;
      margin: 10px auto;
      padding: 10px;
      max-width: 60%;
      font-size: 1.3vw;
    }
  }
}
</style>
