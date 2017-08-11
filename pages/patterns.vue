<template lang="html">
  <div>
    <!-- 01 -->
    <t>sometimes Jonathan looks so close that he finds
    </t>
    <tt>Patterns, in water drops, glass blocks, and ink blots. Part of being a designer is to collect, take apart, and recombine individual bits into something new, fun, interesting, informative. Patterns are one of the things Jonathan collects.
    </tt>

    <!-- 02 -->
    <img-one name="patterns" category="photography" img-number="01"></img-one>
    <img-two name="patterns" category="photography" img-number1="02" img-number2="03-hq"></img-two>
    <img-one name="patterns" category="photography" img-number="04"></img-one>
    <img-two name="patterns" category="photography" img-number1="05" img-number2="07"></img-two>
    <img-one name="patterns" category="photography" img-number="08"></img-one>
    <img-one name="patterns" category="photography" img-number="06"></img-one>
    <img-one name="patterns" category="photography" img-number="09"></img-one>
  </div>
</template>

<script>
import t from '~/components/textH2.vue'
import tt from '~/components/textH3.vue'
import imgOne from '~/components/projectImgA.vue'
import imgTwo from '~/components/projectImgB.vue'
import imgThree from '~/components/projectImgC.vue'
export default {
  layout: 'projectLayout',
  components: {
    t,
    tt,
    imgOne,
    imgTwo,
    imgThree
  }
}
</script>
