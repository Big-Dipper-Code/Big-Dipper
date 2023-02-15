<template>
  <div>
    <plus-button v-if="focused" />
    <v-btn
      class="code-block"
      @focus="onFocus"
      @blur="onBlur"
    >
      <code-block :code_block_item="code_block_item" />
    </v-btn>
    <plus-button v-if="focused" />
  </div>
</template>

<script>
import CodeBlock from "@/components/Algorithm/CodeBlock/CodeBlock.vue";
import PlusButton from "@/components/Algorithm/CodeBlock/PlusButton.vue";

export default {
  name: "ClickableCodeBlock",
  components: { CodeBlock, PlusButton },
  props: {
    code_block_item: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      focused: false
    };
  },
  methods: {
    onClickCodeBlock() {
      this.$store.commit("codeBlock/setSelectedCodeBlock", this.code_block_item);
    },
    onFocus() {
      this.focused = true;
    },
    onBlur() {
      this.focused = false;
    }
  }
};
</script>

<style scoped>

</style>