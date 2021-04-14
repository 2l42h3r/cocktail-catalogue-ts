<template>
  <div id="app">
    <main class="p-4">
      <div class="w-full text-5xl text-center mb-2">The Cocktail Catalogue</div>
      <div class="w-full flex text-2xl items-center justify-center gap-4">
        <router-link to="/">Home</router-link> |
        <router-link to="/cocktails">Cocktails</router-link>
      </div>
      <div class="mt-16 flex">
        <router-view />
        <div class="text-center w-1/5">
          Viewed recently:
          <ul class="list-disc">
            <li v-for="drink of getLastFive" :key="drink.id">
              <router-link :to="{ path: `/cocktails/${drink.id}` }">{{
                drink.name
              }}</router-link>
            </li>
          </ul>
        </div>
      </div>
    </main>
    <footer
      class="text-center w-full flex items-center content-center justify-center p-4 fixed bottom-0 bg-white"
    >
      <div>
        <p>Stanisław Uss</p>
        <p>Copyright 2021</p>
      </div>
    </footer>
  </div>
</template>

<script lang="ts">
import { mapGetters } from 'vuex'

import Vue from 'vue'
export default Vue.extend({
  metaInfo: {
    titleTemplate: 'The Cocktail Catalogue - %s',
  },
  computed: {
    ...mapGetters('recentlyVisited', {
      getLastFive: 'getLastFive',
    }),
  },
})
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Open+Sans&display=swap');

#app {
  font-family: 'Open Sans', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  min-height: 100%;
  color: #2c3e50;
}

html,
body {
  height: 100%;
}

a:hover {
  color: #230312;
}
</style>
