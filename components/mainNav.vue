<template lang="html">
  <div class="row">
    <nav class="offset-md-1 col-md-8">
      <ul class="nav nav-inline">
        <!-- Add active class to both li and nuxt-link based on which is active -->
        <li class="nav-item">
          <nuxt-link class="nav-link" exact to="/">home</nuxt-link>
        </li>
        <li class="nav-item">
          <nuxt-link class="nav-link" to="/about">about</nuxt-link>
        </li>
        <li class="nav-item">
          <a class="nav-link"><contact-modal>contact</contact-modal></a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
import contactModal from '~/components/mainContactModal.vue'
export default {
  components: {
    contactModal
  }
}
</script>
