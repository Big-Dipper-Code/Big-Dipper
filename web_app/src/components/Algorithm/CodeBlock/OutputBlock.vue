<template>
  <div>
    <div class="if-block-content">
      <span> OutputBlock </span>
      <template v-for="(item, index) in code_block_item.params" :key="index">
        <param-input :value="item" @input="onParamInput(index, $event)" />
      </template>
    </div>
  </div>
</template>

<script>
export default {
  name: "OutputBlock",
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
