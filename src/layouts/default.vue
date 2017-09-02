<template lang="html">
  <transition appear name="custom-classes-transition" enter-active-class="animated fadeIn" leave-active-class="animated fadeOut">
    <div class="container">
      <main-header/>
      <main-nav/>
      <padding-shim/>
      <nuxt/>
      <main-footer/>
    </div>
  </transition>
</template>

<script>
import mainHeader from '~/components/mainHeader.vue'
import mainNav from '~/components/mainNav.vue'
import paddingShim from '~/components/paddingShim.vue'
import mainFooter from '~/components/mainFooter.vue'
export default
{
  components:
  {
    mainHeader,
    mainNav,
    paddingShim,
    mainFooter,
  }
}
</script>
