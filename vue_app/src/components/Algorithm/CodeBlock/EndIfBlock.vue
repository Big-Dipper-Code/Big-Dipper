<template>
  <div>
    <div class="if-block-content">
      <span> End If </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "EndIfBlock",
  props: {
    code_block_item: {
      type: Object,
      required: true,
    },
  },
  setup() {
    return {
      local_value: "",
    };
  },
};
</script>

<style scoped></style>
