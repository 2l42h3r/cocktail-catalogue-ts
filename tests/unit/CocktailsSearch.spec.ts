import { mount, createLocalVue } from '@vue/test-utils'
import 'regenerator-runtime/runtime'
import VueTailwind from 'vue-tailwind'
import CocktailsSearch from '@/views/CocktailsSearch.vue'
import TInput from 'vue-tailwind/dist/t-input'
import TButton from 'vue-tailwind/dist/t-button'
import TSelect from 'vue-tailwind/dist/t-select'

const localVue = createLocalVue()

const components = {
  TButton: {
    component: TButton,
  },
  TInput: {
    component: TInput,
  },
  TSelect: {
    component: TSelect,
  },
}
localVue.use(VueTailwind, components)

describe('CocktailsSearch.vue', () => {
  it('Renders CocktailsSearch without errors', () => {
    const wrapper = mount(CocktailsSearch, { localVue })
    expect(wrapper.findComponent(TInput)).toBeTruthy()
  })
})
