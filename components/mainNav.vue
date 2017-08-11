<template lang="html">
  <div class="row">
    <nav class="offset-md-1 col-md-8">
      <ul class="nav nav-inline">
        <!-- Add active class to both li and nuxt-link based on which is active -->
        <li class="nav-item">
          <nuxt-link class="nav-link" exact to="/">home</nuxt-link>
        </li>
        <li class="nav-item">
          <nuxt-link class="nav-link" to="/about">about</nuxt-link>
        </li>
        <li class="nav-item">
          <a class="nav-link" data-toggle="modal" data-target="#contact">contact</a>
        </li>
      </ul>
    </nav>
  </div>
</template>
