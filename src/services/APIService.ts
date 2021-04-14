import 'whatwg-fetch'

import { Cocktail } from '@/types/Cocktail'

type APICocktailResponse = {
  drinks: Array<Cocktail>
}

type APICategoryResponse = {
  drinks: Array<{ strCategory: string }>
}

type APIGlassResponse = {
  drinks: Array<{ strGlass: string }>
}

type APIAlcoholicResponse = {
  drinks: Array<{ strAlcoholic: string }>
}

const API_KEY = '1'
const BASE_API_URI = `https://www.thecocktaildb.com/api/json/v1/${API_KEY}`

export const randomCocktail = async (): Promise<APICocktailResponse> => {
  return fetch(`${BASE_API_URI}/random.php`).then((response) => response.json())
}

export const getCocktailById = async (
  id: string
): Promise<APICocktailResponse> => {
  return fetch(`${BASE_API_URI}/lookup.php?i=${id}`).then((response) =>
    response.json()
  )
}

export const getCategories = async (): Promise<APICategoryResponse> => {
  return fetch(`${BASE_API_URI}/list.php?c=list`).then((response) =>
    response.json()
  )
}

export const getGlasses = async (): Promise<APIGlassResponse> => {
  return fetch(`${BASE_API_URI}/list.php?g=list`).then((response) =>
    response.json()
  )
}

export const getAlcoholic = async (): Promise<APIAlcoholicResponse> => {
  return fetch(`${BASE_API_URI}/list.php?a=list`).then((response) =>
    response.json()
  )
}

export const search = async (
  searchText: string
): Promise<APICocktailResponse> => {
  return fetch(`${BASE_API_URI}/search.php?s=${searchText}`).then((response) =>
    response.json()
  )
}
