<template>
  <section>
    <div class="d-flex flex-column">
      <p class="price__name"><span class="span" :style="{color: textColor}">{{ text }}</span></p>
    </div>
  </section>
</template>

<script>

export default {
  name: "TheText",
  props: {
    text: {
      type: String,
      required: true,
      default: ''
    },
    textColor: {
      type: String,
      default: 'black'
    }
  }
}
</script>

<style lang="scss" scoped>
.price__name {
  font-weight: 800;
  font-size: 60px;
  line-height: 73px;
  text-align: center;
  color: #343434;

  & span {
    padding-bottom: 15px;
    border-bottom: 10px solid #ECBA46;
  }
}

</style>
