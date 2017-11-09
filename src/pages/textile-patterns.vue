<template lang="html">
  <section id="textile-patterns">

    <!-- 01 -->
    <t>One semester a bunch of graphic designers made textiles</t>
    <tt>These are some of mine. We developed the patterns, mixed inks, dyed fabrics, and printed everything by hand.</tt>


    <!-- 02 -->
    <img-one name="textile-patterns" category="design" img-number="04"></img-one>
    <img-two name="textile-patterns" category="design" img-number1="06" img-number2="07"></img-two>

    <tt>The very slight lines were difficult to clean once the screen had been exposed. Dye-based ink was used as it could be diluted to reduce clogging the screen, without bleeding.</tt>


    <!-- 03 -->
    <img-one name="textile-patterns" category="design" img-number="11"></img-one>
    <img-two name="textile-patterns" category="design" img-number1="12" img-number2="13"></img-two>

    <tt>It's not weed. It could be, but it was intended to be Japanese maple leaves. This color combination was printed second to the following combination, but is my favorite. The background is dyed a pthalo blue that carries slight variation, while the maple leaves are metallic ink.</tt>


    <!-- 04 -->
    <img-one name="textile-patterns" category="design" img-number="01"></img-one>
    <img-two name="textile-patterns" category="design" img-number1="02" img-number2="03"></img-two>

    <tt>Still not weed.</tt>


    <!-- 05 -->
    <img-one name="textile-patterns" category="design" img-number="08"></img-one>
    <img-two name="textile-patterns" category="design" img-number1="09" img-number2="10"></img-two>

    <tt>This is less a pattern than a heavily textured print. Most of the fabric was monoprinted using plastic sheeting, while the circle was blocked out and printed afterwards.</tt>

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
  name: 'textile-patterns',
  data: function ()
  {
    return {
      title: 'textile patterns'
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
          content: 'Jonathan developed and printed graphic patterns for textiles'
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
