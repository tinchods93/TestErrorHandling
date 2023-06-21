import { userProfileMock } from '../../common/userProfile';

export const pokedexControllerInput200 = {
  ...userProfileMock,
  pokemon_favorites: ['pikachu', 'charmander', 'bulbasaur'],
};

export const pokedexControllerInput404 = {
  ...userProfileMock,
  pokemon_favorites: ['pikachu', 'charmandeer', 'bulbasaur'],
};
