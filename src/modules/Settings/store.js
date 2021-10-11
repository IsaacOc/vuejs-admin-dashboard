export default {
  namespaced: true,
  state: {
    ride: [],
  },
  mutations: {
    setFoo(state, ride) {
      state.ride = ride
    },
  },
  getters: {
    getRide(state) {
      return state.ride
    },
  },
}
  