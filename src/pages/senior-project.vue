<template lang="html">
  <section id="senior-project">
    <!-- 01 -->
    <t>for his final semester of graphic design Jonathan made
    </t>
    <tt>An information package for the UMass Dartmouth graphic design program, to introduce students to the program, prepare them for the experience, and promote community.</tt>

    <!-- 02 -->
    <img-one name="senior project" category="design" img-number="01"></img-one>
    <tt>A problem was identified. There is an inverse relationship between technological advancement and infrastructure and a country’s strength of community. In essence, citizens of more technologically advanced countries are less likely to feel a
      sense of or be a part of a community.<br/>
      <br/>The decision was made to focus on strengthening the sense of community amongst accepted and incoming students by giving them the tools needed to improve on the foundations laid by preceding generations of students.</tt>

    <!-- 03 -->
    <img-one name="senior project" category="design" img-number="04"></img-one>
    <img-one name="senior project" category="design" img-number="02"></img-one>
    <tt>The package is composed of seven 24x36 inch folded pieces. There is one piece that contains the table of contents with short bios on each participating student and six pieces that contain real student work and interviews collected from the six
      participants.
    </tt>

    <!-- 04 -->
    <img-one name="senior project" category="design" img-number="20"></img-one>
    <img-one name="senior project" category="design" img-number="11"></img-one>
    <tt>All seven pieces were printed on different types of paper. Each piece of paper was chosen to match personality traits or aesthetic style of the student. Seven different papers with different combinations of surface appearance / texture / color
      were selected. No paper was used more than once.</tt>

    <!-- 05 -->
    <img-two name="senior project" category="design" img-number1="07" img-number2="18"></img-two>
    <img-one name="senior project" category="design" img-number="33"></img-one>
    <img-two name="senior project" category="design" img-number1="34" img-number2="35"></img-two>

    <tt>Each student piece contains an edited interview with a selection of that student's work. The selected work shows a wide range of pieces designed both in and out of class, and captions show which year/class/professor each piece was designed with
      when applicable.<br/>
      <br/>The front shows a brief rundown of topics the student talks about, as shown in the table of contents, their fist initial, and a very short bio. On the back students had more room to speak about their senior project and goals after graduating as
        well as showcase a few more pieces of work.<br/>

      <br/>In addition, the back contained a number of resources relating to the content of the interview and a colophon specifying typefaces and paper type, for the graphic design nerds. All pieces use the same body type, but each has its own header typeface.
    </tt>

    <!-- 06 -->
    <img-one name="senior project" category="design" img-number="27"></img-one>
    <img-one name="senior project" category="design" img-number="12"></img-one>
    <img-one name="senior project" category="design" img-number="14"></img-one>

    <tt>The interview questions were designed to draw responses about the experience and sense of community with the UMassD graphic design program and UMassD as a whole, as well as a positive and negative critique of the experience.<br/>
      <br/>The inside/back of each piece displayed a large poster of each student's work. To prevent waste, students who receive the informational package are encouraged to use the posters to decorate dorms and apartments.<br/>
      <br/>To fully appreciate the entire project in person, or to see a digital copy of the process book, please hit the contact button.</tt>

    <home-btn></home-btn>
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
