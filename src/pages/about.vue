<template lang="html">
  <section id="about">

    <!-- About -->
    <t>I'm Jonathan,</t>

    <tt>a New England native with an education in photojournalism and graphic design. I'm interested in ways of promoting community through design. I hope to observe, tell the story of, and refine the interaction between people and design, and between people and people.<br />

    <br />Someday I'll find myself halfway across the world (likely without a jacket or a clean pair of socks) in pursuit of a design challenge. In the meantime, I seek a design challenge on the homefront, in the Rhode Island/Southcoast/Boston area.
  </tt>


  <!-- Education -->
  <t>My education spanned 5 years and 2 schools</t>

  <div class="box-shadow blk-lg odd small">
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

  <div class="box-shadow blk-lg even small">
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


  <!-- Experience -->
  <t>my work experience includes titles like</t>

  <blk-lg
    class="odd"
    category="designer"
    title="In house designer"
    subtitle="Minuteman Press Dartmouth, May 2017-present"
    description="Took over design and print prep work enabling staff to go on more in-person sales &amp; customer service calls">
  </blk-lg>

  <blk-lg
    class="even"
    category="photographer"
    title="Staff photographer"
    subtitle="Horizons Inc, 2014-2016"
    description="Photographed campers, creating a varied database of photos used for promotions, social media, and to capture and preserve the memories made at camp">
  </blk-lg>

  <blk-lg
    class="odd bump"
    category="photojournalist"
    title="Freelance photographer"
    subtitle="The Chronicle Newspaper, 2012-2015"
    description="Consistently delivered engaging, high-quality human interest photos for use as standalone features or to go with stories">
  </blk-lg>

  <!-- <blk-lg class="abt-body-3"
    category="designer"
    title="Marketing intern"
    subtitle="Quinebaug Valley Community College, Fall 2014"
    description="Designed posters and other materials for clubs and school even smallts working in concert with the marketing director">
  </blk-lg> -->

  <blk-lg
    class="even"
    title="Volunteer"
    subtitle="Windham Area Interfaith Ministry, Jun-Oct 2013"
    description="Volunteered over 200 hours at local organization that supports underprivileged families">
  </blk-lg>


  <!-- Awards -->
  <t>I received an award for</t>

  <blk-lg
    class="odd"
    category="photojournalist"
    title="Excellence in journalism"
    subtitle="Society of Professional Journalists, 2014"
    description="Received 3rd place statewide for news photo in a newspaper with under 18,000 circulation"/>


  <!-- Programs -->
  <t>and am a pro with industry standard programs like</t>

  <blk-sm class="odd small" title="Il" description="Adobe Illustrator"/>

  <blk-sm class="even small" title="Id" description="Adobe Indesign"/>

  <blk-sm class="odd small" title="Lr" description="Adobe Lightroom"/>

  <blk-sm class="even small" title="Ps" description="Adobe Photoshop"/>


  <!-- More -->
  <t>plus I can work with</t>

  <blk-sm class="odd small" title="Ae" description="Adobe After Effects"/>

  <blk-sm class="even small" title="At" description="Atom Text Editor"/>

  <blk-sm class="odd small" title="Au" description="Adobe Audition"/>

  <blk-sm class="even small" title="Bs" description="Bootstrap Framework"/>

  <blk-sm class="odd small bump" title="C4D" description="Cinema 4D"/>

  <blk-sm class="even small" title="CSS" description="Cascading Style Sheets"/>

  <blk-sm class="odd small" title="HTML" description="Hooking up Those Massive Logos"/>

  <blk-sm class="even small" title="Pr" description="Adobe Premiere Pro"/>


  <!-- Meta -->
  <t>I built this website using</t>

  <blk-sm class="odd small" title="At" description="Atom Text Editor"/>

  <blk-sm class="even small" title="HTML+CSS" description="HyperText Markup Language + Cascading Style Sheets"/>

  <blk-sm class="odd small" title="Is" description="Isotope.js"/>

  <blk-sm class="even small" title="Nuxt.js" description="Vue.js, but SSR!"/>

  </section>
</template>

<script>
import t from '~/components/textH2.vue'
import tt from '~/components/textH3.vue'
import blkLg from '~/components/blockLarge.vue'
import blkSm from '~/components/blockSmall.vue'
export default
{
  // Head content all up in here
  name: 'about',
  data: function ()
  {
    return {
      title: 'About'
    }
  },
  head()
  {
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
  components:
  {
    t,
    tt,
    blkLg,
    blkSm,
  }
}
</script>
