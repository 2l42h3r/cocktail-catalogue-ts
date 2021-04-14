import { mount } from '@vue/test-utils'
import 'regenerator-runtime/runtime'
import CocktailCard from '@/components/CocktailCard.vue'

describe('CocktailCard.vue', () => {
  it('Renders CocktailCard without error', () => {
    const wrapper = mount(CocktailCard)
    expect(wrapper.text()).toContain('Ingredients')
  })
  it('Renders CocktailCard with random cocktail', () => {
    const wrapper = mount(CocktailCard, { propsData: { random: true } })
    expect(wrapper.text()).toContain('Ingredients')
  })
})
