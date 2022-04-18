import { ref } from 'vue';

const getPost = id => {
  const post = ref(null);
  const error = ref(null);

  const load = async url => {
    try {
      let data = await fetch(url + id);
      if (!data.ok) {
        throw Error('that post does not exist');
      }
      post.value = await data.json();
    } catch (err) {
      error.value = err.message;
      console.error(error.value);
    }
  };

  return { post, error, load };
};

export default getPost;
