import { userProfileMock } from '../../common/userProfile';

export const getAllFavoritePokemonInput200 = {
  ...userProfileMock,
  pokemon_favorites: ['pikachu', 'charmander', 'bulbasaur'],
};

export const getAllFavoritePokemonInput404 = {
  ...userProfileMock,
  pokemon_favorites: ['pikachu', 'charmandeer', 'bulbasaur'],
};

export const getAllFavoritePokemonInput500 = {
  ...userProfileMock,
  pokemon_favorites: [],
};
