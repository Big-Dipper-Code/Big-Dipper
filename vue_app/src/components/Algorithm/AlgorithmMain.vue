<template>
  <div class="algorithm-section">
    <div class="">
      <v-tabs
        v-model="tab"
      >
        <v-tab
          value="problem"
        >
          item problem
        </v-tab>
        <v-tab value="submit">
          item submit
        </v-tab>
        <v-tab value="output">
          item output
        </v-tab>
      </v-tabs>
      <v-window v-model="tab">
        <v-window-item value="problem">
          <div class="algorithm-problem-wrap">
            <question-main />
          </div>
        </v-window-item>
        <v-window-item value="submit">
          <div class="algorithm-input-wrap">
            <code-block-main />
          </div>
        </v-window-item>
        <v-window-item value="output">
          <div class="algorithm-output-wrap">
            <code-block-selector-main />
          </div>
        </v-window-item>
      </v-window>
    </div>
  </div>
</template>

<script>
import QuestionMain from "@/components/Algorithm/Question/QuestionMain.vue";
import CodeBlockMain from "@/components/Algorithm/CodeBlock/CodeBlockMain.vue";
import CodeBlockSelectorMain from "@/components/Algorithm/CodeBlockSelectorMain.vue";

export default {
  name: "AlgorithmMain",
  components: { CodeBlockMain, QuestionMain, CodeBlockSelectorMain },
  data() {
    return {
      tab: null,
    };
  },
};
</script>

<style lang="scss" scoped>
.algorithm-section {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  height: 100%;
}
.algorithm-problem-wrap {
  width: 100%;
  height: 100%;
}
.algorithm-input-wrap {
  width: 100%;
  height: 100%;
}
.algorithm-input-wrap {
  width: 100%;
  height: 100%;
}
</style>
