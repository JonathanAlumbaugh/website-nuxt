<template lang="html">
  <transition
    appear
    name="custom-classes-transition"
    enter-active-class="animated fadeIn"
    leave-active-class="animated fadeOut"
  >
    <!-- Not sure about this...  -->
    <!-- <div class="container"> -->
    <!-- <main-header/>
    <main-nav/> -->
    <!-- ...through this. -->
    <section class="error">
      <t v-if="error.statusCode === 404">I was fiddling around and</t>

      <tt v-if="error.statusCode === 404">
        I must have broken something here.
        <br />
        Would you
        <a @click="show"><span class="error-contact">drop me a line</span></a>
        and let me know?
      </tt>

      <tt v-else>
        this {{ error.statusCode }} error normally only shows if you're me and
        I'm working on the site right now.
      </tt>

      <tt style="font-size: 1.5em;">
        <pre>{{ error.message }}</pre>
        <pre>{{ error.locations }}</pre>
      </tt>
    </section>
    <!-- <main-footer/> -->
    <!-- </div> -->
  </transition>
</template>

<script>
// import mainHeader from '~/components/mainHeader.vue'
// import mainNav from '~/components/mainNav.vue'
// import mainFooter from '~/components/mainFooter.vue'
import t from '~/components/textH2.vue'
import tt from '~/components/tt.vue'
export default {
  props: ['error'],
  methods: {
    show() {
      this.$modal.show('contact-modal')
    },
  },
  components: {
    // mainHeader,
    // mainNav,
    // mainFooter,
    t,
    tt,
  },
}
</script>
