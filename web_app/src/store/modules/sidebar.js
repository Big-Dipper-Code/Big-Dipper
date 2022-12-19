const sidebar = {
  namespaced: true,
  state: {
    is_visible_sidebar: false,
  },
  mutations: {
    toggleSidebar(state) {
      state.is_visible_sidebar = !state.is_visible_sidebar;
    },
  },
  actions: {},
  getters: {
    getIsVisibleSidebar(state) {
      return state.is_visible_sidebar;
    },
  },
};

export default sidebar;
