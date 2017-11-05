<template>
<!-- <affix relative-element-selector="#isotope-grid"> -->
  <t id="filters" class="isotope-sort">
    <slot></slot>
  </t>
<!-- </affix> -->
</template>

<script>
// import affix from 'vue-affix'
import t from '~/components/textH2.vue'

export default
{
  name: 'isotopeSort',
  components:
  {
    // affix,
    t
  }
}
</script>
