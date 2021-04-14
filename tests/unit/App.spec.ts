import { mount, createLocalVue } from '@vue/test-utils'
import Vuex, { Store } from 'vuex'
import VueRouter from 'vue-router'
import App from '@/App.vue'

const localVue = createLocalVue()
localVue.use(Vuex)
localVue.use(VueRouter)

describe('App.vue', () => {
  let store: Store<unknown>
  let router: VueRouter

  beforeEach(() => {
    router = new VueRouter()
    store = new Vuex.Store({
      modules: {
        recentlyVisited: {
          getters: {
            getLastFive: () => [{ id: 1, name: 'drink1' }],
          },
          namespaced: true,
        },
      },
    })
  })
  it('Renders App.vue without errors', () => {
    const wrapper = mount(App, { store, localVue, router })
    expect(wrapper.text()).toContain('The Cocktail Catalogue')
  })
})
