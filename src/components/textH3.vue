<template lang="html">
  <!-- <transition appear name="custom-classes-transition" enter-active-class="animated fadeInRight" leave-active-class="animated fadeOutLeft"> -->
  <div
    :class="`tt box-shadow`"
    v-html="$prismic.asHtml(slice.primary.text)"
  ></div>
  <!-- </transition> -->
</template>

<script>
import { Fragment } from 'vue-fragment'

export default {
  name: 'textH3',

  props: {
    slice: {
      required: false,
    },
  },

  components: {
    Fragment,
  },
}
</script>
