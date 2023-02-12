<template>
  <div class="home">
    <div class="text-center">Big Dipper</div>
    <div class="d-flex justify-content-center">
      <b-button class="mr-3" to="/algorithm"> Algorithm </b-button>
      <b-dropdown text="Block Test">
        <b-dropdown-item to="/tests/if-block">If Block</b-dropdown-item>
      </b-dropdown>
    </div>
  </div>
</template>

<script>
export default {
  name: "home",
  components: {},
};
</script>
