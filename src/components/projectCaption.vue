<template lang="html">
  <!-- <transition appear name="custom-classes-transition" enter-active-class="animated fadeIn" leave-active-class="animated fadeOut"> -->
    <caption class="c">
      {{ namex }}
      <hr>
      <br />{{ locationx }}
      <hr>
      <br />{{ materialx }}
      <br />{{ dimensionx }}
      <br />{{ datex }} &nbsp;
    </caption>
  <!-- </transition> -->
</template>

<script>
export default {
  // TODO: This can't be right, so fix this.
  name: 'projectCaption',
  props: {
    name: {
      type: String
    },
    location: {
      type: String
    },
    material: {
      type: String
    },
    dimension: {
      type: String
    },
    date: {
      type: String
    }
  },

  computed: {
    namex: function () {
      return (
        this.name
      )
    },

    locationx: function () {
      return (
        this.location
      )
    },

    materialx: function () {
      return (
        this.material
      )
    },

    dimensionx: function () {
      return (
        this.dimension
      )
    },

    datex: function () {
      return (
        this.date
      )
      // replace( / x/g, " |" ) )
    }
  }
}
</script>
