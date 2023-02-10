<template>
  <div class="question-section">
    <markdown-viewer :content="question_item.description"> </markdown-viewer>
  </div>
</template>

<script>
import MarkdownViewer from "@/components/Algorithm/MarkdownViewer.vue";

export default {
  name: "QuestionMain",
  components: { MarkdownViewer },
  data() {
    return {};
  },
  methods: {
    loadQuestionItem() {
      this.$store.dispatch("question/loadQuestionItem", 1);
    },
  },
  mounted() {
    this.loadQuestionItem();
  },
  computed: {
    question_item() {
      return this.$store.state.question.question_item;
    },
  },
};
</script>

<style scoped>
.question-section {
  margin: 1rem;
}
</style>
