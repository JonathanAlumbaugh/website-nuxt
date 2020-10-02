<template lang="html">
  <div id="vue-grid-items" class="isotope-grid grid">
    <div class="grid-sizer"></div>
    <slot></slot>
    <!-- <isotope-item v-for="item in items">{{ name.category }}</isotope-item> -->
  </div>
</template>

<script>
import isotopeItem from '~/components/isotopeItem.vue'
export default {
  name: 'isotopeGrid',
  components: {
    isotopeItem,
  },

  // Ideally, everything in index.vue will eventually
  // propogate this list which will then feed into
  // the v-for property of <isotope-item>
  // data:
  // {
  //   items: [
  //     {
  //       name: 'senior project',
  //       category: 'design'
  //   },
  //     {
  //       name: 'patterns',
  //       category: 'photography'
  //   },
  //     {
  //       name: 'exhibition catalog',
  //       category: 'design'
  //   },
  //     {
  //       name: 'human interest',
  //       category: 'photojournalism'
  //   },
  //     {
  //       name: 'STING vodka branding',
  //       category: 'design'
  //   },
  //     {
  //       name: 'instagram',
  //       category: 'photography'
  //   },
  //     {
  //       name: 'Benoit golf tournament',
  //       category: 'design'
  //   } ]
  // }
}
</script>
