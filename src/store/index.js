import { createStore } from "vuex";

const suits = ["skiingWoman", "skiingMan", "snowboardWoman", "snowboardMan"];
const store = createStore({
  state: {
    currentSuit: "skiingWoman",
    skiingWoman: {
      helmet: false,
      glasses: false,
      ski: false,
      shoe: false,
      jacket: false,
      pants: false,
    },
    skiingMan: {},
    snowboardWoman: {},
    snowboardMan: {},
  },
  getters: {
    getSkiingWoman(state) {
      return state.skiingWoman;
    },
  },
  mutations: {
    updateFeatures(state, type, suit = state.currentSuit) {
      state[suit][type] = !state[suit][type];
      console.log(state.skiingMan);
    },
    nextSuit(state) {
      let index = suits.indexOf(state.currentSuit);
      if (index != 3) {
        state.currentSuit = suits[index + 1];
      } else {
        state.currentSuit = suits[0];
      }
      // console.log(state.currentSuit);
    },
  },
  actions: {},
});

export default store;
