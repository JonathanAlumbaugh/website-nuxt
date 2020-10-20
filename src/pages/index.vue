<template lang="html">
  <section id="home">
    <!-- TODO: Implement vue-affix here lol -->
    <!-- Isotope sort -->
    <isotope-sort>
      I'm a
      <button class="btn designer" data-filter=".design">designer,</button>
      <button class="btn photographer" data-filter=".photography">
        photographer,
      </button>
      <button class="btn photojournalist" data-filter=".photojournalism">
        photojournalist,
      </button>
      competitive fencer, and professional referee based in Massachusetts
      <button id="show-all" class="btn" data-filter="*">&#9679;</button>
    </isotope-sort>

    <!-- Isotope grid -->
    <div id="isotope-grid" class="tt isotope-grid grid">
      <div class="grid-sizer"></div>

      <template v-if="!projects.loading && !projects.error">
        <isotope-item
          v-for="project in projects.data"
          :key="project._meta.uid"
          :name="project.title[0].text"
          :img="project.cover.url"
          :uid="project._meta.uid"
          :category="project.category.title[0].text"
        ></isotope-item>
      </template>
    </div>

    <!-- WIP -->
    <t v-if="projects.featured">right now I'm working on</t>
    <fragment v-if="projects.featured && !projects.loading">
      <main-wip
        v-for="project in projects.featured"
        :key="project._meta.uid"
        :img="project.cover.url"
        :name="project.title[0].text"
        :category="project.category.title[0].text"
        :uid="project._meta.uid"
        class="tt"
      ></main-wip>
    </fragment>

    <!-- Extra -->
    <t>I love making things</t>
    <tt>
      With paper, fabric, wood, plastic, the web, 3D printers, CNC routers,
      laser cutters, and more. Interested in seeing how I built this website?
      Check out
      <a href="https://github.com/JonathanAlumbaugh/website-nuxt">
        <span>my git repository</span>
      </a>
      .
    </tt>
  </section>
</template>

<script>
import { PrismicLink } from 'apollo-link-prismic'
import { InMemoryCache } from 'apollo-cache-inmemory'
import ApolloClient from 'apollo-client'
import gql from 'graphql-tag'

const client = new ApolloClient({
  link: PrismicLink({
    uri: 'https://jonathanalumbaugh.prismic.io/graphql',
  }),
  cache: new InMemoryCache(),
})

import { Fragment } from 'vue-fragment'
import t from '~/components/textH2.vue'
import tt from '~/components/textH3.vue'
import isotopeGrid from '~/components/isotopeGrid.vue'
import isotopeSort from '~/components/isotopeSort.vue'
import isotopeItem from '~/components/isotopeItem.vue'
import mainWip from '~/components/mainWip.vue'

export default {
  // Head content all up in here
  name: 'home',

  data() {
    return {
      title: 'Jonathan',
      projects: [],
    }
  },

  async asyncData({ $prismic, error }) {
    const GET_PROJECTS = gql`
      {
        allProjects {
          edges {
            node {
              _meta {
                uid
              }
              featured
              title
              category {
                ... on Tag {
                  title
                  agent_noun
                  accent
                }
              }
              cover
              tags {
                tag {
                  ... on Tag {
                    title
                    accent
                  }
                }
              }
            }
          }
        }
      }
    `

    try {
      let { data, loading, error } = await client.query({
        query: GET_PROJECTS,
      })

      const dataCopy = data.allProjects.edges.map((el) => el.node)
      const featured = dataCopy.filter((el) => el.featured)
      data = dataCopy.filter((el) => !el.featured)

      return { projects: { data, featured, loading, error } }

      // Here we query blog home content using $prismic which
      // has the api endpoint data from the nuxt.config.js
      // const homepageContent = (await $prismic.api.getSingle('blog_home')).data

      // Query to get posts content, here we also change the 'predicates' query
      // const data = await $prismic.api.query(
      //   $prismic.predicates.at('document.type', 'project'),
      //   $prismic.predicates.at('project.featured', false),
      // )

      // // Returns data to be used in template
      // return { projects: { data, error } }
    } catch (e) {
      console.log(e)
    }
  },

  // apollo: {
  //   allProjects: {
  //     query: GET_PROJECTS,
  //   },
  // },

  head() {
    return {
      title: this.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'Graphic designer. Photographer/photojournalist. Competitive fencer. Professional referee.',
        },
      ],
      script: [
        {
          src: '/js/isotope.pkgd.js',
        },
        {
          src: '/js/isotope-init.js',
        },
        {
          src: 'https://unpkg.com/imagesloaded@4/imagesloaded.pkgd.min.js',
        },
      ],
    }
  },
  // /Head content
  components: {
    // affix,
    Fragment,
    t,
    tt,
    isotopeGrid,
    isotopeSort,
    isotopeItem,
    mainWip,
  },
}
</script>
