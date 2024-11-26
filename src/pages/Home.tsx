import React from 'react';
import { motion } from 'framer-motion';
import { GameController, Trophy, Users, Sparkles, ArrowRight, DollarSign } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 sm:py-32">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-5xl sm:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-transparent bg-clip-text">
              Play. Win. Dominate.
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of players in the ultimate online gaming experience. Play your favorite casino games, compete in tournaments, and win big!
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                to="/games"
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-full font-semibold transition-all flex items-center justify-center gap-2"
              >
                Start Playing <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/tournaments"
                className="border border-purple-600 hover:bg-purple-600/20 text-white px-8 py-4 rounded-full font-semibold transition-all"
              >
                View Tournaments
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Background Effects */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-purple-900/50 via-black/80 to-black" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] bg-purple-500/30 rounded-full blur-3xl" />
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <GameController className="w-8 h-8 text-purple-400" />,
                title: "Premium Games",
                description: "Access a wide variety of high-quality casino games"
              },
              {
                icon: <Trophy className="w-8 h-8 text-purple-400" />,
                title: "Daily Tournaments",
                description: "Compete against players worldwide for massive prizes"
              },
              {
                icon: <DollarSign className="w-8 h-8 text-purple-400" />,
                title: "Instant Payouts",
                description: "Quick and secure transaction processing"
              },
              {
                icon: <Sparkles className="w-8 h-8 text-purple-400" />,
                title: "VIP Rewards",
                description: "Exclusive bonuses and special promotions"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl rounded-2xl p-6 border border-gray-800/50"
              >
                <div className="bg-purple-600/20 w-16 h-16 rounded-xl flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Games */}
      <section className="py-20 bg-gradient-to-b from-transparent via-purple-900/20 to-transparent">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-4xl font-bold mb-4">Featured Games</h2>
            <p className="text-gray-400">Experience our most popular games with stunning graphics and immersive gameplay</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Poker Night",
                image: "https://images.unsplash.com/photo-1511193311914-0346f16efe90?auto=format&fit=crop&w=800&q=80",
                players: "1,234",
                prize: "$5,000"
              },
              {
                title: "Lucky Slots",
                image: "https://images.unsplash.com/photo-1596838132731-3301c3fd4317?auto=format&fit=crop&w=800&q=80",
                players: "2,567",
                prize: "$10,000"
              },
              {
                title: "Blackjack Pro",
                image: "https://images.unsplash.com/photo-1509114397022-ed747cca3f65?auto=format&fit=crop&w=800&q=80",
                players: "987",
                prize: "$3,000"
              }
            ].map((game, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-2xl"
              >
                <div className="aspect-[4/3] relative">
                  <img
                    src={game.image}
                    alt={game.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                  <div className="absolute inset-0 p-6 flex flex-col justify-end">
                    <h3 className="text-2xl font-bold mb-2">{game.title}</h3>
                    <div className="flex items-center justify-between text-sm">
                      <span className="flex items-center gap-1">
                        <Users className="w-4 h-4" />
                        {game.players} playing
                      </span>
                      <span className="flex items-center gap-1">
                        <Trophy className="w-4 h-4" />
                        {game.prize} prize
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-8 sm:p-12">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">Ready to Start Playing?</h2>
              <p className="text-lg text-purple-100 mb-8">
                Join now and get 1000 bonus credits + daily rewards!
              </p>
              <Link
                to="/register"
                className="bg-white text-purple-600 hover:bg-purple-50 px-8 py-4 rounded-full font-semibold inline-flex items-center gap-2 transition-colors"
              >
                Create Account <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}