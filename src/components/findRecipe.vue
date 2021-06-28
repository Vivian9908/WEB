<template>
  <div class="Checkbox">
    <div class="Choice">
      <!-- ingredients choiceboxes -->
      <div class="Beilagen">
        <h2>GARNISH</h2>

        <input type="checkbox" id="pasta" value="pasta" v-model="checkedFood" />
        <label for="pasta">Pasta</label>

        <input
          type="checkbox"
          id="potato"
          value="potato"
          v-model="checkedFood"
        />
        <label for="potato">Potato</label>

        <input type="checkbox" id="rice" value="rice" v-model="checkedFood" />
        <label for="rice">Rice</label>
      </div>

      <div class="vegetables">
        <h2>VEGETABLES</h2>

        <div class="1.row">
          <input
            type="checkbox"
            id="paprika"
            value="paprika"
            v-model="checkedFood"
          />
          <label for="paprika">Paprika</label>

          <input
            type="checkbox"
            id="tomato"
            value="tomato"
            v-model="checkedFood"
          />
          <label for="tomato">Tomato</label>

          <input
            type="checkbox"
            id="lettuce"
            value="lettuce"
            v-model="checkedFood"
          />
          <label for="lettuce">Lettuce</label>

          <input
            type="checkbox"
            id="asparagus"
            value="asparagus"
            v-model="checkedFood"
          />
          <label for="asparagus">Asparagus</label>

          <input
            type="checkbox"
            id="carrots"
            value="carrots"
            v-model="checkedFood"
          />
          <label for="carrots">Carrots</label>
        </div>

        <div class="2.row">
          <input
            type="checkbox"
            id="Mushrooms"
            value="Mushrooms"
            v-model="checkedFood"
          />
          <label for="Mushrooms">Mushrooms</label>

          <input type="checkbox" id="Corn" value="Corn" v-model="checkedFood" />
          <label for="Corn">Corn</label>

          <input
            type="checkbox"
            id="kohlrabi"
            value="kohlrabi"
            v-model="checkedFood"
          />
          <label for="kohlrabi">Kohlrabi</label>

          <input
            type="checkbox"
            id="Onions"
            value="Onions"
            v-model="checkedFood"
          />
          <label for="Onions">Onions</label>

          <input
            type="checkbox"
            id="garlic"
            value="garlic"
            v-model="checkedFood"
          />
          <label for="garlic">Garlic</label>
        </div>

        <div class="3.row">
          <input
            type="checkbox"
            id="pumpkin"
            value="pumpkin"
            v-model="checkedFood"
          />
          <label for="pumpkin">Pumpkin</label>

          <input
            type="checkbox"
            id="broccoli"
            value="broccoli"
            v-model="checkedFood"
          />
          <label for="broccoli">Broccoli</label>

          <input
            type="checkbox"
            id="cauliflower"
            value="cauliflower"
            v-model="checkedFood"
          />
          <label for="cauliflower">Cauliflower</label>

          <input
            type="checkbox"
            id="cucumber"
            value="cucumber"
            v-model="checkedFood"
          />
          <label for="cucumber">Cucumber</label>

          <input type="checkbox" id="Peas" value="Peas" v-model="checkedFood" />
          <label for="Peas">Peas</label>
        </div>
      </div>

      <div class="Meat">
        <h2>MEAT</h2>

        <input
          type="checkbox"
          id="turkey"
          value="turkey"
          v-model="checkedFood"
        />
        <label for="turkey">Turkey</label>

        <input
          type="checkbox"
          id="chicken"
          value="chicken"
          v-model="checkedFood"
        />
        <label for="chicken">Chicken</label>

        <input type="checkbox" id="Beef" value="Beef" v-model="checkedFood" />
        <label for="Beef">Beef</label>

        <input type="checkbox" id="pig" value="pig" v-model="checkedFood" />
        <label for="pig">Pig</label>

        <input type="checkbox" id="lamb" value="lamb" v-model="checkedFood" />
        <label for="lamb">Lamb</label>
      </div>
      <p>Something that you miss?(please make sure to tipe correct!)</p>
      <!-- userdefined search -->
      <div class="search">
        <input
          v-model="keyword"
          placeholder="Missing ingrediant"
          id="Txtfield1"
        /><br />
        <button @click="Buttonkey" class="btn1">Add</button>
        <button @click="clearCheckedFood" class="btn1">
          Clear checked food
        </button>
        <p>Checked food: {{ checkedFood }}</p>
        <button @click="SearchButtonHandler" class="btnSearch">Search</button>
      </div>
      <!-- suggested reipes output -->
      <div class="Suggestedrecipe">
        <ol class="List">
          <li v-for="x in getId['data']" v-bind:key="x">
            {{ x.title }} <br />

            <img v-bind:src="x['image']" alt="bild" /><br />

            <button @click="getButtonHandler(x.id)" value="x.id" class="btn2">
              get Recipe(after clicked you have to scroll down)
            </button>
          </li>
        </ol>
      </div>
    </div>
    <!-- clicked recipe -->
    <div v-if="showrecipe">
      <div class="recipe">
        <h2>{{ getRecipe["title"] }} - Id: {{ getRecipe["id"] }}</h2>

        <img v-bind:src="getRecipe['image']" />

        <h4>Ingredients:</h4>
        <ul>
          <li
            v-for="ingredients in getRecipe['extendedIngredients']"
            v-bind:key="ingredients"
          >
            {{ ingredients.originalString }}
          </li>
        </ul>

        <h4>Analyzedinstructions:</h4>
        <ol>
          <li
            v-for="x in getRecipe['analyzedInstructions'][0]['steps']"
            v-bind:key="x"
          >
            {{ x.step }}
          </li>
        </ol>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data: function () {
    return {
      checkedFood: [],
      getRecipe: [],
      getId: [],
      showrecipe: false
    }
  },

  methods: {
    SearchButtonHandler: function () {
      var food = this.checkedFood
      axios
        .get(
          'https://api.spoonacular.com/recipes/findByIngredients?ingredients=' +
            food +
            '&number=5&ranking=1&apiKey=39cfd85581994d5e9e982129cccdb30d'
        )
        .then((response) => (this.getId = response))
    },

    Buttonkey: function () {
      const key = this.keyword
      this.checkedFood.push(key)
    },

    clearCheckedFood: function () {
      this.checkedFood = []
    },

    getButtonHandler: function (id) {
      axios
        .get(
          'https://api.spoonacular.com/recipes/' +
            id +
            '/information?apiKey=39cfd85581994d5e9e982129cccdb30d'
        )
        .then((response) => (this.getRecipe = response.data))

      this.showrecipe = true
      return this.showrecipe
    }
  }
}
</script>
