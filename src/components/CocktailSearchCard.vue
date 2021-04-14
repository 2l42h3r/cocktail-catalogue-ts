<template functional>
  <div
    v-on="listeners"
    class="cursor-pointer card p-8 border-2 border-solid border-black mt-4 rounded-3xl"
  >
    <img
      class="rounded-2xl"
      :src="props.cocktail.strDrinkThumb"
      :alt="`${props.cocktail.strDrink} Thumbnail`"
    />
    <div class="flex align-middle justify-center items-center">
      <p class="text-4xl">{{ props.cocktail.strDrink }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
import { Cocktail } from '@/types/Cocktail'

export default Vue.extend({
  name: 'CocktailSearchCard',
  props: {
    cocktail: {
      required: true,
      type: Object as () => PropType<Cocktail>,
    },
  },
})
</script>

<style lang="scss" scoped>
.card {
  display: grid;
  grid-template-columns: 30% 70%;
}
</style>
