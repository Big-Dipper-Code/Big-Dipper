<template>
  <div class="algorithm-section">
    <div class="d-none d-lg-block">
      <div>
        <div class="algorithm-problem-wrap">
          <question-main />
        </div>
        <div class="algorithm-input-wrap">
          <code-block-main />
        </div>
        <div class="algorithm-output-wrap">
          <code-block-selector-main />
        </div>
      </div>
    </div>
    <div class="d-lg-none">
      <b-tabs content-class="mt-3">
        <b-tab title="문제" active>
          <div class="algorithm-problem-wrap">
            <question-main />
          </div>
        </b-tab>
        <b-tab title="제출">
          <div class="algorithm-input-wrap">
            <code-block-main />
          </div>
        </b-tab>
        <b-tab title="출력">
          <div class="algorithm-output-wrap">
            <code-block-selector-main />
          </div>
        </b-tab>
      </b-tabs>
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
