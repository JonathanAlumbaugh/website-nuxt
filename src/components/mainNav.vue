<template lang="html">
    <!-- Add :class="navHider" below for that sweet collapsing nav goodness -->
    <!-- <div :class="navHider"> -->
      <nav v-sticky="stickyConfig" class="main-nav">
        <ul>

          <!-- Add active class to both li and nuxt-link based on which is active -->
          <!-- Home -->
          <!-- TODO: Fix home button so it disappears on small screens > 600px -->
          <li class="nav-item-1 nav-item">
            <nuxt-link class="nav-link" exact to="/">Home</nuxt-link>
          </li>

          <!-- About -->
          <li class="nav-item-2 nav-item">
            <nuxt-link class="nav-link" to="/about">About</nuxt-link>
          </li>

          <!-- Contact -->
          <li class="nav-item-3 nav-item">
              <a class="nav-link" @click="show">Contact
              </a>
          </li>

          <!-- Contact modal -->
          <modal name="contact-modal" class="contact" height="auto" transition="fade" :draggable="true" :adaptive="true" :pivotY="0.25">
            <div class="dialog-content">
              <p>Email me at jonathan.alumbaugh@gmail.com,<br/>
                or call me at 860 457 8556!</p>
              <div class="social">
                <a href="behance.net/jonathanalumbaugh"><img src="../static/icons/behance.svg"></a>
                <a href="https://dribbble.com/jonathana"><img src="../static/icons/dribbble.svg"></a>
                <a href="https://www.facebook.com/jonathan.alumbaugh"><img src="../static/icons/facebook.svg"></a>
                <a href="https://www.instagram.com/jonathan_alumbaugh/"><img src="../static/icons/instagram.svg"></a>
                <a href="behance.net/jonathanalumbaugh"><img src="../static/icons/linkedin.svg"></a>
              </div>
            </div>
            <!-- Modal buttons -->
            <div class="dialog-buttons">
              <a href="mailto:jonathan.alumbaugh@gmail.com?Subject=Hi!" target="_blank">
                <button style="flex: 1 1 50%;">Email me!</button>
              </a>
              <button @click="hide" style="flex: 1 1 50%;">&#10006;</button>
            </div>
          </modal>

        </ul>
      </nav>
    <!-- </div> -->
</template>

<script>
import VueSticky from 'vue-sticky'
export default {
  name: 'mainNav',
  directives: {
    'sticky': VueSticky
  },
  data() {
    return {
      // !-------------------------------------------------!
      // Set scroll position to nothing to begin with
      // !-------------------------------------------------!
      scrollPosition: null,
      // !-------------------------------------------------!
      classPicker: null,
      stickyConfig: {
        zIndex: 100,
        stickyTop: 0
      },
    }
  },
  methods: {
    // !-------------------------------------------------!
    // Update scroll position once there's been a change
    // !-------------------------------------------------!
    updateScroll() {
      this.scrollPosition = window.scrollY
    },
    // !-------------------------------------------------!
    show() {
      this.$modal.show( 'contact-modal' );
    },
    hide() {
      this.$modal.hide( 'contact-modal' );
    }
  },
  // !-------------------------------------------------!
  // Update scroll position when the page is mounted
  // !-------------------------------------------------!
  mounted() {
    window.addEventListener( 'scroll', this.updateScroll );
  },
  // !-------------------------------------------------!
  // Change the class based on the position in page
  // !-------------------------------------------------!
  computed: {
    navHider: {
      get: function () {
        return this.firstName + ' ' + this.lastName
      },
      set: function ( newValue ) {
        var names = newValue.split( ' ' )
        this.firstName = names[ 0 ]
        this.lastName = names[ names.length - 1 ]
      }
    }
    // navHider: function () {
    //   var classPicker = 'navbarHidden';
    //   if ( this.scrollPosition < 90 ) {
    //     classPicker = 'navbarShown';
    //   }
    //   return classPicker
    // }
  },
  // !-------------------------------------------------!
  // Destroy listener on page destroy
  // !-------------------------------------------------!
  destroy() {
    window.removeEventListener( 'scroll', this.updateScroll )
  }
  // !-------------------------------------------------!
}
</script>
