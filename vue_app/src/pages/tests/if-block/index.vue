<template>
  <div>
    <h1>Test If Block</h1>
    <template v-for="(code_block_item, index) in code_block_items" :key="index">
      <code-block :code_block_item="code_block_item" />
    </template>

    <h1>Test If Output</h1>
    <code-block :code_block_item="code_block_item_output" />
  </div>
</template>

<script>
import CodeBlock from "@/components/Algorithm/CodeBlock/CodeBlock.vue";
export default {
  name: "IfBlock",
  components: { CodeBlock },
  data() {
    return {
      code_block_items: [{
        function: "if",
        params: [
          {
            type: "string",
            value: "a",
          },
        ],
      },{
        function: "end-if"
      },
      ],
      output:{
        name: "output",
        function: "output",
        category: "control",
        expression: {
          name: "expression",
          function: "expression",
          category: "control",
          value: "123123",
        },
      },
      code_block_item_output: {
        // if (true) {
        //   output(123123);
        // }
        function: "if",
        params: [
          {
            type: "expression",
            value: "true",
          },
        ],
        children:[
          {
            name: "output",
            function: "output",
            category: "control",
            expression: {
              name: "expression",
              function: "expression",
              category: "control",
              value: "123123",
            },
          },
        ]
      },
    };
  },
};
</script>

<style scoped></style>
