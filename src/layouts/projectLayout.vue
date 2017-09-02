<template lang="html">
  <transition appear name="custom-classes-transition" enter-active-class="animated fadeIn" leave-active-class="animated fadeOut">
    <div class="container">
      <main-header/>
      <main-nav/>
      <nuxt/>
      <main-footer/>
    </div>
  </transition>
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
