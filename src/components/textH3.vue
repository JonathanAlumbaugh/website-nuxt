<template lang="html">
  <!-- <transition appear name="custom-classes-transition" enter-active-class="animated fadeInRight" leave-active-class="animated fadeOutLeft"> -->
  <div :class="`tt box-shadow`" v-html="$prismic.asHtml(slice.primary.text)" />
  <!-- </transition> -->
</template>

<script>
// import { Fragment } from 'vue-fragment'

export default {
  name: 'TextH3',

  // components: {
  //   Fragment,
  // },

  props: {
    slice: {
      required: false,
    },
  },
}
</script>
