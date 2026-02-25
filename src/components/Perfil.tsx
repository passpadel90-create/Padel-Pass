import React from 'react';
import { motion } from 'motion/react';
import { Settings, Trophy, Medal as MedalIcon, Calendar, MapPin, Share2, TrendingUp, Target, Zap, Lock, Star } from 'lucide-react';
import { CURRENT_PLAYER, ACHIEVEMENTS, MEDALS } from '../constants';

import { Player } from '../types';

interface PerfilProps {
  player?: Player;
}

export const Perfil: React.FC<PerfilProps> = ({ player = CURRENT_PLAYER }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="relative mb-32">
        <div className="h-64 md:h-80 w-full bg-gradient-to-r from-lime-500 to-blue-600 rounded-[2rem] overflow-hidden relative">
          <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
          <button className="absolute top-6 right-6 p-3 bg-white/20 backdrop-blur-md rounded-2xl text-white hover:bg-white/30 transition-all">
            <Settings className="w-6 h-6" />
          </button>
        </div>
        
        <div className="absolute -bottom-24 left-8 md:left-12 flex flex-col md:flex-row items-end gap-6">
            <div className="relative">
              <img 
                src={player.avatar} 
                className="w-32 h-32 md:w-48 md:h-48 rounded-[2rem] md:rounded-[2.5rem] border-4 md:border-8 border-slate-50 dark:border-slate-800 object-cover shadow-2xl" 
                alt={player.name} 
              />
              <div className="absolute -bottom-2 -right-2 bg-lime-500 text-slate-900 font-black px-3 md:px-4 py-1.5 md:py-2 rounded-xl md:rounded-2xl border-2 md:border-4 border-slate-50 dark:border-slate-800 shadow-lg text-xs md:text-base">
                LVL {player.level}
              </div>
            </div>
            
            <div className="mb-4 md:mb-8 text-center md:text-left">
              <div className="flex flex-col md:flex-row items-center gap-3 mb-2">
                <h1 className="text-3xl md:text-5xl font-black dark:text-white">{player.name}</h1>
                <div className="bg-slate-800 dark:bg-white dark:text-slate-800 text-white px-3 py-1 rounded-xl flex items-center gap-1.5">
                  <Star className="w-4 h-4 fill-current" />
                  <span className="font-black text-sm">{player.skillLevel}/10</span>
                </div>
              </div>
              <div className="flex flex-wrap justify-center md:justify-start gap-4 text-slate-500 dark:text-slate-400 font-medium text-sm">
                <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4" /> {player.location}</span>
                <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4" /> Miembro desde Ene 2024</span>
                <span className="flex items-center gap-1.5"><Share2 className="w-4 h-4" /> @{player.name.toLowerCase().replace(' ', '')}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: 'Partidos', value: (player.wins + player.losses).toString(), icon: Trophy, color: 'text-amber-500' },
                { label: 'Victorias', value: player.wins.toString(), icon: Zap, color: 'text-lime-500' },
                { label: 'Win Rate', value: `${Math.round((player.wins / (player.wins + player.losses || 1)) * 100)}%`, icon: TrendingUp, color: 'text-blue-500' },
                { label: 'Ranking', value: '#12', icon: Target, color: 'text-purple-500' },
              ].map((stat, i) => (
                <div key={i} className="bg-white dark:bg-slate-700 p-6 rounded-3xl border border-slate-200 dark:border-slate-600 shadow-sm">
                  <stat.icon className={`${stat.color} w-6 h-6 mb-3`} />
                  <p className="text-2xl font-black dark:text-white">{stat.value}</p>
                  <p className="text-xs font-bold text-slate-400 dark:text-slate-400 uppercase tracking-widest">{stat.label}</p>
                </div>
              ))}
            </div>

            <div className="bg-white dark:bg-slate-700 rounded-3xl border border-slate-200 dark:border-slate-600 p-6 md:p-8">
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-xl md:text-2xl font-black dark:text-white">Medallas de Honor</h2>
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Máximo 10 espacios</span>
              </div>
              <div className="grid grid-cols-5 gap-3 md:gap-4">
                {Array.from({ length: 10 }).map((_, i) => {
                  const medal = MEDALS[i];
                  return (
                    <div key={i} className={`aspect-square rounded-xl md:rounded-2xl flex items-center justify-center text-2xl md:text-3xl border-2 transition-all ${
                      medal?.unlocked 
                        ? 'bg-lime-500/10 border-lime-500/30' 
                        : 'bg-slate-50 dark:bg-slate-800/50 border-slate-100 dark:border-slate-600/50'
                    }`}>
                      {medal?.unlocked ? (
                        <div className="relative group cursor-help">
                          <span>{medal.icon}</span>
                          <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1 bg-slate-800 text-white text-[10px] font-bold rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                            {medal.title}
                          </div>
                        </div>
                      ) : (
                        <Lock className="w-5 h-5 md:w-6 md:h-6 text-slate-300 dark:text-slate-600" />
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="bg-white dark:bg-slate-700 rounded-3xl border border-slate-200 dark:border-slate-600 p-6 md:p-8">
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-xl md:text-2xl font-black dark:text-white">Logros Desbloqueados</h2>
                <button className="text-lime-500 font-bold text-sm hover:underline">Ver todos</button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {ACHIEVEMENTS.filter(a => a.unlocked).map((achievement) => (
                  <div key={achievement.id} className="flex gap-5 p-5 bg-slate-50 dark:bg-slate-800/50 rounded-2xl border border-slate-100 dark:border-slate-600/50 group hover:border-lime-500/30 transition-all">
                    <div className="w-16 h-16 bg-white dark:bg-slate-700 rounded-2xl flex items-center justify-center text-3xl shadow-sm group-hover:scale-110 transition-transform">
                      {achievement.icon}
                    </div>
                    <div>
                      <h3 className="font-bold dark:text-white mb-1 text-sm md:text-base">{achievement.title}</h3>
                      <p className="text-[10px] md:text-xs text-slate-500 leading-relaxed">{achievement.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white dark:bg-slate-700 rounded-3xl border border-slate-200 dark:border-slate-600 p-6 md:p-8">
              <h2 className="text-xl md:text-2xl font-black dark:text-white mb-8">Historial de Partidos</h2>
              <div className="space-y-4">
                {[1, 2, 3].map((m) => (
                  <div key={m} className="flex items-center justify-between p-4 md:p-5 bg-slate-50 dark:bg-slate-800/50 rounded-2xl border border-slate-100 dark:border-slate-600/50">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 md:w-12 md:h-12 bg-lime-500 text-slate-900 font-black rounded-xl flex items-center justify-center italic text-sm md:text-base">W</div>
                      <div>
                        <p className="font-bold dark:text-white text-sm md:text-base">Victoria vs Team Alpha</p>
                        <p className="text-[10px] md:text-xs text-slate-500">Hace 2 días • Sabadell Indoor</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-black text-base md:text-lg dark:text-white">6-4, 7-5</p>
                      <p className="text-[8px] md:text-[10px] font-bold text-lime-600 uppercase tracking-widest">+45 pts</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-slate-800 rounded-3xl p-6 md:p-8 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-lime-500/20 blur-3xl rounded-full"></div>
              <h3 className="text-xl font-black mb-6 flex items-center gap-2">
                <MedalIcon className="text-lime-500" />
                Pase de Batalla
              </h3>
              <div className="mb-6">
                <div className="flex justify-between text-sm font-bold mb-2">
                  <span>Nivel 14</span>
                  <span className="text-lime-500">PRO</span>
                </div>
                <div className="h-3 w-full bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full w-[70%] bg-lime-500 rounded-full shadow-[0_0_15px_rgba(132,204,22,0.5)]"></div>
                </div>
                <p className="text-[10px] text-white/50 mt-2 font-bold uppercase tracking-widest">700 / 1000 XP para Nivel 15</p>
              </div>
              <button className="w-full py-4 bg-white text-slate-900 font-black rounded-2xl hover:bg-lime-500 transition-all">
                Ver Recompensas
              </button>
            </div>

            <div className="bg-white dark:bg-slate-700 rounded-3xl border border-slate-200 dark:border-slate-600 p-6 md:p-8">
              <h3 className="text-xl font-black dark:text-white mb-6">Equipamiento</h3>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-slate-100 dark:bg-slate-800 rounded-2xl flex items-center justify-center">
                    <img src="https://picsum.photos/seed/racket/100/100" className="w-10 h-10 object-contain" alt="" />
                  </div>
                  <div>
                    <p className="font-bold text-sm dark:text-white">Babolat Technical Viper</p>
                    <p className="text-xs text-slate-500">Pala principal</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-slate-100 dark:bg-slate-800 rounded-2xl flex items-center justify-center">
                    <img src="https://picsum.photos/seed/shoes/100/100" className="w-10 h-10 object-contain" alt="" />
                  </div>
                  <div>
                    <p className="font-bold text-sm dark:text-white">Asics Gel-Padel Pro 5</p>
                    <p className="text-xs text-slate-500">Calzado</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
};
