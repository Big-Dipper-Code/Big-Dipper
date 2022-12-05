const codeBlockApi = {
  getCodeBlock: async () => {
    // axios.get
    const result = {
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
      ],
    };
    return result;
  },
};
export default codeBlockApi;
