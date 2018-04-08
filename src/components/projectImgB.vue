<template lang="html">
  <div class="img-two">
    <div class="box-shadow">
      <a data-fancybox="gallery" :href="imgPath1">
        <img :src="imgPath1" :alt="altText1" class="img-fluid-two hvrbox-layer-bottom grayscale">
      </a>
    </div>
    <div class="box-shadow">
      <a data-fancybox="gallery" :href="imgPath2">
        <img :src="imgPath2" :alt="altText2" class="img-fluid-two hvrbox-layer-bottom grayscale">
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'projectImgB',
  props: {
    name: {
      required: true
    },
    category: {
      required: true
    },
    imgNumber1: {
      required: true
    },
    imgNumber2: {
      required: true
    }
  },

  computed: {
    altText1: function () {
      return (
        this.name + ' in ' + this.category + ', image ' + this.imgNumber1
      )
    },

    altText2: function () {
      return (
        this.name + ' in ' + this.category + ', image ' + this.imgNumber2
      )
    },

    imgPath1: function () {
      return 'img/' + this.category + '/' + this.name.toLowerCase().replace( / /g, '-' ) + '/' + this.name.toLowerCase().replace( / /g, '-' ) + this.imgNumber1 + '.jpg'
    },

    imgPath2: function () {
      return 'img/' + this.category + '/' + this.name.toLowerCase().replace( / /g, '-' ) + '/' + this.name.toLowerCase().replace( / /g, '-' ) + this.imgNumber2 + '.jpg'
    }
  }
}
</script>

<style lang="css">
</style>
