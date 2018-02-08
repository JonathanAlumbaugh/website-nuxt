<template lang="html">
  <section id="sting-vodka-branding">

    <!-- 01 -->
    <t>Fake alcohol brand + packaging design = fun</t>

    <c name="Brand &amp; package"
      location="University of Massachusetts, Dartmouth, MA"
      material="Paper"
      dimension="3 x 3 x 10.25&quot;"
      date="2016"></c>

    <tt>Tasked with creating a product which incorporated bugs and/or bug byproducts, I created a fake vodka label to ship inventory for the fictional company &ldquo;Insecta.&rdquo;</tt>


    <!-- 02 -->
    <img-one name="sting vodka branding" category="design" img-number="01"></img-one>

    <tt>The vodka hypothetically included a scorpion at the bottom of the bottle, a la mezcal. The core value of the brand was cleanness. The brand promised a refined, yet bold drinking experience, in a package that would appeal to college-age consumers.</tt>


    <!-- 03 -->
    <img-one name="sting vodka branding" category="design" img-number="02"></img-one>
    <img-two name="sting vodka branding" category="design" img-number1="03" img-number2="04"></img-two>

    <tt>Boxing the product recalled the quality of other &ldquo;high-end&rdquo; brands, such as Patron&rsquo;s XO Cafe line.</tt>


    <!-- 04 -->
    <img-one name="sting vodka branding" category="design" img-number="05"></img-one>
    <img-two name="sting vodka branding" category="design" img-number1="08" img-number2="09"></img-two>

    <tt>The packaging was cut and assembled by hand. The interior of the package was also printed with a pattern associated to the flavor.<br />

    <br />It was so successful in its appeal to the college demographic that the original package was stolen just before it was turned in. I remade the package and now keep it someplace safe.</tt>


    <!-- 06 -->
    <img-one name="sting vodka branding" category="design" img-number="07"></img-one>

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
  name: 'sting-vodka-branding',
  data: function () {
    return {
      title: 'STING vodka branding'
    }
  },
  head() {
    return {
      title: this.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'A fake vodka brand called STING, complete with logo and packaging'
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
