import React from 'react';
import { Trophy, Calendar, Users, PlusCircle, Moon, Sun, Search, Bell, Settings, Zap } from 'lucide-react';
import { cn } from '../lib/utils';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  isAdmin?: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({ activeTab, setActiveTab, isAdmin }) => {
  const navItems = [
    { id: 'home', label: 'Inicio', icon: Trophy },
    { id: 'pase', label: 'Pase', icon: Zap },
    { id: 'eventos', label: 'Eventos', icon: Calendar },
    { id: 'jugadores', label: 'Jugadores', icon: Users },
    { id: 'perfil', label: 'Perfil', icon: Settings },
  ];

  return (
    <>
      <nav className="sticky top-0 z-50 bg-white/80 dark:bg-slate-800/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 md:h-20 items-center">
            <div className="flex items-center gap-2 cursor-pointer" onClick={() => setActiveTab('home')}>
              <div className="w-8 h-8 md:w-10 md:h-10 bg-lime-500 rounded-lg md:rounded-xl flex items-center justify-center">
                <Trophy className="text-white w-5 h-5 md:w-6 md:h-6" />
              </div>
              <span className="text-lg md:text-xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-lime-600 to-lime-400">
                Padel Pass
              </span>
            </div>

            {!isAdmin && (
              <div className="hidden md:flex items-center space-x-8">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setActiveTab(item.id)}
                    className={cn(
                      "text-sm font-medium transition-colors hover:text-lime-500",
                      activeTab === item.id ? "text-lime-500 font-bold" : "text-slate-600 dark:text-slate-400"
                    )}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            )}

            <div className="flex items-center gap-4">
              {isAdmin ? (
                <div className="flex items-center gap-3">
                  <button className="p-2 text-slate-600 dark:text-slate-400 hover:text-lime-500 transition-colors">
                    <Bell className="w-5 h-5" />
                  </button>
                  <button className="flex items-center gap-2 bg-lime-500 text-slate-900 px-4 py-2 rounded-lg font-bold text-sm hover:opacity-90 transition-all shadow-md shadow-lime-500/20">
                    <PlusCircle className="w-4 h-4" />
                    <span className="hidden sm:inline">Nuevo Torneo</span>
                  </button>
                </div>
              ) : (
                <button 
                  onClick={() => setActiveTab('vincular')}
                  className="bg-lime-500 hover:bg-lime-600 text-slate-900 px-4 md:px-5 py-2 md:py-2.5 rounded-full font-bold flex items-center gap-2 transition-all transform hover:scale-105 active:scale-95 shadow-lg shadow-lime-500/20 text-sm md:text-base"
                >
                  <PlusCircle className="w-4 h-4 md:w-5 md:h-5" />
                  <span className="hidden sm:inline">Crear Partido</span>
                  <span className="sm:hidden">Crear</span>
                </button>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Bottom Navigation */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white dark:bg-slate-800 border-t border-slate-200 dark:border-slate-700 px-6 py-3 flex justify-between items-center">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveTab(item.id)}
            className={cn(
              "flex flex-col items-center gap-1 transition-all",
              activeTab === item.id ? "text-lime-500" : "text-slate-400"
            )}
          >
            {item.icon && <item.icon className={cn("w-6 h-6", activeTab === item.id ? "fill-lime-500/10" : "")} />}
            <span className="text-[10px] font-bold uppercase tracking-tighter">{item.label}</span>
          </button>
        ))}
      </div>
    </>
  );
};
