<template>
  <div class="tt">
    <the-header/>
    <the-prices/>
    <the-video/>
    <the-about/>
    <the-footer/>
  </div>
</template>

<script>
import TheHeader from "./components/header/TheHeader.vue";
import ThePrices from "./components/prices/ThePrices.vue";
import TheVideo from "./components/TheVideo.vue";
import TheAbout from "./components/TheAbout.vue";
import TheFooter from "./components/footer/TheFooter.vue";

export default {
  components: {TheAbout, TheVideo, ThePrices, TheHeader, TheFooter},
};
</script>

<style lang="scss" scoped>
.tt {
  overflow-x: hidden;
}
</style>
