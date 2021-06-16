<template>
  <section class="margin__top">
    <the-text text="Цены" />
    <the-carousel />
  </section>
</template>

<script>
import TheCarousel from "./TheCarousel.vue";
import TheText from "../common/TheText.vue";

export default {
  name: "ThePrices",
  components: { TheText, TheCarousel },
};
</script>

<style lang="scss">
.margin__top {
  margin-top: 105px;
}
</style>
