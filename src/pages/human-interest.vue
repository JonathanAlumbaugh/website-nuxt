<template lang="html">
  <section id="human-interest">

    <!-- 01 -->
    <t>For four years I photojournaled</t>

    <c name="Photography"
      location="the Chronicle, Willimantic, CT"
      material="Newsprint"
      dimension="Various sizes"
      date="2012-16"></c>

    <tt>From front page to back page and printed in color and black and white, these photos reached subscribers weekly for years.</tt>


    <!-- 02 -->
    <img-one name="human interest" category="photojournalism" img-number="05"></img-one>

    <tt>Firefighters fight a propane fire during a drill. The firefighters approach the leak slowly while widening the spray, and finally, would reach into the flames and turn off the propane at the source.</tt>


    <!-- 03 -->
    <img-one name="human interest" category="photojournalism" img-number="42"></img-one>
    <img-two name="human interest" category="photojournalism" img-number1="40" img-number2="41"></img-two>

    <tt>Jenny and Mike play ice hockey at Mansfield Hollow, drawn out by a reprieve in the weather.</tt>


    <!-- 04 -->
    <img-one name="human interest" category="photojournalism" img-number="13"></img-one>

    <tt>Three year old Evan's musical genius was lost on his mother, Kristen, at Coventry Fest while waiting for the fireworks.</tt>


      <!-- 05 -->
    <img-one name="human interest" category="photojournalism" img-number="19"></img-one>

    <tt>Five-year-old Naomi chases bubbles with her little brother, three-year-old Ikker at Jilson Square. The two were accompanied by their parents, Jose and Diana, who took care of the bubble blowing.</tt>


    <!-- 05 -->
    <img-one name="human interest" category="photojournalism" img-number="38"></img-one>

    <tt>Bev York serves food during the "Things That Go Bump in the Night" tour at the Nathan Hale Homestead. Guests were given candles and received a tour through the house in the evening, followed by a small meal.</tt>


    <!-- 07 -->
    <img-one name="human interest" category="photojournalism" img-number="37"></img-one>

  </section>
</template>

<script>
import t from '~/components/textH2.vue'
import c from '~/components/projectCaption.vue'
import tt from '~/components/textH3.vue'
import imgOne from '~/components/projectImgA.vue'
import imgTwo from '~/components/projectImgB.vue'
import imgThree from '~/components/projectImgC.vue'
export default {
  // Head content all up in here
  name: 'human-interest',
  data: function () {
    return {
      title: 'Human interest'
    }
  },
  head() {
    return {
      title: this.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Human interest photos taken for the Chronicle newspaper'
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
    imgThree
  }
}
</script>
