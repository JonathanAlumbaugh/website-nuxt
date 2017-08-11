<template>
<div class="container">
  <t v-if="error.statusCode === 404">Jonathan was fiddling around and</t>
  <tt v-if="error.statusCode === 404">He must have broken something with his website. He's sorry about that. Would you drop him a line and let him know?</tt>
  <tt v-else>That's weird, how'd you get here? This page shows when the browser thinks there's supposed to be a 404 but there actually isn't.</tt>
  <home/>
</div>
</template>

<script>
import t from '~/components/textH2.vue'
import tt from '~/components/textH3.vue'
import home from '~/components/homeBtn.vue'
export default
{
  props: [ 'error' ],
  components:
  {
    t,
    tt,
    home
  }
}
</script>
