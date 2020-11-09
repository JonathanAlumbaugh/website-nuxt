<template lang="html">
  <transition
    appear
    name="custom-classes-transition"
    enter-active-class="animated fadeIn"
    leave-active-class="animated fadeOut"
  >
    <section class="error">
      <fragment v-if="error.statusCode === 404">
        <t>I was fiddling around and</t>

        <tt>
          I must have broken something here.
          <br />
          Would you
          <a @click="show">
            <span class="error-contact">drop me a line</span>
          </a>
          and let me know?
        </tt>
      </fragment>

      <fragment v-else>
        <tt>
          This {{ error.statusCode }} error normally only shows if you're me and
          I'm working on the site right now.
        </tt>

        <tt>
          <a @click="show">
            <span class="error-contact">Drop me a line</span>
          </a>
          and let me know?
        </tt>
      </fragment>

      <pre class="tt box-shadow" style="font-size: 1.5em;">{{
        error.message
      }}</pre>
      <pre class="tt box-shadow" style="font-size: 1.5em;">{{
        error.locations
      }}</pre>
    </section>
  </transition>
</template>

<script>
import { Fragment } from 'vue-fragment'
import t from '~/components/textH2.vue'
import tt from '~/components/tt.vue'
export default {
  props: ['error'],

  methods: {
    async show() {
      try {
        const token = await this.$recaptcha.execute('contact')
        const res = await this.$axios.$post('/api/recaptcha', { token })

        if ((res.success = true)) this.$modal.show('contact-modal')
        else throw new Error('looks like you might not be a human :(')
      } catch (e) {
        console.log('Error:', e)
      }
    },
  },

  components: {
    Fragment,
    t,
    tt,
  },
}
</script>
