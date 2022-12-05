<template>
  <vue-markdown :source="content">
    <slot> </slot>
  </vue-markdown>
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
