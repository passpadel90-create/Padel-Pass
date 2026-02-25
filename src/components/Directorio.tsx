import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Search, Filter, MessageSquare, UserPlus, Trophy, Star, MapPin } from 'lucide-react';
import { TOP_PLAYERS } from '../constants';
import { Player } from '../types';

export const Directorio: React.FC<{ 
  onViewPlayer: (player: Player) => void;
  onChallenge: (player: Player) => void;
}> = ({ onViewPlayer, onChallenge }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredPlayers = TOP_PLAYERS.filter(player => 
    player.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div>
          <h1 className="text-4xl font-black dark:text-white mb-2">Directorio de Jugadores</h1>
          <p className="text-slate-500 dark:text-slate-400">Encuentra compañeros de nivel similar y expande tu red.</p>
        </div>
        
        <div className="flex gap-3">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
            <input 
              type="text"
              placeholder="Buscar por nombre..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-12 pr-6 py-3 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl dark:text-white focus:ring-2 focus:ring-lime-500 outline-none transition-all w-full md:w-80"
            />
          </div>
          <button className="p-3 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-700 transition-all">
            <Filter className="w-6 h-6" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredPlayers.map((player, index) => (
          <motion.div 
            key={player.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            onClick={() => onViewPlayer(player)}
            className="group bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-3xl p-6 hover:shadow-xl hover:shadow-slate-200/50 dark:hover:shadow-none transition-all cursor-pointer"
          >
            <div className="flex items-start gap-5 mb-6">
              <div className="relative">
                <img src={player.avatar} className="w-20 h-20 rounded-2xl object-cover" alt={player.name} />
                <div className="absolute -bottom-2 -right-2 bg-lime-500 text-slate-900 text-[10px] font-black px-2 py-1 rounded-lg border-2 border-white dark:border-slate-800">
                  LVL {player.level}
                </div>
              </div>
              <div className="flex-grow">
              <div className="flex items-center gap-2 mb-1">
                <h3 className="font-bold text-lg dark:text-white group-hover:text-lime-500 transition-colors">{player.name}</h3>
                <div className="flex items-center gap-0.5 bg-slate-800 dark:bg-white dark:text-slate-800 text-white px-1.5 py-0.5 rounded-md">
                  <Star className="w-3 h-3 fill-current" />
                  <span className="text-[10px] font-black">{player.skillLevel}</span>
                </div>
                {index < 3 && <Trophy className="w-4 h-4 text-amber-400" />}
              </div>
              <div className="flex items-center gap-1 text-slate-500 text-xs font-medium mb-3">
                <MapPin className="w-3 h-3" />
                Barcelona, ES
              </div>
              <div className="flex gap-2">
                <span className="px-2 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 text-[10px] font-bold rounded-md uppercase tracking-wider">Drive</span>
                <span className="px-2 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 text-[10px] font-bold rounded-md uppercase tracking-wider">Avanzado</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="bg-slate-50 dark:bg-slate-800/50 p-3 rounded-2xl border border-slate-100 dark:border-slate-700/50">
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Puntos</p>
              <p className="text-lg font-black dark:text-white">{player.points.toLocaleString()}</p>
            </div>
            <div className="bg-slate-50 dark:bg-slate-800/50 p-3 rounded-2xl border border-slate-100 dark:border-slate-700/50">
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Win Rate</p>
              <p className="text-lg font-black dark:text-white">68%</p>
            </div>
          </div>

            <div className="flex gap-3">
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  onChallenge(player);
                }}
                className="flex-grow bg-lime-500 hover:bg-lime-600 text-slate-900 py-3 rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition-all"
              >
                <UserPlus className="w-4 h-4" />
                Retar
              </button>
              <button 
                onClick={(e) => e.stopPropagation()}
                className="p-3 border border-slate-200 dark:border-slate-700 dark:text-white rounded-xl hover:bg-slate-50 dark:hover:bg-slate-700 transition-all"
              >
                <MessageSquare className="w-5 h-5" />
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <button className="px-8 py-4 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 font-bold rounded-2xl hover:bg-slate-200 dark:hover:bg-slate-700 transition-all">
          Cargar más jugadores
        </button>
      </div>
    </div>
  );
};
