<template>
  <section class="margin__top">
    <the-text text="О нас"/>
    <div class="position-relative">
      <img
          src="../assets/images/about/left.png"
          alt="potato"
          class="position-absolute left__top-img"
      />
    </div>
    <div class="img__container">
      <img
          src="../assets/images/about/left2.png"
          alt="girl"
          class="girl__image"
      />
      <p class="girl__text">
        Если картошка, запеченная в духовке, получается не всегда такой как
        хочется (сухая или наоборот мокрая, сыроватая внутри, недостаточно
        удачная по специям) — дайте шанс этому рецепту. <br/><br/>
        Такая картошечка по-деревенски стабильно получается очень вкусная,
        хрустящая снаружи и мягкая, как пюрешка внутри, ароматная — в общем
        пальчики оближешь. Рецепт у меня простой, но с технологическим секретом,
        который и решает дело.
      </p>
    </div>
    <div class="position-relative">
      <img
          src="../assets/images/about/bottom.png"
          alt="potato"
          class="position-absolute bottom__img"
      />
    </div>
    <div
        class="
        form__main
        position-relative
        mx-auto
        d-flex
        flex-column
        justify-content-around
        align-items-center
      "
    >
      <div class="form__text">{{ text }}</div>
      <div class="form__place mx-auto text-center form__input">
        <div class="form-floating">
          <input
              type="email"
              class="form-control"
              id="floatingInput"
              placeholder="Имя"
          />
          <label for="floatingInput">Имя</label>
        </div>
        <div class="form-floating form__second-margin">
          <input
              type="tel"
              class="form-control"
              id="floatingPhone"
              placeholder="Номер телефона"
          />
          <label for="floatingPhone">Номер телефона</label>
        </div>
        <button class="active">{{ text }}</button>
      </div>
    </div>
  </section>
</template>

<script>
import TheText from "./common/TheText.vue";

export default {
  name: "TheAbout",
  components: {TheText},
  data() {
    return {
      text: "Оставить заявку",
    };
  },
};
</script>

<style lang="scss" scoped>
$main: #746b61;
.form-control {
  background-color: transparent;
}

.form-control {
  border-color: $main;
  color: #fff;

  &:focus {
    background-color: transparent;
    border-color: #fff;
    box-shadow: none;
    color: #fff;
  }
}

.form-floating > label {
  color: $main;
}

.margin__top {
  margin-top: 89px;
}

.img__container {
  display: flex;
  justify-content: center;
}

.girl__text {
  max-width: 400px;
  width: 100%;
  margin-top: 76px;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 29px;
  color: #343434;

  &-margin {
    margin-top: 16px;
  }
}

.girl__image {
  margin-top: 59px;
  position: relative;
  z-index: 100;
  float: left;
  /* display: flex;
  justify-content: space-around; */
}

.girl__image > img {
  object-fit: cover;
  height: 100%;
  width: 100%;
}

.left__top-img {
  margin-top: -90px;
  z-index: 10;
}

.bottom__img {
  right: -50px;
  bottom: -295px;
  z-index: -1;
}

.form__main {
  min-height: 494px;
  max-width: 970px;
  background: #35312d;
  border-radius: 20px;
  z-index: 100;

  & .form__text {
    padding-top: 59px;
    font-weight: 600;
    font-size: 40px;
    line-height: 49px;
    text-align: center;
    color: #ffffff;
  }

  & .form__input {
    padding-top: 46px;
  }
}

.form__place {
  max-width: 370px;
  width: 100%;
}

.active {
  border: none;
  outline: none;
  max-width: 240px;
  width: 100%;
  margin-bottom: 85px;
  font-size: 20px;
  line-height: 24px;
  padding: 13px 32px 13px 32px;
  border-radius: 30px;
  font-weight: 500;
  margin-right: 0;
  background-color: #ecba46;
  color: #333333;

  &:hover {
    background-color: #ffd573;
    color: black;
  }
}

.form__second-margin {
  margin-top: 20px;
  margin-bottom: 65px;
}

@media (min-width: 1200px) {
  .margin__top {
    margin-top: 89px;
    margin-left: 198px;
    margin-right: 149px;
  }
}

@media (max-width: 992px) {
  .left__top-img,
  .bottom__img {
    display: none;
  }
}

@media (max-width: 576px) {
  .form__main {
    min-height: 400px;
    border-radius: 0;

    & .form__text {
      padding-top: 40px;
      font-size: 30px;
      line-height: 37px;
    }
  }
  .form-floating {
    margin-left: 35px;
    margin-right: 35px;
  }
  .active {
    margin-bottom: 65px;
  }

  .img__container {
    position: relative;
  }

  .girl__image {
    opacity: 0.4;
    margin-top: -71px;
    margin-left: -285px;
  }
  .girl__text {
    position: absolute;
    right: 75px;
    top: 21px;
    text-align: center;
    font-weight: 600;
    font-size: 12px;
    line-height: 19px;
    margin-top: 0;
    max-width: 238px;
    width: 100%;
  }
  .margin__top {
    margin-top: 50px;
  }
}
</style>
