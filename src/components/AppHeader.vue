<template>
  <div id="header">
    <div class="logo">
      <a href="index.html"><img src="../assets/img/logo.png" alt="SNAPPERS"></a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppHeader'
}
</script>

<style scoped>
#header {
  width: 960;
  height: 100px;
  margin: 0 auto;
  background-color: #0cbaff;
}

.logo {
  float: left;
  margin-top: 20px;
}

</style>