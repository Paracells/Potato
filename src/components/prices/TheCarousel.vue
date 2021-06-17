<template>
  <section class="slider mx-auto">
    <carousel :items-to-show="1" :wrap-around="true">
      <slide v-for="slide in slides" :key="slide.name">
        <div class="d-flex flex-column justify-content-center align-items-center">
          <img class="slider-img"
               :src="slide.img"
               :alt="slide.name"
          />
          <div class="slider__text">{{ slide.name }}</div>
          <div class="slider__text-price">{{ slide.price }}₽</div>
        </div>
      </slide>

      <template #addons>
        <navigation v-if="!propSwiper"/>
        <pagination v-else/>
      </template>
    </carousel>
  </section>
</template>
<script>
import 'vue3-carousel/dist/carousel.css';
import {Carousel, Slide, Pagination, Navigation} from 'vue3-carousel';

export default {
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
  data() {
    return {
      windowWidth: window.innerWidth,
      flag: false,
      slides: [
        {
          img: require('@/assets/images/carousel/1.png'), name: 'Столовый картофель', price: 142
        },
        {
          img: require('@/assets/images/carousel/2.png'), name: 'Деревенский картофель', price: 129
        },
        {
          img: require('@/assets/images/carousel/3.png'), name: 'Домашний картофель', price: 133
        },
      ]
    };
  },
  mounted() {
    window.onresize = () => {
      this.windowWidth = window.innerWidth;
    };
  },
  computed: {
    propSwiper() {
      return this.windowWidth < 576;
    },
  },

};
</script>
<style lang="scss">
$text_color: #ecba46;

.carousel__pagination {
  padding: 0;
}

.carousel__pagination-button {
  margin-top: 33px;
  border-radius: 50%;
  height: 10px;
  background-color: #C4C4C4;

  &--active {
    background-color: $text_color;
  }
}

.slider-img {
  max-height: 254px;
  height: 100%;
  width: 100%;
  object-fit: cover;
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

.carousel__prev, .carousel__next {
  height: 82px;
  width: 44px;
  background-color: transparent !important;
}

.carousel__icon {
  color: $text_color;
  background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg width='44' height='82' viewBox='0 0 44 82' fill='none'><path d='M40 4L5 41L40 78' stroke='#ECBA46' stroke-width='4'/></svg>") !important;
}

@media (max-width: 576px) {
  .slider {
    &__text {
      font-size: 20px;
    }

  }
}
</style>

