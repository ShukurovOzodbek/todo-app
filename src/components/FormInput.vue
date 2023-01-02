<template>
  <form @submit="onSubmit">
    <input type="text" placeholder="Type something..." v-model="title" />
    <button>ADD</button>
  </form>
  {{ arr }}
</template>

<script>
import { ref } from "vue";

export default {
  props: ["arr"],
  setup(props) {
    props.arr = JSON.parse(localStorage.getItem("arr")) || [];
    let title = ref("");
    const onSubmit = (e) => {
      e.preventDefault();

      if (title.value) {
        let obj = {
          id: Math.floor(Math.random() * 100000),
          time: `${new Date().getHours()}:${new Date().getMinutes()}`,
          title: title.value,
          isDone: false,
        };
        props.arr.push(obj);
        localStorage.setItem("arr", JSON.stringify(props.arr));
        title.value = "";
      }
    };
    return { onSubmit, title };
  },
};
</script>

<style>
</style>