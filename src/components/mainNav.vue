<template lang="html">
  <div class="row">
    <nav class="navbar offset-md-1 col-md-8">
      <ul class="nav nav-inline">
        <!-- Add active class to both li and nuxt-link based on which is active -->

        <!-- Home -->
        <li class="nav-item">
          <nuxt-link class="nav-link" exact to="/">Home</nuxt-link>
        </li>

        <!-- About -->
        <li class="nav-item">
          <nuxt-link class="nav-link" to="/about">About</nuxt-link>
        </li>

        <!-- Contact -->
        <li class="nav-item">
          <a class="nav-link" @click="show">Contact
          </a>
        </li>

        <!-- Contact modal -->
        <modal name="contact-modal" class="contact" height="auto" transition="fade" :draggable="true" :adaptive="true" :pivotY="0.25">
          <div class="dialog-content">
            <p>Email me at jonathan.alumbaugh@gmail.com,<br/>
              or call me at 860 457 8556!</p>
          </div>
          <!-- Modal buttons -->
          <div class="dialog-buttons">
            <a href="mailto:jonathan.alumbaugh@gmail.com?Subject=hi!" target="_blank">
              <button style="flex: 1 1 50%;">Email me!</button>
            </a>
            <button @click="hide" style="flex: 1 1 50%;">Never mind</button>
          </div>
        </modal>

      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'mainNav',
  methods: {
    show() {
      this.$modal.show( 'contact-modal' );
    },
    hide() {
      this.$modal.hide( 'contact-modal' );
    }
  }
}
</script>
