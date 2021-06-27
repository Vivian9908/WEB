<template>
  <div class="home">

    <h1>Welcome to our new recipe website.</h1>
    <h1>We hope you'll enjoy it!</h1>

    <ROTD msg="" />

  </div>
</template>

<script>
import ROTD from '@/components/randomRecipe.vue'

export default {
  name: 'Home',
  components: {
    ROTD
  }
}
</script>
