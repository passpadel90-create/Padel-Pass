import React from 'react';
import { motion } from 'motion/react';
import { TrendingUp, ExternalLink, Calendar, ChevronRight, Star } from 'lucide-react';
import { CURRENT_PLAYER, UPCOMING_EVENTS, TOP_PLAYERS } from '../constants';
import { Player } from '../types';

export const Home: React.FC<{ onViewPlayer: (player: Player) => void }> = ({ onViewPlayer }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
    >
      <div className="grid lg:grid-cols-12 gap-12 items-start">
        <div className="lg:col-span-7 space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-lime-50 dark:bg-lime-500/10 text-lime-600 dark:text-lime-400 text-sm font-bold border border-lime-100 dark:border-lime-500/20">
            <span className="flex h-2 w-2 rounded-full bg-lime-500 animate-pulse"></span>
            Competición gamificada · Americanas y partidos
          </div>
          <h1 className="text-6xl font-extrabold tracking-tight leading-[1.1] dark:text-white">
            Juega. Suma puntos.<br />
            <span className="text-lime-600 dark:text-lime-500">Sube niveles.</span>
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-xl leading-relaxed">
            Un pase de progresión para el pádel amateur: participa en eventos, completa objetivos mensuales y desbloquea recompensas cada 5 niveles.
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <button className="bg-lime-500 hover:bg-lime-600 text-slate-900 px-8 py-4 rounded-2xl font-bold shadow-xl shadow-lime-500/20 transition-all flex items-center gap-2">
              Ver próximos eventos
              <ChevronRight className="w-5 h-5" />
            </button>
            <button className="bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700 px-8 py-4 rounded-2xl font-bold transition-all">
              Ver pase
            </button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8">
            {[
              { label: 'Jugadores', value: '1,425' },
              { label: 'Eventos', value: '48' },
              { label: 'Partidos', value: '329' },
            ].map((stat) => (
              <div key={stat.label} className="bg-white dark:bg-slate-700 p-6 rounded-3xl border border-slate-100 dark:border-slate-600 shadow-sm">
                <p className="text-xs font-bold text-slate-400 dark:text-slate-400 uppercase tracking-widest mb-1">{stat.label}</p>
                <p className="text-3xl font-black text-slate-900 dark:text-white">{stat.value}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-5">
          <div className="bg-white dark:bg-slate-700 p-6 md:p-8 rounded-[40px] border border-slate-200 dark:border-slate-600 shadow-2xl shadow-slate-200/50 dark:shadow-none">
            <div className="flex justify-between items-start mb-8">
              <div>
                <h3 className="text-2xl font-bold mb-1 dark:text-white">Tu progreso (demo)</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400">Basado en el jugador destacado del ranking</p>
              </div>
              <div className="w-12 h-12 bg-lime-50 dark:bg-lime-500/10 rounded-2xl flex items-center justify-center text-lime-600 dark:text-lime-500">
                <TrendingUp className="w-6 h-6" />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="bg-slate-50 dark:bg-slate-800/50 p-5 rounded-2xl border border-slate-100 dark:border-slate-600">
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Jugador</p>
                <p className="text-xl font-bold dark:text-white truncate">{CURRENT_PLAYER.name}</p>
              </div>
              <div className="bg-slate-50 dark:bg-slate-800/50 p-5 rounded-2xl border border-slate-100 dark:border-slate-600">
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Nivel</p>
                <p className="text-xl font-bold dark:text-white">{CURRENT_PLAYER.level}</p>
              </div>
            </div>
            <div className="bg-slate-50 dark:bg-slate-800/50 p-5 rounded-2xl border border-slate-100 dark:border-slate-600 mb-8">
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Puntos</p>
              <p className="text-3xl font-black text-lime-600 dark:text-lime-500">{CURRENT_PLAYER.points.toLocaleString()}</p>
            </div>
            <div className="space-y-3 mb-8">
              <div className="flex justify-between text-sm">
                <span className="text-slate-500 dark:text-slate-400">Siguiente nivel: {CURRENT_PLAYER.level + 1}</span>
                <span className="font-bold dark:text-white">Objetivo: 6,760 pts</span>
              </div>
              <div className="h-4 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden p-1">
                <div className="h-full bg-gradient-to-r from-lime-400 to-lime-600 rounded-full" style={{ width: '85%' }}></div>
              </div>
            </div>
            <button 
              onClick={() => onViewPlayer(CURRENT_PLAYER)}
              className="w-full py-4 rounded-2xl border-2 border-slate-100 dark:border-slate-600 font-bold text-slate-600 dark:text-slate-400 hover:border-lime-500 hover:text-lime-500 transition-all flex items-center justify-center gap-2"
            >
              Ver perfil completo
              <ExternalLink className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-8 mt-24">
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl md:text-3xl font-extrabold dark:text-white">Próximos eventos</h2>
              <p className="text-sm md:text-base text-slate-500 dark:text-slate-400">Americanas y partidos organizados</p>
            </div>
            <button className="text-lime-600 dark:text-lime-500 font-bold hover:underline flex items-center gap-1 text-sm md:text-base">
              Ver todos
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
          <div className="space-y-4">
            {UPCOMING_EVENTS.map((event) => (
              <div key={event.id} className="group bg-white dark:bg-slate-700 p-6 rounded-3xl border border-slate-200 dark:border-slate-600 hover:border-lime-500/50 transition-all cursor-pointer">
                <div className="flex justify-between items-center">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold text-lime-600 dark:text-lime-500 uppercase">{event.type} · {event.level}</span>
                    </div>
                    <h4 className="text-lg font-bold group-hover:text-lime-600 transition-colors dark:text-white">{event.title}</h4>
                    <p className="text-sm text-slate-500 flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {event.date}, {event.time}
                    </p>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-black text-slate-900 dark:text-white">{event.price}€</div>
                    <div className="text-xs text-slate-400">{event.participants}/{event.maxParticipants} Plazas</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <div>
            <h2 className="text-2xl md:text-3xl font-extrabold dark:text-white">Top jugadores</h2>
            <p className="text-sm md:text-base text-slate-500 dark:text-slate-400">Clasificación por puntos totales</p>
          </div>
          <div className="bg-white dark:bg-slate-700 rounded-3xl border border-slate-200 dark:border-slate-600 overflow-hidden overflow-x-auto">
            <table className="w-full text-left min-w-[500px]">
              <thead className="bg-slate-50 dark:bg-slate-800/50">
                <tr>
                  <th className="px-6 py-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">#</th>
                  <th className="px-6 py-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">Jugador</th>
                  <th className="px-6 py-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest text-center">Nivel</th>
                  <th className="px-6 py-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest text-center">Puntos</th>
                  <th className="px-6 py-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest text-right">W-L</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-600">
                {TOP_PLAYERS.slice(0, 3).map((player, idx) => (
                  <tr 
                    key={player.id} 
                    onClick={() => onViewPlayer(player)}
                    className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors cursor-pointer"
                  >
                    <td className="px-6 py-4 font-bold text-lime-600">{idx + 1}</td>
                    <td className="px-6 py-4 flex items-center gap-3">
                      <img src={player.avatar} className="w-8 h-8 rounded-full border border-slate-200" alt={player.name} />
                      <div className="flex flex-col">
                        <span className="font-semibold dark:text-white">{player.name}</span>
                        <div className="flex items-center gap-1 text-[10px] text-slate-500 font-bold">
                          <Star className="w-2.5 h-2.5 fill-current text-amber-400" />
                          Nivel {player.skillLevel}
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-center font-medium dark:text-slate-300">{player.level}</td>
                    <td className="px-6 py-4 text-center font-bold text-slate-900 dark:text-white">{player.points}</td>
                    <td className="px-6 py-4 text-right text-slate-500 font-medium">{player.wins}-{player.losses}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
