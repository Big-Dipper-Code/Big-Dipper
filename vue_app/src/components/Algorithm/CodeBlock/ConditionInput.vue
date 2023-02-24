<template>
  <v-text-field
    v-model="local_value"
    class=""
    label="Condition"
    :placeholder="placeholder"
    hide-details="auto"
    clearable
    @input="$emit('input', $event)"
  />
</template>

<script>
export default {
  name: "ConditionInput",
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
  data() {
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

<style scoped>

</style>