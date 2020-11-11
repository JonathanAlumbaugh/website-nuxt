<template>
  <fragment>
    <!-- Slice section template -->
    <template v-for="(slice, index) in slices">
      <!-- Text slice component -->
      <template v-if="slice.slice_type === 'text'">
        <text-slice :key="'slice-' + index" :slice="slice" />
      </template>

      <!-- Image Gallery slice component -->
      <template v-else-if="slice.slice_type === 'image_gallery'">
        <template v-if="slice.items.length === 1">
          <image-gallery-1 :slice="slice" :key="'slice-' + index" />
        </template>

        <template v-else-if="slice.items.length === 3">
          <div class="img-gallery__wrapper" :key="`slice-${index}`">
            <image-gallery-1
              :slice="slice"
              :key="'slice-' + index + '-gallery-single'"
            />

            <image-gallery-2
              :slice="slice.items.slice(1)"
              :key="'slice-' + index + '-gallery-double'"
            />
          </div>
        </template>
      </template>

      <!-- Quote slice component -->
      <!-- <template v-else-if="slice.slice_type === 'quote'">
        <quote-slice :slice="slice" />
      </template> -->

      <!-- Full Width Image slice component -->
      <!-- <template v-else-if="slice.slice_type === 'full_width_image'">
        <full-width-image :slice="slice" />
      </template> -->

      <!-- Image Highlight slice component -->
      <!-- <template v-else-if="slice.slice_type === 'image_highlight'">
        <image-highlight :slice="slice" />
      </template> -->
    </template>
  </fragment>
</template>

<script>
import { Fragment } from 'vue-fragment'
// Imports for all slices
const TextSlice = () => import('~/components/textH3.vue')
const ImageGallery1 = () => import('~/components/projectImgA.vue')
const ImageGallery2 = () => import('~/components/projectImgB.vue')
const ImageGallery3 = () => import('~/components/projectImgC.vue')
// const QuoteSlice = () => import('~/components/slices/QuoteSlice.vue')
// const FullWidthImage = () => import('~/components/slices/FullWidthImage.vue')
// const ImageHighlight = () => import('~/components/slices/ImageHighlight.vue')

export default {
  props: {
    slices: {
      required: true,
    },
  },

  name: 'slices-block',

  components: {
    Fragment,
    TextSlice,
    ImageGallery1,
    ImageGallery2,
    ImageGallery3,
    // QuoteSlice,
    // FullWidthImage,
    // ImageHighlight,
  },
}
</script>

<style lang="scss" scoped>
.tt:first-of-type {
  grid-row-start: 1;

  @media only screen and (max-width: 600px) {
    grid-row-start: 2;
  }

  @media only screen and (min-width: 600px) and (max-width: 900px) {
    grid-row-start: 2;
  }

  @media only screen and (min-width: 900px) and (max-width: 1200px) {
    grid-row-start: 2;
  }
}

.img-gallery__wrapper {
  grid-column: 2 / 5;
  display: grid;
  grid-template-columns: 2fr 2fr 0.5fr;
  grid-template-areas: 'main main img';

  @media only screen and (max-width: 900px) {
    grid-column: 1 / 5;

    .img-1 {
      grid-area: 'main';
    }

    .img-2 {
      display: flex;
    }
  }

  @media only screen and (max-width: 900px) {
    grid-column: 2 / 5;
    grid-template-areas:
      'main main'
      'img img';
  }

  @media only screen and (min-width: 901px) {
    grid-column: 2 / 7;
  }
}
</style>
