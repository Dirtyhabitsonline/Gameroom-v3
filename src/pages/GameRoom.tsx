import React from 'react';
import { motion } from 'framer-motion';
import { Dices, Fire, Crown, Clock } from 'lucide-react';
import GameGrid from '../components/games/GameGrid';
import CategoryNav from '../components/games/CategoryNav';

export default function GameRoom() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900">
      {/* Header */}
      <header className="bg-black/30 backdrop-blur-sm border-b border-white/10">
        <div className="container mx-auto px-4">
          <div className="flex items-center h-16">
            <div className="flex items-center gap-2">
              <Dices className="w-6 h-6 text-purple-400" />
              <span className="font-semibold">Game Room</span>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* Featured Section */}
        <section className="mb-12">
          <div className="flex items-center gap-4 mb-6">
            <Fire className="w-6 h-6 text-orange-500" />
            <h2 className="text-2xl font-bold">Hot Games</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Featured Game Cards */}
            {[1, 2, 3].map((_, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="relative aspect-[16/9] rounded-2xl overflow-hidden"
              >
                <img
                  src={`https://source.unsplash.com/800x450/?casino,game&${index}`}
                  alt="Featured Game"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <div className="flex items-center gap-2 mb-2">
                    <Crown className="w-5 h-5 text-yellow-500" />
                    <span className="text-yellow-400 text-sm font-medium">Featured</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Game Title {index + 1}</h3>
                  <div className="flex items-center gap-4 text-sm">
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      Live
                    </span>
                    <span>1.2k playing</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Category Navigation */}
        <CategoryNav />

        {/* Game Grid */}
        <GameGrid />
      </main>
    </div>
  );
}