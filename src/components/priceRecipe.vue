<template>
  <div class="Calculator">
    <div class="Info">
      <h1>Recipe price calculator</h1>

      <p>On this site, we will be able to calculate the price of a selected recipe.</p>
      <p bold> You need the Id of the recipe (the id of a rcipe can be found next to the title of a recipe)</p>
    </div>

    <input v-model="Id" placeholder="Id of your recipe" />
    <button @click="IdButtonHandler">Search</button>
    <p>{{ Id }}</p>

    <div class="Prices" v-if="f">
      <h2>{{ NamegetRecipe["title"] }}</h2>

      <h3>Ingrediant Price</h3>
      <table
        v-for="ingredients in getRecipe['ingredients']"
        v-bind:key="ingredients"
      >
        <tr>
          <td>
            {{ ingredients.name }}
          </td>
          <td>
            {{ ingredients.price }}
          </td>
        </tr>
      </table>

      <p>Total price: {{ getRecipe["totalCost"] }}</p>
      <button @click="getButtonHandler(getRecipe['totalCost'])">In $</button>

      <div class="Dollar" v-if="z">
        <p>{{ totalCost }} $</p>
      </div>
    </div>
  </div>
</template>
<script>
/*eslint-disable*/
// import axios from "axios";
import axios from "axios";
export default {
  data: function () {
    return {
      Id: [],
      getReceipe: [],
      NamegetReceipe: [],
      totalCost: [],
      f: false,
      z: false,

      // apiKeys: 'b3c625b11e164184811ae35c1bb092ee'
      // 11e91f20e6504df3b2ff755941cfabef
      // 39cfd85581994d5e9e982129cccdb30d
    };
  },

  methods: {
    IdButtonHandler: function () {
      var id = this.Id;
      axios
        .get(
          "https://api.spoonacular.com/recipes/" +
            id +
            "/priceBreakdownWidget.json?apiKey=b3c625b11e164184811ae35c1bb092ee"
        )
        .then((response) => (this.getRecipe = response.data));

      axios
        .get(
          "https://api.spoonacular.com/recipes/" +
            id +
            "/information?apiKey=b3c625b11e164184811ae35c1bb092ee"
        )
        .then((response) => (this.NamegetRecipe = response.data));
      this.f = true;
      return this.f;
    },

    getButtonHandler: function (totalCost) {
      this.totalCost = totalCost / 100;
      this.z = true;
      return { totalCost, z };
    },
  },
};
</script>
