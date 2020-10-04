<template lang="html">
  <nuxt-link to="wip" class="main-wip box-shadow">
    <div class="hvrbox wip">
      <img
        :src="img"
        :alt="name"
        class="img-fluid hvrbox-layer-bottom grayscale"
      />
      <div class="hvrbox-layer-top">
        <div class="hvrbox-text">
          <h5>{{ name }}</h5>
          <h4>{{ category }}</h4>
        </div>
      </div>
    </div>
  </nuxt-link>
</template>

<script>
export default {
  name: 'mainWip',
  props: {
    img: { required: true },
    name: { required: true },
    category: { required: true },
  },
}
</script>
