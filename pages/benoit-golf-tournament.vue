<template lang="html">
  <div>
    <t>recently Jonathan overhauled</t>
    <tt>Print collateral for the Matt T. Benoit Memorial Scholarship Fund's 11th annual golf classic. Given free reign to make nearly any change, a clean system that worked across all of the formats required for the tournament was quickly developed.
    </tt>

    <!-- 02 -->
    <img-one name="benoit golf tournament" category="design" img-number="09"></img-one>
    <img-one name="benoit golf tournament" category="design" img-number="10"></img-one>
    <tt>Before and after the lockup was cleaned up.
    </tt>

    <!-- 03 -->
    <img-two name="benoit golf tournament" category="design" img-number1="07" img-number2="01"></img-two>
    <tt>Simple, clean back and front covers developed for the program &#40;a simple 8.5x11 booklet&#41; that incorporated subtle color.
    </tt>

    <!-- 04 -->
    <img-two name="benoit golf tournament" category="design" img-number1="06" img-number2="02"></img-two>
    <img-one name="benoit golf tournament" category="design" img-number="03"></img-one>
    <img-two name="benoit golf tournament" category="design" img-number1="04" img-number2="05"></img-two>
    <tt>The system flowed from the design of the program to the tee signs, sponsor and corporate sponsor signs, and thank you note for volunteers.</tt>

    <!-- 05 -->
    <img-one name="benoit golf tournament" category="design" img-number="08"></img-one>
    <tt>A 24x36 inch corporate sponsor sign that was printed on coroplast.
    </tt>

    <!-- 06 -->
    <img-two name="benoit golf tournament" category="design" img-number1="11" img-number2="12"></img-two>
    <tt>A list of sponsors was kept in an Excel doc, making it easy to set up an InDesign file for a datamerge, which resulted in about 40 different sponsor signs in a matter of seconds with minimal editing afterwards.<br/>

      <br/>The client required the printed files in time for the event and factoring in print time, the amount of time to design came out to a day. All materials were designed, proofed, and sent to print on time.
    </tt>
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
