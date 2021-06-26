<template>
  <app-header id="app-header"></app-header>
  <div id="main">
    <vue-bubbly-bg />
    <div class="top_sec">
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
    <div id="about_sec">
      <h1 class="about" data-aos="fade-right">
        「技術」と「創作」の相互作用で<br />両分野を盛り上げる
      </h1>
      <hr data-aos="zoom-in" class="about" noshade />
      <p class="about" data-aos="fade-left">
        「技術で創作を」、「創作で技術を」盛り上げて行きたい。<br />技術と創作、両方の観点から分野の垣根を超えて<br />両分野の活性化に繋がるような活動を目指しています。
      </p>
    </div>
    <div id="tech_sec">
      <p id="tech_sec_box"></p>
      <div data-aos="fade-right" id="tech_slideshow">
        <slide-show :slides="tech_images"></slide-show>
      </div>
      <p id="tech_en" data-aos="fade-left">Creative from Tech</p>
      <h1 class="tech" data-aos="fade-right">技術で<br />創作を</h1>
      <hr data-aos="zoom-in" data-aos-delay="200" class="tech" noshade />
      <p class="tech" data-aos="fade-left" data-aos-delay="200">
        <!--エンジニアリングによる創作、または創作のサポート<br>をするツール作ったりしています。<br><br>-->
        「より多くの人に創作活動を」をコンセプトに<br />
        技術の力を借りつつ人間の主体性を第一に据えた<br />モノを作ることを目指しています。
      </p>
    </div>
  </div>
</template>

<script>
import AppHeader from "./components/AppHeader.vue";
import VueBubblyBg from "./components/VueBubblyBg.vue";
import SlideShow from "./components/SlideShow.vue";

export default {
  name: "App",
  data: function() {
    return {
      tech_images: [
        require('@/assets/img/tech_00.png'),
        require('@/assets/img/tech_01.png'),
        require('@/assets/img/tech_02.png')
      ]
    }
  },
  components: {
    AppHeader,
    VueBubblyBg,
    SlideShow,
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=M+PLUS+Rounded+1c");
@import url("https://fonts.googleapis.com/css2?family=M+PLUS+1p:wght@500;900&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Benne&family=Roboto:wght@300&display=swap");
#main {
  /* width: 1920px; */
  width: auto; /* tmp */
  height: 3000px; /* tmp */
  background-color: #0cbaff;
  background-size: cover;
  position: relative;
  margin: 0 0;
  padding: 0 0;
}

#app-header {
  z-index: 999;
  position: fixed;
  top: 0;
  /* height: 100px;
  width: 1920px;
  background-color: #0cbaff;
  box-shadow: 0 10px 25px 0 rgba(0, 0, 0, .5);
  opacity: 0.8; */
}

img.main-girl {
  width: 800px; /* tmp */
  position: absolute;
  top: 15px;
  right: 80px;
  animation-delay: 0.5s;
  animation-duration: 0.7s;
}

img.light {
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

/* About Section */
#about_sec {
  position: absolute;
  top: 1500px;
  left: 0;
  right: 0;
  margin: auto;
}

h1.about {
  text-align: center;
  color: #ffffff;
  font-size: 50px;
  font-weight: 900;
  position: relative;
  font-family: "M PLUS 1p", sans-serif;
  margin-bottom: 0;
}

hr.about {
  width: 750px;
  border: 0 none;
  height: 2px;
  color: #ffffff;
  background-color: #ffffff;
}

p.about {
  text-align: center;
  color: #ffffff;
  position: relative;
  font-size: 30px;
  font-weight: 500;
  font-family: "M PLUS 1p", sans-serif;
}

/* Tech Section */
#tech_sec {
  position: absolute;
  top: 2200px;
  left: 0;
  right: 0;
  margin: auto;
}

#tech_en {
  display: flex;
  opacity: 0.7;
  color: #ffffff;
  align-items: left;
  text-align: right;
  color: #ffffff;
  font-size: 30px;
  font-weight: 500;
  position: absolute;
  top: 200px;
  right: 210px;
  font-family: "Roboto", sans-serif;
  z-index: 10;
}

#tech_slideshow {
  position: absolute;
  top: 100px;
  left: 0px;
  height: 750px;
  width: 850px;
  box-shadow: 0 10px 25px 0 rgba(0, 0, 0, .5);
}

#tech_sec_box_debug {
  position: absolute;
  top: 100px;
  left: 0px;
  height: 750px;
  width: 850px;
  background-color: red;
  z-index: 0;
}

h1.tech {
  text-align: right;
  color: #ffffff;
  font-size: 100px;
  font-weight: 900;
  position: relative;
  top: 200px;
  right: 200px;
  line-height: 120px;
  font-family: "M PLUS 1p", sans-serif;
  z-index: 10;
}

hr.tech {
  width: 580px;
  border: 0 none;
  height: 2px;
  position: absolute;
  right: 200px;
  top: 510px;
  color: #ffffff;
  background-color: #ffffff;
  z-index: 10;
}

#tech_sec_box {
  position: absolute;
  top: 10px;
  right: 0px;
  height: 900px;
  width: 1200px;
  background-color: #4169e1;
  z-index: 0;
}

p.tech {
  color: #ffffff;
  position: absolute;
  font-size: 20px;
  font-weight: 500;
  top: 570px;
  right: 200px;
  font-family: "M PLUS 1p", sans-serif;
  z-index: 10;
}

#session_run {
  position: absolute;
  top: 100px;
  left: 250px;
  width: 500px;
}

#miku {
  position: absolute;
  top: 100px;
  left: -300px;
  width: 1200px;
}

.img_wrap {
  margin: 0 auto;
  overflow: hidden;
  cursor: pointer;
}
.img_wrap img {
  width: 100%;
  transition-duration: 0.2s;
}
.img_wrap:hover img {
  transform: scale(1.1);
  transition-duration: 0.4s;
  z-index: 1000;
}
</style>