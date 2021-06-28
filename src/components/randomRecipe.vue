<template>
  <!-- random recipe -->
  <div class="recipe">
    <h3>
      {{ getRecipe.data["recipes"][0]["title"] }} <br />
      Id: {{ getRecipe.data["recipes"][0]["id"] }}
    </h3>

    <img
      v-bind:src="getRecipe.data['recipes'][0]['image']"
      alt="picture (some recipes come without a picture)"
    />

    <h4>Ingredients:</h4>
    <ul>
      <li
        v-for="ingredients in getRecipe.data['recipes'][0][
          'extendedIngredients'
        ]"
        v-bind:key="ingredients"
        class="analyze"
      >
        {{ ingredients.originalString }}
      </li>
    </ul>

    <h4>Analyzed Instructions:</h4>
    <ol>
      <li
        v-for="x in getRecipe.data['recipes'][0]['analyzedInstructions'][0][
          'steps'
        ]"
        v-bind:key="x"
        class="analyze"
      >
        {{ x.step }}
      </li>
    </ol>

    <button @click="ButtonHandler" id="btnHome">Shuffle</button>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data: function () {
    return {
      getRecipe: []
    }
  },

  mounted () {
    axios
      .get(
        'https://api.spoonacular.com/recipes/random?apiKey=39cfd85581994d5e9e982129cccdb30d'
      )
      .then((response) => (this.getRecipe = response))
  },

  methods: {
    ButtonHandler: function () {
      axios
        .get(
          'https://api.spoonacular.com/recipes/random?apiKey=39cfd85581994d5e9e982129cccdb30d'
        )
        .then((response) => (this.getRecipe = response))
    }
  }
}
</script>
