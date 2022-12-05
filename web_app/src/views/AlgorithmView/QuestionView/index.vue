<template>
  <div class="question-section">
    <markdown-viewer :content="question_item.description"> </markdown-viewer>
  </div>
</template>

<script>
import MarkdownViewer from "@/components/MarkdownViewer";
import { useStore } from "vuex";
import { computed, onMounted } from "vue";

export default {
  name: "QuestionView",
  components: { MarkdownViewer },
  setup() {
    const store = useStore();

    //question_item
    const loadQuestionItem = (q_id) =>
      store.dispatch("question/loadQuestionItem", q_id);
    const question_item = computed(() => store.state.question.question_item);
    onMounted(() => {
      loadQuestionItem();
    });

    onMounted(() => {
      console.log("QuestionView mounted");
    });

    return {
      question_item,
      loadQuestionItem,
    };
  },
};
</script>

<style scoped></style>
