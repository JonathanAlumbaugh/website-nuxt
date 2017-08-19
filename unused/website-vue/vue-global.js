// Vue header
Vue.component( 'vue-header', {
     template: `
     <div class="row">
          <div class="col-sm-11 align-middle">
               <h1 class="text-center align-middle">Jonathan Alumbaugh</h1>
          </div>
          <div class="col-sm-1 align-middle">
               <nav class="navbar navbar-toggleable-md navbar-light">
                    <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarExample" aria-controls="navbarExample" aria-expanded="false" aria-label="Toggle navigation">
                      <span class="navbar-toggler-icon"></span>
                    </button>
               </nav>
          </div>
     </div>`
} )
// end Vue header


// Vue nav
Vue.component( 'vue-nav', {
     template: `
     <nav class="navbar navbar-toggleable-md navbar-light">
          <div class="centered">
               <div class="collapse navbar-collapse" id="navbarExample">
                    <ul class="navbar-nav">
                         <li class="nav-item active">
                              <a class="nav-link active" href="index.html">home</a>
                         </li>
                         <li class="nav-item">
                              <a class="nav-link" href="about.html">about</a>
                         </li>
                         <li class="nav-item">
                              <a class="nav-link" data-toggle="modal" data-target="#contact">contact</a>
                         </li>
                    </ul>
               </div>
          </div>
     </nav>`
} )
// MAKE IT CHECK WHAT PAGE YOU'RE ON
// AND RETURN # IF YOU CLICK A LINK
// YOU'RE ALREADY ON
// end Vue nav


// Vue text box 1
Vue.component( 'vue-t', {
     template: `
     <div class="row">
          <div class="col-sm-12">
               <h2><slot></slot></h2>
          </div>
     </div>`
} )
// end Vue text box 1


// Vue text box 2
Vue.component( 'vue-tt', {
     template: `
     <div class="row">
          <div class="offset-md-1 col-md-9 box-shadow mb-80">
               <p><slot></slot></p>
          </div>
     </div>`
} )
// end Vue text box 2


// Vue sort
Vue.component( 'vue-sort', {
     template: `
     <div class="row">
          <div id="filters" class="col-sm-12 button-group">
               <h2>Jonathan &nbsp;<button class="btn btn-secondary btn-sm" data-filter=".design">designs</button>
               <button class="btn btn-secondary btn-sm" data-filter=".photography"> photographs</button>&nbsp; and &nbsp;
               <button class="btn btn-secondary btn-sm" data-filter=".photojournalism"> photojournals</button>
               <button class="btn btn-secondary btn-sm btn-outline-primary" data-filter="*">&#9679;</button>
           </h2>
          </div>
     </div>`
} )
// end Vue sort


// Vue grid
Vue.component( 'vue-grid', {
     template: `
     <div class="row mb-160">
          <div class="offset-md-1 col-sm-9">
               <div id="vue-grid-items" class="grid">
                    <div class="grid-sizer"></div>
                    <slot></slot>
               </div>
          </div>
     </div>`
} )
// end Vue grid


// Vue grid items
Vue.component( 'vue-grid-item', {
     template: `
     <div class="element-item" :class="category" :data-category="category">
        <div class="hvrbox">
            <img :src="imgPath" :alt="name" class="img-autoheight hvrbox-layer_bottom">
            <a :href="href">
                 <div class="hvrbox-layer_top">
                     <div class="hvrbox-text">
                         <h5>{{ name }}</h5>
                         <h4>{{ category }}</h4>
                     </div>
                 </div>
            </a>
        </div>
     </div>`,

     props: {
          name: {
               required: true
          },
          category: {
               required: true
          }
     },

     computed: {
          imgPath: function() {
               return 'img/' + this.category + '/' + this.name.toLowerCase().replace( / /g, '-' ) + '/' + this.name.toLowerCase().replace( / /g, '-' ) + '-cover' + '.jpg'
          },
          href: function() {
               return this.name.toLowerCase().replace( / /g, '-' ) + '.html'
          }
     }
} )
// end Vue grid items


