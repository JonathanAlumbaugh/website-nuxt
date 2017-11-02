<template lang="html">
  <div class="box-shadow img-one">
    <a data-fancybox="gallery" :href="imgPath">
      <img :src="imgPath" :alt="altText" class="img-fluid-one hvrbox-layer_bottom grayscale">
    </a>
  </div>
</template>

<script>
export default {
  name: 'projectImgA',
  props: {
    name: {
      required: true
    },
    category: {
      required: true
    },
    imgNumber: {
      required: true
    }
  },

  computed: {
    altText: function () {
      return (
        this.name + ' in ' + this.category + ', image ' + this.imgNumber
      )
    },

    imgPath: function () {
      return (
        'img/' +
        this.category +
        '/' +
        this.name.toLowerCase().replace( / /g, '-' ) +
        '/' +
        this.name.toLowerCase().replace( / /g, '-' ) +
        this.imgNumber +
        '.jpg'
      )
    }
  }
}
</script>

<style lang="css">
</style>
