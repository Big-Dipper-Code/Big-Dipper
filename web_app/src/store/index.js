import { createStore, createLogger } from "vuex";
import codeBlock from "./modules/codeBlock";
import question from "./modules/question";

const debug = process.env.NODE_ENV !== "production";

export default createStore({
  modules: {
    codeBlock,
    question,
  },
  strict: debug,
  plugins: debug ? [createLogger()] : [],
});
