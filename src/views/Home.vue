<template>
  <div class="home">
    <h1>Home</h1>
    <PostList :posts="posts" />
  </div>
</template>

<script>
import { ref } from 'vue';
import PostList from '../components/PostList.vue';

export default {
  name: 'Home',
  components: { PostList },
  setup() {
    const posts = ref([
      {
        title: 'welcome to the blog',
        body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore cum voluptates a, commodi molestiae esse delectus, explicabo ea nam quasi quia sunt, omnis ipsam accusamus iusto minus accusantium reiciendis provident. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam soluta reiciendis maiores aut atque aliquid repellendus, pariatur, quam a labore ab explicabo laudantium vero debitis unde blanditiis assumenda dolorem. Ratione. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod voluptate aspernatur officiis blanditiis qui velit maiores omnis fuga est natus molestiae, repellat beatae maxime ab voluptatibus? Delectus repellendus aliquid quaerat. Lorem ipsum dolor sit amet consectetur adipisicing elit. A iusto blanditiis maxime, expedita natus praesentium, repellat adipisci, aliquid est maiores vero eius laudantium vel excepturi alias voluptatum nemo id suscipit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta corporis cumque facilis, eum, suscipit nam blanditiis iure a necessitatibus modi fugit ea dicta deleniti, tenetur dignissimos molestias dolorum delectus quod!',
        id: 1,
      },
      { title: 'top 5 css tips', body: 'Lorem ipsum', id: 2 },
    ]);

    return { posts };
  },
};
</script>
