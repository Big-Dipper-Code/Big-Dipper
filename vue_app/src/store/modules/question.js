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
        title: "별찍기-1",
        description:
          "# 별찍기-1\n" +
          "## 문제 설명\n" +
          "첫째 줄에는 별 1개, 둘째 줄에는 별 2개, N번째 줄에는 별 N개를 찍는 문제\n" +
          "## 예시\n" +
          "### 입력\n" +
          "```text\n" +
          "5\n" +
          "```\n" +
          "### 출력\n" +
          "```text\n" +
          "*\n" +
          "**\n" +
          "***\n" +
          "****\n" +
          "*****\n" +
          "```",
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
