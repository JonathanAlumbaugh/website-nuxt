<template>
<div class="container">
  <t v-if="error.statusCode === 404">Jonathan was fiddling around and</t>
  <tt v-if="error.statusCode === 404">He must have broken something with his website. He's sorry about that.
    <br /> Would you <a @click="show"><span class="error-contact">drop him a line</span></a> and let him know?</tt>
  <tt v-else>How'd you get here? This probably shouldn't happen unless you're Jonathan and you're working on this site right now.</tt>
  <home/>
</div>
</template>

<script>
import t from '~/components/textH2.vue'
import tt from '~/components/textH3.vue'
import home from '~/components/homeBtn.vue'
export default {
  props: [ 'error' ],
  methods: {
    show() {
      this.$modal.show( 'contact-modal' );
    }
  },
  components: {
    t,
    tt,
    home
  }
}
</script>
