<template>
  <div class="code-block-section">
    <div class="code-block-wrap">
      <template v-for="(item, index) in code_block.items" :key="index">
        <code-block :code_block_item="item" />
      </template>
    </div>
  </div>
</template>

<script>
import CodeBlock from "@/components/Algorithm/CodeBlock/CodeBlock";

export default {
  name: "CodeBlockMain",
  components: { CodeBlock },
  methods: {
    loadCodeBlock() {
      this.$store.dispatch("codeBlock/loadCodeBlock");
    },
  },
  mounted() {
    this.loadCodeBlock();
  },
  computed: {
    code_block() {
      return this.$store.state.codeBlock.code_block;
    },
  },
};
</script>

<style scoped></style>
