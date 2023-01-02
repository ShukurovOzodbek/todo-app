<template>
  <h1>All Todos</h1>
  <div class="todos">
    <todos-comp :arr="arr" />
  </div>
</template>

<script>
import TodosComp from "@/components/TodosComp.vue";
import { reactive } from "@vue/reactivity";
export default {
  components: { TodosComp },
  setup() {
    let arr = reactive(JSON.parse(localStorage.getItem("arr")) || arr);

    return { arr };
  },
};
</script>

<style scoped>
.todos {
  width: 90%;
  padding: 20px;
  margin: 0 auto;
}
h1{
    color: #c4c4c4;
    width: 90%;
    margin: 0 auto;
    padding: 20px;
}

</style>