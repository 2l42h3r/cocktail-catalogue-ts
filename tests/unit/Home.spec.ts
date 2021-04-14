import { mount } from '@vue/test-utils'
import 'regenerator-runtime/runtime'
import Home from '@/views/Home.vue'
import CocktailCard from '@/components/CocktailCard.vue'

describe('Home.vue', () => {
  it('Renders Home.vue without errors', () => {
    const wrapper = mount(Home)
    expect(wrapper.findComponent(CocktailCard)).toBeTruthy()
  })
})
