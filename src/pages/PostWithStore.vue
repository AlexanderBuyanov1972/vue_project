<template>
  <div>
    <h1>Эта страница поста с id = {{ $route.params.id }}</h1>
    <!-- <h1>{{ $store.state.likes }}</h1>
    <h1>{{ $store.getters.doubleLikes }}</h1>
    <h1>
      {{
        $store.state.isAuth ? "User is authorized" : "User is not authorized"
      }}
    </h1>

    <my-button @click="$store.commit('incrementLikes')">Like</my-button>
    <my-button @click="$store.commit('decrementLikes')">Dislike</my-button>
    <my-button @click="$store.commit('isAuthorized')">isAuth</my-button> -->
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
</style> 