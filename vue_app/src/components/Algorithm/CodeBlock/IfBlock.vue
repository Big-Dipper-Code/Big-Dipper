<template>
  <div>
    <div class="code-block if-block-content">
      <span> If </span>
      <template v-for="(item, index) in code_block_item.params" :key="index">
        <param-input :value="item.value" @input="onParamInput(index, $event)" />
      </template>
    </div>
  </div>
</template>

<script>
import ParamInput from "@/components/Algorithm/ParamInput.vue";

export default {
  name: "IfBlock",
  components: {ParamInput},
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

<style lang="scss" scoped>

</style>
