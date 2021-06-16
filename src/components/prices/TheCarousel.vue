<template>
  <section class="slider mx-auto">
    <swiper :navigation="true" :loop="true" class="mySwiper">
      <swiper-slide
        ><img src="../../assets/images/carousel/1.png" alt="" />
        <div class="slider__text">Столовый картофель</div>
        <div class="slider__text-price">142₽</div>
      </swiper-slide>
      <swiper-slide
        ><img src="../../assets/images/carousel/2.png" alt="" />
        <div class="slider__text">Деревенский картофель</div>
        <div class="slider__text-price">129₽</div>
      </swiper-slide>
      <swiper-slide
        ><img src="../../assets/images/carousel/3.png" alt="" />
        <div class="slider__text">Домашний картофель</div>
        <div class="slider__text-price">133₽</div>
      </swiper-slide>
    </swiper>
  </section>
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/swiper.scss";

import "swiper/components/navigation/navigation.min.css";

// import Swiper core and required modules
import SwiperCore, { Navigation } from "swiper/core";

// install Swiper modules
SwiperCore.use([Navigation]);

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {};
  },
  methods: {},
};
</script>
<style lang="scss">
$text_color: #ecba46;

.swiper-button-prev,
.swiper-button-next {
  color: $text_color;
}

.swiper-button-next:after,
.swiper-button-prev:after {
  font-size: 4rem;
}

.slider {
  margin-top: 48px;
  max-width: 570px;
  width: 100%;

  &__text {
    font-weight: 500;
    font-size: 30px;
    line-height: 37px;
    text-align: center;
    color: #343434;

    &-price {
      font-weight: 300;
      font-size: 70px;
      line-height: 85px;
      text-align: center;
      color: $text_color;
    }
  }
}

.swiper-container {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  text-align: center;
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.swiper-slide img {
  object-fit: cover;
}
</style>
