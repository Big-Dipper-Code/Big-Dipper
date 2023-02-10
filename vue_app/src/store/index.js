import { createStore, createLogger } from "vuex";
import codeBlock from "./modules/codeBlock";
import question from "./modules/question";
import sidebar from "./modules/sidebar";

const debug = process.env.NODE_ENV !== "production";

export default createStore({
  modules: {
    codeBlock,
    question,
    sidebar,
  },
  strict: debug,
  plugins: debug ? [createLogger()] : [],
});
