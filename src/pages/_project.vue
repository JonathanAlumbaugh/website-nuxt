<template lang="html">
  <section :id="$route.params.project">
    <t v-if="tagline.length">{{ $prismic.asText(tagline) }}</t>

    <c
      :name="text(project_title)"
      :location="text(location)"
      :material="text(material.data.title)"
      :dimension="text(dimensions)"
      :date="date.match(/\d+/)[0]"
    ></c>

    <tt v-if="intro.length">{{ $prismic.asText(intro) }}</tt>

    <slices-block :slices="body" />
  </section>
</template>

<script>
import t from '~/components/textH2.vue'
import c from '~/components/projectCaption.vue'
import slicesBlock from '~/components/slicesBlock.vue'
import tt from '~/components/textH3.vue'
export default {
  name: 'project',

  async asyncData({ $prismic, params, error }) {
    try {
      const document = (await $prismic.api.getByUID('project', params.project))
        .data

      return { ...document }
    } catch (e) {
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

  methods: {
    text(prismicVar) {
      return this.$prismic.asText(prismicVar)
    },
  },

  components: {
    t,
    c,
    slicesBlock,
    tt,
  },
}
</script>
