<template lang="html">
  <div class="element-item" :class="category" :data-category="category">
    <div class="hvrbox" :class="category">
      <img :src="img" :alt="name" class="img-autoheight hvrbox-layer-bottom" />
      <nuxt-link :to="{ path: uid, params: uid }">
        <div class="hvrbox-layer-top">
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
  name: 'isotopeItem',
  props: {
    name: {
      required: true,
    },
    img: {
      require: true,
    },
    uid: {
      require: true,
    },
    category: {
      required: true,
    },
  },

  computed: {
    // imgPath: function () {
    //   return (
    //     '../img/' +
    //     this.category +
    //     '/' +
    //     this.name.toLowerCase().replace(/ /g, '-') +
    //     '/' +
    //     this.name.toLowerCase().replace(/ /g, '-') +
    //     '-cover' +
    //     '.jpg'
    //   )
    // },
    href: function () {
      return this.name.toLowerCase().replace(/ /g, '-')
    },
  },
}
</script>
