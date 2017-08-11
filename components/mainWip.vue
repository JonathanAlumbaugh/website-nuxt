<template lang="html">
  <div class="row mb-160">
       <div class="offset-md-1 col-sm-9 box-shadow">
            <a href="wip.html">
                 <div class="hvrbox wip">
                      <img :src="imgPath" :alt="name" class="img-fluid hvrbox-layer_bottom grayscale">
                      <div class="hvrbox-layer_top">
                           <div class="hvrbox-text">
                                <h5>{{ name }}</h5>
                                <h4>{{ category }}</h4>
                           </div>
                      </div>
                 </div>
            </a>
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
		}
	},

	computed: {
		imgPath: function () {
			return 'img/' + this.category + '/' + this.name.toLowerCase().replace( / /g, '-' ) + '/' + this.name.toLowerCase().replace( / /g, '-' ) + '-cover' + '.jpg'
		}
	}
}
</script>
