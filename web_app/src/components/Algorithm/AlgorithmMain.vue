<template>
  <div class="algorithm-section">
    <div class="algorithm-side-wrap">
      <question-main />
    </div>
    <div class="algorithm-main-wrap">
      <code-block-main />
    </div>
  </div>
</template>

<script>
import QuestionMain from "@/components/Algorithm/Question/QuestionMain";
import CodeBlockMain from "@/components/Algorithm/CodeBlock/CodeBlockMain";

export default {
  name: "AlgorithmMain",
  components: { CodeBlockMain, QuestionMain },
};
</script>

<style scoped></style>
