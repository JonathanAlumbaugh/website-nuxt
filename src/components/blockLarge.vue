<template lang="html">
  <div class="box-shadow blk-lg">
    <h3 :class="category">
      {{ title }}
    </h3>
    <h4>{{ subtitle }}</h4>
    <p>{{ description }}</p>
  </div>
</template>

<script>
export default {
  name: 'BlockLarge',
  props: {
    category: {
      required: false,
    },

    title: {
      required: true,
    },

    subtitle: {
      required: true,
    },

    description: {
      required: true,
    },
  },
}
</script>
