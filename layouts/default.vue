<template>
  <div>
    <nav class="uk-navbar-container" uk-navbar>
      <!-- LINKS NAV SECTION -->
      <div class="uk-navbar-center">
        <div class="uk-navbar-center-left">
          <a class="uk-navbar-item uk-logo" href="/"><app-logo/></a>
        </div>
        <ul class="uk-navbar-nav">
          <li>
              <a href="#" style="cursor: default;">Articles</a>
              <div class="uk-navbar-dropdown">
                  <ul class="uk-nav uk-navbar-dropdown-nav">
                      <!--<li><a href="/articles/city">Hanoï city</a></li>
                      <li><a href="/articles/project">The project</a></li>-->
                      <li><a href="/articles/demoday">Demo Day 2018</a></li>
                      <li><a href="/articles/masterMPIE">Master MPIE</a></li>
                      <li class="uk-nav-divider"></li>
                      <li v-for="organism in this.$store.getters.allOrganism" v-bind:key="organism.id">
                        <a v-bind:href="'/organism/' + organism.id">{{organism.name}}</a>
                      </li>
                  </ul>
              </div>
          </li>
          <li><a href="/map">Map</a></li>
          <li>
              <a href="/organism/">Organism</a>
              <div class="uk-navbar-dropdown">
                  <ul class="uk-nav uk-navbar-dropdown-nav">
                      <li><a href="/organism/incubators">Incubators</a></li>
                      <li><a href="/organism/accelerators">Accelerators</a></li>
                      <li><a href="/organism/startup">Start-up</a></li>
                      <li><a href="/organism/coworkingspace">Co-working space</a></li>
                  </ul>
              </div>
          </li>
          <li><a href="/aboutus/">About us</a></li>
        </ul>
      </div>
    </nav>
    <nuxt/>
  </div>
</template>

<script>
import AppLogo from '~/components/AppLogo.vue'

export default {
  components: {
    AppLogo
  }
}
</script>

<style>

.uk-navbar-center-left {
  margin-right: 40%;
}

html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*, *:before, *:after {
  box-sizing: border-box;
  margin: 0;
}

p {
  text-align: justify;
}

</style>
