<template lang="html">
  <div class="box-shadow">
    <h3>{{ title }}</h3>
    <ul class="school">
      <li v-for="(item) in items"><slot></slot></li>
    </ul>
  </div>
</template>

<!-- it's fucked up and idk can't deal rn -->
<script>
export default {
  name: 'aboutBlock',
  props: {
    title: {
      required: true
    }
  },
  data: {
    items: {
      required: true
    }
  }
}
</script>
