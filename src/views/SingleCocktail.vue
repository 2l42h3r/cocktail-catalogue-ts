<template>
  <CocktailCard :cocktailId="$route.params.id" class="m-auto" />
</template>

<script lang="ts">
import Vue from 'vue'
import CocktailCard from '@/components/CocktailCard.vue'

export default Vue.extend({
  name: 'SingleCocktail',
  components: {
    CocktailCard,
  },
})
</script>
