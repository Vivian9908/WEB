<template>
  <div class="home">

    <div id="Recipe">

      <h2>{{ getRecipe.data["recipes"][0]["title"] }}</h2>

      <img v-bind:src="getRecipe.data['recipes'][0]['image']" alt="bild" />

      <h3>Ingredients:</h3>
      <ul>
        <li
          v-for="ingredients in getRecipe.data['recipes'][0]['extendedIngredients']"
          v-bind:key="ingredients"
        >
          {{ ingredients.originalString }}
        </li>
      </ul>

      <h3>Analyzed Instructions:</h3>
      <ol>
        <li
          v-for="x in getRecipe.data['recipes'][0]['analyzedInstructions'][0]['steps']"
          v-bind:key="x"
        >
          {{ x.step }}
        </li>
      </ol>

      <button @click="ButtonHandler" id="btn">Shuffle</button>

    </div>

  </div>

</template>

<script>
/*eslint-disable*/
// var ingredientsnumber = 0;

import axios from "axios";
export default {
  data: function () {
    return {
      getRecipe: [],
      // apiKey: 'b3c625b11e164184811ae35c1bb092ee'
      // 11e91f20e6504df3b2ff755941cfabef
    };
  },

  mounted() {
    axios
      .get(
        "https://api.spoonacular.com/recipes/random?apiKey=b3c625b11e164184811ae35c1bb092ee"
      )
      .then((response) => 
      (this.getRecipe = response)
      );
  },

  methods: {

    ButtonHandler: function () {
      axios
        .get(
          "https://api.spoonacular.com/recipes/random?apiKey=b3c625b11e164184811ae35c1bb092ee"
        )
        .then((response) => 
        (this.getRecipe = response)
        );
    },
  },
};

</script>
<style scoped>
h1 {
  text-align: center;
  font-family: "Courier New", Courier, monospace;
  font-size: 25px;
  color: black;
}
</style>
