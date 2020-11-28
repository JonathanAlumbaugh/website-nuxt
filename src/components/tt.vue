<template lang="html">
  <!-- <transition appear name="custom-classes-transition" enter-active-class="animated fadeInRight" leave-active-class="animated fadeOutLeft"> -->
  <p class="tt box-shadow">
    <slot />
  </p>
  <!-- </transition> -->
</template>

<script>
export default {
  name: 'Tt',
}
</script>
