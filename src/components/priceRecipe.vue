<template>
  <div class="Calculator">
    <!-- input id -->
    <input v-model="Id" placeholder="Id of your recipe" id="Txtfield2" /><br />
    <button @click="IdButtonHandler" class="btnSearch">Search</button>
    <p>{{ Id }}</p>

    <!-- get titlle and recipe -->
    <div v-if="showtitle">
      <h2>{{ NamegetRecipe["title"] }}</h2>
      <div class="price">
        <table class="priceTable">
          <tr
            v-for="ingredients in getRecipe['ingredients']"
            v-bind:key="ingredients"
          >
            <td>{{ ingredients.name }}</td>
            <td>{{ ingredients.price }} ct</td>
          </tr>
        </table>
      </div>
      <p>Total price: {{ getRecipe["totalCost"] }}</p>
      <button @click="getButtonHandler(getRecipe['totalCost'])" class="btn1">In $</button>
      <!-- convert to $ -->
      <div class="Dollar" v-if="total">
        <p>{{ totalCost }} $</p>
      </div>
    </div>
  </div>
</template>
<script>
/*eslint-disable*/
import axios from "axios";
export default {
  data: function () {
    return {
      Id: [],
      getRecipe: [],
      NamegetRecipe: [],
      totalCost: [],
      showtitle: false,
      total: false,
    };
  },

  methods: {
    IdButtonHandler: function () {
      var id = this.Id;
      axios
        .get(
          "https://api.spoonacular.com/recipes/" +
            id +
            "/priceBreakdownWidget.json?apiKey=39cfd85581994d5e9e982129cccdb30d"
        )
        .then((response) => (this.getRecipe = response.data));

      axios
        .get(
          "https://api.spoonacular.com/recipes/" +
            id +
            "/information?apiKey=39cfd85581994d5e9e982129cccdb30d"
        )
        .then((response) => (this.NamegetRecipe = response.data));
      this.showtitle = true;
      return this.showtitle;
    },

    getButtonHandler: function (totalCost) {
      this.totalCost = totalCost / 100;
      this.total = true;
      return { totalCost, total };
    },
  },
};
</script>
