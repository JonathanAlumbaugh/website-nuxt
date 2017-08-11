<template lang="html">
<div>
  <main-header/>
  <main-nav/>
  <nuxt/>
  <main-footer/>
  <main-contact/>
</div>
</template>

<script>
import mainHeader from '~/components/mainHeader.vue'
import mainNav from '~/components/mainNav.vue'
import t from '~/components/textH2.vue'
import tt from '~/components/textH3.vue'
import imgOne from '~/components/projectImgA.vue'
import imgTwo from '~/components/projectImgB.vue'
import imgThree from '~/components/projectImgC.vue'
import mainFooter from '~/components/mainFooter.vue'
import mainContact from '~/components/mainContact.vue'
export default {
	components: {
		mainHeader,
		mainNav,
		t,
		tt,
		imgOne,
		imgTwo,
		imgThree,
		mainFooter,
		mainContact,
	}
}
</script>
