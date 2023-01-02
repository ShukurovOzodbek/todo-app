<template>
  <div v-for="todo in arr" :key="todo.id" class="todo">
    <h3>{{ todo.title }}</h3>
    <div class="other">
      <span>{{ todo.time }}</span>
      <input type="checkbox" @click="onCheck(todo.id)" :checked="todo.isDone" />
    </div>
  </div>
</template>

<script>
export default {
  props: ["arr"],
  methods: {
    onCheck(id) {
      let arr2 = JSON.parse(localStorage.getItem("arr"));
      console.log(arr2);
      arr2 = arr2.sort(i => {
        if(i.id === id){
            i.isDone = !i.isDone
        }
      })
      localStorage.setItem('arr', JSON.stringify(arr2))
    },
  },
};
</script>

<style>
</style>