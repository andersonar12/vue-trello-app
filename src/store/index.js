import { createLogger } from "vuex";
import { createStore } from "vuex";
import state from "./state.js";
import mutations from "./mutations.js";
import actions from "./actions.js";
import getters from "./getters.js";
const debug = process.env.NODE_ENV !== "production";

export default createStore({
  strict: debug,
  plugins: debug ? [createLogger()] : [],
  state,
  actions,
  mutations,
  getters,
});
