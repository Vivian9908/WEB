<template>
  <div class="Joke">

    <h4>Need a laugh? Press the button!</h4>
    <p>{{ getJoke["text"] }} </p>
    <button @click="JokeButtonHandler" class="btn">new Joke</button>

    <br />

    <h4>Hit the button to learn something!</h4>
    <p>{{ getTrivia["text"] }}</p>
    <button @click="TriviaButtonHandler" class="btn">new Trivia</button>

  </div>
</template>
<script>
import axios from 'axios'
export default {
  data: function () {
    return {
      getJoke: [],
      getTrivia: []

    }
  },

  methods: {

    JokeButtonHandler: function () {
      axios
        .get(
          'https://api.spoonacular.com/food/jokes/random?apiKey=39cfd85581994d5e9e982129cccdb30d'
        )
        .then((response) =>
          (this.getJoke = response.data)
        )
    },

    TriviaButtonHandler: function () {
      axios
        .get(
          ' https://api.spoonacular.com/food/trivia/random?apiKey=39cfd85581994d5e9e982129cccdb30d'
        )
        .then((response) =>
          (this.getTrivia = response.data)
        )
    }
  }
}
</script>
