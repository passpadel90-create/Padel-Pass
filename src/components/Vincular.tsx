import React from 'react';
import { motion } from 'motion/react';
import { QrCode, Copy, Check, Info, Lock, PlusCircle } from 'lucide-react';
import { cn } from '../lib/utils';
import { CURRENT_PLAYER, TOP_PLAYERS } from '../constants';

export const Vincular: React.FC<{ onConfirm: () => void }> = ({ onConfirm }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="max-w-4xl mx-auto px-4 py-12"
    >
      <div className="text-center mb-10">
        <h1 className="text-3xl md:text-4xl font-extrabold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-lime-600 to-lime-400">
          Vincular Jugadores
        </h1>
        <p className="text-slate-500 dark:text-slate-400 max-w-lg mx-auto">
          Escanea el código o comparte el PIN para unir a los jugadores a este partido.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        <div className="bg-white dark:bg-slate-700 p-6 md:p-8 rounded-2xl shadow-xl shadow-slate-200/50 dark:shadow-none border border-slate-200 dark:border-slate-600 text-center">
          <div className="bg-gradient-to-br from-lime-500 to-lime-600 p-4 md:p-6 rounded-2xl inline-block mb-6">
            <div className="bg-white p-3 rounded-lg shadow-inner">
              <QrCode className="w-40 h-40 md:w-56 md:h-56 text-slate-900" />
            </div>
          </div>
          <div className="mb-4">
            <span className="text-xs font-bold uppercase tracking-widest text-slate-400 dark:text-slate-400">Código del Partido</span>
            <div className="mt-1 flex items-center justify-center gap-3">
              <div className="bg-slate-100 dark:bg-slate-800 px-4 md:px-6 py-3 rounded-xl border-2 border-dashed border-slate-300 dark:border-slate-600">
                <span className="text-xl md:text-2xl font-mono font-bold tracking-widest dark:text-white">PDL-8821</span>
              </div>
              <button className="p-3 bg-slate-100 dark:bg-slate-800 rounded-xl hover:bg-lime-500 hover:text-white transition-all">
                <Copy className="w-5 h-5" />
              </button>
            </div>
          </div>
          <p className="text-sm text-slate-500 dark:text-slate-400">Válido por los próximos 15 minutos</p>
        </div>

        <div className="space-y-6">
          <div className="bg-white dark:bg-slate-700 p-6 rounded-2xl border border-slate-200 dark:border-slate-600">
            <div className="flex justify-between items-center mb-6">
              <h2 className="font-bold text-lg dark:text-white">Jugadores Unidos</h2>
              <span className="px-3 py-1 bg-lime-500/10 text-lime-600 dark:text-lime-500 text-xs font-bold rounded-full">2 / 4 Listos</span>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { name: CURRENT_PLAYER.name, level: CURRENT_PLAYER.level, avatar: CURRENT_PLAYER.avatar, ready: true },
                { name: TOP_PLAYERS[1].name, level: TOP_PLAYERS[1].level, avatar: TOP_PLAYERS[1].avatar, ready: true },
                { name: 'Esperando...', level: 'Puesto 3', avatar: null, ready: false },
                { name: 'Esperando...', level: 'Puesto 4', avatar: null, ready: false },
              ].map((player, idx) => (
                <div key={idx} className={cn(
                  "flex flex-col items-center p-4 rounded-2xl border transition-all",
                  player.ready 
                    ? "bg-slate-50 dark:bg-slate-800/50 border-slate-200 dark:border-slate-600" 
                    : "bg-slate-100/50 dark:bg-slate-800/30 border-2 border-dashed border-slate-200 dark:border-slate-600 group hover:border-lime-500/50 cursor-pointer"
                )}>
                  <div className="relative mb-3">
                    {player.avatar ? (
                      <img src={player.avatar} className="w-16 h-16 md:w-20 md:h-20 rounded-full border-4 border-lime-500" alt={player.name} />
                    ) : (
                      <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center group-hover:scale-105 transition-transform">
                        <PlusCircle className="w-6 h-6 md:w-8 md:h-8 text-slate-400 group-hover:text-lime-500" />
                      </div>
                    )}
                    {player.ready && (
                      <div className="absolute -bottom-1 -right-1 bg-lime-500 text-white p-1 rounded-full border-2 border-white dark:border-slate-800">
                        <Check className="w-3 h-3" />
                      </div>
                    )}
                  </div>
                  <h3 className={cn("font-bold text-xs md:text-sm truncate w-full text-center", player.ready ? "dark:text-white" : "text-slate-400")}>{player.name}</h3>
                  <p className="text-[10px] md:text-xs text-slate-500 font-medium">{player.level}</p>
                </div>
              ))}
            </div>
          </div>
          <button 
            onClick={onConfirm}
            className="w-full py-4 bg-lime-500 hover:bg-lime-600 text-slate-900 font-bold rounded-2xl flex items-center justify-center gap-2 transition-all shadow-lg shadow-lime-500/20"
          >
            <Lock className="w-5 h-5" />
            Confirmar Partido (Demo)
          </button>
          <p className="text-center text-xs text-slate-500">Se requieren 4 jugadores para iniciar la validación de resultados.</p>
        </div>
      </div>

      <div className="mt-16 bg-lime-50 dark:bg-lime-500/10 p-6 rounded-2xl border border-lime-100 dark:border-lime-500/30 flex items-start gap-4">
        <Info className="text-lime-600 dark:text-lime-500 w-6 h-6 flex-shrink-0" />
        <div>
          <h4 className="font-bold text-lime-900 dark:text-lime-300 mb-1">¿Cómo funciona?</h4>
          <p className="text-sm text-lime-800/70 dark:text-lime-400/70">
            Todos los jugadores deben estar vinculados para que el partido cuente para el ranking. Una vez completado, podréis registrar el resultado y ganar puntos de experiencia.
          </p>
        </div>
      </div>
    </motion.div>
  );
};
