<template>
  <div>
    <the-header/>
    <the-prices/>
    <the-video/>
    <the-about/>
  </div>
</template>

<script>
import TheHeader from "./components/TheHeader.vue";
import ThePrices from "./components/ThePrices.vue";
import TheVideo from "./components/TheVideo.vue";
import TheAbout from "./components/TheAbout.vue";

export default {
  components: {TheAbout, TheVideo, ThePrices, TheHeader},
};
</script>

<style scoped>
</style>>
