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
          <div class="nav-link">Home</div>
        </li>
      </nuxt-link>

      <!-- About -->
      <nuxt-link class="nav-item-2" to="/about">
        <li class="nav-item">
          <div class="nav-link">About</div>
        </li>
      </nuxt-link>

      <!-- Contact -->
      <a class="nav-item-3 nav-link" @click="show">
        <li class="nav-item">
          Contact
        </li>
      </a>

      <!-- Contact modal -->
      <modal
        name="contact-modal"
        class="contact"
        height="auto"
        transition="fade"
        :draggable="true"
        :adaptive="true"
        :pivotY="0.25"
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
          <button @click="hide" style="flex: 1 1 50%;">&#10006;</button>
        </div>
      </modal>
    </ul>
  </nav>
  <!-- </div> -->
</template>

<script>
export default {
  name: 'mainNav',

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
        stickyTop: 0,
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

    async show() {
      const { baseURL } = this.$config

      console.log('baseURL:', baseURL)

      try {
        const token = await this.$recaptcha.execute('contact')
        const res = await this.$axios.$post(`${baseURL}/api/recaptcha`, {
          token,
        })

        if (res.success === true) this.$modal.show('contact-modal')
        else throw new Error(`Looks like you might not be a human :(`)
      } catch (e) {
        console.log('Error:', e)
      }
    },

    hide() {
      this.$modal.hide('contact-modal')
    },
  },

  // !-------------------------------------------------!
  // Update scroll position when the page is mounted
  // !-------------------------------------------------!
  async mounted() {
    window.addEventListener('scroll', this.updateScroll)

    try {
      await this.$recaptcha.init()
    } catch (e) {
      console.log('Error:', e)
    }
  },

  // !-------------------------------------------------!
  // Change the class based on the position in page
  // !-------------------------------------------------!
  computed: {
    navHider: {
      get: function () {
        return this.firstName + ' ' + this.lastName
      },
      set: function (newValue) {
        var names = newValue.split(' ')
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

  // !-------------------------------------------------!
  // Destroy listener on page destroy
  // !-------------------------------------------------!
  destroy() {
    window.removeEventListener('scroll', this.updateScroll)
  },
  // !-------------------------------------------------!
}
</script>

<style lang="scss" scoped>
.disclaimer {
  font-size: 1em;
}
</style>
