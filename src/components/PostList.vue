<template>
  <div v-if="posts.length > 0">
    <h4>Список постов</h4>
    <post-item
      class=""
      v-for="post in posts"
      v-bind:key="post.id"
      :post="post"
      @delete="this.$emit('remove', post)"
    />
  </div>
  <div v-else>
    <h2 style="color: red">Список постов пуст.</h2>
  </div>
</template>
<script>
import PostItem from "./PostItem.vue";
export default {
  components: { PostItem },
  props: {
    posts: {
      type: Array,
      required: true,
    },
  },
};
</script>
<style scoped>
</style>