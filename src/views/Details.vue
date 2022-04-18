<template>
  <div v-if="error">{{ error }}</div>
  <div v-if="post" class="post">
    <h3>{{ post.title }}</h3>
    <p class="pre">{{ post.body }}</p>
  </div>
</template>

<script>
import getPost from '../composables/getPost';

export default {
  props: ['id'],
  setup(props) {
    const { post, error, load } = getPost(props.id);

    load('http://localhost:3000/posts/');

    return { post, error };
  },
};
</script>

<style>
.post {
  max-width: 1200px;
  margin: 5px auto;
  padding: 0 10px;
  border: 1px solid #444;
  border-radius: 5px;
}
.post p {
  color: #444;
  line-height: 1.5em;
  margin-top: 30px;
}
.pre {
  white-space: pre-wrap;
}
</style>
