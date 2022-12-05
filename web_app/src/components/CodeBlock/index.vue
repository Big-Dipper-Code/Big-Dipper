<template>
  <component
    v-if="component_name !== ''"
    :is="component_name"
    :code_block_item="code_block_item"
  />
  {{ component_name }}
</template>
<script>
import { useStore } from "vuex";
// import { computed } from "vue";

export default {
  name: "CodeBlock",
  props: {
    b_id: {
      type: Number,
      required: true,
    },
  },
  setup(props) {
    const store = useStore();
    const getCodeBlockItemById = store.getters["codeBlock/getCodeBlockItem"];
    const code_block_item = getCodeBlockItemById(props.b_id);
    return {
      code_block_item,
    };
  },
  watch: {},
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
