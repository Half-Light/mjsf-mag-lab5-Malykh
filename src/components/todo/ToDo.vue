<template>
  <div>
    <form>
      <div class="form-group">
        <label for="task-title">Task title</label>
        <input v-model="task.title" id="task-title" class="form-control">
      </div>
      <div class="form-group">
        <label for="task-desc">Task description</label>
        <input v-model="task.description" id="task-desc" class="form-control">
      </div>
      <div class="form-group">
        <button class="btn btn-primary" @click.prevent="handleAdd">Add task</button>
      </div>
    </form>
    <div v-if="loading">Идет загрузка ...</div>
    <div class="card px-3 mb-2" v-for="(item, index) in taskList" :key="index" >
      <div class="card-title"><h4>{{item.title}}</h4></div>
      <div class="card-text">
        <div>{{item.description}}</div>
        <div>
           <button @click="handleRemove(index)" type="button" class="btn btn-danger btn-sm float-right mb-3 mt-2" >Delete</button>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
  import {Task} from "../../models/tasks";
  export default {
    name: "ToDo",
    data() {
      return {
        loading: false,
        task: new Task(),
        taskList: [],
      }
    },
    mounted() {
      this.fetch();
    },
    methods: {
      async fetch(){
          this.loading = true;
          this.taskList = await this.$services.tasks.fetchList();
          this.loading = false;
      },
      async handleAdd() {
        await this.$services.tasks.save(this.task);
        this.taskList.push(this.task);
        this.task = new Task();
      },
      handleRemove(index){
        this.taskList.splice(index,1);
      }
    },
  }
</script>

<style scoped>

</style>
