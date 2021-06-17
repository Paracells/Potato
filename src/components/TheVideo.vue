<template>
  <section class="margin__section mx-auto">
    <div class="video__section">
      <div class="center__section">
        <the-text text="Видео" text-color="white" />
        <div
          class="
            video__player
            mx-auto
            d-flex
            justify-content-center
            align-items-center
          "
        >
          <img
            v-if="!show"
            src="../assets/images/video/Subtract.png"
            alt="play"
            @click="show = true"
          />
          <iframe
            v-else
            id="ytplayer"
            type="text/html"
            width="770"
            height="440"
            src="http://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import TheText from "./common/TheText.vue";

export default {
  name: "TheVideo",
  components: { TheText },
  data() {
    return {
      show: false,
    };
  },
};
</script>

<style lang="scss" scoped>
.margin__section {
  margin-top: 149px;
  max-width: 1800px;
  width: 100%;
}

.video__section {
  min-height: 840px;
  height: 100%;
  background: #35312d;
  border-radius: 20px;
}

.center__section {
  padding-top: 70px;
}

.video__player {
  margin-top: 84px;
  min-height: 440px;
  height: 100%;
  max-width: 770px;
  width: 100%;
  background: #201e1c;
  border-radius: 20px;

  & img {
    cursor: pointer;
  }
}

@media (max-width: 576px) {
  body {
    background-color: green;
  }

  .center__section {
    padding-top: 40px;
  }
  .video__section {
    min-height: 400px;
  }
  .video__player {
    min-height: 178px;
    max-width: 310px;
    width: 100%;
    margin-top: 43px;
  }
}
</style>
