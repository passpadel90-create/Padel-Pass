/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Home } from './components/Home';
import { Pase } from './components/Pase';
import { Eventos } from './components/Eventos';
import { Directorio } from './components/Directorio';
import { Perfil } from './components/Perfil';
import { Admin } from './components/Admin';
import { Vincular } from './components/Vincular';
import { Confirmacion } from './components/Confirmacion';
import { Resultado } from './components/Resultado';

import { Player } from './types';
import { CURRENT_PLAYER } from './constants';

export default function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [selectedPlayer, setSelectedPlayer] = useState<Player>(CURRENT_PLAYER);

  const viewPlayer = (player: Player) => {
    setSelectedPlayer(player);
    setActiveTab('perfil');
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return <Home onViewPlayer={viewPlayer} />;
      case 'pase':
        return <Pase />;
      case 'eventos':
        return <Eventos />;
      case 'jugadores':
        return <Directorio onViewPlayer={viewPlayer} onChallenge={() => setActiveTab('vincular')} />;
      case 'perfil':
        return <Perfil player={selectedPlayer} />;
      case 'admin':
        return <Admin />;
      case 'vincular':
        return <Vincular onConfirm={() => setActiveTab('confirmacion')} />;
      case 'confirmacion':
        return <Confirmacion onBack={() => setActiveTab('eventos')} onConfirm={() => setActiveTab('resultado')} />;
      case 'resultado':
        return <Resultado onSave={() => setActiveTab('perfil')} onCancel={() => setActiveTab('home')} />;
      default:
        return <Home onViewPlayer={viewPlayer} />;
    }
  };

  return (
    <div className="dark">
      <div className="min-h-screen bg-slate-50 dark:bg-slate-800 transition-colors duration-300">
        <Navbar 
          activeTab={activeTab} 
          setActiveTab={setActiveTab} 
          isAdmin={activeTab === 'admin'}
        />
        <main className="pt-4 pb-24 md:pb-4">
          {renderContent()}
        </main>
      </div>
    </div>
  );
}
