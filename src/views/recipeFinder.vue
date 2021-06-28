<template>
  <div class="Finder">
    <div class="Info">
      <p>
        On this site, we are able to select ingredients we still have at home.
        Then by pressing on the search button we will get a recipe wich will
        include all of thoses ingredients. (sometimes there will be other
        ingredients includeed in the rcipe)
      </p>
    </div>

    <find msg="" />
  </div>
</template>

<script>
import find from '@/components/findRecipe.vue'

export default {
  name: 'Finder',
  components: {
    find
  }
}
</script>
