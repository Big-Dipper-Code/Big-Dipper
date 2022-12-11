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
      const question_item = {
        q_id: 1,
        title: "Question 1",
        description:
          "# Question 1\n\nThis is a question.\n\n## Question 1.1\n\nThis is a sub-question.\n\n## Question 1.2\n\nThis is another sub-question.\n\n## Question 1.3\n\nThis is yet another sub-question.\n\n## Question 1.4\n\nThis is the last sub-question.",
        created_at: "2021-01-01",
        updated_at: "2021-01-01",
        create_user: {
          id: 1,
          username: "user1",
          email: "",
          created_at: "2021-01-01",
          updated_at: "2021-01-01",
        },
      };
      console.log("question_id: ", question_id);
      // const question_item = await axios.get;

      commit("setQuestionItem", question_item);
    },
  },
};
export default question;
