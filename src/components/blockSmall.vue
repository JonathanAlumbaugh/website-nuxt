<template lang="html">
  <div class="box-shadow blk-sm">
    <h3>{{ title }}</h3>
    <h4>{{ description }}</h4>
  </div>
</template>

<script>
export default {
  name: 'blockSmall',
  props: {
    title: {
      required: true,
    },
    description: {
      required: true,
    },
  },
}
</script>
