<template lang="html">
  <section :id="slug">
    <!-- 01 -->
    <t>title</t>

    <c
      name="UMass Dartmouth Brochure"
      location="University of Massachusetts, Dartmouth, MA"
      material="Paper"
      dimension='25 x 36"'
      date="2017"
    ></c>

    <tt>
      tt
    </tt>

    <!-- 02 -->
    <img-one name="senior project" category="design" img-number="04" />
    <img-two
      name="senior project"
      category="design"
      img-number1="01"
      img-number2="02"
    />

    <tt>
      tt ele
    </tt>

    <!-- 03 -->
    <img-one name="senior project" category="design" img-number="20" />
    <img-one name="senior project" category="design" img-number="11" />

    <tt>
      asdf
    </tt>

    <!-- 04 -->
    <img-one name="senior project" category="design" img-number="33" />
    <img-two
      name="senior project"
      category="design"
      img-number1="08"
      img-number2="34"
    />

    <tt>
      asdf
    </tt>

    <!-- 05 -->
    <img-one name="senior project" category="design" img-number="27" />
    <img-two
      name="senior project"
      category="design"
      img-number1="12"
      img-number2="14"
    />

    <tt>
      asdfsdf
    </tt>
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
  name: 'senior-project',
  data: function () {
    return {
      title: 'Senior project',
    }
  },
  head() {
    return {
      title: this.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'An information package for the UMass Dartmouth graphic design program',
        },
      ],
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
  },
}
</script>
