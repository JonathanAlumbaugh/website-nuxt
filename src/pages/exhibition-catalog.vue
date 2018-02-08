<template lang="html">
  <section id="exhibition-catalog">

    <!-- 01 -->
    <t>Exhibition catalogs supplement the info in an exhibit</t>

    <c name="Making Her Mark Catalog"
      location="University of Massachusetts, Dartmouth, MA"
      material="Paper"
      dimension="9 x 11&quot;"
      date="2017"></c>

    <tt>This catalog supplemented the information in an exhibition titled &ldquo;Making Her Mark.&rdquo; I created this exhibition catalog with <a href="http://meaghankoneill.com/"><span>Meaghan O&rsquo;Neil</span></a> and <a href="https://www.amandacward.com/"><span>Amanda Ward</span></a>. The catalog contained 11 essays.</tt>


    <!-- 02 -->
    <img-one name="exhibition catalog" category="design" img-number="01"></img-one>
    <img-two name="exhibition catalog" category="design" img-number1="10" img-number2="04"></img-two>

    <tt>Due to exhibition budget, the catalog was 28 pages. Three basic layouts accomodate essays of different lengths.</tt>


    <!-- 03 -->
    <img-one name="exhibition catalog" category="design" img-number="09"></img-one>
    <img-two name="exhibition catalog" category="design" img-number1="14" img-number2="13"></img-two>

    <tt>The table of contents was designed to give context to artists&rsquo; lives using well known historical events</tt>

    <!-- 05 -->
    <img-one name="exhibition catalog" category="design" img-number="07"></img-one>

    <tt>If you are interested in the PDF, or in looking at the printed catalog, please hit the contact button and give me call or send me an email.</tt>

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
  name: 'exhibition-catalog',
  data: function () {
    return {
      title: 'Exhibition catalog'
    }
  },
  head() {
    return {
      title: this.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'An exhibition catalog for the Making Her Mark exhibition'
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
