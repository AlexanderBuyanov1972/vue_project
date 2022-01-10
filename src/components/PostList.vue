<template>
  <div v-if="posts.length > 0">
    <h4>Список постов</h4>
    <transition-group name="post-list">
      <post-item
        class=""
        v-for="post in posts"
        v-bind:key="post.id"
        :post="post"
        @delete="this.$emit('remove', post)"
      />
    </transition-group>
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
.post-list-item {
  display: inline-block;
  margin-right: 10px;
}
.post-list-enter-active,
.post-list-leave-active {
  transition: all 0.5s ease;
}
.post-list-enter-from,
.post-list-leave-to {
  opacity: 0;
  transform: translateX(130px);
  /* transform: translateY(30px); */
}
.post-list-move {
  transition: transform 0.8s ease;
}
</style>