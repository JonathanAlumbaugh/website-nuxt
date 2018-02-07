<template lang="html">
  <section id="senior-project">

    <!-- 01 -->
    <t>A more personal way to choose a school</t>

    <!-- <c>UMass Dartmouth Brochure<br />
    University of Massachusetts, Dartmouth, MA<br />
    Paper<br />
    24 x 36<br />
    2017</c> -->

    <tt>This oversized brochure was created to introduce prospective students to the graphic design program through the people of University of Massachusetts, Dartmouth.<br />

    <br />I interviewed a dozen students, selected six interviews, and created editorial spreads for each. The tactile and personal nature of print made paper the best choice for this project.</tt>


    <!-- 02 -->
    <img-one name="senior project" category="design" img-number="04"/>
    <img-two name="senior project" category="design" img-number1="01" img-number2="02"/>

    <!-- <transition-group appear name="custom-classes-transition" enter-active-class="animated fadeIn" leave-active-class="animated fadeOut">
      <caption v-show="!isHidden">
        Leonard Mlodinow.<br />
        <a
        href="https://blogs.scientificamerican.com/streams-of-consciousness/the-importance-of-being-social/">
        &#8220;<br />
        <span>The Importance of Being Social</span>&#8221;</a><br />
        <em>Streams of Consciousness</em>,<br />
        Scientific American. Accessed 11/08/17.
      </caption>
    </transition-group> -->

    <!-- <span v-on:click="isHidden = !isHidden"></span> -->

    <tt>Choosing a college is difficult. I received a pile of materials from every college I was interested in, and few shared their students&rsquo; experiences outside of pull quotes. Why aren&rsquo;t student voices the focus of promotional materials? A strong community and good work are honest testaments to a program&rsquo;s success.<br />

    <br />In this series of brochures, the members of the UMass Dartmouth graphic design major emphasize the strong sense of community in the UMD program. Focusing on six senior students, it seeks to identify with potential incoming students who seek to join the community.</tt>


    <!-- 03 -->
    <img-one name="senior project" category="design" img-number="20"/>
    <img-one name="senior project" category="design" img-number="11"/>

    <tt>Each student section features a short bio, interview, and a selection of her or his work. Three main terms highlight topics of concern: &ldquo;20/20,&rdquo; &ldquo;Connections,&rdquo; &ldquo;CVPA.&rdquo;</tt>


    <!-- 04 -->
    <img-one name="senior project" category="design" img-number="33"/>
    <img-two name="senior project" category="design" img-number1="08" img-number2="34"/>

    <tt>Students also discuss their senior project and goals after graduation. The concluding text provides references and a colophon with design details.</tt>


    <!-- 05 -->
    <img-one name="senior project" category="design" img-number="27"/>
    <img-two name="senior project" category="design" img-number1="12" img-number2="14"/>

    <tt>The brochure is composed of seven 24x36 inch folded signatures. Each signature is printed on a different stock, selected to relate to the student&rsquo;s personality and aesthetic. A consistent text face is used throughout, with headline faces changing with the student. The inside/back of each piece is removable and serves as a poster of each student&rsquo;s work.<br />

    <br />To fully appreciate the entire project in person, or to see a digital copy of the process book, please hit the contact button.</tt>

  </section>
</template>

<script>
import t from '~/components/textH2.vue'
import tt from '~/components/textH3.vue'
import imgOne from '~/components/projectImgA.vue'
import imgTwo from '~/components/projectImgB.vue'
import imgThree from '~/components/projectImgC.vue'
export default {
  // Head content all up in here
  name: 'senior-project',
  data: function () {
    return {
      title: 'Senior project',
      isHidden: true
    }
  },
  head() {
    return {
      title: this.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'An information package for the UMass Dartmouth graphic design program'
      }
    ]
    }
  },
  // /Head content
  components: {
    t,
    tt,
    imgOne,
    imgTwo,
    imgThree,
  }
}
</script>
