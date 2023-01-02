<template>
  <h1>Done Todos</h1>
  <div v-if="arr.length > 0" class="todos">
    <todos-comp :arr="arr" />
  </div>
  <div v-else class="notodos" >
    <h1>(^_^)b</h1>
    <h2>No Done Todos</h2>
  </div>
</template>
  
  <script>
import TodosComp from "@/components/TodosComp.vue";
import { reactive } from "@vue/reactivity";
export default {
  components: { TodosComp },
  setup() {
    let arr = reactive(JSON.parse(localStorage.getItem("arr")) || arr);
    arr = arr.filter(i => i.isDone)
    return { arr };
  },
};
</script>
  
  <style scoped>
.todos, .notodos {
  width: 90%;
  padding: 20px;
  margin: 0 auto;
}
.notodos{
  text-align: center;
}
.notodos h1, h2{
    font-size: 50px;
}
h1, h2{
  color: #c4c4c4;
  width: 90%;
  margin: 0 auto;
  padding: 20px;
}
</style>