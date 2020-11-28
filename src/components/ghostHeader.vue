<template lang="html">
  <transition
    appear
    name="custom-classes-transition"
    enter-active-class="animated-long fadeIn"
    leave-active-class="animated fadeOut"
  >
    <nuxt-link class="ghost-header-position" to="/">
      <h1 class="main-header">
        Jonathan
        <br />
        Alumbaugh
      </h1>
    </nuxt-link>
  </transition>
</template>

<script>
export default {
  name: 'GhostHeader',

  data() {
    return {
      scrollPosition: null, // Set scroll position to nothing to begin with
      classPicker: null,
      stickyConfig: {
        zIndex: 101,
        stickyTop: 0,
      },
    }
  },
  mounted() {
    // Update scroll position when the page is mounted
    window.addEventListener('scroll', this.updateScroll)
  },

  methods: {
    updateScroll() {
      // Update scroll position once there's been a change
      this.scrollPosition = window.scrollY
    },
  },

  destroy() {
    // Destroy listener on page destroy
    window.removeEventListener('scroll', this.updateScroll)
  },
}
</script>
