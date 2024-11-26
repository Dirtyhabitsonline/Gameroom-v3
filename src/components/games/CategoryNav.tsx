import React from 'react';
import { motion } from 'framer-motion';
import { Gamepad, Dice, Cards, CircleDollarSign, Gem } from 'lucide-react';

const categories = [
  { id: 'slots', icon: <Gamepad />, label: 'Slots' },
  { id: 'dice', icon: <Dice />, label: 'Dice' },
  { id: 'cards', icon: <Cards />, label: 'Cards' },
  { id: 'jackpot', icon: <CircleDollarSign />, label: 'Jackpot' },
  { id: 'vip', icon: <Gem />, label: 'VIP' },
];

export default function CategoryNav() {
  const [activeCategory, setActiveCategory] = React.useState('slots');

  return (
    <nav className="mb-8 overflow-x-auto">
      <div className="flex gap-4 min-w-max pb-4">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setActiveCategory(category.id)}
            className={`relative px-6 py-3 rounded-xl flex items-center gap-2 transition-colors ${
              activeCategory === category.id
                ? 'text-purple-400 bg-purple-600/20'
                : 'text-gray-400 hover:text-white hover:bg-gray-800/50'
            }`}
          >
            {category.icon}
            <span>{category.label}</span>
            {activeCategory === category.id && (
              <motion.div
                layoutId="activeCategory"
                className="absolute inset-0 border-2 border-purple-400 rounded-xl"
                initial={false}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
              />
            )}
          </button>
        ))}
      </div>
    </nav>
  );
}