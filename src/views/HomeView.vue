<template>
  <div class="home">
    <form-input :arr="todosArr" />
    <div class="todos">
      <todos-comp :arr="todosArr"/>
    </div>
  </div>
</template>

<script>
import FormInput from "@/components/FormInput.vue";
import { reactive } from '@vue/reactivity';
import TodosComp from '@/components/TodosComp.vue';
export default {
  name: "HomeView",
  components: { FormInput, TodosComp },
  setup(){
    let todosArr = reactive(JSON.parse(localStorage.getItem('arr')) || [])

    return { todosArr }

  }
};
</script>


<style>
.home {
  width: 90%;
  margin: 0 auto;
  padding: 20px;
}
.home form {
  display: flex;
  align-items: center;
  gap: 20px;
}
.home form input {
  padding: 10px;
  width: 300px;
  font-size: 16px;
  outline: none;
  border: 1px solid #c4c4c4;
  border-radius: 10px;
}
.home form button {
  padding: 12px;
  border-radius: 10px;
  color: white;
  border: none;
  width: 130px;
  font-size: 16px;
  background: orange;
  cursor: pointer;
  transition: 0.2s ease;
}
.home form button:hover {
  background: rgb(239, 156, 2);
}
.todos {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  padding-top: 30px;
  gap: 20px;
}
.todo {
  color: #989898;
  padding: 20px;
  background: #f1f1f1;
  width: 18.8%;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  gap: 25px;
}
.todo h3{
  font-size: 25px;
}
.other{ 
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.other input{
  width: 20px;
  height: 20px;
  cursor: pointer;
}
.other span{
  font-size: 18px;
}
</style>