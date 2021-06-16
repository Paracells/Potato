<template>
  <section class="margin__top">
    <the-text text="О нас" />
    <div class="position-relative">
      <img
        src="../assets/images/about/left.png"
        alt="potato"
        class="position-absolute left__top-img"
      />
    </div>
    <div
      class="
        d-flex
        girl__text
        justify-content-around
        mx-auto
        girl__image-margin
      "
    >
      <img src="../assets/images/about/left2.png" alt="potato" />
      <p class="girl__text-margin">
        Если картошка, запеченная в духовке, получается не всегда такой как
        хочется (сухая или наоборот мокрая, сыроватая внутри, недостаточно
        удачная по специям) — дайте шанс этому рецепту. <br /><br />
        Такая картошечка по-деревенски стабильно получается очень вкусная,
        хрустящая снаружи и мягкая, как пюрешка внутри, ароматная — в общем
        пальчики оближешь. Рецепт у меня простой, но с технологическим секретом,
        который и решает дело.
      </p>
    </div>
    <div class="form__main mx-auto"></div>
  </section>
</template>

<script>
import TheText from "./TheText.vue";

export default {
  name: "TheAbout",
  components: { TheText },
};
</script>

<style lang="scss" scoped>
.margin__top {
  margin-top: 89px;
  margin-left: 198px;
  margin-right: 149px;
}

.girl__text {
  max-width: 690px;
  width: 100%;

  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 29px;
  color: #343434;

  &-margin {
    margin-top: 16px;
  }
}
.girl__image-margin {
  margin-top: 59px;
}

.left__top-img {
  margin-top: -90px;
}
.form__main {
  min-height: 494px;
  max-width: 970px;
  background: #35312d;
  border-radius: 20px;
}
</style>
