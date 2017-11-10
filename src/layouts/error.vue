<template lang="html">
  <transition appear name="custom-classes-transition" enter-active-class="animated fadeIn" leave-active-class="animated fadeOut">
    <section>

      <t v-if="error.statusCode === 404">I was fiddling around and</t>

      <tt v-if="error.statusCode === 404">I must have broken something here.<br />
      Would you <a @click="show"><span class="error-contact">drop me a line</span></a> and let me know?</tt>

      <tt v-else>How'd you get here? This probably shouldn't happen unless you're Jonathan and you're working on this site right now.</tt>

    </section>
  </transition>
</template>

<script>
import t from '~/components/textH2.vue'
import tt from '~/components/textH3.vue'
export default
{
  props: [ 'error' ],
  methods:
  {
    show()
    {
      this.$modal.show( 'contact-modal' );
    }
  },
  components:
  {
    t,
    tt
  }
}
</script>
