<template>
  <div id="main">
    <vue-bubbly-bg />
    <app-header id="app-header"></app-header>
    <div class="top">
      <img
        src="./assets/img/ohayou.png"
        id="ohayou"
        class="ohayou animate__animated animate__bounceInLeft"
        alt="ohayou"
      />
      <img
        src="./assets/img/kyoumo.png"
        id="kyoumo"
        class="kyoumo animate__animated animate__bounceInLeft"
        alt="kyoumo"
      />
      <img
        src="./assets/img/green_light.png"
        class="light animate__animated animate__fadeIn"
        alt="green"
      />
      <img
        src="./assets/img/purple_light.png"
        class="light animate__animated animate__fadeIn"
        alt="purple"
      />
      <img
        src="./assets/img/yellow_light.png"
        class="light animate__animated animate__fadeIn"
        alt="yellow"
      />
      <img
        src="./assets/img/red_light.png"
        class="light animate__animated animate__fadeIn"
        alt="red"
      />
      <img
        src="./assets/img/girl.png"
        class="main-girl animate__animated animate__fadeInUp"
        alt="main_girl"
      />
    </div>
    <div class="about">
      <div v-scroll="handleScroll">
        <h1 class="about">
          「技術」と「創作」の相互作用で<br />両分野を盛り上げる
        </h1>
      <p class="about">
        「技術で創作を」、「創作で技術を」盛り上げて行きたい。<br />技術と創作、両観点から>分野の垣根を<br>超えて皆さんの技術・創作意欲を掻き立て<br />両分野の活性化に繋がるような活動を目指しています。
      </p>
      </div>
    </div>
  </div>
</template>

<script>
import AppHeader from "./components/AppHeader.vue";
import VueBubblyBg from "./components/VueBubblyBg.vue";

export default {
  name: "App",
  data() {
    return {
      about_status: false,
    }
  },
  components: {
    AppHeader,
    VueBubblyBg,
  },
  methods: {
    handleScroll: function (evt, el) {
      if (window.scrollY > 600) {
        el.setAttribute(
          "style",
          "animation: fadeInLeft 1s; opacity: 1;"
        );
        this.about_status = true;
      } else if (window.scrollY < 800 && !(this.about_status)) {
        el.setAttribute(
          "style",
          "opacity: 0;"
        );
      }
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=M+PLUS+Rounded+1c");
@import url("https://fonts.googleapis.com/css2?family=M+PLUS+1p:wght@500;900&display=swap");
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

h1.about {
  text-align: center;
  color: #ffffff;
  font-size: 50px;
  font-weight: 900;
  font-family: "M PLUS 1p", sans-serif;
}

p.about {
  text-align: center;
  color: #ffffff;
  font-size: 30px;
  font-weight: 500;
  font-family: "M PLUS 1p", sans-serif;
}

</style>