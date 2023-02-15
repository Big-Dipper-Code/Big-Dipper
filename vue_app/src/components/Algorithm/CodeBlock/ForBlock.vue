<template>
  <div>
    <div class="code-block for-block-content">
      <span> For </span>
      <template
        v-for="(item, index) in code_block_item.params"
        :key="index"
      >
        <param-input
          :value="item"
          @input="onParamInput(index, $event)"
        />
      </template>
    </div>
  </div>
</template>

<script>
export default {
  name: "ForBlock",
  props: {
    code_block_item: {
      type: Object,
      required: true,
    },
  },
  setup() {
    const onParamInput = (index, event) => {
      console.log(index, event);
    };
    return {
      local_value: "",
      onParamInput,
    };
  },
};
</script>

<style scoped></style>
