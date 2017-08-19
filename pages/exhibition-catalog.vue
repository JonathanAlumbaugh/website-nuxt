<template lang="html">
  <section id="exhibition-catalog">
    <!-- 01 -->
    <t>for an art history exhibition Jonathan designed
    </t>
    <tt>An exhibition catalog is created to supplement the &#40;often&#41; abridged information found in an exhibit. The exhibition catalog consisted of 11 essays by class-members of ARH 400 that delved into the artist/influencer's lives.</tt>

    <!-- 02 -->
    <img-one name="exhibition catalog" category="design" img-number="01"></img-one>
    <tt>Due to class budget, the catalog was limited to 28 pages, including front and back. The catalog was to be printed on 100% post-consumer waste paper.</tt>

    <!-- 03 -->
    <img-one name="exhibition catalog" category="design" img-number="09"></img-one>
    <tt>It is important to place historical figures in context. By placing a historical figure the reader gains a better understanding of the figures' nuanced and lasting influence on history. The table of contents was the one place which all artists
      would be seen together. It was the best chance to give historical context to each artists' life.</tt>

    <!-- 04 -->
    <img-two name="exhibition catalog" category="design" img-number1="10" img-number2="04"></img-two>
    <img-two name="exhibition catalog" category="design" img-number1="14" img-number2="13"></img-two>
    <tt>Three layouts were developed to accomodate essays of different lengths: two essays to a spread, with a small photo; one essay to a spread with a full bleed opposite; and one essay to a spread with references and a 1/3 page photo opposite. If you
      are interested in the PDF, please hit the contact button.</tt>

    <!-- 05 -->
    <img-one name="exhibition catalog" category="design" img-number="07"></img-one>
    
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
