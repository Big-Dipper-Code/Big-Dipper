<template>
  <vue-markdown class="test" :source="content" />
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

<style lang="scss" scoped>
:deep {
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    border-bottom: 1px solid #d5d5d5;
    padding-bottom: 4px;
  }
  h1 {
    margin-bottom: 1rem;
  }
  .language-text {
    border-radius: 1rem;
    margin: 1rem 0;
  }
}
</style>
