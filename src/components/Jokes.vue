<template>
  <div class="Joke">

    <h4>Need a laugh? Press the button!</h4>
    <p>{{ getJoke["text"] }} </p>
    <button @click="JokeButtonHandler">new Joke</button>

    <br />

    <h4>Hit the button to learn something!</h4>
    <p>{{ getTrivia["text"] }}</p>
    <button @click="TriviaButtonHandler">new Trivia</button>

  </div>
</template>
<script>
/*eslint-disable*/
// import axios from "axios";
import axios from "axios";
export default {
  data: function () {
    return {
      getJoke: [],
      getTrivia: [],

      // apiKeys: 'b3c625b11e164184811ae35c1bb092ee'
      // 11e91f20e6504df3b2ff755941cfabef
      // 39cfd85581994d5e9e982129cccdb30d
    };
  },

  methods: {

    JokeButtonHandler: function () {
      axios
        .get(
          "https://api.spoonacular.com/food/jokes/random?apiKey=b3c625b11e164184811ae35c1bb092ee"
        )
        .then((response) => 
        (this.getJoke = response.data)
        );
    },

    TriviaButtonHandler: function () {
      axios
        .get(
          " https://api.spoonacular.com/food/trivia/random?apiKey=b3c625b11e164184811ae35c1bb092ee"
        )
        .then((response) => 
        (this.getTrivia = response.data)
        );
    },
  },
};
</script>