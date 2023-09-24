import data from './emoji.json';

export type GameMode =
  | 'animals'
  | 'animals-plants'
  | 'animals-vehicles'
  | 'animals-emotions'
  | 'story';

type GameModes = {
  [K in GameMode]: string[][];
};

const allEmoji = Object.keys(data).reduce<string[]>((acc, key) => {
  const category = data[key as keyof typeof data];
  return [...acc, ...category];
}, []);

export const GAME_MODES: GameModes = {
  animals: [data['animals'], data['animals']],
  'animals-plants': [data['animals'], data['plants']],
  'animals-vehicles': [data['animals'], data['vehicles']],
  'animals-emotions': [data['animals'], data['emotions']],
  story: [allEmoji, allEmoji, allEmoji]
};
