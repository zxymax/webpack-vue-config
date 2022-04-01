<template>
  <h1>Vue - Typescript - Webpack</h1>
  <h3>MaxMc</h3>
  <h3>Jorna</h3>
  <h3>Jan</h3>
  <h3>god</h3>
  <img src="../static/face_eye_1024.jpg" />
  <banner />
</template>

<script>
import Banner from './components/Banner.vue'

export default({
  name: 'App',
  components: {
    Banner
}
})
</script>

<style scoped>
h1 {
  text-align: center;
  margin-top: 10px;
}
img {
  display: block;
  margin: 100px auto 10px;
  width: 300px;
  height: 300px;
}
</style>
