import { createStore } from "vuex";

const suits = ["skiingWoman", "skiingMan", "snowboardWoman", "snowboardMan"];
const suitFeatures = {
  helmet: false,
  glasses: false,
  ski: false,
  shoe: false,
  jacket: false,
  pants: false,
};
const store = createStore({
  state: {
    currentSuit: "skiingWoman",
    currentSuitIndex: 0,
    suits: suits,
    skiingWoman: {
      helmet: false,
      glasses: false,
      ski: false,
      shoe: false,
      jacket: false,
      pants: false,
      stick: false
    },
    skiingMan: {
      helmet: false,
      glasses: false,
      ski: false,
      shoe: false,
      jacket: false,
      pants: false,
      stick: false
    },
    snowboardWoman: {
      helmet: false,
      glasses: false,
      ski: false,
      shoe: false,
      jacket: false,
      pants: false,
    },
    snowboardMan: {
      helmet: false,
      glasses: false,
      ski: false,
      shoe: false,
      jacket: false,
      pants: false,
    },
  },
  getters: {
    getSkiingWoman(state) {
      return state.skiingWoman;
    },
  },
  mutations: {
    updateFeatures(state, type) {
      state[state.currentSuit][type] = !state[state.currentSuit][type];
      console.log(state.skiingMan);
    },
    nextSuit(state) {
      const index = suits.indexOf(state.currentSuit);
      if (index != 3) {
        state.currentSuit = suits[index + 1];
        state.currentSuitIndex = index + 1;
      } else {
        state.currentSuit = suits[0];
        state.currentSuitIndex = 0;
      }
      console.log(suits[index], index);
    },
  },
  actions: {},
});

export default store;
