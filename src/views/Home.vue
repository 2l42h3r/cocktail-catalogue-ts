<template>
  <article class="text-center w-full">
    <CocktailCard :random="true" class="mt-16 m-auto" />
  </article>
</template>

<script lang="ts">
import Vue from 'vue'
import CocktailCard from '@/components/CocktailCard.vue'

export default Vue.extend({
  name: 'Home',
  components: {
    CocktailCard,
  },
  metaInfo: {
    title: 'The Cocktail Catalogue',
    titleTemplate: undefined,
  },
})
</script>
