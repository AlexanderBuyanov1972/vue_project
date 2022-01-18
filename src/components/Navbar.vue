<template>
  <div class="navbar">
    <div @click="$router.push('/')">Vue 3</div>
    <div class="btn_navbar">
      <my-button @click="$router.push('/posts')">Posts</my-button>
      <my-button @click="$router.push('/composition')" style="margin-left: 20px"
        >PostsAPI</my-button
      >
      <my-button @click="$router.push('/about')" style="margin-left: 20px"
        >About</my-button
      >
      <my-button @click="$router.push('/store')" style="margin-left: 20px"
        >Store</my-button
      >
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
.navbar {
  height: 50px;
  background: lightgray;
  box-shadow: 2px 2px 4px gray;
  display: flex;
  align-items: center;
  padding: 0px 15px;
}
.btn_navbar {
  margin-left: auto;
}
</style>