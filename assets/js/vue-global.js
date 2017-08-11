// Vue grid items

// end Vue grid items

// Vue one img
Vue.component('vue-img-1', {
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
    imgPath: function () {
      return (
        'img/' +
        this.category +
        '/' +
        this.name.toLowerCase().replace(/ /g, '-') +
        '/' +
        this.name.toLowerCase().replace(/ /g, '-') +
        this.imgNumber +
        '.jpg'
      )
    }
  }
})
// end Vue one img

// Vue two imgs
Vue.component('vue-img-2', {
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
    imgPath1: function () {
      return (
        'img/' +
        this.category +
        '/' +
        this.name.toLowerCase().replace(/ /g, '-') +
        '/' +
        this.name.toLowerCase().replace(/ /g, '-') +
        this.imgNumber1 +
        '.jpg'
      )
    },
    imgPath2: function () {
      return (
        'img/' +
        this.category +
        '/' +
        this.name.toLowerCase().replace(/ /g, '-') +
        '/' +
        this.name.toLowerCase().replace(/ /g, '-') +
        this.imgNumber2 +
        '.jpg'
      )
    }
  }
})
// end Vue two imgs

// Vue three imgs
Vue.component('vue-img-3', {
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
    imgPath1: function () {
      return (
        'img/' +
        this.category +
        '/' +
        this.name.toLowerCase().replace(/ /g, '-') +
        '/' +
        this.name.toLowerCase().replace(/ /g, '-') +
        this.imgNumber1 +
        '.jpg'
      )
    },
    imgPath2: function () {
      return (
        'img/' +
        this.category +
        '/' +
        this.name.toLowerCase().replace(/ /g, '-') +
        '/' +
        this.name.toLowerCase().replace(/ /g, '-') +
        this.imgNumber2 +
        '.jpg'
      )
    },
    imgPath3: function () {
      return (
        'img/' +
        this.category +
        '/' +
        this.name.toLowerCase().replace(/ /g, '-') +
        '/' +
        this.name.toLowerCase().replace(/ /g, '-') +
        this.imgNumber3 +
        '.jpg'
      )
    }
  }
})
// end Vue three imgs
// PROPAGATE VUE-IMG-* WITH
// URLs AND ALT TEXT AUTOMATICALLY
// MAKE THESE DYNAMIC SO I ONLY NEED ONE?
// IE INPUT NUMBER OF IMAGES NEEDED?

// Vue WIP
Vue.component('vue-wip', {
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
    imgPath: function () {
      return (
        'img/' +
        this.category +
        '/' +
        this.name.toLowerCase().replace(/ /g, '-') +
        '/' +
        this.name.toLowerCase().replace(/ /g, '-') +
        '-cover' +
        '.jpg'
      )
    }
  }
})
// end Vue WIP

new Vue({
  el: '#main-vue',
  data: {
    show: true
  }
})
