import { createStore, createLogger } from "vuex";
import block from "./modules/block";
import question from "./modules/question";

const debug = process.env.NODE_ENV !== "production";

export default createStore({
  modules: {
    block,
    question,
  },
  strict: debug,
  plugins: debug ? [createLogger()] : [],
});
