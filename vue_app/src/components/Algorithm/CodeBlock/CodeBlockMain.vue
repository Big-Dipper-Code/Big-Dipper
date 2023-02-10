<template>
  <!-- 제출 -->
  <div class="code-block-section">
    <div class="code-button">
      <!--      <b-button variant="primary" @click="onClickSelector"-->
      <!--        >Show Selector</b-button-->
      <!--      >-->
      <plus-button />
    </div>
    <div class="code-block-wrap">
      <template v-for="(item, index) in code_block.items" :key="index">
        <code-block :code_block_item="item" />
      </template>
    </div>
  </div>
</template>

<script>
import CodeBlock from "@/components/Algorithm/CodeBlock/CodeBlock";
import PlusButton from "@/components/Algorithm/CodeBlock/PlusButton.vue";
// import ParamInput from "@/tests/Algorithm/ParamInput.vue";
// import { library } from "@fortawesome/fontawesome-svg-core";
// import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

export default {
  name: "CodeBlockMain",
  components: { PlusButton, CodeBlock },
  data() {
    return {};
  },
  methods: {
    loadCodeBlock() {
      this.$store.dispatch("codeBlock/loadCodeBlock");
    },
    runBlockItems() {
      this.$store.dispatch("codeBlock/runBlockItems");
    },
    onClickSelector() {
      this.$store.commit("sidebar/toggleSidebar");
    },
  },
  mounted() {
    this.loadCodeBlock();
    this.runBlockItems();
  },
  computed: {
    code_block() {
      return this.$store.state.codeBlock.code_block;
    },
  },
};
</script>

<style scoped></style>
