import {
  pokemonListInfo200,
  pokemonListInfo404,
} from '../../common/pokemonsInfo';
import { userProfileMock } from '../../common/userProfile';
import { pokedexControllerInput200 } from '../../inputs/controller/pokedexControllerMocks';

export const pokedexControllerOutput200 = {
  ...userProfileMock,
  pokemon_favorites: pokemonListInfo200,
};

export const pokedexControllerOutput404 = {
  ...userProfileMock,
  pokemon_favorites: pokemonListInfo404,
};

export const pokedexControllerOutput500 = {
  status: 500,
  code: 'GET_POKEDEX_INFO_FAILED',
  layer: 'CONTROLLER#GET_POKEDEX_INFO_FAILED',
  message: "Cannot read properties of undefined (reading 'c')",
  payload: {
    input: pokedexControllerInput200,
  },
  type: 'CUSTOM_HANDLED',
  name: 'TypeError',
};