// Vue one img
Vue.component( 'vue-img-1', {
     template: `
     <div class="row">
          <div class="offset-md-1 col-sm-9 box-shadow mb-40">
               <a data-fancybox="gallery" :href="imgPath">
                    <img :src="imgPath" alt="" class="img-fluid hvrbox-layer_bottom grayscale">
               </a>
          </div>
     </div>`,

     props: {
          name: {
               required: true
          },
          category: {
               required: true
          },
          imgNumber: {
               required: true
          }
     },

     computed: {
          imgPath: function() {
               return 'img/' + this.category + '/' + this.name.toLowerCase().replace( / /g, '-' ) + '/' + this.name.toLowerCase().replace( / /g, '-' ) + this.imgNumber + '.jpg'
          }
     }
} )
// end Vue one img


// Vue two imgs
Vue.component( 'vue-img-2', {
     template: `
     <div class="row">
          <div class="offset-md-1 col-md-9">
               <div class="row">
                    <div class="col-sm-6 box-shadow mb-40">
                         <a data-fancybox="gallery" :href="imgPath1">
                              <img :src="imgPath1" alt="" class="img-fluid hvrbox-layer_bottom grayscale">
                         </a>
                    </div>
                    <div class="col-sm-6 box-shadow mb-40">
                         <a data-fancybox="gallery" :href="imgPath2">
                              <img :src="imgPath2" alt="" class="img-fluid hvrbox-layer_bottom grayscale">
                         </a>
                    </div>
               </div>
          </div>
     </div>`,

     props: {
          name: {
               required: true
          },
          category: {
               required: true
          },
          imgNumber1: {
               required: true
          },
          imgNumber2: {
               required: true
          }
     },

     computed: {
          imgPath1: function() {
               return 'img/' + this.category + '/' + this.name.toLowerCase().replace( / /g, '-' ) + '/' + this.name.toLowerCase().replace( / /g, '-' ) + this.imgNumber1 + '.jpg'
          },
          imgPath2: function() {
               return 'img/' + this.category + '/' + this.name.toLowerCase().replace( / /g, '-' ) + '/' + this.name.toLowerCase().replace( / /g, '-' ) + this.imgNumber2 + '.jpg'
          }
     }
} )
// end Vue two imgs


// Vue three imgs
Vue.component( 'vue-img-3', {
     template: `
     <div class="row">
          <div class="offset-md-1 col-md-9">
               <div class="row">
                    <div class="col-sm-4 box-shadow mb-40">
                    <a data-fancybox="gallery" :href="imgPath1">
                         <img :src="imgPath1" alt="" class="img-fluid hvrbox-layer_bottom grayscale">
                    </a>
                    </div>
                    <div class="col-sm-4 box-shadow mb-40">
                    <a data-fancybox="gallery" :href="imgPath2">
                         <img :src="imgPath2" alt="" class="img-fluid hvrbox-layer_bottom grayscale">
                    </a>
                    </div>
                    <div class="col-sm-4 box-shadow mb-40">
                    <a data-fancybox="gallery" :href="imgPath3">
                         <img :src="imgPath3" alt="" class="img-fluid hvrbox-layer_bottom grayscale">
                    </a>
                    </div>
               </div>
          </div>
     </div>`,

     props: {
          name: {
               required: true
          },
          category: {
               required: true
          },
          imgNumber1: {
               required: true
          },
          imgNumber2: {
               required: true
          },
          imgNumber3: {
               required: true
          }
     },

     computed: {
          imgPath1: function() {
               return 'img/' + this.category + '/' + this.name.toLowerCase().replace( / /g, '-' ) + '/' + this.name.toLowerCase().replace( / /g, '-' ) + this.imgNumber1 + '.jpg'
          },
          imgPath2: function() {
               return 'img/' + this.category + '/' + this.name.toLowerCase().replace( / /g, '-' ) + '/' + this.name.toLowerCase().replace( / /g, '-' ) + this.imgNumber2 + '.jpg'
          },
          imgPath3: function() {
               return 'img/' + this.category + '/' + this.name.toLowerCase().replace( / /g, '-' ) + '/' + this.name.toLowerCase().replace( / /g, '-' ) + this.imgNumber3 + '.jpg'
          }
     }
} )
// end Vue three imgs
//PROPAGATE VUE-IMG-* WITH
//URLs AND ALT TEXT AUTOMATICALLY
//MAKE THESE DYNAMIC SO I ONLY NEED ONE?
//IE INPUT NUMBER OF IMAGES NEEDED?


