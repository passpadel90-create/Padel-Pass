import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Trophy, AlertCircle, CheckCircle2, Save, X } from 'lucide-react';
import { CURRENT_PLAYER, TOP_PLAYERS } from '../constants';

export const Resultado: React.FC<{ onSave: () => void; onCancel: () => void }> = ({ onSave, onCancel }) => {
  const [sets, setSets] = useState([
    { teamA: '', teamB: '' },
    { teamA: '', teamB: '' },
    { teamA: '', teamB: '' },
  ]);

  const updateScore = (index: number, team: 'teamA' | 'teamB', value: string) => {
    const newSets = [...sets];
    newSets[index][team] = value;
    setSets(newSets);
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-3xl mx-auto px-4 py-12"
    >
      <div className="bg-white dark:bg-slate-800 rounded-3xl shadow-2xl overflow-hidden border border-slate-200 dark:border-slate-700">
        <div className="bg-gradient-to-r from-lime-500 to-lime-600 p-8 text-slate-900">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h1 className="text-3xl font-black italic uppercase tracking-tight">Registrar Resultado</h1>
              <p className="font-bold opacity-80">Sabadell Indoor • Pista 4 • 22 Feb</p>
            </div>
            <button onClick={onCancel} className="p-2 hover:bg-black/10 rounded-full transition-colors">
              <X className="w-6 h-6" />
            </button>
          </div>
          
          <div className="flex items-center justify-between gap-4">
            <div className="flex flex-col items-center gap-2 flex-1">
              <div className="flex -space-x-3">
                <img src={CURRENT_PLAYER.avatar} className="w-12 h-12 rounded-full border-2 border-white" alt="" />
                <img src={TOP_PLAYERS[1].avatar} className="w-12 h-12 rounded-full border-2 border-white" alt="" />
              </div>
              <span className="font-bold text-sm">Team A</span>
            </div>
            <div className="text-4xl font-black italic opacity-30">VS</div>
            <div className="flex flex-col items-center gap-2 flex-1">
              <div className="flex -space-x-3">
                <img src={TOP_PLAYERS[2].avatar} className="w-12 h-12 rounded-full border-2 border-white" alt="" />
                <img src={TOP_PLAYERS[3].avatar} className="w-12 h-12 rounded-full border-2 border-white" alt="" />
              </div>
              <span className="font-bold text-sm">Team B</span>
            </div>
          </div>
        </div>

        <div className="p-8">
          <div className="space-y-6 mb-10">
            <div className="grid grid-cols-4 gap-4 text-center">
              <div className="col-span-1"></div>
              <div className="text-xs font-bold uppercase tracking-widest text-slate-400">Set 1</div>
              <div className="text-xs font-bold uppercase tracking-widest text-slate-400">Set 2</div>
              <div className="text-xs font-bold uppercase tracking-widest text-slate-400">Set 3</div>
            </div>

            <div className="grid grid-cols-4 gap-4 items-center">
              <div className="font-bold dark:text-white">Team A</div>
              {sets.map((set, i) => (
                <input
                  key={`a-${i}`}
                  type="number"
                  min="0"
                  max="7"
                  value={set.teamA}
                  onChange={(e) => updateScore(i, 'teamA', e.target.value)}
                  className="w-full h-16 text-center text-2xl font-black bg-slate-100 dark:bg-slate-900 border-2 border-transparent focus:border-lime-500 rounded-2xl dark:text-white transition-all outline-none"
                  placeholder="0"
                />
              ))}
            </div>

            <div className="grid grid-cols-4 gap-4 items-center">
              <div className="font-bold dark:text-white">Team B</div>
              {sets.map((set, i) => (
                <input
                  key={`b-${i}`}
                  type="number"
                  min="0"
                  max="7"
                  value={set.teamB}
                  onChange={(e) => updateScore(i, 'teamB', e.target.value)}
                  className="w-full h-16 text-center text-2xl font-black bg-slate-100 dark:bg-slate-900 border-2 border-transparent focus:border-blue-500 rounded-2xl dark:text-white transition-all outline-none"
                  placeholder="0"
                />
              ))}
            </div>
          </div>

          <div className="bg-amber-50 dark:bg-amber-500/10 border border-amber-200 dark:border-amber-500/30 p-4 rounded-2xl flex gap-3 mb-8">
            <AlertCircle className="text-amber-600 dark:text-amber-500 w-5 h-5 flex-shrink-0 mt-0.5" />
            <p className="text-sm text-amber-800 dark:text-amber-400">
              <span className="font-bold">Nota:</span> El equipo contrario recibirá una notificación para validar este resultado. Si hay discrepancias, un administrador revisará el caso.
            </p>
          </div>

          <div className="flex gap-4">
            <button 
              onClick={onSave}
              className="flex-grow bg-slate-900 dark:bg-lime-500 dark:text-slate-900 text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-2 hover:brightness-110 transition-all"
            >
              <Save className="w-5 h-5" />
              Guardar Resultado
            </button>
            <button 
              onClick={onCancel}
              className="px-8 py-4 border border-slate-200 dark:border-slate-700 dark:text-white rounded-2xl font-bold hover:bg-slate-50 dark:hover:bg-slate-900 transition-all"
            >
              Cancelar
            </button>
          </div>
        </div>
      </div>

      <div className="mt-8 flex items-center justify-center gap-2 text-slate-400 text-sm font-medium">
        <CheckCircle2 className="w-4 h-4" />
        Validación por GPS activa
      </div>
    </motion.div>
  );
};
