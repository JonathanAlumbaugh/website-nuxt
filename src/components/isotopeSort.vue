<template>
<t id="filters" class="isotope-sort">
  <slot></slot>
</t>
</template>

<script>
import t from '~/components/textH2.vue'

export default {
  name: 'isotopeSort',
  components: {
    t
  }
}
</script>
