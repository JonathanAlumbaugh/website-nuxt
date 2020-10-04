<template lang="html">
  <section :id="$route.params.uid">
    <t v-if="tagline.length">{{ text(tagline) }}</t>

    <c
      :name="text(project_title)"
      :location="text(location)"
      :material="text(material.data.title)"
      :dimension="text(dimensions)"
      :date="date.match(/\d+/)[0]"
    ></c>

    <tt v-if="intro">{{ text(intro) }}</tt>

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
    console.log(params)

    try {
      const document = (await $prismic.api.getByUID('project', params.uid)).data

      const material = await $prismic.api.getByUID('tag', document.material.uid)

      return { ...document, material }
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
