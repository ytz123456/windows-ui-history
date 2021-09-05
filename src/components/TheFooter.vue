<template>
  <el-steps :active="active" finish-status="success" align-center class="steps">
    <el-step title="start" @click="setPage(0)"></el-step>
    <el-step title="1985" @click="setPage(1)"></el-step>
    <el-step title="1987" @click="setPage(2)"></el-step>
    <el-step title="1990" @click="setPage(3)"></el-step>
    <el-step title="1992" @click="setPage(4)"></el-step>
    <el-step title="1995" @click="setPage(5)"></el-step>
    <el-step title="1998" @click="setPage(6)"></el-step>
    <el-step title="2000" @click="setPage(7)"></el-step>
    <el-step title="2001" @click="setPage(8)"></el-step>
    <el-step title="2007" @click="setPage(9)"></el-step>
    <el-step title="2009" @click="setPage(10)"></el-step>
    <el-step title="2012" @click="setPage(11)"></el-step>
    <el-step title="2015" @click="setPage(12)"></el-step>
    <el-step title="2021" @click="setPage(13)"></el-step>
  </el-steps>
</template>

<script>
export default {
  computed: {
    active() {
      return this.$store.getters.getCurrentPage;
    },
  },
  // methods: {
  //   setPage(num) {
  //     this.$store.commit("changePage", num);
  //     this.$router.push("page" + num);
  //   },
  // },
};
</script>

<style lang="scss" scoped>
.steps {
  margin: auto;
  max-width: 80%;
}
.el-step {
  cursor: pointer;
}
</style>
