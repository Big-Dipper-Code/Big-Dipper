<template>
  <v-text-field
    v-model="local_value"
    class=""
    :label="Label"
    :placeholder="placeholder"
    hide-details="auto"
    @input="$emit('input', $event)"
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
      this.local_value = newVal.value;
    },
  },
};
</script>

<style scoped></style>
