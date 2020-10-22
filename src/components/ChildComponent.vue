<template>
  <div>
    <h1 :class="{'text-uppercase': uppercase}">{{title}} / {{someTitle}}</h1>
    <input v-model="name" @change="onChanged">
    <input v-model="value" @change="onChanged">
    <button @click="onClick">Change</button>
    <p>
      <slot name="default" :text-content="textContent">
        {{textContent}}
      </slot>
    </p>
    <div>
      <slot name="footer" :text-content="textContent">
        Footer content
      </slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: "ChildComponent",
    props: {
      model: {
        type: Object,
        default: () => {
          return {}
        }
      },
      title: {
        type: String,
        default: ""
      },
      textContent: {
        type: String,
        default: "",
      },
      uppercase: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        someTitle: "someTitle",
        name: this.model.name,
        value: this.model.value
      }
    },
    mounted() {
    },
    methods: {
      onClick() {
        this.$parent.title = "Use parent to rename!";

      },
      onChanged() {
        this.$emit("input", {name: this.name, value: this.value});
      }
    }
  }
</script>

<style scoped>

</style>
