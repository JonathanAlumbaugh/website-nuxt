<template lang="html">
  <!-- <transition appear name="custom-classes-transition" enter-active-class="animated fadeIn" leave-active-class="animated fadeOut"> -->
  <section class="caption c">
    {{ name }}
    <hr />
    {{ location }}
    <hr />
    {{ material }}
    <br />
    {{ dimension }}
    <br />
    {{ date }}
  </section>
  <!-- </transition> -->
</template>

<script>
export default {
  // TODO: This can't be right, so fix this.
  name: 'projectCaption',

  props: {
    name: {
      type: String,
    },
    location: {
      type: String,
    },
    material: {
      type: String,
    },
    dimension: {
      type: String,
    },
    date: {
      type: String,
    },
  },
}
</script>
