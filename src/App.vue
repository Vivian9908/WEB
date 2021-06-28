<template>
  <div id="app">

    <div id="head">
      <h1>DailyBread</h1>
    </div>

    <div id="nav">
      <router-link id="home" to="/">Home</router-link>
      <router-link id="finder" to="/recipeFinder">Recipe finder</router-link>
      <router-link id="Calculator" to="/recipePriceCac"
        >Recipe price calculation</router-link
      >
    </div>
    <router-view />

    <div id="footer">
      <p class="key">Contact:</p>
      <p>Vivian Petkovsek und Niclas Schweizer</p>
      <p>RWU - Doggenriedstraße - 88250 Weingarten</p>
      <p class="key">PhoneNr.:</p>
      <p> 0751 5010</p>
      <p class="key">Email:</p>
      <p> Vivian.petkovsek@hs-weingarten.de / Niclas.schweizer@hs-weingarten.de</p>
    </div>

    <div class="sidenav">
      <Jokes msg="" />
    </div>

  </div>
</template>

<script>
import Jokes from './components/Jokes.vue'

export default {
  name: 'sidenav',
  components: {
    Jokes
  }
}
</script>

<style>
body {
  text-align: center;
  margin: 0px;
  background-color: rgb(206, 228, 231);
}
#app {
  font-family: 'Arimo' ;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #000000;
}

#head {
  height: 100px;
  border-bottom: black solid 2px;
}

#head h1 {
  color: black;
  font-style: bold;
  text-align: left;
  margin: 45%;
  margin-top: 50px;
  margin-bottom: 15px;
  font-size: 200%;
  display: inline-block;
  font-family: "Courier New", Courier, monospace;
}
#nav a {
  font-weight: bold;
  color: black;
  height: 40px;
  width: 33.33%;
  display: inline-block;
  text-align: center;
  text-decoration: none;
  padding-top: 20px;
  border-bottom: black solid 2px;
  font-family: "Courier New", Courier, monospace;
}

#nav a.router-link-exact-active {
  color: rgba(146, 139, 139, 0.685);
  font-style: italic;
  font-weight: bold;
}

#footer {
  left: 0;
  bottom: 0;
  height: 50px;
  width: 100%;
  width: 100%;
  text-align: center;
  border-top: black solid 2px;
  position: static;
  font-family: Arial, Helvetica, sans-serif;
  line-height: 2px;
}
#footer a {
  font-weight: bold;
  color: black;
  height: 40px;
}
.key{
  font-weight: bold;
}
/* von W3schools */
.sidenav {
  height: 100%;
  width: 13%;
  position: absolute;
  z-index: 1;
  top: 20%;
  float:left;
  overflow-x: hidden;
  text-align: center;
}
.sidenav a {
  text-decoration: none;
  font-size: 25px;
  color: #818181;
  display: block;
}
</style>
