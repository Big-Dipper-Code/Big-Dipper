<template>
  <!-- 출력 -->
  <div class="code-block-section">
    <div class="code-button">
      <b-button variant="primary" @click="onClickSelector"
        >Show Selector</b-button
      >
      <div class="outer-box__button">
        <b-dropdown
          class="button__plus"
          size="lg"
          variant="link"
          toggle-class="text-decoration-none"
          no-caret
        >
          <template #button-content> + </template>
          <!-- TODO: 각 블록 input function 연결 -->
          <b-dropdown-item href="#">if 블록</b-dropdown-item>
          <b-dropdown-item href="#">for 블록</b-dropdown-item>
          <b-dropdown-item href="#">while 블록</b-dropdown-item>
          <b-dropdown-item href="#">for 블록</b-dropdown-item>
          <b-dropdown-item href="#">input 블록</b-dropdown-item>
          <b-dropdown-item href="#">output 블록</b-dropdown-item>
        </b-dropdown>
      </div>
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
// import ParamInput from "@/components/Algorithm/ParamInput.vue";
// import { library } from "@fortawesome/fontawesome-svg-core";
// import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

export default {
  name: "CodeBlockMain",
  components: { CodeBlock },
  methods: {
    loadCodeBlock() {
      this.$store.dispatch("codeBlock/loadCodeBlock");
    },
    onClickSelector() {
      this.$store.commit("sidebar/toggleSidebar");
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

<style scoped>
.button__plus {
  display: inline-block;
}
.outer-box__button {
  display: flex;
  justify-content: center;
  width: 100vw;
}
</style>
