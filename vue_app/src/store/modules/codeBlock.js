import codeUtil from "@/utils/codeUtil";

const codeBlock = {
  namespaced: true,
  state: () => ({
    code_block: {
      items: [],
    },
  }),
  getters: {},
  actions: {
    async loadCodeBlock({ commit }) {
      const code_block = {
        total: 1,
        items: [
          {
            name: "assignment",
            function: "assignment",
            category: "control",
            variable: {
              name: "variable",
              function: "variable",
              value: "N",
            },
            expression: {
              name: "expression",
              function: "expression",
              value: "1",
            },
          },
          {
            name: "assignment",
            function: "assignment",
            category: "control",
            variable: {
              name: "variable",
              function: "variable",
              value: "M",
            },
            expression: {
              name: "expression",
              function: "expression",
              value: "2",
            },
          },
          {
            name: "output",
            function: "output",
            category: "control",
            expression: {
              name: "expression",
              function: "expression",
              category: "control",
              value: "N + M",
            },
          },
        ],
        /*items: [
          {
            b_id: 0,
            name: "",
            function: "if",
            category: "control",
            // description: "",
            params: [],
            shape: "square",
            // children: [],
          },
          {
            function: "else",
          },
        ],*/
      };
      // const code_block = await axios.get;
      console.log("code_block: ", code_block);
      commit("setCodeBlock", code_block);
    },
    runBlockItems({ state }) {
      const code_block = state.code_block;
      codeUtil.runBlockItems(code_block.items);
      console.log("code_block: ", code_block);
    },
  },

  // mutations
  mutations: {
    setCodeBlock(state, code_block) {
      state.code_block = code_block;
    },
    addCodeBlockItem(state, item) {
      state.code_block.items.push(item);
    },
  },
};
export default codeBlock;
