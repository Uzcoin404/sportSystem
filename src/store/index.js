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
    },
    skiingMan: {
      helmet: false,
      glasses: false,
      ski: false,
      shoe: false,
      jacket: false,
      pants: false,
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
    nextSuit(state, index) {
      // if (index != 3) {
        state.currentSuit = suits[index];
        state.currentSuitIndex = index;
        console.log(suits[index], index);
      // } else {
      //   state.currentSuit = suits[0];
      //   state.currentSuitIndex = 0;
      // }
    },
  },
  actions: {},
});

export default store;
