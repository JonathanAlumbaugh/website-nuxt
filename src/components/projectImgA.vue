<template lang="html">
  <div class="box-shadow img-1">
    <a
      data-fancybox="gallery"
      :href="img.url.replace('auto=compress,format', 'auto=format')"
    >
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
      // Handles slicesBlock implementation
      if (this.slice && this.slice.items && this.slice.items[0])
        return this.slice.items[0].gallery_image

      // Handles featuredImg implementation
      if (this.slice && this.slice.url) return this.slice
      else return { url: null }
    },
  },
}
</script>

<style lang="css"></style>
