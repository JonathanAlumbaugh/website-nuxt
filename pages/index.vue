<template lang="html">
  <!-- Add v-bar to div when you finally get that figured out -->
  <div>
    <t>Jonathan is</t>
    <tt>A
      <span class="designer">graphic design student</span>,
      <span class="photographer">photographer</span>, &amp;
      <span class="photojournalist">photojournalist</span>, competitive fencer, &amp; professional referee currently located in Massachusetts. He's interested in the ways technology and community shape our lives.</tt>
    <isotope-sort/>
    <isotope-grid>
      <isotope-item name="senior project" category="design"></isotope-item>
      <isotope-item name="patterns" category="photography"></isotope-item>
      <isotope-item name="exhibition catalog" category="design"></isotope-item>
      <isotope-item name="human interest" category="photojournalism"></isotope-item>
      <isotope-item name="STING vodka branding" category="design"></isotope-item>
      <isotope-item name="instagram" category="photography"></isotope-item>
      <isotope-item name="Benoit golf tournament" category="design"></isotope-item>
    </isotope-grid>
    <!-- <isotope-item name="multimedia fun" category="multimedia"></isotope-item>
<isotope-item name="film" category="photography"></isotope-item>
<isotope-item name="black and white" category="photography"></isotope-item>
<isotope-item name="more photojournalism" category="photojournalism"></isotope-item> -->
    <t>right now Jonathan is working on</t>
    <main-wip name="Simmons Mill Pond signage" category="design"></main-wip>
    <t>and in his spare time he's</t>
    <tt>Learning Vue.js and rebuilding this website with it. He plans on learning and implementing Nuxt.js, and maybe React.js after that.</tt>
  </div>
</template>

<script>
import t from '~/components/textH2.vue'
import tt from '~/components/textH3.vue'
import isotopeGrid from '~/components/isotopeGrid.vue'
import isotopeSort from '~/components/isotopeSort.vue'
import isotopeItem from '~/components/isotopeItem.vue'
import mainWip from '~/components/mainWip.vue'
export default
{
  css: [ '~/assets/css/isotope.css' ],
  components:
  {
    t,
    tt,
    isotopeGrid,
    isotopeSort,
    isotopeItem,
    mainWip
  }
}
</script>
