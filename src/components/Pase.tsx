import React from 'react';
import { motion } from 'motion/react';
import { Trophy, Star, Lock, CheckCircle2, Zap, Gift, ChevronRight } from 'lucide-react';
import { CURRENT_PLAYER } from '../constants';

export const Pase: React.FC = () => {
  const rewards = [
    { level: 1, title: 'Avatar Clásico', type: 'Gratis', icon: '👤', unlocked: true, points: 0 },
    { level: 2, title: 'Bono XP x1.2', type: 'Premium', icon: '⚡', unlocked: true, points: 500 },
    { level: 3, title: 'Marco Dorado', type: 'Premium', icon: '🖼️', unlocked: true, points: 1200 },
    { level: 4, title: 'Pala Carbono', type: 'Gratis', icon: '🎾', unlocked: false, points: 2000 },
    { level: 5, title: 'Emote "Smash"', type: 'Premium', icon: '🔥', unlocked: false, points: 3000 },
    { level: 6, title: 'Bono Monedas', type: 'Gratis', icon: '💰', unlocked: false, points: 4500 },
    { level: 7, title: 'Grip Especial', type: 'Premium', icon: '🏸', unlocked: false, points: 6000 },
    { level: 8, title: 'Skin de Pista', type: 'Gratis', icon: '🏟️', unlocked: false, points: 8000 },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="bg-slate-800 rounded-[2rem] md:rounded-[3rem] p-6 md:p-12 text-white relative overflow-hidden mb-16">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-lime-500/20 to-transparent"></div>
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-lime-500/10 blur-[100px] rounded-full"></div>
        
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-lime-500 text-slate-900 rounded-full text-xs font-black uppercase tracking-widest mb-6">
              <Zap className="w-4 h-4" />
              Temporada 1: Orígenes
            </div>
            <h1 className="text-4xl md:text-7xl font-black italic uppercase tracking-tighter mb-6 leading-none">
              Pase de <span className="text-lime-500">Batalla</span>
            </h1>
            <p className="text-lg md:text-xl text-white/60 mb-8 max-w-md">
              Juega partidos, completa desafíos y desbloquea recompensas exclusivas para tu perfil.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="w-full sm:w-auto px-8 py-4 bg-lime-500 text-slate-900 font-black rounded-2xl hover:scale-105 transition-transform shadow-[0_0_30px_rgba(132,204,22,0.3)]">
                Comprar Premium
              </button>
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2rem] md:rounded-[2.5rem] p-6 md:p-8">
            <div className="flex justify-between items-end mb-6">
              <div>
                <p className="text-white/40 text-xs font-bold uppercase tracking-widest mb-1">Tu Progreso</p>
                <h2 className="text-2xl md:text-3xl font-black">Nivel 14</h2>
              </div>
              <div className="text-right">
                <p className="text-lime-500 font-black text-lg md:text-xl">700 / 1000 XP</p>
              </div>
            </div>
            <div className="h-3 md:h-4 w-full bg-white/10 rounded-full overflow-hidden mb-8">
              <div className="h-full w-[70%] bg-gradient-to-r from-lime-500 to-emerald-500 rounded-full shadow-[0_0_20px_rgba(132,204,22,0.4)]"></div>
            </div>
            <div className="grid grid-cols-3 gap-2 md:gap-4">
              <div className="text-center">
                <p className="text-xl md:text-2xl font-black">12</p>
                <p className="text-[8px] md:text-[10px] text-white/40 font-bold uppercase tracking-widest">Días Restantes</p>
              </div>
              <div className="text-center border-x border-white/10">
                <p className="text-xl md:text-2xl font-black">45</p>
                <p className="text-[8px] md:text-[10px] text-white/40 font-bold uppercase tracking-widest">Premios Totales</p>
              </div>
              <div className="text-center">
                <p className="text-xl md:text-2xl font-black">18</p>
                <p className="text-[8px] md:text-[10px] text-white/40 font-bold uppercase tracking-widest">Desbloqueados</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative px-2 md:px-12">
        {/* Timeline Line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-slate-200 dark:bg-slate-700 -translate-x-1/2 hidden md:block"></div>
        
        <div className="space-y-12 relative">
          {rewards.map((reward, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className={`flex flex-col md:flex-row items-center gap-6 md:gap-8 ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
            >
              {/* Reward Card */}
              <div className={`flex-1 w-full ${i % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                <div className={`inline-block p-5 md:p-6 rounded-[2rem] border transition-all max-w-sm w-full ${
                  reward.unlocked 
                    ? 'bg-white dark:bg-slate-700 border-lime-500/30 shadow-lg shadow-lime-500/5' 
                    : 'bg-slate-50 dark:bg-slate-800/50 border-slate-200 dark:border-slate-700 opacity-60'
                }`}>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-14 h-14 md:w-16 md:h-16 bg-slate-100 dark:bg-slate-800 rounded-2xl flex items-center justify-center text-2xl md:text-3xl shadow-sm">
                      {reward.icon}
                    </div>
                    <div className="flex-grow text-left">
                      <p className={`text-[10px] font-black uppercase tracking-widest mb-1 ${
                        reward.type === 'Premium' ? 'text-blue-500' : 'text-slate-400'
                      }`}>
                        {reward.type}
                      </p>
                      <h3 className="font-bold dark:text-white text-sm md:text-base">{reward.title}</h3>
                    </div>
                    {reward.unlocked ? (
                      <CheckCircle2 className="text-lime-500 w-5 h-5 md:w-6 md:h-6 flex-shrink-0" />
                    ) : (
                      <Lock className="text-slate-400 w-5 h-5 md:w-6 md:h-6 flex-shrink-0" />
                    )}
                  </div>
                  <div className="flex items-center justify-between pt-4 border-t border-slate-100 dark:border-slate-700">
                    <span className="text-[10px] md:text-xs font-bold text-slate-400">Requisito:</span>
                    <span className="text-xs md:text-sm font-black text-lime-600 dark:text-lime-500">{reward.points.toLocaleString()} XP</span>
                  </div>
                </div>
              </div>

              {/* Timeline Node */}
              <div className="relative z-10 flex items-center justify-center">
                <div className={`w-10 h-10 md:w-12 md:h-12 rounded-full border-4 flex items-center justify-center font-black text-xs md:text-sm transition-all ${
                  reward.unlocked 
                    ? 'bg-lime-500 border-white dark:border-slate-800 text-slate-900 shadow-[0_0_15px_rgba(132,204,22,0.5)]' 
                    : 'bg-slate-200 dark:bg-slate-700 border-white dark:border-slate-800 text-slate-400'
                }`}>
                  {reward.level}
                </div>
              </div>

              {/* Spacer for the other side */}
              <div className="flex-1 hidden md:block"></div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="mt-16 bg-white dark:bg-slate-700 rounded-[2rem] md:rounded-[2.5rem] border border-slate-200 dark:border-slate-700 p-6 md:p-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="w-16 h-16 bg-lime-500/10 rounded-2xl flex items-center justify-center">
              <Gift className="text-lime-500 w-8 h-8" />
            </div>
            <div>
              <h3 className="text-xl md:text-2xl font-black dark:text-white">Siguiente Recompensa Especial</h3>
              <p className="text-sm md:text-base text-slate-500 dark:text-slate-400 font-medium">Desbloquea el nivel 15 para obtener el "Efecto de Saque Eléctrico".</p>
            </div>
          </div>
          <button className="w-full md:w-auto px-8 py-4 bg-slate-800 dark:bg-white dark:text-slate-900 text-white font-black rounded-2xl flex items-center justify-center gap-2 hover:bg-lime-500 hover:text-slate-900 transition-all">
            Ver todas las recompensas
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};
