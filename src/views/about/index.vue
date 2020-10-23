<template>
  <div>
    <h1>About</h1>
    <ul>
      <li><router-link :to="{name: 'home' }">Home</router-link></li>
      <li><router-link :to="{name: 'edit' }">Edit</router-link></li>
    </ul>
    <editable storage-key="about"></editable>
  </div>
</template>

<script>
  import Editable from "../../components/Editable";
  export default {
    name: "index",
    components: {Editable}
  }
</script>

<style scoped>

</style>
