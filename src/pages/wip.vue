<template lang="html">
  <section id="wip">

    <!-- WIP -->
    <t>Right now I'm working on</t>

    <c name="Simmons Mill Pond Signage"
      location="Simmons Mill Pond, Little Compton, RI"
      material="Wood"
      dimension="18x45&quot;"
      date="2017-18"></c>

    <tt>Signage for Simmons Mill Pond Wildlife Management Area in Little Compton, RI. The management area is kept up by volunteers who neighbor it. On a visit to the trails, a conversation with some volunteers revealed that visitors often become confused, so I volunteered to create trailmaps.</tt>


    <!-- 01 -->
    <img-one name="simmons mill pond signage" category="design" img-number="10"></img-one>
    <img-two name="simmons mill pond signage" category="design" img-number1="05" img-number2="04"></img-two>

    <tt>Early sketches of the map on the computer were incongruent with the beautiful natural environment. It was hard to imagine any hard copy fitting in on the wooded trails.</tt>


    <!-- 02 -->
    <img-one name="simmons mill pond signage" category="design" img-number="03"></img-one>
    <img-two name="simmons mill pond signage" category="design" img-number1="08" img-number2="09"></img-two>

    <tt>Carving locally procured wood fits into the environment conceptually and aesthetically. The carved trails will be painted to increase readability and make delineating trails easier.<br />

    <br />The signs were CNC carved using a ShopBot. The design is limited to a minimum of 1/8th inch wide cuts. All materials are my donation for the betterment of the area.</tt>


    <!-- 03 -->
    <img-one name="simmons mill pond signage" category="design" img-number="01"></img-one>

    <tt>Google map view of the area.</tt>


    <!-- 04 -->
    <img-one name="simmons mill pond signage" category="design" img-number="11"></img-one>

    <tt>The fourth draft of the sign. Currently undergoing finishing/painting.</tt>

  </section>
</template>

<script>
import t from '~/components/textH2.vue'
import c from '~/components/projectCaption.vue'
import tt from '~/components/textH3.vue'
import imgOne from '~/components/projectImgA.vue'
import imgTwo from '~/components/projectImgB.vue'
import imgThree from '~/components/projectImgC.vue'
import homeBtn from '~/components/homeBtn.vue'
export default {
  // Head content all up in here
  name: 'wip',
  data: function () {
    return {
      title: 'Work in progress'
    }
  },
  head() {
    return {
      title: this.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Jonathan is making signage for Simmons Mill Pond Wildlife Management Area'
        }
      ]
    }
  },
  // /Head content
  components: {
    t,
    c,
    tt,
    imgOne,
    imgTwo,
    imgThree,
    homeBtn
  }
}
</script>
