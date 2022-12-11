<template>
  <b-input
    v-model="local_value"
    :placeholder="placeholder"
    @input="$emit('input', $event)"
    @update="$emit('update', $event)"
    @change="$emit('change', $event)"
  />
</template>

<script>
export default {
  name: "ParamInput",
  props: {
    value: {
      type: String,
      required: true,
    },
    placeholder: {
      type: String,
      required: false,
      default: "",
    },
  },
  setup() {
    return {
      local_value: "",
    };
  },
  watch: {
    value: function (newVal) {
      this.local_value = newVal;
    },
  },
};
</script>

<style scoped></style>
