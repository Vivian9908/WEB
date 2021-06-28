<template>
  <div class="Finder">
    <div class="Info">
       <h1>Recipe finder</h1>

      <p>
        On this site, you are able to select ingredients your still have at home.
        Then by pressing on the searchbutton we will get a recipe, <br> wich will
        include all of thoses ingredients. (sometimes there will be other
        ingredients includeed in the rcipe)
      </p>
    </div>
    <find msg="" />
  </div>
</template>

<script>
// get recipe by ingredients
import find from '@/components/findRecipe.vue'

export default {
  name: 'Finder',
  components: {
    find
  }
}
</script>
