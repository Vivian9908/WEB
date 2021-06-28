<template>
  <div class="Calculator">
    <div class="Info">
      <h1>Recipe price calculator</h1>

      <p>
        On this site, we will be able to calculate the price of a selected
        recipe.
      </p>
      <p bold>
        You need the Id of the recipe (the id of a rcipe can be found next to
        the title of a recipe)
      </p>

      <Calc msg="" />
    </div>
  </div>
</template>
<script>
// get price of ingredients
import Calc from '@/components/priceRecipe.vue'

export default {
  name: 'Calculator',
  components: {
    Calc
  }
}
</script>
