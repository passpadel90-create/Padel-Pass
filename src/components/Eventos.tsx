import React from 'react';
import { motion } from 'motion/react';
import { Calendar, MapPin, Users, Trophy, ChevronRight, Filter, Search } from 'lucide-react';
import { UPCOMING_EVENTS } from '../constants';

export const Eventos: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div>
          <h1 className="text-4xl font-black dark:text-white mb-2">Próximos Eventos</h1>
          <p className="text-slate-500 dark:text-slate-400">Torneos, ligas y partidos abiertos en tu zona.</p>
        </div>
        
        <div className="flex gap-3">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
            <input 
              type="text"
              placeholder="Buscar eventos..."
              className="pl-12 pr-6 py-3 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl dark:text-white focus:ring-2 focus:ring-lime-500 outline-none transition-all w-full md:w-80"
            />
          </div>
          <button className="p-3 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-700 transition-all">
            <Filter className="w-6 h-6" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {UPCOMING_EVENTS.map((event, index) => (
          <motion.div 
            key={event.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="group bg-white dark:bg-slate-800 rounded-[2.5rem] overflow-hidden border border-slate-200 dark:border-slate-700 hover:shadow-2xl hover:shadow-lime-500/10 transition-all"
          >
            <div className="relative h-56 overflow-hidden">
              <img 
                src={`https://picsum.photos/seed/${event.id}/800/600`} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                alt={event.title} 
              />
              <div className="absolute top-4 left-4 bg-white/90 dark:bg-slate-800/90 backdrop-blur-md px-4 py-2 rounded-2xl shadow-lg">
                <p className="text-xs font-black text-lime-600 uppercase tracking-widest">
                  {new Date(event.date).toLocaleDateString('es-ES', { day: '2-digit', month: 'short' })}
                </p>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                <div className="flex gap-2">
                  <span className="px-3 py-1 bg-lime-500 text-slate-900 text-[10px] font-black rounded-full uppercase">
                    {event.type}
                  </span>
                  <span className="px-3 py-1 bg-white/20 backdrop-blur-md text-white text-[10px] font-black rounded-full uppercase">
                    Nivel {event.level}
                  </span>
                </div>
              </div>
            </div>

            <div className="p-6 md:p-8">
              <h3 className="text-xl md:text-2xl font-black dark:text-white mb-4 group-hover:text-lime-500 transition-colors">{event.title}</h3>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3 text-slate-500 dark:text-slate-400 font-medium">
                  <MapPin className="w-5 h-5 text-lime-500" />
                  <span className="text-sm">{event.location}</span>
                </div>
                <div className="flex items-center gap-3 text-slate-500 dark:text-slate-400 font-medium">
                  <Users className="w-5 h-5 text-lime-500" />
                  <span className="text-sm">{event.participants} / {event.maxParticipants} Jugadores</span>
                </div>
              </div>

              <div className="flex items-center justify-between pt-6 border-t border-slate-100 dark:border-slate-700">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map((i) => (
                    <img 
                      key={i} 
                      src={`https://i.pravatar.cc/150?u=${event.id}${i}`} 
                      className="w-8 h-8 md:w-10 md:h-10 rounded-full border-2 md:border-4 border-white dark:border-slate-800 object-cover" 
                      alt="" 
                    />
                  ))}
                  <div className="w-8 h-8 md:w-10 md:h-10 rounded-full border-2 md:border-4 border-white dark:border-slate-800 bg-slate-100 dark:bg-slate-700 flex items-center justify-center text-[8px] md:text-[10px] font-black text-slate-500">
                    +12
                  </div>
                </div>
                <button className="bg-slate-800 dark:bg-white dark:text-slate-800 text-white px-4 md:px-6 py-2.5 md:py-3 rounded-2xl font-bold text-xs md:text-sm hover:bg-lime-500 hover:text-slate-900 transition-all flex items-center gap-2">
                  Inscribirse
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
