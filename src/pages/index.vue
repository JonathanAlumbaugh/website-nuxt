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

      <template v-if="projects.data.length && !projects.loading">
        <isotope-item
          v-for="project in projects.data"
          :key="project._meta.uid"
          :name="project.title[0].text"
          :img="project.cover.url"
          category="design"
        ></isotope-item>
      </template>
    </div>

    <!-- WIP -->
    <t>right now I'm working on</t>
    <main-wip
      class="tt"
      name="Simmons Mill Pond signage"
      category="design"
    ></main-wip>

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

    <!-- Scripts -->
    <script src="https://unpkg.com/imagesloaded@4/imagesloaded.pkgd.min.js"></script>
    <script src="/js/isotope-init.js"></script>
    <script src="/js/isotope.pkgd.js"></script>
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

const GET_PROJECTS = gql`
  {
    allProjects {
      edges {
        node {
          _meta {
            uid
          }
          title
          cover
        }
      }
    }
  }
`

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

  async asyncData() {
    try {
      let { loading, data, error } = await client.query({ query: GET_PROJECTS })

      data = data.allProjects.edges.map((el) => {
        return el.node
      })

      return { projects: { loading, data, error } }
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
      // script: [
      //   {
      //     src: '/js/isotope-init.js'
      //   },
      //   {
      //     src: '/js/isotope.pkgd.js'
      //   },
      //   {
      //     src: 'https://unpkg.com/imagesloaded@4/imagesloaded.pkgd.min.js'
      //   }
      // ]
    }
  },
  // /Head content
  components: {
    // affix,
    t,
    tt,
    isotopeGrid,
    isotopeSort,
    isotopeItem,
    mainWip,
  },
}
</script>
