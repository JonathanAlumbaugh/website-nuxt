<template lang="html">
  <div class="row">
       <div class="offset-md-1 col-md-9">
            <div class="row">
                 <div class="col-sm-4 box-shadow mb-40">
                 <a data-fancybox="gallery" :href="imgPath1">
                      <img :src="imgPath1" alt="" class="img-fluid hvrbox-layer_bottom grayscale">
                 </a>
                 </div>
                 <div class="col-sm-4 box-shadow mb-40">
                 <a data-fancybox="gallery" :href="imgPath2">
                      <img :src="imgPath2" alt="" class="img-fluid hvrbox-layer_bottom grayscale">
                 </a>
                 </div>
                 <div class="col-sm-4 box-shadow mb-40">
                 <a data-fancybox="gallery" :href="imgPath3">
                      <img :src="imgPath3" alt="" class="img-fluid hvrbox-layer_bottom grayscale">
                 </a>
                 </div>
            </div>
       </div>
  </div>
</template>

<script>
export default {
	props: {
		name: {
			required: true
		},
		category: {
			required: true
		},
		imgNumber1: {
			required: true
		},
		imgNumber2: {
			required: true
		},
		imgNumber3: {
			required: true
		}
	},

	computed: {
		imgPath1: function () {
			return 'img/' + this.category + '/' + this.name.toLowerCase().replace( / /g, '-' ) + '/' + this.name.toLowerCase().replace( / /g, '-' ) + this.imgNumber1 + '.jpg'
		},
		imgPath2: function () {
			return 'img/' + this.category + '/' + this.name.toLowerCase().replace( / /g, '-' ) + '/' + this.name.toLowerCase().replace( / /g, '-' ) + this.imgNumber2 + '.jpg'
		},
		imgPath3: function () {
			return 'img/' + this.category + '/' + this.name.toLowerCase().replace( / /g, '-' ) + '/' + this.name.toLowerCase().replace( / /g, '-' ) + this.imgNumber3 + '.jpg'
		}
	}
}
</script>

<style lang="css">
</style>
