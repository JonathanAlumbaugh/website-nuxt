<template lang="html">
  <section id="wip">
    <!-- WIP -->
    <t>right now Jonathan is working on</t>
    <tt>Signage for Simmons Mill Pond Wildlife Management Area in Little Compton, RI. The management area is kept up by volunteers who neighbor it. On a visit to the trails, a conversation with some volunteers revealed that visitors often become
      confused, thus the need for better signage was realized.</tt>

    <!-- 01 -->
    <img-one name="simmons mill pond signage" category="design" img-number="02"></img-one>
    <tt>Early sketches of the map on the computer were incongruent with the beautiful natural environment. It was hard to imagine any hard copy fitting in on the wooded trails.</tt>

    <!-- 02 -->
    <img-two name="simmons mill pond signage" category="design" img-number1="04" img-number2="03"></img-two>
    <img-one name="simmons mill pond signage" category="design" img-number="05"></img-one>
    <tt>Using carved wood, locally procured to match the type of wood found at Simmons Mill Pond, fits conceptually and aesthetically. The carved trails will be hand-painted to increase readability and make delineating trails easier.<br/>

      <br/>The signage is currently being prototyped. It is CNC carved using a ShopBot. The design is limited to a minimum of 1/8th inch wide cuts by the smallest bit available for the ShopBot. Using a 60&deg; v-bit, this limitation can be skirted, but the
        surface of the wood must be even.<br/>

      <br/>The wood was so far has been uneven and had to be planed. Some finer elements were lost despite creating a relatively smooth, but not flat surface with the planer. Better quality wood will be procured for the next prototype.<br/>

      <br/>All materials have been paid for by Jonathan in the interest of bettering the trail experience.</tt>

    <!-- 03 -->
    <img-two name="simmons mill pond signage" category="design" img-number1="08" img-number2="09"></img-two>
    <img-one name="simmons mill pond signage" category="design" img-number="01"></img-one>
    
    <home-btn></home-btn>
  </section>
</template>

<script>
import t from '~/components/textH2.vue'
import tt from '~/components/textH3.vue'
import imgOne from '~/components/projectImgA.vue'
import imgTwo from '~/components/projectImgB.vue'
import imgThree from '~/components/projectImgC.vue'
import homeBtn from '~/components/homeBtn.vue'
export default {
  components: {
    t,
    tt,
    imgOne,
    imgTwo,
    imgThree,
    homeBtn
  }
}
</script>
