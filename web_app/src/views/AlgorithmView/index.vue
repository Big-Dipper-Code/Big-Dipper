<template>
  <div class="algorithm-section">
    <div class="algorithm-side-wrap">
      <question-view />
    </div>
    <div class="algorithm-main-wrap">
      <code-block-view />
    </div>
  </div>
</template>

<script>
import QuestionView from "@/views/AlgorithmView/QuestionView";
import CodeBlockView from "@/views/AlgorithmView/CodeBlockView";
export default {
  name: "AlgorithmView",
  components: { CodeBlockView, QuestionView },
};
</script>

<style scoped></style>
