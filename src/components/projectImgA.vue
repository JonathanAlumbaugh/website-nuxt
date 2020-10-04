<template lang="html">
  <div class="box-shadow img-1">
    <a data-fancybox="gallery" :href="img.url">
      <img
        :src="img.url"
        :alt="img.alt"
        class="img-fluid-1 hvrbox-layer-bottom grayscale"
      />
    </a>
  </div>
</template>

<script>
export default {
  name: 'projectImgA',

  props: {
    slice: {
      required: true,
    },
  },

  computed: {
    img() {
      if (this.slice && this.slice.gallery_image)
        return this.slice.gallery_image
      else return { url: null }
    },
  },
}
</script>

<style lang="css"></style>
