<template>
  <vue-markdown :source="content" />
</template>

<script>
import vueMarkdown from "vue3-markdown-it";

export default {
  name: "MarkdownViewer",
  props: {
    content: {
      type: String,
      default: "",
    },
  },
  components: { vueMarkdown },
};
</script>

<style scoped></style>
