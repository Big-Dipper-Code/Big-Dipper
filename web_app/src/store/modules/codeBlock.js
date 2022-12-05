import codeBlockApi from "../../utils/api/codeBlockApi";

const codeBlock = {
  namespaced: true,
  // initial state
  state: () => ({
    code_block: {
      items: [],
    },
  }),

  // getters
  getters: {
    getCodeBlockItem: (state) => (b_id) => {
      return state.code_block.items.find((item) => item.b_id === b_id);
    },
  },

  // actions
  actions: {
    async loadCodeBlock({ commit }) {
      const code_block = await codeBlockApi.getCodeBlock();
      console.log("code_block: ", code_block);
      commit("setCodeBlock", code_block);
    },
  },

  // mutations
  mutations: {
    setCodeBlock(state, code_block) {
      state.code_block = code_block;
    },
    decrementProductInventory(state, { id }) {
      const product = state.all.find((product) => product.id === id);
      product.inventory--;
    },
  },
};
export default codeBlock;
