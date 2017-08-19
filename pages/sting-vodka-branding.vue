<template lang="html">
  <section id="sting-vodka-branding">
    <!-- 01 -->
    <t>for a branding project Jonathan created</t>
    <tt>A vodka brand called STING and developed a logo and packaging for the product. The project was to create a product which incorporated bugs and/or bug byproducts to ship inventory for the fictional company Insecta.</tt>

    <!-- 02 -->
    <img-one name="sting vodka branding" category="design" img-number="01"></img-one>
    <tt>The vodka would include a scorpion at the bottom of the bottle, a la mezcal. The core value of the brand was decided upon: cleanliness, in taste and in design. The brand promised to deliver a refined, yet aggressive drinking experience, in a
      package that would appeal to college-age consumers.</tt>

    <!-- 03 -->
    <img-one name="sting vodka branding" category="design" img-number="02"></img-one>
    <tt>Instead of designing a bottle, a box was chosen because it recalled higher-end liquors, such as Patron's XO Cafe line, which contains a bottle, boxed and wrapped in tissue paper.</tt>

    <!-- 04 -->
    <img-two name="sting vodka branding" category="design" img-number1="03" img-number2="04"></img-two>
    <img-two name="sting vodka branding" category="design" img-number1="05" img-number2="06"></img-two>
    <tt>The packaging was cut and assembled by hand. It was so successful in its appeal to the college demographic that the original package was stolen just before it was turned in. The package was made again to turn in and is now kept under close watch.</tt>

    <!-- 05 -->
    <img-two name="sting vodka branding" category="design" img-number1="08" img-number2="09"></img-two>
    <tt>The exterior and interior of the package. The interior of the package was also printed with the pattern of the associated fruit flavor, in this case, lemon. Dielines were printed on the inside of the package to ensure accurate cutting and scoring.</tt>

    <!-- 06 -->
    <img-one name="sting vodka branding" category="design" img-number="07"></img-one>

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
