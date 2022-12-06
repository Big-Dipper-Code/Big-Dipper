<template>
  <component
    v-if="component_name !== ''"
    :is="component_name"
    :code_block_item="code_block_item"
  />
</template>
<script>
import IfBlock from "@/components/Algorithm/CodeBlock/IfBlock";

export default {
  name: "CodeBlock",
  components: { IfBlock },
  props: {
    code_block_item: {
      type: Object,
      required: true,
    },
  },
  computed: {
    component_name: function () {
      let component_name = "";
      switch (this.code_block_item.function) {
        case "if":
          component_name = "IfBlock";
          break;
        default:
          component_name = "";
          break;
      }
      return component_name;
    },
  },
};
</script>

<style scoped></style>
