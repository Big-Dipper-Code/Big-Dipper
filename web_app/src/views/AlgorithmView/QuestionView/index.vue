<template>
  <div class="question-section">
    <markdown-viewer :content="question_item.description"> </markdown-viewer>
  </div>
</template>

<script>
import MarkdownViewer from "@/components/MarkdownViewer";
import { mapState, mapActions } from "vuex";

export default {
  name: "QuestionView",
  components: { MarkdownViewer },
  setup() {
    //methods

    //computed
    return {};
  },

  methods: {
    ...mapActions("question", ["getQuestionItem"]),
  },
  mounted() {
    this.getQuestionItem();
  },
  computed: {
    ...mapState({
      question_item: (state) => state.question.question_item,
    }),
  },
};
</script>

<style scoped></style>
