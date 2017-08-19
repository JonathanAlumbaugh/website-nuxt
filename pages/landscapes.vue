<template lang="html">
  <section>
    <t>landscapse</t>
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
