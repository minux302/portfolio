<template>
  <div id="main">
    <vue-bubbly-bg/>
    <app-header id="app-header"></app-header>
    <img src="./assets/img/ohayou.png" id="ohayou" class="ohayou animate__animated animate__bounceInLeft" alt="ohayou">
    <img src="./assets/img/kyoumo.png" id="kyoumo" class="kyoumo animate__animated animate__bounceInLeft" alt="kyoumo">
    <img src="./assets/img/green_light.png" class="light animate__animated animate__fadeIn" alt="green">
    <img src="./assets/img/purple_light.png" class="light animate__animated animate__fadeIn" alt="purple">
    <img src="./assets/img/yellow_light.png" class="light animate__animated animate__fadeIn" alt="yellow">
    <img src="./assets/img/red_light.png" class="light animate__animated animate__fadeIn" alt="red">
    <img src="./assets/img/girl.png" class="main-girl animate__animated animate__fadeInUp" alt="main_girl">
  </div>
</template>

<script>
import AppHeader from './components/AppHeader.vue'
import VueBubblyBg from './components/VueBubblyBg.vue'

export default {
  name: 'App',
  components: {
    AppHeader,
    VueBubblyBg,
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=M+PLUS+Rounded+1c');
@keyframes fuwafuwa {
  0% {
    transform:translate(0, 0) rotate(-7deg);
  }
  50% {
    transform:translate(0, -7px) rotate(0deg);
  }
  100% {
    transform:translate(0, 0) rotate(7deg);
  }
}
#main {
  /* width: 1920px; */
  width: auto; /* tmp */
  background-color: #0cbaff;
  background-size: cover;
  position: relative;
  margin: 0 0;
  padding: 0 0;
}

#app-header {
  z-index: 999;
  position: absolute;
  top: 0;
  left: 20px;
}

img.main-girl {
  width: 800px; /* tmp */
  position: absolute;
  top: 15px;
  right: 80px;
  /*animation: fadeInUp 0.7s ease 0.5s forwards, fuwafuwa 3s infinite ease-in-out .8s alternate;*/
  animation-delay: 0.5s;
  animation-duration: 0.7s;
}

img.light {
  /* width: 100%;*/
  width: 100%; /* tmp */
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
}

img.ohayou {
  width: 800px;
  position: absolute;
  top: 300px;
  left: 40px;
  animation-delay: 1s;
  animation-duration: 0.7s;
}

img.kyoumo {
  width: 440px;
  position: absolute;
  top: 390px;
  left: 450px;
  animation-delay: 1s;
}

#hero {
  position: relative;
}

.wf-roundedmplus1c {
  font-family: "M PLUS Rounded 1c";
}
</style>