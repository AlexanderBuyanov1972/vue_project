<template>
  <div class="post">
    <div>
      <div><strong>id: </strong>{{ post.id }}</div>
      <div><strong>Название: </strong>{{ post.title }}</div>
      <div><strong>Описание: </strong>{{ post.body }}</div>
    </div>
    <div class="post_btn">
      <my-button @click="$emit('delete', post)">Удалить</my-button>
      <my-button @click="$router.push(`/posts/${post.id}`)">Открыть</my-button>
    </div>
  </div>
</template>
<script>
export default {
  components: {},
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
  methods: {},
};
</script>
<style scoped>
.post_btn {
  padding: 0px;
  margin: 0px;
  display: flex;
}
.post {
  padding: 15px;
  margin-top: 15px;
  border: 2px solid teal;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>