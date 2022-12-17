<template>
  <div class="algorithm-section">
    <div class="sm-d-none">
      <div class="algorithm-side-wrap">
        <question-main />
      </div>
      <div class="algorithm-main-wrap">
        <code-block-main />
      </div>
      <div class="algorithm-side-wrap">
        <code-block-selector-main />
      </div>
    </div>
  </div>
  <b-tab> </b-tab>
</template>

<script>
import QuestionMain from "@/components/Algorithm/Question/QuestionMain";
import CodeBlockMain from "@/components/Algorithm/CodeBlock/CodeBlockMain";
import CodeBlockSelectorMain from "@/components/Algorithm/CodeBlockSelectorMain";

export default {
  name: "AlgorithmMain",
  components: { CodeBlockMain, QuestionMain, CodeBlockSelectorMain },
};
</script>

<style lang="scss" scoped>
.algorithm-section {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  height: 100%;
}

.algorithm-side-wrap {
  width: 30%;
  height: 100%;
}

.algorithm-main-wrap {
  width: 70%;
  height: 100%;
}
</style>
