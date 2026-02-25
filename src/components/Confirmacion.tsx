import React from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, Calendar, MapPin, Verified, Trophy, CheckCircle, History } from 'lucide-react';
import { CURRENT_PLAYER, TOP_PLAYERS } from '../constants';

export const Confirmacion: React.FC<{ onBack: () => void; onConfirm: () => void }> = ({ onBack, onConfirm }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      className="max-w-7xl mx-auto px-6 py-12"
    >
      <div className="mb-10">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-slate-500 dark:text-slate-400 hover:text-lime-500 transition-colors text-sm font-semibold mb-4"
        >
          <ArrowLeft className="w-4 h-4" />
          Volver a eventos
        </button>
        <h1 className="text-4xl md:text-5xl font-extrabold dark:text-white mb-2">Confirmación de Partida</h1>
        <p className="text-slate-500 dark:text-slate-400">Revisa los detalles antes de entrar a pista.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <div className="bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-2xl p-6 md:p-8 shadow-sm">
            <div className="flex flex-wrap gap-6 md:gap-10 items-center justify-between mb-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 md:w-14 md:h-14 bg-lime-500/10 rounded-xl flex items-center justify-center">
                  <Calendar className="text-lime-500 w-6 h-6 md:w-8 md:h-8" />
                </div>
                <div>
                  <p className="text-[10px] md:text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Fecha y Hora</p>
                  <p className="text-lg md:text-xl font-bold dark:text-white">Dom, 22 Feb • 18:30h</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 md:w-14 md:h-14 bg-lime-500/10 rounded-xl flex items-center justify-center">
                  <MapPin className="text-lime-500 w-6 h-6 md:w-8 md:h-8" />
                </div>
                <div>
                  <p className="text-[10px] md:text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Ubicación</p>
                  <p className="text-lg md:text-xl font-bold dark:text-white">Sabadell Indoor - Pista 4</p>
                </div>
              </div>
            </div>

            <div className="h-px bg-slate-100 dark:bg-slate-600 w-full mb-10"></div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 relative">
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-white dark:bg-slate-800 border-4 border-slate-50 dark:border-slate-700 rounded-full hidden md:flex items-center justify-center z-10">
                <span className="text-lime-500 font-black italic text-sm">VS</span>
              </div>

              <div className="space-y-4 md:space-y-6">
                <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-lime-500/80 mb-2">Equipo A</h3>
                {[CURRENT_PLAYER, TOP_PLAYERS[1]].map((player) => (
                  <div key={player.id} className="flex items-center gap-4 bg-slate-50 dark:bg-slate-800/50 p-3 md:p-4 rounded-xl border border-slate-100 dark:border-slate-600/50">
                    <img src={player.avatar} className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover" alt={player.name} />
                    <div className="flex-grow">
                      <p className="font-bold dark:text-white text-sm md:text-base">{player.name}</p>
                      <p className="text-[10px] md:text-xs text-slate-500">Nivel {player.level / 4} • {player.points} pts</p>
                    </div>
                    <Verified className="text-lime-500 w-4 h-4" />
                  </div>
                ))}
              </div>

              <div className="space-y-4 md:space-y-6">
                <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-blue-500/80 mb-2 text-right">Equipo B</h3>
                {[TOP_PLAYERS[2], TOP_PLAYERS[3]].map((player) => (
                  <div key={player.id} className="flex items-center gap-4 bg-slate-50 dark:bg-slate-800/50 p-3 md:p-4 rounded-xl border border-slate-100 dark:border-slate-600/50">
                    <img src={player.avatar} className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover" alt={player.name} />
                    <div className="flex-grow">
                      <p className="font-bold dark:text-white text-sm md:text-base">{player.name}</p>
                      <p className="text-[10px] md:text-xs text-slate-500">Nivel {player.level / 4} • {player.points} pts</p>
                    </div>
                    <Verified className="text-lime-500 w-4 h-4" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-4">
            <button 
              onClick={onConfirm}
              className="flex-grow bg-lime-500 text-slate-900 py-4 md:py-5 rounded-2xl font-extrabold text-base md:text-lg hover:brightness-110 active:scale-[0.98] transition-all shadow-[0_8px_30px_rgb(132,204,22,0.3)]"
            >
              Confirmar Partida
            </button>
            <button className="px-8 py-4 md:py-5 border border-slate-200 dark:border-slate-600 dark:text-white rounded-2xl font-bold hover:bg-slate-100 dark:hover:bg-slate-800 transition-all text-sm md:text-base">
              Solicitar Cambio
            </button>
          </div>
        </div>

        <div className="space-y-8">
          <div className="bg-gradient-to-br from-lime-500/10 to-blue-500/10 dark:from-lime-500/20 dark:to-blue-500/20 border border-lime-500/20 dark:border-lime-500/30 rounded-2xl p-6 relative overflow-hidden">
            <Trophy className="absolute -right-4 -bottom-4 text-lime-500/10 w-32 h-32" />
            <h3 className="text-lg font-bold dark:text-white mb-4">Recompensas en juego</h3>
            <div className="space-y-4 relative z-10">
              <div className="flex justify-between items-center">
                <span className="text-slate-600 dark:text-slate-400 text-sm">Puntos Victoria</span>
                <span className="font-bold text-lime-600 dark:text-lime-500">+250 pts</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-600 dark:text-slate-400 text-sm">Bono "Pase de Batalla"</span>
                <span className="font-bold text-blue-500">x1.5</span>
              </div>
              <div className="h-px bg-lime-500/20 dark:bg-lime-500/40 my-2"></div>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                Al ganar esta partida, Team A subirá al Rango de Oro. El perdedor mantendrá sus puntos actuales sin penalización por nivel de rango.
              </p>
            </div>
          </div>

          <div className="bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-2xl p-6">
            <h3 className="text-lg font-bold dark:text-white mb-4">Reglas del Encuentro</h3>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <CheckCircle className="text-lime-500 w-5 h-5 flex-shrink-0" />
                <p className="text-sm text-slate-600 dark:text-slate-400">Set de 3 juegos con Tie-break en el último.</p>
              </li>
              <li className="flex gap-3">
                <CheckCircle className="text-lime-500 w-5 h-5 flex-shrink-0" />
                <p className="text-sm text-slate-600 dark:text-slate-400">Punto de oro activado en deuce.</p>
              </li>
              <li className="flex gap-3">
                <History className="text-lime-500 w-5 h-5 flex-shrink-0" />
                <p className="text-sm text-slate-600 dark:text-slate-400">Confirmación de resultado obligatoria 15min post-partido.</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
