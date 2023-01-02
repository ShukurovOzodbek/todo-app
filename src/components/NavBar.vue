<template>
  <div class="nav">
    <div class="main-nav">
      <div class="left">
        <router-link to="/"><h2>TODO</h2></router-link>
      </div>
      <div class="right">
        <router-link to="/">Home</router-link>
        <router-link :to="{ name: 'todos' }">Todos</router-link>
        <router-link :to="{ name: 'done' }">Done</router-link>
        <router-link :to="{ name: 'notDone' }">Not Done</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.nav {
  display: flex;
  justify-content: space-between;
  background: #f1f1f1;
  width: 100%;
  justify-content: center;
}
.main-nav {
  width: 90%;
  display: flex;
  justify-content: space-between;
  padding: 20px;
}
.right{
    display: flex;
    gap: 20px;
}
.left a{
    color: orange;
    text-decoration: none;
}
.right a{
    color: orange;
    text-decoration: none;
    font-size: 18px;
    font-weight: 600;
}
.right .router-link-exact-active{
    color: #424242c4;
}
</style>