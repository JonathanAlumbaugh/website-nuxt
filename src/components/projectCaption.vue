<template lang="html">
  <transition appear name="custom-classes-transition" enter-active-class="animated fadeIn" leave-active-class="animated fadeOut">
    <caption class="c">
      <slot></slot>
    </caption>
  </transition>
</template>

<script>
export default {
  name: 'projectCaption',
  data: {
    isHidden: true
  }
}
</script>
