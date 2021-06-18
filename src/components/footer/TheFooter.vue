<template>
  <footer class="margin__top">
    <div class="footer__header">КАРТОШЕЧКА</div>
    <div class="footer__icon">
      <the-icons d-flex justify-content-center  />
    </div>
  </footer>
</template>

<script>
import TheIcons from "./TheIcons.vue";
export default {
  components: { TheIcons },
};
</script>

<style lang="scss" scoped>
.margin__top {
  margin-top: 120px;
}
.footer__header {
  font-weight: 900;
  font-size: 42px;
  line-height: 51px;
  text-align: center;
  text-transform: uppercase;

  color: #35312d;
}
.footer__icon {
  margin-top: 30px;
  margin-bottom: 94px;
}

@media (max-width: 576px) {
  .footer__icon {
    margin-bottom: 76px;
  }
}
</style>
