<template>
  <div :key=i v-for="(path, i) in slides">
    <div v-if="i===0">
      <img :src="slides[i]" class="slideshow">
    </div>
    <div v-else>
      <img :src="slides[i]" class="slideshow fadeout">
    </div>
  </div>
</template>

<script>
export default {
  name: "SlideShow",
  props: ['slides'],
  data: function() {
    return {
      index: 0,
    }
  },
  mounted() {
    const images = document.getElementsByClassName('slideshow');
    this.slideshow(images);
    setInterval(() => {
      this.index = this.index < images.length - 1 ? this.index + 1 : 0;
      this.slideshow(images);
    }, 8000);
  },
  methods: {
    slideshow(images) {
      const current = images[this.index];
      const prev = images[this.index - 1] ? images[this.index - 1] : images[images.length - 1];
      current.classList.add('fadein');
      current.classList.remove('fadeout');
      prev.classList.remove('fadein');
      prev.classList.add('fadeout');
    }
  }
};
</script>

<style scoped>
.fadein {
  opacity: 1;
  transition: opacity 1s;
}

.fadeout {
  opacity: 0;
  transition: opacity 1s;
}

.slideshow {
  position: absolute;
}
</style>