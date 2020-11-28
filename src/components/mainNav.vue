<template lang="html">
  <!-- Add :class="navHider" below for that sweet collapsing nav goodness -->
  <!-- <div :class="navHider"> -->
  <nav class="main-nav">
    <ul>
      <!-- Add active class to both li and nuxt-link based on which is active -->
      <!-- Home -->
      <!-- TODO: Fix home button so it disappears on small screens > 600px -->
      <nuxt-link class="nav-item-1" exact to="/">
        <li class="nav-item home-hider">
          <div class="nav-link">
            Home
          </div>
        </li>
      </nuxt-link>

      <!-- About -->
      <nuxt-link class="nav-item-2" to="/about">
        <li class="nav-item">
          <div class="nav-link">
            About
          </div>
        </li>
      </nuxt-link>

      <!-- Contact -->
      <a class="nav-item-3 nav-link" @click="show">
        <li class="nav-item">Contact</li>
      </a>

      <!-- Contact modal -->
      <modal
        name="contact-modal"
        class="contact"
        height="auto"
        transition="fade"
        :draggable="true"
        :adaptive="true"
        :pivot-y="0.25"
      >
        <div class="dialog-content">
          <p>
            Email me at jonathan.alumbaugh@gmail.com,
            <br />
            or call me at 860 457 8556!
          </p>
          <!-- <div class="social">
                <a href="behance.net/jonathanalumbaugh"><img src="../static/icons/behance.svg"></a>
                <a href="https://dribbble.com/jonathana"><img src="../static/icons/dribbble.svg"></a>
                <a href="https://www.facebook.com/jonathan.alumbaugh"><img src="../static/icons/facebook.svg"></a>
                <a href="https://www.instagram.com/jonathan_alumbaugh/"><img src="../static/icons/instagram.svg"></a>
                <a href="behance.net/jonathanalumbaugh"><img src="../static/icons/linkedin.svg"></a>
              </div> -->

          <p class="disclaimer">
            This site is protected by reCAPTCHA and the Google
            <a href="https://policies.google.com/privacy">Privacy Policy</a>
            and
            <a href="https://policies.google.com/terms">Terms of Service</a>
            apply.
          </p>
        </div>
        <!-- Modal buttons -->
        <div class="dialog-buttons">
          <a
            href="mailto:jonathan.alumbaugh@gmail.com?Subject=Hi!"
            target="_blank"
          >
            <button style="flex: 1 1 50%;">Email me!</button>
          </a>
          <button style="flex: 1 1 50%;" @click="hide">
            &#10006;
          </button>
        </div>
      </modal>

      <modal
        name="fail-modal"
        class="fail"
        height="auto"
        transition="fade"
        :draggable="true"
        :adaptive="true"
        :pivot-y="0.25"
      >
        <div class="dialog-content">
          <p>Sorry, it looks like you're not a human to ReCaptcha :(</p>

          <p class="disclaimer">
            This site is protected by reCAPTCHA and the Google
            <a href="https://policies.google.com/privacy">Privacy Policy</a>
            and
            <a href="https://policies.google.com/terms">Terms of Service</a>
            apply.
          </p>
        </div>
        <!-- Modal buttons -->
        <div class="dialog-buttons">
          <button style="flex: 1 1 50%;" @click="hide">
            &#10006;
          </button>
        </div>
      </modal>
    </ul>
  </nav>
  <!-- </div> -->
</template>

<script>
export default {
  name: 'MainNav',

  data() {
    return {
      scrollPosition: null, // Set scroll position to nothing to begin with
      classPicker: null,
      stickyConfig: {
        zIndex: 100,
        stickyTop: 0,
      },
    }
  },

  computed: {
    // Change the class based on the position in page
    navHider: {
      get() {
        return this.firstName + ' ' + this.lastName
      },
      set(newValue) {
        const names = newValue.split(' ')
        this.firstName = names[0]
        this.lastName = names[names.length - 1]
      },
    },

    // navHider: function () {
    //   var classPicker = 'navbarHidden';
    //   if ( this.scrollPosition < 90 ) {
    //     classPicker = 'navbarShown';
    //   }
    //   return classPicker
    // }
  },

  async mounted() {
    // Update scroll position when the page is mounted
    window.addEventListener('scroll', this.updateScroll)

    try {
      await this.$recaptcha.init()
    } catch (e) {
      console.log('Error:', e)
    }
  },

  methods: {
    // Update scroll position once there's been a change
    updateScroll() {
      this.scrollPosition = window.scrollY
    },

    async show() {
      try {
        const token = await this.$recaptcha.execute('contact')
        const res = await this.$axios.$post('/api/recaptcha', { token })

        if (res.score >= 0.8) this.$modal.show('contact-modal')
        else {
          this.$modal.show('fail-modal')
          throw new Error(`Looks like you might not be a human :(`)
        }
      } catch (e) {
        console.log('Error:', e)
      }
    },

    hide() {
      this.$modal.hide('contact-modal')
      this.$modal.hide('fail-modal')
    },
  },

  destroy() {
    // Destroy listener on page destroy
    window.removeEventListener('scroll', this.updateScroll)
  },
}
</script>

<style lang="scss" scoped>
.disclaimer {
  font-size: 1em;
}
</style>
