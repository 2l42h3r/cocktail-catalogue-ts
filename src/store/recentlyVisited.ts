import { Commit } from 'vuex'

type DrinkObject = {
  id: string
  name: string
}

type RecentlyVisitedState = {
  visited: Array<DrinkObject>
}

const recentlyVisited = {
  namespaced: true,
  state: (): RecentlyVisitedState => {
    const localStorageData = window.localStorage.getItem('lastVisited')
    return {
      visited: localStorageData ? JSON.parse(localStorageData) : [],
    }
  },
  getters: {
    getLastFive: (state: RecentlyVisitedState): Array<DrinkObject> =>
      state.visited.slice(-5),
  },
  actions: {
    addToLast: (
      { commit }: { commit: Commit },
      drinkObject: DrinkObject
    ): void => {
      commit('ADD_TO_LAST', drinkObject)
    },
  },
  mutations: {
    ADD_TO_LAST: (
      state: RecentlyVisitedState,
      drinkObject: DrinkObject
    ): void => {
      const index = state.visited.findIndex((obj) => {
        return obj.id === drinkObject.id
      })
      if (index !== -1) {
        state.visited.splice(index, 1)
      }
      state.visited.push(drinkObject)
      window.localStorage.setItem('lastVisited', JSON.stringify(state.visited))
    },
  },
}

export { recentlyVisited }
