<template lang="html">
  <nuxt-link exact="exact" to="/" class="home-btn">
    <button
      class="btn btn-secondary btn-sm center btn-outline-primary"
      data-filter="*"
    >
      <img src="img/home.svg" alt="home" />
    </button>
  </nuxt-link>
</template>

<script>
export default {
  name: 'HomeBtn',
}
</script>
