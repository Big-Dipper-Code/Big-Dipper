<template>
  <v-card
    class="ma-2"
    variant="outlined"
  >
    <!--align center-->
    <v-card-title
      class="d-flex align-center"
    >
      <span
        class="mr-2"
      >
        If
      </span>
      <span
        class="mr-2 text-grey"
      >
        #{{ code_block_item.id || "0000" }}
      </span>

      <template
        v-for="(item, index) in code_block_item.params"
        :key="index"
      >
        <condition-input
          :value="item.value"
          @input="onParamInput(index, $event)"
        />
      </template>
    </v-card-title>
  </v-card>
</template>

<script>
import ConditionInput from "@/components/Algorithm/CodeBlock/ConditionInput.vue";

export default {
  name: "IfBlock",
  components: { ConditionInput},
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
