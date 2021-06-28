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
      <p>0751 5010</p>
      <p class="key">Email:</p>
      <p>
        Vivian.petkovsek@hs-weingarten.de / Niclas.schweizer@hs-weingarten.de
      </p>
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
/* auf jeder Seite angewandt */
body {
  text-align: center;
  margin: 0px;
  background-color: rgb(206, 228, 231);
  color: #000000;
  text-align: center;
}
h1 {
  font-family: "Courier New", Courier, monospace;
  text-align: center;
}
h3 {
  text-align: center;
  margin-left: -25%;
  font-size: 30px;
}
h4 {
  text-decoration: underline;
}
.Info {
  text-align: center;
  margin-top: 50px;
}
#app {
  font-family: "Arimo";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #000000;
}

#head {
  height: 100px;
  border-bottom: black solid 2px;
  margin-left: -4%;
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
/*personalien im footer*/
.key {
  font-weight: bold;
}
/* von W3schools */
.sidenav {
  height: 100%;
  width: 13%;
  position: fixed;
  z-index: 1;
  top: 20%;
  float: left;
  overflow-x: hidden;
  text-align: center;
}
.sidenav a {
  text-decoration: none;
  font-size: 25px;
  color: #818181;
  display: block;
}

/*Buttons*/
.btn {
  border: 2px solid #000000;
  border-radius: 40px;
  height: 25px;
  width: 100px;
}

#btnHome {
  border: 2px solid #000000;
  border-radius: 40px;
  height: 25px;
  width: 100px;
  margin-left: 50%;
  margin-top: 10px;
  margin-bottom: 20px;
}
.btnSearch{
  border: 2px solid #000000;
  border-radius: 40px;
  height: 25px;
  width: 100px;

}
.btn1{
  border: 1px solid #555555;
  border-radius: 40px;
  height: 25px;
  width: 150px;
}
.btn2{
  border: 1px solid #555555;
  border-radius: 40px;
  height: 25px;
  width: 400px;
}
/*Textfields */
#Txtfield1{
  border: 1px solid #555555;
  height: 25px;
  width: 300px;
}
#Txtfield2{
  border: 1px solid #555555;
  height: 25px;
  width: 100px;
}
/* neu in Home.vue */
.recipe {
  margin-top: 5%;
  margin-left: 30%;
  margin-right: 20%;
}
/* neu in findRecipe.vue */
.Choice {
  text-align: center;
  margin-top: 50px;
}
.Suggestedrecipe {
  text-align: center;
}
.List {
  list-style-position: inside;
}
.List li {
  padding: 20px;
}
/*neu in priceRecipe.vue */
.priceTable {
  border-collapse: collapse;
  text-align: center;
}
.priceTable td,
.priceTable th {
  border-collapse: collapse;
  border: 1px solid rgb(12, 10, 10);
  padding: 8px;
}
.price {
  margin-left: 41%;
  position: relative;
 }
.Calculator {
  padding-bottom: 10px;
}

</style>
