<template lang="html">
  <section :id="$route.params.uid">
    <t v-if="tagline">
      {{ text(tagline) }}
    </t>

    <c
      :name="text(project_title)"
      :location="text(location)"
      :material="material"
      :dimension="text(dimensions)"
      :date="created"
    />

    <slices-block :slices="body" />
  </section>
</template>

<script>
import t from '~/components/textH2.vue'
import c from '~/components/projectCaption.vue'
import slicesBlock from '~/components/slicesBlock.vue'
export default {
  name: 'Project',

  components: {
    t,
    c,
    slicesBlock,
  },

  async asyncData({ $prismic, params, error }) {
    try {
      const document = (await $prismic.api.getByUID('project', params.uid)).data
      let material = {}

      if (
        document &&
        document.material.type === 'tag' &&
        !document.material.isBroken
      ) {
        material = await $prismic.api.getByUID('tag', document.material.uid)
        document.material = material
      }

      return { ...document }
    } catch (e) {
      error({ statusCode: e.statusCode, message: e.message })
    }
  },

  head() {
    return {
      title: this.text(this.title) || 'Project',
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
}
</script>
