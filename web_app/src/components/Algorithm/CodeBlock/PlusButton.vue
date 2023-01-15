<template>
  <div class="outer-box__button">
    <b-dropdown
      class="button__plus"
      size="lg"
      variant="link"
      toggle-class="text-decoration-none"
      no-caret
    >
      <template #button-content>
        <i class="fa-solid fa-plus"></i>
      </template>
      <b-dropdown-item href="#" @click="clickIfBlock">if 블록 </b-dropdown-item>
      <b-dropdown-item href="#" @click="clickForBlock"
        >for 블록</b-dropdown-item
      >
      <b-dropdown-item href="#" @click="clickWhileBlock"
        >while 블록</b-dropdown-item
      >
      <b-dropdown-item href="#" @click="clickInputBlock"
        >input 블록</b-dropdown-item
      >
      <b-dropdown-item href="#" @click="clickOutputBlock"
        >output 블록</b-dropdown-item
      >
    </b-dropdown>
  </div>
</template>

<script>
export default {
  name: "PlusButton",
  data() {
    return {
      blockConfig: {
        if: {
          name: "",
          function: "if",
          category: "control",
          params: [],
          shape: "square",
          children: [],
        },
        for: {
          name: "",
          function: "for",
          category: "control",
          params: [],
          shape: "square",
          children: [],
        },
        while: {
          name: "",
          function: "while",
          category: "control",
          params: [],
          shape: "square",
          children: [],
        },
        input: {
          name: "",
          function: "input",
          category: "control",
          params: [],
          shape: "square",
          children: [],
        },
        output: {
          name: "",
          function: "output",
          category: "control",
          params: [],
          shape: "square",
          children: [],
        },
      },
    };
  },
  methods: {
    addCodeBlockItem(item) {
      this.$store.commit("codeBlock/addCodeBlockItem", item);
    },
    clickIfBlock() {
      console.log("clickIfBlock");
      this.addCodeBlockItem(this.blockConfig["if"]);
    },
    clickForBlock() {
      console.log("clickForBlock");
      this.addCodeBlockItem(this.blockConfig["for"]);
    },
    clickWhileBlock() {
      console.log("clickWhileBlock");
      this.addCodeBlockItem(this.blockConfig["while"]);
    },
    clickInputBlock() {
      console.log("clickInputBlock");
      this.addCodeBlockItem(this.blockConfig["input"]);
    },
    clickOutputBlock() {
      console.log("clickOutputBlock");
      this.addCodeBlockItem(this.blockConfig["output"]);
    },
  },
};
</script>

<style scoped></style>
