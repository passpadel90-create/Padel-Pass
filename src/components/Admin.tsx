import React from 'react';
import { motion } from 'motion/react';
import { Users, Trophy, Calendar, AlertCircle, TrendingUp, DollarSign, Plus, MoreVertical, Check, X } from 'lucide-react';

export const Admin: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="flex justify-between items-center mb-12">
        <div>
          <h1 className="text-4xl font-black dark:text-white mb-2">Panel de Administración</h1>
          <p className="text-slate-500 dark:text-slate-400">Gestión global de la plataforma Padel Pass.</p>
        </div>
        <button className="bg-lime-500 hover:bg-lime-600 text-slate-900 px-6 py-3 rounded-2xl font-bold flex items-center gap-2 transition-all shadow-lg shadow-lime-500/20">
          <Plus className="w-5 h-5" />
          Nuevo Torneo
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {[
          { label: 'Usuarios Totales', value: '1,284', change: '+12%', icon: Users, color: 'text-blue-500', bg: 'bg-blue-500/10' },
          { label: 'Torneos Activos', value: '8', change: '+2', icon: Trophy, color: 'text-amber-500', bg: 'bg-amber-500/10' },
          { label: 'Partidos Hoy', value: '156', change: '+24%', icon: Calendar, color: 'text-lime-500', bg: 'bg-lime-500/10' },
          { label: 'Ingresos Mensuales', value: '€4,520', change: '+8%', icon: DollarSign, color: 'text-purple-500', bg: 'bg-purple-500/10' },
        ].map((stat, i) => (
          <div key={i} className="bg-white dark:bg-slate-800 p-6 rounded-3xl border border-slate-200 dark:border-slate-700">
            <div className="flex justify-between items-start mb-4">
              <div className={`${stat.bg} p-3 rounded-2xl`}>
                <stat.icon className={`${stat.color} w-6 h-6`} />
              </div>
              <span className="text-xs font-bold text-lime-600 bg-lime-50 dark:bg-lime-500/10 px-2 py-1 rounded-lg">{stat.change}</span>
            </div>
            <p className="text-3xl font-black dark:text-white mb-1">{stat.value}</p>
            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">{stat.label}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <div className="bg-white dark:bg-slate-800 rounded-3xl border border-slate-200 dark:border-slate-700 overflow-hidden">
            <div className="p-8 border-bottom border-slate-100 dark:border-slate-700 flex justify-between items-center">
              <h2 className="text-2xl font-black dark:text-white">Validaciones Pendientes</h2>
              <button className="text-slate-400 hover:text-slate-600 transition-colors">
                <MoreVertical className="w-6 h-6" />
              </button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead className="bg-slate-50 dark:bg-slate-900/50 border-y border-slate-100 dark:border-slate-700">
                  <tr>
                    <th className="px-8 py-4 text-xs font-bold text-slate-400 uppercase tracking-widest">Partido</th>
                    <th className="px-8 py-4 text-xs font-bold text-slate-400 uppercase tracking-widest">Resultado</th>
                    <th className="px-8 py-4 text-xs font-bold text-slate-400 uppercase tracking-widest">Estado</th>
                    <th className="px-8 py-4 text-xs font-bold text-slate-400 uppercase tracking-widest text-right">Acciones</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-700">
                  {[1, 2, 3, 4].map((i) => (
                    <tr key={i} className="hover:bg-slate-50 dark:hover:bg-slate-900/30 transition-colors">
                      <td className="px-8 py-6">
                        <div className="flex items-center gap-3">
                          <div className="flex -space-x-2">
                            <div className="w-8 h-8 rounded-full bg-slate-200 border-2 border-white dark:border-slate-800"></div>
                            <div className="w-8 h-8 rounded-full bg-slate-300 border-2 border-white dark:border-slate-800"></div>
                          </div>
                          <div>
                            <p className="font-bold text-sm dark:text-white">Team A vs Team B</p>
                            <p className="text-xs text-slate-500">Sabadell Indoor • Pista {i}</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-8 py-6">
                        <span className="font-mono font-bold text-sm dark:text-white">6-4, 7-5</span>
                      </td>
                      <td className="px-8 py-6">
                        <span className="flex items-center gap-1.5 text-amber-500 text-xs font-bold uppercase tracking-wider">
                          <AlertCircle className="w-3.5 h-3.5" />
                          Disputa
                        </span>
                      </td>
                      <td className="px-8 py-6 text-right">
                        <div className="flex justify-end gap-2">
                          <button className="p-2 bg-lime-500/10 text-lime-600 rounded-xl hover:bg-lime-500 hover:text-white transition-all">
                            <Check className="w-4 h-4" />
                          </button>
                          <button className="p-2 bg-red-500/10 text-red-600 rounded-xl hover:bg-red-500 hover:text-white transition-all">
                            <X className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <div className="bg-white dark:bg-slate-800 rounded-3xl border border-slate-200 dark:border-slate-700 p-8">
            <h3 className="text-xl font-black dark:text-white mb-6">Actividad Reciente</h3>
            <div className="space-y-6">
              {[
                { user: 'Marc R.', action: 'se unió al torneo "Open Primavera"', time: 'Hace 5 min' },
                { user: 'Laura G.', action: 'completó el logro "Smasher"', time: 'Hace 12 min' },
                { user: 'Admin', action: 'creó un nuevo evento en Madrid', time: 'Hace 45 min' },
                { user: 'Juan P.', action: 'reportó un error en pista 3', time: 'Hace 1 hora' },
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-900 flex items-center justify-center text-xs font-bold dark:text-white">
                    {item.user[0]}
                  </div>
                  <div>
                    <p className="text-sm dark:text-white">
                      <span className="font-bold">{item.user}</span> {item.action}
                    </p>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">{item.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-8 text-white">
            <TrendingUp className="text-lime-500 w-8 h-8 mb-4" />
            <h3 className="text-xl font-black mb-2">Rendimiento del Servidor</h3>
            <p className="text-sm text-white/60 mb-6">Estado óptimo de la infraestructura.</p>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-xs font-bold mb-1.5">
                  <span>CPU</span>
                  <span>24%</span>
                </div>
                <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full w-[24%] bg-lime-500 rounded-full"></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-xs font-bold mb-1.5">
                  <span>Memoria</span>
                  <span>48%</span>
                </div>
                <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full w-[48%] bg-blue-500 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
