<template>
  <div class="home">
  <h1>
    Welcome to our new recipe website.
    <br>
    We hope you'll enjoy it!
    </h1>

  <div class="Info">

    <p>On this website you can find all necessary information about our site.</p>

    <p>Purpose of our application: <br> We of dailybread developed this site to increase the variety
     in our foodconsumption in our daily lives. </p>

    <p>On this site, right below this tex, we will find one of our
     recommended recipes,<br> with the Shuffle button the recipe will chage into
     another highly recommended recipe. <br> (above you will fin the menu whre you can switch between differnt fuctions)
    </p>
  </div>

    <ROTD msg="" />

  </div>
</template>

<script>
// get random recipe
import ROTD from '@/components/randomRecipe.vue'

export default {
  name: 'home',
  components: {
    ROTD
  }
}
</script>
