<template lang="html">
  <div class="element-item" :class="category" :data-category="category">
    <div class="hvrbox">
      <img :src="imgPath" :alt="name" class="img-autoheight hvrbox-layer_bottom">
      <nuxt-link :to="href">
        <div class="hvrbox-layer_top">
          <div class="hvrbox-text">
            <h5>{{ name }}</h5>
            <h4>{{ category }}</h4>
          </div>
        </div>
      </nuxt-link>
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
      return (
        '../img/' + this.category + '/' + this.name.toLowerCase().replace( / /g, '-' ) + '/' + this.name.toLowerCase().replace( / /g, '-' ) + '-cover' + '.jpg'
      )
    },
    href: function () {
      return this.name.toLowerCase().replace( / /g, '-' )
    }
  }
}
</script>
