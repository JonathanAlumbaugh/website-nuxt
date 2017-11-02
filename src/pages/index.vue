<template lang="html">
  <!-- Add v-bar to div when you finally get that figured out -->
  <section id="home">
    <isotope-sort>I'm Jonathan, a
      <button class="btn designer" data-filter=".design">graphic designer,</button>
      <button class="btn photographer" data-filter=".photography">
          photographer,</button>
      <button class="btn photojournalist" data-filter=".photojournalism">
          photojournalist,</button>
          competitive fencer, and professional referee based in Massachussets
      <button class="btn" data-filter="*">&#9679;</button></isotope-sort>
    <div class='isotope-grid grid'>
      <div class="grid-sizer"></div>
      <isotope-item name="senior project" category="design"></isotope-item>
      <isotope-item name="textile patterns" category="design"></isotope-item>
      <isotope-item name="STING vodka branding" category="design"></isotope-item>
      <isotope-item name="exhibition catalog" category="design"></isotope-item>
      <isotope-item name="patterns" category="photography"></isotope-item>
      <isotope-item name="human interest" category="photojournalism"></isotope-item>
    </div>
    <!--
    <isotope-item name="VML Hub Branding" category="design"></isotope-item>
      <isotope-item name="Benoit golf tournament" category="design"></isotope-item>
      <isotope-item name="this-website" category="design"></isotope-item>
      <isotope-item name="instagram" category="photography"></isotope-item>
      <isotope-item name="mental-health-branding" category="design"></isotope-item>
      <isotope-item name="3d-keychain" category="multimedia"></isotope-item>
      <isotope-item name="multimedia fun" category="multimedia"></isotope-item>
      <isotope-item name="film" category="photography"></isotope-item>
      <isotope-item name="more photojournalism" category="photojournalism"></isotope-item>
     -->
    <t>right now I'm working on</t>
    <main-wip name="Simmons Mill Pond signage" category="design"></main-wip>
    <t>and in my spare time I like to</t>
    <tt>play with this website. Since successfully implementing a server-side rendered build of Vue.js, I've been working on implementing CSS grids, ditching Bootstrap, refining the copy, and improving the content on this site.</tt>
    <script src="/js/isotope-init.js"></script>
    <script src="/js/isotope.pkgd.js"></script>
  </section>
</template>

<script>
import t from '~/components/textH2.vue'
import tt from '~/components/textH3.vue'
import isotopeGrid from '~/components/isotopeGrid.vue'
import isotopeSort from '~/components/isotopeSort.vue'
import isotopeItem from '~/components/isotopeItem.vue'
import mainWip from '~/components/mainWip.vue'
export default {
  // Head content all up in here
  name: 'home',
  data: function () {
    return {
      title: 'Jonathan.com was taken'
    }
  },
  head() {
    return {
      title: this.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Graphic designer. Photographer/photojournalist. Competitive fencer. Professional referee.'
        }
      ]
    }
  },
  // /Head content
  components: {
    t,
    tt,
    isotopeGrid,
    isotopeSort,
    isotopeItem,
    mainWip
  },
}
</script>
