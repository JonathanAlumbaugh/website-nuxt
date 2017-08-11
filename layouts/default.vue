<template lang="html">
  <div class="container">
    <main-header/>
    <main-nav/>
    <nuxt/>
    <main-footer/>
    <main-contact/>
  </div>
</template>

<script>
import mainHeader from '~/components/mainHeader.vue'
import mainNav from '~/components/mainNav.vue'
import mainFooter from '~/components/mainFooter.vue'
import mainContact from '~/components/mainContact.vue'
export default {
  components: {
    mainHeader,
    mainNav,
    mainFooter,
    mainContact
  }
}
</script>
