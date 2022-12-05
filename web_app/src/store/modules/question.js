import questionApi from "@/utils/api/questionApi";

const question = {
  namespaced: true,
  state: () => ({
    question_item: {},
  }),
  getters: {},
  mutations: {
    setQuestionItem(state, question_item) {
      state.question_item = question_item;
    },
  },
  actions: {
    async loadQuestionItem({ commit }, question_id) {
      const question_item = await questionApi.getQuestionItem(question_id);
      commit("setQuestionItem", question_item);
    },
  },
};
export default question;
