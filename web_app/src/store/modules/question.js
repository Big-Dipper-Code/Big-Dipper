import { getQuestionItem } from "@/utils/api/question";

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
    async getQuestionItem({ commit }, question_id) {
      const question_item = await getQuestionItem(question_id);
      commit("setQuestionItem", question_item);
    },
  },
};
export default question;
