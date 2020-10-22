<template>
  <div>
    <h1>Home page!</h1>
    <ul>
      <li><router-link :to="{name: 'about'}">About</router-link></li>
    </ul>
    <div class="row">
      <div class="col">
        <editable storage-key="home"></editable>
      </div>
    </div>
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
