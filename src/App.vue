<template>
  <div class="app">
    <h1>Страница с постами</h1>
    <div class="app_btns">
      <my-button @click="showDialog" class="btn">Создать пост</my-button>
      <my-select v-model="selectedSort" :options="sortOptions"/>
    </div>
    <my-dialog v-model:show="dialogVisible">
      <post-form @create="createPost" />
    </my-dialog>
    <post-list :posts="posts" @remove="deletePost" v-if="isPostsLoading" />
    <div v-else>Идёт загрузка...</div>
  </div>
</template>

<script>
import PostForm from "@/components/PostForm.vue";
import PostList from "@/components/PostList.vue";
import MyDialog from "@/components/UI/MyDialog.vue";
import MySelect from "@/components/UI/MySelect.vue";
import axios from "axios";
export default {
  components: {
    PostForm,
    PostList,
    MyDialog,
    MySelect,
  },

  data() {
    return {
      posts: [],
      dialogVisible: false,
      modificatorValue: "",
      isPostsLoading: false,
      selectedSort:'',
      sortOptions: [
        {value: 'title', name: 'По названию'},
        {value: 'body', name: 'По содержимому'},
      ]
    };
  },
  methods: {
    createPost(post) {
      this.posts.push(post);
      this.dialogVisible = false;
    },
    deletePost(post) {
      this.posts = this.posts.filter((p) => post.id !== p.id);
    },

    showDialog() {
      this.dialogVisible = true;
    },
    async fetchPosts() {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/todos?_limit=10"
        );
        console.log(response);
        this.posts = response.data;
      } catch (error) {
        alert("Ошибка");
      } finally {
        this.isPostsLoading = true;
      }
    },
  },
  mounted() {
    this.fetchPosts();
  },
};
</script>

<style scoped>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
.app {
  padding: 20px;
}
.btn {
  margin-top: 20px;
}
.app_btns {
  display: flex;
  justify-content: space-between;
}
</style>
