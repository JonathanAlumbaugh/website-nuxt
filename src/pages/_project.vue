<template lang="html">
  <section :id="$route.params.project">
    <!-- 01 -->
    <t>{{ $prismic.asText(tagline) }}</t>

    <c
      name="UMass Dartmouth Brochure"
      location="University of Massachusetts, Dartmouth, MA"
      material="Paper"
      dimension='25 x 36"'
      date="2017"
    ></c>

    <tt>{{ $prismic.asText(intro) }}</tt>

    <slices-block :slices="body" />
  </section>
</template>

<script>
import t from '~/components/textH2.vue'
import c from '~/components/projectCaption.vue'
import slicesBlock from '~/components/slicesBlock.vue'
import tt from '~/components/textH3.vue'
export default {
  // Head content all up in here
  name: 'project',

  async asyncData({ $prismic, params, error }) {
    try {
      // Query to get post content
      const document = (await $prismic.api.getByUID('project', params.project))
        .data

      return { ...document }
    } catch (e) {
      // Returns error page
      error({ statusCode: 404, message: 'Page not found' })
    }
  },

  head() {
    return {
      title: this.title[0].text,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'An information package for the UMass Dartmouth graphic design program',
        },
      ],
    }
  },

  // /Head content
  components: {
    t,
    c,
    slicesBlock,
    tt,
  },
}
</script>
