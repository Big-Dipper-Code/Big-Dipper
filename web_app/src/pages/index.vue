<template>
  <div class="home">
    <img src="../assets/logo.png" />
    <b-button variant="primary"> bootstrapVue3 Test</b-button>
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
export default {
  name: "home",
  components: {
    HelloWorld,
  },
};
</script>
