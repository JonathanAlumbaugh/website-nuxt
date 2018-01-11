// external js: isotope.pkgd.js

// !-------------------------------------------------------------------------!
// Potential fix for including js files?
// !-------------------------------------------------------------------------!
// if (process.BROWSER_BUILD) {
// const $ = require('jquery/dist/jquery')
$(function () {
  console.log('document ready!')

  // init Isotope
  var $grid = window.$('.grid').isotope({
    itemSelector: '.element-item',
    percentPosition: true,
    Masonry: {
      columnWidth: '.grid-sizer'
    },
    stagger: 40,
    getSortData: {
      name: '.name',
      category: '[data-category]'
    }
  })

  // filter items on button click
  $('#filters').on('click', 'button', function () {
    var filterValue = $(this).attr('data-filter')
    $grid.isotope({
      filter: filterValue
    })
  })

  // change is-checked class on buttons
  $('.button-group').each(function (i, buttonGroup) {
    var $buttonGroup = $(buttonGroup)
    $buttonGroup.on('click', 'button', function () {
      $buttonGroup.find('.btn-outline-primary').removeClass('btn-outline-primary')
      $(this).addClass('btn-outline-primary')
    })
  })

  // filter .metal items
  $grid.isotope({
    filter: '.design'
  })

  // filter .alkali OR .alkaline-earth items
  $grid.isotope({
    filter: '.photography'
  })

  // filter .metal AND .transition items
  $grid.isotope({
    filter: '.photojournalism'
  })

  // show all items
  $grid.isotope({
    filter: '*'
  })

  $grid.imagesLoaded().progress(function () {
    $grid.isotope('layout')
  })
})
