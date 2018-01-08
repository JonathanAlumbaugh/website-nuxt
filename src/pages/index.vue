<template lang="html">
  <section id="home">

    <!-- TODO: Implement vue-affix here -->
    <!-- Isotope sort -->
    <isotope-sort class="home-int">I'm a
      <button class="btn designer" data-filter=".design">designer,</button>
      <button class="btn photographer" data-filter=".photography">
          photographer,</button>
      <button class="btn photojournalist" data-filter=".photojournalism">
          photojournalist,</button>
          competitive fencer, and professional referee based in Massachussets
      <button class="btn" data-filter="*">&#9679;</button>
    </isotope-sort>


    <!-- Isotope grid -->
    <div id="isotope-grid" class='home-body isotope-grid grid'>
      <div class="grid-sizer"></div>
      <isotope-item name="senior project" category="design"></isotope-item>
      <isotope-item name="film" category="photography"></isotope-item>
      <isotope-item name="STING vodka branding" category="design"></isotope-item>
      <isotope-item name="exhibition catalog" category="design"></isotope-item>
      <isotope-item name="VML Hub Branding" category="design"></isotope-item>
      <isotope-item name="textile patterns" category="design"></isotope-item>
      <isotope-item name="patterns" category="photography"></isotope-item>
      <isotope-item name="human interest" category="photojournalism"></isotope-item>
    </div>

    <!-- TODO: Add VML Hub Branding -->
    <!-- TODO: Add 3D keychain -->
    <!-- TODO: Add film photos -->
    <!--
      <isotope-item name="Benoit golf tournament" category="design"></isotope-item>
      <isotope-item name="this-website" category="design"></isotope-item>
      <isotope-item name="instagram" category="photography"></isotope-item>
      <isotope-item name="mental-health-branding" category="design"></isotope-item>
      <isotope-item name="3d-keychain" category="multimedia"></isotope-item>
      <isotope-item name="multimedia fun" category="multimedia"></isotope-item>
      <isotope-item name="film" category="photography"></isotope-item>
      <isotope-item name="more photojournalism" category="photojournalism"></isotope-item>
     -->


     <!-- WIP -->
    <t class="home-int">right now I'm working on</t>
    <main-wip class="home-body" name="Simmons Mill Pond signage" category="design"></main-wip>


    <!-- Extra -->
    <t class="home-int">I've worked on lots of projects</t>
    <tt class="home-body">Including web design and development, branding, packaging, signage, textile design, and more. Talk to me about your project, or anything cool.</tt>


    <!-- Scripts -->
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
      title: 'Jonathan'
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
