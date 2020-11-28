<template lang="html">
  <div v-if="img1 && img2" class="img-2">
    <div class="box-shadow">
      <a data-fancybox="gallery" :href="img1.url">
        <img
          :src="img1.url"
          :alt="img1.alt"
          class="img-fluid-2 hvrbox-layer-bottom grayscale"
        />
      </a>
    </div>
    <div class="box-shadow">
      <a data-fancybox="gallery" :href="img2.url">
        <img
          :src="img2.url"
          :alt="img2.alt"
          class="img-fluid-2 hvrbox-layer-bottom grayscale"
        />
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProjectImgB',

  props: {
    slice: {
      required: true,
    },
  },

  computed: {
    img1() {
      if (this.slice[0] && this.slice[0].gallery_image)
        return this.slice[0].gallery_image
      else return { url: null }
    },

    img2() {
      if (this.slice[1] && this.slice[1].gallery_image)
        return this.slice[1].gallery_image
      else return { url: null }
    },
  },
}
</script>

<style lang="css"></style>
