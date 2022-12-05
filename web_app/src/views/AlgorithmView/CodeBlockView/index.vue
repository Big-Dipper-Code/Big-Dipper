<template>
  <div class="code-block-section">
    <div class="code-block-wrap">
      <template v-for="(item, index) in code_block.items" :key="index">
        <code-block :b_id="item.b_id" />
      </template>
    </div>
  </div>
</template>

<script>
import { computed, onMounted } from "vue";
import { useStore } from "vuex";
import CodeBlock from "@/components/CodeBlock";

export default {
  name: "CodeBlockView",
  components: { CodeBlock },
  setup() {
    const store = useStore();

    //code_block
    const loadCodeBlock = () => store.dispatch("codeBlock/loadCodeBlock");
    const code_block = computed(() => store.state.codeBlock.code_block);
    onMounted(() => {
      loadCodeBlock();
    });

    return {
      code_block,
      loadCodeBlock,
    };
  },
};
</script>

<style scoped></style>
