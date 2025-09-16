<template>
  <div id="app">
    <b-navbar
      toggleable="lg"
      type="dark"
      sticky
      style="background-color: #4b2e83"
    >
      <b-navbar-brand href="#/">Anant Mittal</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <!-- <b-nav-item href="#/publications">
            <strong style="color: white"> Publications </strong>
          </b-nav-item> -->
          <b-nav-item href="https://github.com/anantmittal/" target="_blank">
            <strong style="color: white"> GitHub </strong>
          </b-nav-item>
          <b-nav-item href="/assets/Resume.pdf" target="_blank">
            <strong style="color: white"> Resume </strong>
          </b-nav-item>
          <b-nav-item href="/assets/CV.pdf" target="_blank">
            <strong style="color: white"> CV </strong>
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {};
  },
  methods: {},
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  line-height: 1.33;
}
.navbar {
  margin-bottom: 50px;
}
</style>
