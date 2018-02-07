<template lang="html">
  <section id="senior-project">

    <!-- 01 -->
    <t>A more personal way to choose a school</t>

    <!-- <c>UMass Dartmouth Brochure<br />
    University of Massachusetts, Dartmouth, MA<br />
    Paper<br />
    24 x 36<br />
    2017</c> -->

    <tt>This oversized brochure was created to introduce prospective students to the graphic design program through the people of University of Massachusetts, Dartmouth.</tt>


    <!-- 02 -->
    <img-one name="senior project" category="design" img-number="04"/>
    <img-two name="senior project" category="design" img-number1="01" img-number2="02"/>

    <!-- <caption>
      Leonard Mlodinow. <a
      href="https://blogs.scientificamerican.com/streams-of-consciousness/the-importance-of-being-social/">
      &#8220;<span>The Importance of Being Social</span>&#8221;</a> <em>Streams of Consciousness</em>,
      Scientific American. Accessed 11/08/17.
    </caption> -->

    <tt>Community has been <span v-on:click="isHidden = !isHidden">in decline for decades</span>. Technological advances are as likely to harm a communities as they are to help. For this and other reasons, print was the best choice for this project.<br />

    <br />Choosing a college is difficult. I received a pile of materials from every college I was interested in, and few shared their students' experiences outside of pull quotes or short anectdotes. A student voice is most relatable and authentic to a prospective student.</tt>


    <!-- 03 -->
    <img-one name="senior project" category="design" img-number="11"/>
    <img-one name="senior project" category="design" img-number="20"/>

    <tt>All seven pieces were printed on different types of paper. Each piece of paper was chosen to match personality traits or aesthetic style of the student. Seven different papers with different combinations of surface appearance / texture / color were selected. No paper was used more than once.<br />

    <br /> The package is composed of seven 24x36 inch folded pieces. There is one
    piece that contains the table of contents with short bios on each participating student and six pieces that contain real student work and interviews I conducted with the six participants.</tt>


    <!-- 04 -->
    <img-one name="senior project" category="design" img-number="33"/>
    <img-two name="senior project" category="design" img-number1="08" img-number2="34"/>

    <tt class="sp-body-5">Each student piece contains an edited interview with a selection of that student's work. The selected work shows a wide range of pieces designed both in and out of class, and captions show which year/class/professor each piece was designed with when applicable.<br />

    <br />The front shows a brief rundown of topics the student talks about, their fist initial, and a very short bio. On the back students had more room to speak about their senior project and goals after graduating as well as showcase a few more pieces of work.<br/>

    <br />In addition, the back contained a number of resources relating to the content of the interview and a colophon specifying typefaces and paper type, for the graphic design nerds. All pieces use the same body type, but each has its own header typeface. </tt>


    <!-- 05 -->
    <img-one name="senior project" category="design" img-number="27"/>
    <img-two name="senior project" category="design" img-number1="12" img-number2="14"/>

    <tt>The interview questions were designed to draw responses about the experience and sense of community with the UMassD graphic design program and UMassD as a whole, as well as a positive and negative critique of the experience.<br />

    <br />The inside/back of each piece displayed a large poster of each student's work. To prevent waste, students who receive the informational package are encouraged to use the posters to decorate dorms and apartments.<br />

    <br />To fully appreciate the entire project in person, or to see a digital copy of the process book, please hit the contact button.</tt>

  </section>
</template>

  <script>
  import t from '~/components/textH2.vue'
  import c from '~/components/projectCaption.vue'
  import tt from '~/components/textH3.vue'
  import imgOne from '~/components/projectImgA.vue'
  import imgTwo from '~/components/projectImgB.vue'
  import imgThree from '~/components/projectImgC.vue'
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
      t,
      c,
      tt,
      imgOne,
      imgTwo,
      imgThree,
    }
  }
  </script>
