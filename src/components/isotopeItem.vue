<template lang="html">
  <div
    class="element-item"
    :class="category.toLowerCase()"
    :data-category="category.toLowerCase()"
  >
    <div class="hvrbox" :class="category">
      <img :src="img" :alt="name" class="img-autoheight hvrbox-layer-bottom" />
      <nuxt-link :to="{ path: uid, params: { project: uid } }">
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
  name: 'IsotopeItem',

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
}
</script>
