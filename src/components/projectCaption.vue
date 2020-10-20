<template lang="html">
  <!-- <transition appear name="custom-classes-transition" enter-active-class="animated fadeIn" leave-active-class="animated fadeOut"> -->
  <section class="caption c">
    {{ name || $props.name.default }}
    <hr v-if="name" />
    {{ location || $props.location.default }}
    <hr v-if="location" />
    {{
      material.type
        ? $prismic.asText(material.data.title)
        : $props.material.default
    }}
    <br />
    {{ dimension || $props.dimension.default }}
    <br />
    {{ date ? date.match(/\d+/)[0] : '' }}
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
      default: '',
    },

    location: {
      type: String,
      default: 'Earth (for now)',
    },

    material: {
      default: 'Unknown',
    },

    dimension: {
      type: String,
      default: '',
    },

    date: {
      type: String,
      default: '',
    },
  },
}
</script>
