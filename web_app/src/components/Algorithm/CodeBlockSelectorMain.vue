<template>
  <!-- 출력 -->
  <b-offcanvas
    :model-value="is_visible_sidebar"
    placement="end"
    @update="onUpdate"
  />
  <span>CodeBlockSelectorMain</span>
</template>

<script>
export default {
  name: "CodeBlockSelectorMain",
  methods: {
    onUpdate() {
      console.log("hi");
      this.$store.commit("sidebar/toggleSidebar");
    },
  },
  computed: {
    is_visible_sidebar() {
      return this.$store.state.sidebar.is_visible_sidebar;
    },
  },
};
</script>

<style scoped></style>
