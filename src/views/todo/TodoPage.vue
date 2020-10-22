<template>
  <div class="todo-page">
    <div class="row">
      <div class="col">
        <to-do></to-do>
      </div>
      <div class="col">
        <to-do></to-do>
      </div>
    </div>
  </div>
</template>

<script>
  import ToDo from "../../components/todo/ToDo";
  export default {
    name: "TodoPage",
    components: {ToDo}
  }
</script>

<style scoped>

</style>
