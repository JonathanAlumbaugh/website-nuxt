<template lang="html">
    <nuxt-link to="wip" class="main-wip box-shadow">
      <div class="hvrbox wip">
        <img :src="imgPath" :alt="name" class="img-fluid hvrbox-layer_bottom grayscale">
        <div class="hvrbox-layer_top">
          <div class="hvrbox-text">
            <h5>{{ name }}</h5>
            <h4>{{ category }}</h4>
          </div>
        </div>
      </div>
    </nuxt-link>
</template>

<script>
export default
{
  name: 'mainWip',
  props:
  {
    name:
    {
      required: true
    },
    category:
    {
      required: true
    }
  },

  computed:
  {
    imgPath: function ()
    {
      return 'img/' + this.category + '/' + this.name.toLowerCase().replace( / /g, '-' ) + '/' + this.name.toLowerCase().replace( / /g, '-' ) + '-cover' + '.jpg'
    }
  }
}
</script>
