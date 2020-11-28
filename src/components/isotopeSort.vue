<template>
  <!-- <affix relative-element-selector="#isotope-grid"> -->
  <t id="filters" class="isotope-sort">
    <slot />
  </t>
  <!-- </affix> -->
</template>

<script>
// import affix from 'vue-affix'
import t from '~/components/textH2.vue'

export default {
  name: 'IsotopeSort',
  components: {
    // affix,
    t,
  },
}
</script>
