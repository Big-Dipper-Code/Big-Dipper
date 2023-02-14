<template>
  <component
    :is="component_name"
    v-if="component_name !== ''"
    :code_block_item="code_block_item"
  />
</template>
<script>
import IfBlock from "@/components/Algorithm/CodeBlock/IfBlock.vue";
import OutputBlock from "@/components/Algorithm/CodeBlock/OutputBlock.vue";
import EndIfBlock from "@/components/Algorithm/CodeBlock/EndIfBlock.vue";

export default {
  name: "CodeBlock",
  components: { IfBlock, OutputBlock, EndIfBlock },
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
        case "output":
          component_name = "OutputBlock";
          break;
        case "end-if":
          component_name = "EndIfBlock";
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
