<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <h1 class="mt-5 mb-5 text-center">My Vue Application</h1>
        <div class="text-center mb-5 ">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/220px-Vue.js_Logo_2.svg.png">
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <div class="card">
          <div class="card-header">
            My first vue app
          </div>
          <div class="card-body">
            <router-view></router-view>
          </div>
          <div class="card-footer">
            Some statistic and contacts
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "index"
  }
</script>

<style scoped>

</style>
