import {createApp} from 'vue'
import App from './App.vue'
import 'animate.css';
import 'bubbly';

const app = createApp(App)
app.directive ('scroll', {
  mounted: function (el, binding) {
    let f = function (evt) {
      if (binding.value(evt, el)) {
        window.removeEventListener("scroll", f);
      }
    };
    window.addEventListener("scroll", f);
  }
})
// app.use(VueAnimateOnScroll)
app.mount('#app')