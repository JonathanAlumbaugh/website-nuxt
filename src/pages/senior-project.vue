<template lang="html">
  <section id="senior-project">

    <!-- 01 -->
    <t class="sp-int-1">The capstone graphic design course in my program was self-directed</t>

    <tt class="sp-body-1">I created an information package for the UMass Dartmouth graphic design program intended to introduce prospective students to the program, prepare them for the experience, and promote cognizant community engagement.</tt>


    <!-- 02 -->
    <div class="spacer-1"></div>

    <img-one class="sp-img-1" name="senior project" category="design" img-number="04"/>
    <img-one class="thmb-1" name="senior project" category="design" img-number="01"/>
    <img-one class="thmb-2" name="senior project" category="design" img-number="02"/>

    <caption class="capt-1">
      Leonard Mlodinow. <a
      href="https://blogs.scientificamerican.com/streams-of-consciousness/the-importance-of-being-social/">
      &#8220;<span>The Importance of Being Social</span>&#8221;</a> <em>Streams of Consciousness</em>,
      Scientific American. Accessed 11/08/17.
    </caption>

    <tt class="sp-body-2">A country's strength of community is inversely related to technological advancement and infrastructure. Citizens of more technologically advanced countries are less likely to feel a sense of or be a part of a community.<br />

    <br /> I decided to focus on strengthening the sense of community amongst accepted and incoming students by attempting to give them the tools needed to improve on the foundations laid by preceding generations of students.</tt>


    <!-- 03 -->
    <div class="spacer-2"></div>

    <img-one class="sp-img-2" name="senior project" category="design" img-number="11"/>
    <img-one class="thmb-3" name="senior project" category="design" img-number="20"/>

    <tt class="sp-body-4">All seven pieces were printed on different types of paper. Each piece of paper was chosen to match personality traits or aesthetic style of the student. Seven different papers with different combinations of surface appearance / texture / color were selected. No paper was used more than once.<br />

    <br /> The package is composed of seven 24x36 inch folded pieces. There is one
    piece that contains the table of contents with short bios on each participating student and six pieces that contain real student work and interviews I conducted with the six participants.</tt>


    <!-- 04 -->
    <div class="spacer-3"></div>

    <img-one class="sp-img-3" name="senior project" category="design" img-number="33"/>
    <img-two class="thmb-4" name="senior project" category="design" img-number1="08" img-number2="18"/>
    <img-two class="thmb-5" name="senior project" category="design" img-number1="34" img-number2="35"/>

    <tt class="sp-body-5">Each student piece contains an edited interview with a selection of that student's work. The selected work shows a wide range of pieces designed both in and out of class, and captions show which year/class/professor each piece was designed with when applicable.<br />

    <br />The front shows a brief rundown of topics the student talks about, their fist initial, and a very short bio. On the back students had more room to speak about their senior project and goals after graduating as well as showcase a few more pieces of work.<br/>

    <br />In addition, the back contained a number of resources relating to the content of the interview and a colophon specifying typefaces and paper type, for the graphic design nerds. All pieces use the same body type, but each has its own header typeface. </tt>


    <!-- 05 -->
    <div class="spacer-4"></div>

    <img-one class="sp-img-4" name="senior project" category="design" img-number="27"/>
    <img-two class="thmb-6" name="senior project" category="design" img-number1="12" img-number2="14"/>

    <tt class="sp-body-6">The interview questions were designed to draw responses about the experience and sense of community with the UMassD graphic design program and UMassD as a whole, as well as a positive and negative critique of the experience.<br />

    <br />The inside/back of each piece displayed a large poster of each student's work. To prevent waste, students who receive the informational package are encouraged to use the posters to decorate dorms and apartments.<br />

    <br />To fully appreciate the entire project in person, or to see a digital copy of the process book, please hit the contact button.</tt>

  </section>
</template>

  <script>
  import projectNav from '~/components/projectNavButtons.vue'
  import t from '~/components/textH2.vue'
  import tt from '~/components/textH3.vue'
  import imgOne from '~/components/projectImgA.vue'
  import imgTwo from '~/components/projectImgB.vue'
  import imgThree from '~/components/projectImgC.vue'
  import homeBtn from '~/components/homeBtn.vue'
  export default {
    // Head content all up in here
    name: 'senior-project',
    data: function () {
      return {
        title: 'Senior project'
      }
    },
    head() {
      return {
        title: this.title,
        meta: [
          {
            hid: 'description',
            name: 'description',
            content: 'Jonathan made an information package for the UMass Dartmouth graphic design program'
          }
        ]
      }
    },
    // /Head content
    components: {
      projectNav,
      t,
      tt,
      imgOne,
      imgTwo,
      imgThree,
      homeBtn
    }
  }
  </script>
