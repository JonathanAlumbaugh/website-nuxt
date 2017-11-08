<template lang="html">
  <section id="about">

    <!-- abt-int -->
    <t class="abt-int-1">I'm Jonathan Alumbaugh,</t>
    <tt class="abt-body-1">
      a New England native with an education in photojournalism and graphic design. I'm interested in ways of promoting community through design. I hope to observe, tell the story of, and refine the interaction between people and design, and between people
      and people.<br/>
    </br/>
    Someday I'll find myself halfway across the world (likely without a jacket or a clean pair of socks) in pursuit of a design challenge. In the meantime, I seek a design challenge on the homefront, in the Rhode Island/Southcoast/Boston area.
  </tt>

  <div class="space-1"></div>

  <!-- Education -->
  <t class="abt-int-2">My education spans 5 years and 2 schools</t>

  <div class="abt-body-2 box-shadow">
    <h3>BFA graphic design</h3>
    <ul class="school">
      <li>UMASS Dartmouth 2017</li>
      <li>Dean's list</li>
      <li>Dean's list</li>
      <li>Art scholarship</li>
      <li>Chancellor's list</li>
      <li>Cumulative GPA 3.61</li>
    </ul>
  </div>

  <div class="abt-body-2 box-shadow">
    <h3>AA graphic design</h3>
    <ul class="school">
      <li>Quinebaug Valley CC 2014</li>
      <li>Dean's list</li>
      <li>Art scholarship</li>
      <li>Dean's list</li>
      <li>PTK honors society</li>
      <li>Dean's list</li>
      <li>Cumulative GPA 3.82</li>
    </ul>
  </div>

  <div class="space-2"></div>

  <!-- Experience -->
  <t class="abt-int-3">my work experience includes titles like</t>

  <blk-lg class="abt-body-3"
    category="designer"
    title="In house designer"
    subtitle="Minuteman Press Dartmouth, May 2017-present"
    description="Took over design and print prep work enabling staff to go on more in-person sales &amp; customer service calls">
  </blk-lg>

  <blk-lg class="abt-body-3"
    category="photographer"
    title="Staff photographer"
    subtitle="Horizons Inc, 2014-2016"
    description="Photographed campers, creating a varied database of photos used for promotions, social media, and to capture and preserve the memories made at camp">
  </blk-lg>

  <blk-lg
    class="abt-body-3"
    category="photojournalist"
    title="Freelance photographer"
    subtitle="The Chronicle Newspaper, 2012-2015"
    description="Consistently
  delivered engaging, high-quality human interest photos for use as standalone features or to go with stories">
  </blk-lg>

  <!-- <blk-lg class="abt-body-3"
    category="designer"
    title="Marketing intern"
    subtitle="Quinebaug Valley Community College, Fall 2014"
    description="Designed posters and other materials for clubs and school events working in concert with the marketing director">
  </blk-lg> -->

  <blk-lg
    class="abt-body-3"
    title="Volunteer"
    subtitle="Windham Area Interfaith Ministry, Jun-Oct 2013"
    description="Volunteered over 200 hours at local organization that supports underprivileged families">
  </blk-lg>

  <div class="space-3"></div>

  <!-- Awards -->
  <t class="abt-int-4">I received an award for</t>

  <blk-lg
    class="abt-body-4"
    category="photojournalist"
    title="Excellence in journalism"
    subtitle="Society of Professional Journalists, 2014"
    description="Received 3rd place statewide for news photo in a newspaper with under 18,000 circulation"/>

    <div class="space-4"></div>

  <!-- Programs -->
  <t class="abt-int-5">and am a pro with industry standard programs like</t>

  <blk-sm class="abt-body-5" title="Il" description="Adobe Illustrator"/>

  <blk-sm class="abt-body-5" title="Id" description="Adobe Indesign"/>

  <blk-sm class="abt-body-5" title="Lr" description="Adobe Lightroom"/>

  <blk-sm class="abt-body-5" title="Ps" description="Adobe Photoshop"/>

  <div class="space-5"></div>

  <!-- More -->
  <t class="abt-int-6">plus I can work with</t>

  <blk-sm class="abt-body-6" title="Ae" description="Adobe After Effects"/>

  <blk-sm class="abt-body-6" title="At" description="Atom Text Editor"/>

  <blk-sm class="abt-body-6" title="Au" description="Adobe Audition"/>

  <blk-sm class="abt-body-6" title="Bs" description="Bootstrap Framework"/>

  <blk-sm class="abt-body-7" title="C4D" description="Cinema 4D"/>

  <blk-sm class="abt-body-7" title="CSS" description="Cascading Style Sheets"/>

  <blk-sm class="abt-body-7" title="HTML" description="Hooking up Those Massive Logos"/>

  <blk-sm class="abt-body-7" title="Pr" description="Adobe Premiere Pro"/>

  <div class="space-6"></div>

  <!-- Meta -->
  <t class="abt-int-8">I built this website using</t>

  <blk-sm class="abt-body-8" title="At" description="Atom Text Editor"/>

  <blk-sm class="abt-body-8" title="HTML+CSS" description="HyperText Markup Language + Cascading Style Sheets"/>

  <blk-sm class="abt-body-8" title="Is" description="Isotope.js"/>

  <blk-sm class="abt-body-8" title="Nuxt.js" description="Vue.js, but SSR!"/>

  <home-btn class="home-btn"/>
</section>
</template>

<script>
import t from '~/components/textH2.vue'
import tt from '~/components/textH3.vue'
import blkLg from '~/components/blockLarge.vue'
import blkSm from '~/components/blockSmall.vue'
import homeBtn from '~/components/homeBtn.vue'
export default {
  // Head content all up in here
  name: 'about',
  data: function () {
    return {
      title: 'About'
    }
  },
  head() {
    return {
      title: this.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Jonathan is a New England native with an education in photojournalism and graphic design'
        }
      ]
    }
  },
  // /Head content
  components: {
    t,
    tt,
    blkLg,
    blkSm,
    homeBtn
  }
}
</script>
