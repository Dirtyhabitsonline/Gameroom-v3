import { Game } from '../types/game';

export const games: Game[] = [
  {
    id: '1',
    title: 'Lucky Fortune',
    category: 'slots',
    image: 'https://images.unsplash.com/photo-1596838132731-3301c3fd4317?auto=format&fit=crop&w=800&q=80',
    players: '1,234',
    minBet: 1,
    maxBet: 100,
    isHot: true,
    isNew: false,
  },
  {
    id: '2',
    title: 'Royal Flush',
    category: 'poker',
    image: 'https://images.unsplash.com/photo-1511193311914-0346f16efe90?auto=format&fit=crop&w=800&q=80',
    players: '2,567',
    minBet: 5,
    maxBet: 500,
    isHot: true,
    isNew: false,
  },
  {
    id: '3',
    title: 'Golden Blackjack',
    category: 'blackjack',
    image: 'https://images.unsplash.com/photo-1509114397022-ed747cca3f65?auto=format&fit=crop&w=800&q=80',
    players: '987',
    minBet: 2,
    maxBet: 200,
    isHot: false,
    isNew: true,
  },
  // Add more games as needed
];