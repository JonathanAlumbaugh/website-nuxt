<template lang="html">
  <div class="container">
    <main-header/>
    <main-nav/>
    <nuxt/>
    <main-footer/>
  </div>
</template>

<script>
import mainHeader from '~/components/mainHeader.vue'
import mainNav from '~/components/mainNav.vue'
import mainFooter from '~/components/mainFooter.vue'
export default {
  components: {
    mainHeader,
    mainNav,
    mainFooter,
  }
}
</script>
