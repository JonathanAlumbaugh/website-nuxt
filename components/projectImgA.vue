<template lang="html">
  <div class="row">
    <div class="offset-md-1 col-sm-9 box-shadow mb-40">
      <a data-fancybox="gallery" :href="imgPath">
        <img :src="imgPath" :alt="altText" class="img-fluid hvrbox-layer_bottom grayscale">
      </a>
    </div>
  </div>
</template>

<script>
export default {
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
