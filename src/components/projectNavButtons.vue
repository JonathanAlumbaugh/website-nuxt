<template lang="html">
  <div v-sticky="stickyConfig" class="full-width">
    <div>
      <h1>X Y</h1>
    </div>
  </div>
</template>

<script>
// import VueSticky from 'vue-sticky'
export default {
  // directives: {
  //   sticky: VueSticky,
  // },
  data() {
    return {
      stickyConfig: {
        zIndex: 100,
        stickyTop: 0,
      },
    }
  },
}
</script>
