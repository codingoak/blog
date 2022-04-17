<template>
  <div class="home">
    <h1>Home</h1>
    <h2>Refs</h2>
    <p>{{ playerOne.name }} - {{ playerOne.age }}</p>
    <button @click="updatePlayerOne">Update player one</button>
    <h2>Reactive</h2>
    <p>{{ playerTwo.name }} - {{ playerTwo.age }}</p>
    <button @click="updatePlayerTwo">Update player two</button>
  </div>
</template>

<script>
import { ref, reactive } from 'vue';

export default {
  name: 'Home',
  setup() {
    const playerOne = ref({ name: 'John', age: 36 });
    // don't use reactive with primitive types
    const playerTwo = reactive({ name: 'Jane', age: 23 });

    const updatePlayerOne = () => {
      playerOne.value.age = 40;
    };

    const updatePlayerTwo = () => {
      playerTwo.age = 27;
    };

    return { playerOne, updatePlayerOne, playerTwo, updatePlayerTwo };
  },
};
</script>
