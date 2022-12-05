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
      // await axios
      //   .get(`/api/question/${question_id}/`)
      //   .then((response) => {
      //     commit("setQuestionItem", response.data);
      //   })
      //   .catch((error) => {
      //     console.log(error);
      //   });
      console.log("question_id: ", question_id);
      commit("setQuestionItem", {
        id: 1,
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
      });
    },
  },
};
export default question;
