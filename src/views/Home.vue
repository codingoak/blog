<template>
  <div class="home">
    home
    <p ref="p">My name is {{ name }} and my age is {{ age }}</p>
    <button @click="handleClick">click me</button>
    <button @click="age++">add 1 to age</button>
    <input type="text" v-model="name" />
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  name: 'Home',
  setup() {
    let name = ref('Daniel');
    let age = ref(36);

    const handleClick = () => {
      name.value = 'Luigi';
      age.value = 23;
    };

    return { name, age, handleClick };
  },
};
</script>
