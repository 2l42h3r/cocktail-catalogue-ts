<template>
  <section
    v-show="isFetched"
    class="rounded-lg w-3/5 border-2 border-black border-solid p-8"
  >
    <div class="w-full text-center text-4xl">{{ cocktail.strDrink }}</div>
    <div class="w-full grid grid-cols-2 img-size pt-8">
      <img
        :src="cocktail.strDrinkThumb"
        :alt="`${cocktail.strDrink} Thumbnail`"
      />
      <div class="text-2xl flex justify-center items-center content-center">
        <div>
          <p>{{ cocktail.strInstructions }}</p>
          <div class="mt-4">
            Ingredients:
            <ul class="text-xl list-disc">
              <li v-for="ingredient of ingredients" :key="ingredient.name">
                {{ `${ingredient.measure} ${ingredient.name}` }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import { getCocktailById, randomCocktail } from '@/services/APIService'
import { Cocktail } from '@/types/Cocktail'
import { getProperty } from '@/utils/getProperty'

type CocktailCardData = {
  cocktail: Partial<Cocktail>
  isFetched: boolean
}

type Ingredients = {
  name: string
  measure: string
}

export default Vue.extend({
  name: 'CocktailCard',
  props: {
    cocktailId: {
      type: String,
      required: false,
    },
    random: {
      type: Boolean,
      default: false,
      required: false,
    },
  },
  data(): CocktailCardData {
    return {
      cocktail: {},
      isFetched: false,
    }
  },
  computed: {
    ingredients(): Array<Ingredients> {
      const ingredients: Array<Ingredients> = []
      for (let i = 1; i <= 15; i++) {
        const ingredientName = getProperty(
          this.cocktail,
          `strIngredient${i}` as keyof Cocktail
        )
        const ingredientMeasure = getProperty(
          this.cocktail,
          `strMeasure${i}` as keyof Cocktail
        )
        if (ingredientName && ingredientMeasure) {
          ingredients.push({
            name: ingredientName,
            measure: ingredientMeasure,
          })
        }
      }
      return ingredients
    },
  },
  async created(): Promise<void> {
    await this.fetchData()
  },
  watch: {
    '$route.params.id': async function (id: string): Promise<void> {
      await this.fetchData(id)
    },
  },
  methods: {
    async fetchData(id = ''): Promise<void> {
      let data
      if (this.random) {
        data = await randomCocktail()
      } else {
        if (id === '') {
          data = await getCocktailById(this.cocktailId)
        } else {
          data = await getCocktailById(id)
        }
      }
      this.cocktail = data.drinks[0]
      this.isFetched = true
      if (this.$route.path !== '/') {
        document.title = `The Cocktail Catalogue - ${this.cocktail.strDrink}`
        this.$store.dispatch('recentlyVisited/addToLast', {
          id: id === '' ? this.cocktailId : id,
          name: this.cocktail.strDrink,
        })
      }
    },
  },
})
</script>

<style lang="scss" scoped>
.img-size img {
  margin: auto;
  width: 30rem;
  border-radius: 2rem;
}
</style>
