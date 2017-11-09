<template lang="html">
  <section id="patterns">

    <!-- 01 -->
    <t>sometimes I look so close that I find</t>

    <tt>Patterns, in water drops, glass blocks, and ink blots. Part of being a designer is collecting, deconstructing, and recombining individual bits into something new, fun, interesting, informative. Patterns are one of the things I collect.</tt>


    <!-- 02 -->
    <img-one name="patterns" category="photography" img-number="01"></img-one>
    <img-two name="patterns" category="photography" img-number1="02" img-number2="03-hq"></img-two>

    <img-one name="patterns" category="photography" img-number="05"></img-one>
    <img-two name="patterns" category="photography" img-number1="04" img-number2="07"></img-two>

    <img-one name="patterns" category="photography" img-number="09"></img-one>
    <img-two name="patterns" category="photography" img-number1="08" img-number2="06"></img-two>

    <!-- TODO: Fix spacing on bottom. -->

  </section>
</template>

<script>
import t from '~/components/textH2.vue'
import tt from '~/components/textH3.vue'
import imgOne from '~/components/projectImgA.vue'
import imgTwo from '~/components/projectImgB.vue'
import imgThree from '~/components/projectImgC.vue'
import homeBtn from '~/components/homeBtn.vue'
export default
{
  // Head content all up in here
  name: 'patterns',
  data: function ()
  {
    return {
      title: 'Patterns'
    }
  },
  head()
  {
    return {
      title: this.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Jonathan takes pictures of patterns, in water drops, glass blocks, and ink blots'
        }
      ]
    }
  },
  // /Head content
  components:
  {
    t,
    tt,
    imgOne,
    imgTwo,
    imgThree,
    homeBtn
  }
}
</script>
