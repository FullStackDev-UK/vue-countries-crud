<template>
  <div id="app">
    <img width="5%" src="./assets/logo.png">
    <h1>{{ appName }}</h1>

    <div id="nav">
      <router-link class="nav-link" key="home" to="/" :class="{ 'isActive': 'isActive' }">Home</router-link>
      <router-link
        class="nav-link"
        key="additem"
        to="/additem"
        :class="{ 'isActive': 'isActive' }"
      >Add item</router-link>
    </div>

    <div class="mainPaneSizing">
      <transition name="fade" mode="out-in">
        <router-view></router-view>
      </transition>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "App",
  data() {
    return {};
  },
  methods: {
    init() {
      console.log("Initialising...");
    }
  },
  computed: {
    ...mapState(["appName"])
  },
  mounted() {
    this.init();
  }
};
</script>

<style>
body,
html,
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 20px;
}
#nav {
  text-align: center;
  margin: 10px;
  border-bottom: 3px solid white;
}
.nav-link {
  margin: 10px;
  background-color: #fff;
  padding: 10px 10px 3px 10px;
  -webkit-border-top-left-radius: 10px;
  -webkit-border-top-right-radius: 10px;
  -moz-border-radius-topleft: 10px;
  -moz-border-radius-topright: 10px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

#nav > a {
  text-decoration: none;
}
p {
  color: #fff;
}
#nav > a {
  transition: background-color 0.5s ease;
  background-color: #fff;
  color: #2c3e50;
}
#nav > a:hover,
#nav > a.active {
  background-color: #2c3e50;
  color: #fff;
}
a.router-link-exact-active {
  background-color: #2c3e50 !important;
  color: #fff !important;
}
.mainPaneSizing {
  margin: 20px 10%;
}

h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}

table {
  background-color: #fff;
  -webkit-border-radius: 10px;
  -webkit-border-radius: 10px;
  -moz-border-radius: 10px;
  -moz-border-radius: 10px;
  border-radius: 10px;
  border-radius: 10px;
}
td {
  border-bottom: 1px solid #ddd;
  padding: 5px;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
