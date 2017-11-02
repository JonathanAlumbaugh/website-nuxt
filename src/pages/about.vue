<template lang="html">
  <section id="about">
    <t>I'm Jonathan Alumbaugh,</t>
    <tt>
      a New England native with an education in photojournalism and graphic design. I'm interested in ways of promoting community through design. I hope to observe, tell the story of, and refine the interaction between people and design, and between people
      and people.<br/>
    </br/>
    Someday I'll find myself halfway across the world (likely without a jacket or a clean pair of socks) in pursuit of a design challenge. In the meantime, I seeks a design challenge on the homefront, in the Rhode Island/Southcoast/Boston area.
  </tt>

  <t>My education spans 5 years and 2 schools</t>

  <div style="grid-column:2/4" class="box-shadow">
    <h3>BFA graphic design</h3>
    <ul class="school">
      <li>UMASS Dartmouth 2017</li>
      <li>Dean's list</li>
      <li>Dean's list</li>
      <li>Art scholarship</li>
      <li>Chancellor's list</li>
      <li>Cumulative gpa 3.61</li>
    </ul>
  </div>

  <div style="grid-column:4/6" class="box-shadow">
    <h3>AA graphic design</h3>
    <ul class="school">
      <li>Quinebaug Valley CC 2014</li>
      <li>Dean's list</li>
      <li>Art scholarship</li>
      <li>Dean's list</li>
      <li>PTK honors society</li>
      <li>Dean's list</li>
      <li>Cumulative gpa 3.82</li>
    </ul>
  </div>

  <!-- Experience -->
  <t>my work experience includes titles like</t>

  <blk-lg category="designer"
    title="In house designer"
    subtitle="Minuteman Press Dartmouth, May 2017-present"
    description="Took over design and print prep work enabling staff to go on more in-person sales &amp; customer service calls">
  </blk-lg>

  <blk-lg
    category="photographer"
    title="Staff photographer"
    subtitle="Horizons Inc, 2014-2016"
    description="Photographed campers, creating a varied database of photos used for promotions, social media, and to capture and preserve the memories made at camp">
  </blk-lg>

  <blk-lg
    category="photojournalist"
    title="Freelance photographer"
    subtitle="The Chronicle Newspaper, 2012-2015"
    description="Consistently
  delivered engaging, high-quality human interest photos for use as standalone features or to go with stories">
  </blk-lg>

  <blk-lg category="designer"
    title="Marketing intern"
    subtitle="Quinebaug Valley Community College, Fall 2014"
    description="Designed posters and other materials for clubs and school events working in concert with the marketing director">
  </blk-lg>

  <blk-lg title="Volunteer"
    subtitle="Windham Area Interfaith Ministry, Jun-Oct 2013"
    description="Volunteered over 200 hours at local organization that supports underprivileged families">
  </blk-lg>

  <!-- Awards -->
  <t>I received an award for</t>

  <blk-lg category="photojournalist"
    title="Excellence in journalism"
    subtitle="Society of Professional Journalists, 2014"
    description="Received 3rd place statewide for news photo in a newspaper with under 18,000 circulation"/>

  <!-- Programs -->
  <t>and am a pro with industry standard programs like</t>

  <blk-sm title="Il" description="Adobe Illustrator"/>

  <blk-sm title="Id" description="Adobe Indesign"/>

  <blk-sm title="Lr" description="Adobe Lightroom"/>

  <blk-sm title="Ps" description="Adobe Photoshop"/>

  <!-- More -->
  <t>plus I can work with</t>

  <blk-sm title="Ae" description="Adobe After Effects"/>

  <blk-sm title="At" description="Atom Text Editor"/>

  <blk-sm title="Au" description="Adobe Audition"/>

  <blk-sm title="Bs" description="Bootstrap Framework"/>

  <blk-sm title="C4D" description="Cinema 4D"/>

  <blk-sm title="CSS" description="Cascading Style Sheets"/>

  <blk-sm title="HTML" description="Hooking up Those Massive Logos"/>

  <blk-sm title="Pr" description="Adobe Premiere Pro"/>

  <!-- Meta -->
  <t>I built this website using</t>

  <blk-sm title="At" description="Atom Text Editor"/>

  <blk-sm title="CSSG" description="CSS Grids!"/>

  <blk-sm title="HTML" description="HyperText Markup Language"/>

  <blk-sm title="Is" description="Isotope.js"/>

  <blk-sm title="Nuxt.js" description="Vue.js, but SSR!"/>

  <home-btn/>
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
