import { ref } from 'vue';

const getPosts = () => {
  const posts = ref([]);
  const error = ref(null);

  const load = async url => {
    try {
      let data = await fetch(url);
      if (!data.ok) {
        throw Error('no data available');
      }
      posts.value = await data.json();
    } catch (err) {
      error.value = err.message;
      console.error(error.value);
    }
  };

  return { posts, error, load };
};

export default getPosts;
