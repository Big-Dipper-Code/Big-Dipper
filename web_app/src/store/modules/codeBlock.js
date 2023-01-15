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
        ],
      };
      // const code_block = await axios.get;
      console.log("code_block: ", code_block);
      commit("setCodeBlock", code_block);
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
