<template>
  <!-- 제출 -->
  
  <span>CodeBlockSelectorMain</span>
</template>

<script>
export default {
  name: "CodeBlockSelectorMain",
  computed: {
    is_visible_sidebar() {
      return this.$store.state.sidebar.is_visible_sidebar;
    },
  },
  methods: {
    onUpdate() {
      console.log("hi");
      this.$store.commit("sidebar/toggleSidebar");
    },
  },
};
</script>

<style scoped></style>
