<template lang="html">
  <transition appear name="custom-classes-transition" enter-active-class="animated-long fadeIn" leave-active-class="animated fadeOut">
    <nuxt-link v-sticky="stickyConfig" class="ghost-header-position" to="/">
      <h1 class="main-header">
        Jonathan<br />
        Alumbaugh
      </h1>
    </nuxt-link>
  </transition>
</template>

<script>
import VueSticky from 'vue-sticky'
export default {
  name: 'ghostHeader',
  directives: {
    'sticky': VueSticky
  },
  data() {
    return {
      // !-------------------------------------------------!
      // Set scroll position to nothing to begin with
      // !-------------------------------------------------!
      scrollPosition: null,
      // !-------------------------------------------------!
      classPicker: null,
      stickyConfig: {
        zIndex: 101,
        stickyTop: 0
      },
    }
  },
  methods: {
    // !-------------------------------------------------!
    // Update scroll position once there's been a change
    // !-------------------------------------------------!
    updateScroll() {
      this.scrollPosition = window.scrollY
    }
    // !-------------------------------------------------!
  },
  // !-------------------------------------------------!
  // Update scroll position when the page is mounted
  // !-------------------------------------------------!
  mounted() {
    window.addEventListener( 'scroll', this.updateScroll );
  },
  // !-------------------------------------------------!
  // Destroy listener on page destroy
  // !-------------------------------------------------!
  destroy() {
    window.removeEventListener( 'scroll', this.updateScroll )
  }
}
</script>
