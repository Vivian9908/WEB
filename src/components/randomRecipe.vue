<template>
  <div class="home">
    <h2>
      {{ getRecipe.data["recipes"][0]["title"] }} <br />
      Id: {{ getRecipe.data["recipes"][0]["id"] }}
    </h2>

    <img
      v-bind:src="getRecipe.data['recipes'][0]['image']"
      alt="picture (some recipes come without a picture)"
    />

    <h3>Ingredients:</h3>
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

    <h3>Analyzed Instructions:</h3>
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

    <button @click="ButtonHandler" id="btn">Shuffle</button>
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
      .then((response) => (this.getRecipe = response));
  },

  methods: {
    ButtonHandler: function () {
      axios
        .get(
          "https://api.spoonacular.com/recipes/random?apiKey=b3c625b11e164184811ae35c1bb092ee"
        )
        .then((response) => (this.getRecipe = response));
    },
  },
};
</script>
<style scoped>
body {
  color: #000000;
  font-weight: bold;
}
.home {
  margin-top: 5%;
  margin-left: 30%;
  margin-right: 20%;
}

#btn {
  border: 2px solid #000000;
  border-radius: 40px;
  height: 25px;
  width: 100px;
  margin-left: 50%;
  margin-top: 10px;
  margin-bottom: 20px;
}
h2 {
  text-align: center;
  margin-left: -25%;
}
</style>
