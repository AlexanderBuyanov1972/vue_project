<template>
  <div>
    <h1>Страница с постами</h1>
    <!-- <h1>{{$store.state.post.limit}}</h1>
    <h1>Loading... {{$store.commit('post/setLoading')}}</h1> -->
    <my-input v-focus :model-value="searchQuery" @update:model-value="setSearchQuery" placeholder="Search..." />
    <div class="app_btns">
      <my-button @click="showDialog" class="btn">Создать пост</my-button>
      <my-select :model-value="selectedSort" @update:model-value="setSelectedSort" :options="sortOptions" />
    </div>
    <my-dialog v-model:show="dialogVisible">
      <post-form @create="createPost" />
    </my-dialog>
    <post-list
      :posts="sortedAndSearchedPosts"
      @remove="deletePost"
      v-if="!isPostsLoading"
    />
    <div v-else>Идёт загрузка...</div>
    <div ref="observer" class="observer"></div>
    <div v-intersection="loadMorePosts" class="observer"></div>
    <div class="page-wrapper">
      <div
        v-for="pageNumber in totalPages"
        :key="pageNumber"
        class="page"
        :class="{
          'current-page': page === pageNumber,
        }"
        :style="{}"
        @click="changePage(pageNumber)"
      >
        {{ pageNumber }}
      </div>
    </div>
  </div>
</template>
 

<script>
import PostForm from "@/components/PostForm.vue";
import PostList from "@/components/PostList.vue";
import MyDialog from "@/components/UI/MyDialog.vue";
import MySelect from "@/components/UI/MySelect.vue";
import { mapState, mapGetters, mapActions, mapMutations } from "vuex";

export default {
  components: {
    PostForm,
    PostList,
    MyDialog,
    MySelect,
  },

  data() {
    return {
      dialogVisible: false,
    };
  },
  methods: {
    ...mapMutations({
      setPage: "post/setPage",
      setSearchQuery: "post/setSearchQuery",
      setSelectedSort: "post/setSelectedSort",
    }),
    ...mapActions({
      fetchPosts: "post/fetchPosts",
      loadMorePosts: "post/loadMorePosts",
    }),
    createPost(state, post) {
      state.post.posts.push(post);
      this.dialogVisible = false;
    },
    deletePost(post) {
      this.posts = this.posts.filter((p) => post.id !== p.id);
    },

    showDialog() {
      this.dialogVisible = true;
    },
  },

  mounted() {
    this.fetchPosts();
  },
  // вычислитель свойств computed, называем функцию как угодно
  computed: {
    ...mapState({
      posts: (state) => state.post.posts,
      isPostsLoading: (state) => state.post.isPostsLoading,
      selectedSort: (state) => state.post.selectedSort,
      searchQuery: (state) => state.post.searchQuery,
      page: (state) => state.post.page,
      limit: (state) => state.post.limit,
      totalPages: (state) => state.post.totalPages,
      sortOptions: (state) => state.post.sortOptions,
    }),
    ...mapGetters({
      sortedPosts: "post/sortedPosts",
      sortedAndSearchedPosts: "post/sortedAndSearchedPosts",
    }),
  },
  // функция наблюдатель watch меняет свой результат когда меняет своё значение модель selectedSort,
  // функция называется строго именем модели
  watch: {},
};
</script>


<style scoped>
.btn {
  margin-top: 20px;
}
.app_btns {
  display: flex;
  justify-content: space-between;
}

.page-wrapper {
  display: flex;
  margin-top: 15px;
}
.page {
  border: 1px solid black;
  padding: 10px;
}
.current-page {
  border: 2px solid teal;
}
/* intersection observer api */
.observer {
  height: 30px;
  background: green;
}
</style>
