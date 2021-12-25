<template>
  <div class="app">
    <form @submit.prevent>
      <h4>Создание поста поста</h4>
      <input
        v-bind:value="title"
        @input="title = $event.target.value"
        class="input"
        type="text"
        placeholder="Название"
      />
      <input
        v-bind:value="body"
        @input="body = $event.target.value"
        class="input"
        type="text"
        placeholder="Описание"
      />
      <button class="btn" @click="createPost">Создать пост</button>
    </form>

    <div class="post" v-for="post in posts" v-bind:key="post.id">
      <div><strong>Название: </strong>{{ post.title }}</div>
      <div><strong>Описание: </strong>{{ post.body }}</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      posts: [
        { id: 1, title: "JS", body: "JS язык программирования" },
        { id: 2, title: "Node JS", body: "Node JS язык программирования" },
        { id: 3, title: "Java", body: "Java язык программирования" },
      ],
      title: "",
      body: "",
    };
  },
  methods: {
    createPost() {
        const newPost = {
            id: Date.now(),
            title:this.title,
            body:this.body,
        }
        this.posts.push(newPost)
        this.title = '',
        this.body = ''
    },
  },
};
</script>

<style scoped>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

.post {
  padding: 15px;
  margin-top: 15px;
  border: 2px solid teal;
}

.input {
  width: 100%;
  border: 2px solid teal;
  padding: 10px 15px;
  margin-top: 10px;
}
.app {
  padding: 20px;
}

form {
  display: flex;
  flex-direction: column;
}

.btn {
  align-self: flex-end;
  margin-top: 15px;
  padding: 10px 15px;
  background: none;
  border: 2px solid teal;
  color: teal;
}
</style>
