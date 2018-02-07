<template lang="html">
  <transition appear name="custom-classes-transition" enter-active-class="animated fadeIn" leave-active-class="animated fadeOut">
    <caption v-show="!isHidden">
      <slot></slot>
    </caption>
  </transition>
</template>

<script>
export default {
  name: 'projectCitation',
  data: function () {
    return {
      isHidden: ''
    }
  }
}
</script>
