<template>
  <div class="algorithm-section">
    <div class="algorithm-side-wrap">
      <question-view />
    </div>
  </div>
</template>

<script>
import QuestionView from "@/view/AlgorithmView/QuestionView";
export default {
  name: "AlgorithmView",
  components: { QuestionView },
};
</script>

<style scoped></style>
