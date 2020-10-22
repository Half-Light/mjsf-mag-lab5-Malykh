<template>
  <div>
    Parent component
    <p>Name: {{model.name}}</p>
    <p>Value: {{model.value}}</p>
    <button @click="sendTitle">Change</button>
    <child-component ref="child" v-model="model"
                     text-content="Lorem ipsum ..."
                     :title.sync="title" :uppercase="false" @update:title="onClicked">
      <template v-slot:default="data">
        <br>
        <b class="text-uppercase">{{data.textContent}}</b>
      </template>
      <template v-slot:footer="data">
        <button class="btn btn-sm btn-primary">{{data.textContent}}</button>
      </template>
    </child-component>
  </div>
</template>

<script>
  export default {
    name: "ParentComponent",
    data(){
      return {
        title: "Title text",
        model: {
          name: "some name",
          value: "some value",
        }
      }
    },

    methods: {
      onClicked(data){
        console.log(data);
         //this.title = data;
      },
      sendTitle(){
        this.$refs["child"].someTitle = "Ref new title";
      }
    }
  }
</script>

<style scoped>

</style>
