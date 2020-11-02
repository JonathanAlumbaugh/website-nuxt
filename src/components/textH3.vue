<template lang="html">
  <!-- <transition appear name="custom-classes-transition" enter-active-class="animated fadeInRight" leave-active-class="animated fadeOutLeft"> -->
  <fragment>
    <template v-if="$slots.default">
      <p class="tt box-shadow">
        <slot></slot>
      </p>
    </template>

    <template v-else-if="slice">
      <div
        class="tt box-shadow"
        v-html="$prismic.asHtml(slice.primary.text)"
      ></div>
    </template>
  </fragment>
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
