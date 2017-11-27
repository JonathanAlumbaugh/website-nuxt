<template lang="html">
  <section id="exhibition-catalog">

    <!-- 01 -->
    <t>Exhibition catalogs supplement the info in an exhibit</t>

    <tt>Often, the information found in an exhibiton is abridged. I created this exhibition catalog with the assistance of <a href="http://meaghankoneill.com/"><span>Meaghan O'Neil</span></a> and <a href="https://www.amandacward.com/"><span>Amanda Ward</span></a>. The exhibition catalog consisted of 11 essays by class-members of ARH 400 that delved into the artist/influencer's lives.</tt>


    <!-- 02 -->
    <img-one name="exhibition catalog" category="design" img-number="01"></img-one>
    <img-two name="exhibition catalog" category="design" img-number1="10" img-number2="04"></img-two>

    <tt>Due to class budget, the catalog was limited to 28 pages, including front and back. The catalog was to be printed on 100% post-consumer waste paper.<br />

    <br />Three layouts were developed to accomodate essays of different lengths. If you are interested in the PDF, please hit the contact button.</tt>


    <!-- 03 -->
    <img-one name="exhibition catalog" category="design" img-number="09"></img-one>
    <img-two name="exhibition catalog" category="design" img-number1="14" img-number2="13"></img-two>

    <tt>It is important to place historical figures in context. By placing a historical figure the reader gains a better understanding of the figures' nuanced and lasting influence on history. The table of contents was the one place which all artists would be seen together. It was the best chance to give historical context to each artists' life.</tt>

    <!-- 05 -->
    <img-one name="exhibition catalog" category="design" img-number="07"></img-one>

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
  name: 'exhibition-catalog',
  data: function ()
  {
    return {
      title: 'Exhibition catalog'
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
          content: 'Jonathan designed an exhibition catalog to supplement the abridged information found in an exhibit'
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
