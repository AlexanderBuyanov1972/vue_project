<template>
  <form @submit.prevent>
    <h4>Создание поста поста</h4>
    <my-input v-focus v-model="post.title" type="text" placeholder="Название" />
    <my-input v-model="post.body" type="text" placeholder="Описание" />
    <my-button class="btn" @click="createPost">Создать пост</my-button>
  </form>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      post: {
        id: "",
        title: "",
        body: "",
      },
    };
  },
  methods: {
    createPost() {
      this.post.id = Date.now();
      this.$emit("create", this.post);
      this.post = {
        id: "",
        title: "",
        body: "",
      };
    },
  },
  // watch: {
  //   post: {
  //    handler(newValue){
  //       console.log(newValue);
  //    },
  //    deep: true
  //   },
  // }
};
</script>
<style scoped>
form {
  display: flex;
  flex-direction: column;
}
.btn {
  margin-top: 15px;
  align-self: flex-end;
}
</style>
