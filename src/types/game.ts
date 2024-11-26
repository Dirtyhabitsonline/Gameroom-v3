export interface Game {
  id: string;
  title: string;
  category: 'slots' | 'poker' | 'blackjack' | 'roulette';
  image: string;
  players: string;
  minBet: number;
  maxBet: number;
  isHot?: boolean;
  isNew?: boolean;
}