// Vue WIP
Vue.component( 'vue-wip', {
     template: `
     <div class="row mb-160">
          <div class="offset-md-1 col-sm-9 box-shadow">
               <a href="wip.html">
                    <div class="hvrbox wip">
                         <img :src="imgPath" :alt="name" class="img-fluid hvrbox-layer_bottom grayscale">
                         <div class="hvrbox-layer_top">
                              <div class="hvrbox-text">
                                   <h5>{{ name }}</h5>
                                   <h4>{{ category }}</h4>
                              </div>
                         </div>
                    </div>
               </a>
          </div>
     </div>`,

     props: {
          name: {
               required: true
          },
          category: {
               required: true
          }
     },

     computed: {
          imgPath: function() {
               return 'img/' + this.category + '/' + this.name.toLowerCase().replace( / /g, '-' ) + '/' + this.name.toLowerCase().replace( / /g, '-' ) + '-cover' + '.jpg'
          }
     }
} )
// end Vue WIP


// Vue home button
Vue.component( 'vue-home-btn', {
     template: `
     <div class="row">
          <div class="offset-md-1 col-sm-9 text-center mb-160">
               <a href="index.html">
                    <button class="btn btn-secondary btn-sm center btn-outline-primary" data-filter="*"><img src="img/home.svg" alt="home"></button>
                </a>
          </div>
     </div>`
} )
// end Vue home button


// Vue footer
Vue.component( 'vue-footer', {
     template: `
     <footer class="navbar navbar-light box-shadow-bottom">
          <div class="container">
               <h4 class="m-0 text-center">copyright &copy; Jonathan Alumbaugh 2017 / updated Aug 05</h4>
          </div>
     </footer>`
} )
// end Vue footer

// Vue contact
Vue.component( 'vue-contact', {
     template: `
     <div class="modal fade" id="contact" tabindex="-1" role="dialog" aria-labelledby="contact" aria-hidden="true">
          <div class="modal-dialog" role="document">
               <div class="modal-content">
                    <div class="modal-body">
                         <div class="row">
                              <div class="centered col-md-11">
                                   <p>email me at <a href="mailto:jonathan.alumbaugh@gmail.com?Subject=hi!" target="_top"><span class="photojournalist">jonathan.alumbaugh@gmail.com</span></a> or call me at 860 457 8556!</p>
                                   <!--
                                <form action="php/contact.php" method="POST">
                                    <h2>your name</h2>
                                    <input class="input-shadow" type="text" name="name">
                                    <h2>your e-mail</h2>
                                    <input class="input-shadow" type="text" name="email">
                                    <h2>your message</h2>
                                    <textarea class="input-shadow" name="message"></textarea>
                                </form>
                                -->
                              </div>
                         </div>
                    </div>
                    <div class="modal-footer">
                         <button type="submit" class="btn" value="Send" data-dismiss="modal"><p class="input-button">thanks!</p></button>
                         <button type="button" class="btn" data-dismiss="modal"><p class="input-button">never mind</p></button>
                    </div>
               </div>
          </div>
     </div>`
} )
// end Vue contact

new Vue( {
     el: '#main-vue',
     data: {
          show: true
     }
} )
