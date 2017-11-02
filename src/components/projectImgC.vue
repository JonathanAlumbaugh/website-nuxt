<template lang="html">
  <div class="img-three">
    <div class="box-shadow">
      <a data-fancybox="gallery" :href="imgPath1">
        <img :src="imgPath1" :alt="altText1" class="img-fluid-three hvrbox-layer_bottom grayscale">
      </a>
    </div>
    <div class="box-shadow">
      <a data-fancybox="gallery" :href="imgPath2">
        <img :src="imgPath2" :alt="altText2" class="img-fluid-three hvrbox-layer_bottom grayscale">
      </a>
    </div>
    <div class="box-shadow">
      <a data-fancybox="gallery" :href="imgPath3">
        <img :src="imgPath3" :alt="altText3" class="img-fluid-three hvrbox-layer_bottom grayscale">
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'projectImgC',
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
    },
    imgNumber3: {
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

    altText3: function () {
      return (
        this.name + ' in ' + this.category + ', image ' + this.imgNumber3
      )
    },

    imgPath1: function () {
      return 'img/' + this.category + '/' + this.name.toLowerCase().replace( / /g, '-' ) + '/' + this.name.toLowerCase().replace( / /g, '-' ) + this.imgNumber1 + '.jpg'
    },

    imgPath2: function () {
      return 'img/' + this.category + '/' + this.name.toLowerCase().replace( / /g, '-' ) + '/' + this.name.toLowerCase().replace( / /g, '-' ) + this.imgNumber2 + '.jpg'
    },

    imgPath3: function () {
      return 'img/' + this.category + '/' + this.name.toLowerCase().replace( / /g, '-' ) + '/' + this.name.toLowerCase().replace( / /g, '-' ) + this.imgNumber3 + '.jpg'
    }
  }
}
</script>

<style lang="css">
</style>
