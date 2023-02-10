<template>
  <div>
    <h1>Test If Block</h1>
    <code-block :code_block_item="code_block_item" />
  </div>
</template>

<script>
import CodeBlock from "@/components/Algorithm/CodeBlock/CodeBlock";
export default {
  name: "IfBlock",
  components: { CodeBlock },
  data() {
    return {
      code_block_item: {
        function: "if",
        params: [
          {
            type: "string",
            value: "a",
          },
        ],
      },
    };
  },
};
</script>

<style scoped></style>
