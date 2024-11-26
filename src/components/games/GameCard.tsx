import React from 'react';
import { motion } from 'framer-motion';
import { Users, Trophy, Heart, Play } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Game } from '../../types/game';

interface GameCardProps {
  game: Game;
}

export default function GameCard({ game }: GameCardProps) {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <motion.div
      className="group relative bg-gray-800/50 rounded-xl overflow-hidden"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      {/* Game Image */}
      <div className="aspect-[4/3] relative overflow-hidden">
        <img
          src={game.image}
          alt={game.title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        
        {/* Favorite Button */}
        <button className="absolute top-2 right-2 p-2 bg-black/40 rounded-full hover:bg-purple-600/80 transition-colors">
          <Heart className="w-4 h-4" />
        </button>

        {/* Play Button Overlay */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <Link
            to={`/play/${game.id}`}
            className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-full font-semibold flex items-center gap-2 transition-colors"
          >
            <Play className="w-4 h-4" /> Play Now
          </Link>
        </motion.div>
      </div>

      {/* Game Info */}
      <div className="p-4">
        <h3 className="font-semibold mb-1">{game.title}</h3>
        <div className="flex items-center justify-between text-sm text-gray-400">
          <span className="flex items-center gap-1">
            <Users className="w-4 h-4" />
            {game.players}
          </span>
          <span className="flex items-center gap-1">
            <Trophy className="w-4 h-4" />
            ${game.minBet}
          </span>
        </div>
      </div>
    </motion.div>
  );
}