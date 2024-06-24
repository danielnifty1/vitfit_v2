<template>
  <div class="slide-show">
    <div class="slides" :style="{ 'transform': `translateX(${currentSlide * -100}%)` }">
      <div class="slide" v-for="(slide, index) in slides" :key="index">
        <div class="slide-content">
          <!-- slide content here -->
          <h2>{{ slide.title }}</h2>
          <p>{{ slide.description }}</p>
        </div>
      </div>
    </div>
    <div class="navigation">
      <button @click="prevSlide">Prev</button>
      <button @click="nextSlide">Next</button>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  data() {
    return {
      currentSlide: 0,
      slides: [
        { title: 'Slide 1', description: 'This is slide 1' },
        { title: 'Slide 2', description: 'This is slide 2' },
        { title: 'Slide 3', description: 'This is slide 3' },
      
      ],
      slides2: [
        { title: 'Slide 1', description: 'This is slide 1' },
        { title: 'Slide 2', description: 'This is slide 2' },
        { title: 'Slide 3', description: 'This is slide 3' },
      
      ],
      

       
    }
  },
  methods: {
    nextSlide() {
      this.currentSlide = (this.currentSlide + 1) % this.slides.length
    },
    prevSlide() {
      this.currentSlide = (this.currentSlide - 1 + this.slides.length) % this.slides.length
    }
  }
}
</script>

<style scoped>
.slide-show {
  position: relative;
  overflow: hidden;
}

.slides {
  display: flex;
  transition: transform 0.5s;
}

.slide {
  flex: 1;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.slide-content {
  text-align: center;
}

.navigation {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
}

.navigation button {
  margin: 0 10px;
}
</style>