<template>
  <fragment>
    <!-- Slice section template -->
    <template v-for="(slice, index) in slices">
      <!-- Text slice component -->
      <template v-if="slice.slice_type === 'text'">
        <text-slice :key="'slice-' + index" :slice="slice"></text-slice>
      </template>

      <!-- Image Gallery slice component -->
      <template v-else-if="slice.slice_type === 'image_gallery'">
        <template v-if="slice.items.length === 1">
          <image-gallery-1 :slice="slice" :key="'slice-' + index" />
        </template>

        <template v-else-if="slice.items.length === 2">
          <image-gallery-2 :slice="slice" :key="'slice-' + index" />
        </template>

        <template v-else-if="slice.items.length === 3">
          <image-gallery-1
            :slice="slice.items[0]"
            :key="'slice-' + index + 2"
          />

          <image-gallery-2
            :slice="slice.items.slice(1)"
            :key="'slice-' + index + 3"
          />
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
