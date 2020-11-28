<template lang="html">
  <div :class="'img-' + className">
    <div v-for="(image, i) in slice.items" :key="i" class="box-shadow">
      <a data-fancybox="gallery" :href="image.gallery_image.url">
        <img
          :src="image.gallery_image.url"
          :alt="image.gallery_image.alt"
          :class="
            'img-fluid-' + slice.items.length + ' hvrbox-layer-bottom grayscale'
          "
        />
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProjectImgC',

  props: {
    slice: {
      required: true,
    },
  },

  computed: {
    className() {
      return this.slice.items.length
    },
  },
}
</script>

<style lang="css"></style>
