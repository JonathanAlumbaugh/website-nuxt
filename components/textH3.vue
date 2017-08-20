<template lang="html">
  <div class="row">
    <!-- <transition appear name="custom-classes-transition" enter-active-class="animated fadeInRight" leave-active-class="animated fadeOutLeft"> -->
      <div class="offset-md-1 col-md-9 box-shadow mb-80">
        <p>
          <slot></slot>
        </p>
      </div>
    <!-- </transition> -->
  </div>
</template>

<script>
export default
{
  name: 'textH3'
}
</script>
