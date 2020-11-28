<template lang="html">
  <transition
    appear
    name="custom-classes-transition"
    enter-active-class="animated fadeIn"
    leave-active-class="animated fadeOut"
  >
    <div class="container">
      <main-header />
      <main-nav />
      <nuxt />
      <main-footer />
    </div>
  </transition>
</template>

<script>
import mainNav from '../components/projectNav'
import mainHeader from '~/components/mainHeader.vue'
import mainFooter from '~/components/mainFooter.vue'

export default {
  components: {
    mainNav,
    mainHeader,
    mainFooter,
  },
}
</script>
