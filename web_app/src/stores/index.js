import { createStore, createLogger } from "vuex";
import block from "./modules/block";

const debug = process.env.NODE_ENV !== "production";

export default createStore({
  modules: {
    block,
  },
  strict: debug,
  plugins: debug ? [createLogger()] : [],
});
