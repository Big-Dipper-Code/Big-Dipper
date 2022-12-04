<template>
  <div class="algorithm-section">
    <div class="algorithm-side-wrap">
      <question-view />
    </div>
  </div>
</template>

<script>
import QuestionView from "@/views/AlgorithmView/QuestionView";
export default {
  name: "AlgorithmView",
  components: { QuestionView },
};
</script>

<style scoped></style>
