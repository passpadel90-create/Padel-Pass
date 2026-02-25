import { Player, Match, Achievement, Medal } from './types';

export const CURRENT_PLAYER: Player = {
  id: '1',
  name: 'Robert G.',
  level: 16,
  skillLevel: 7,
  points: 6120,
  wins: 32,
  losses: 18,
  avatar: 'https://picsum.photos/seed/robert/200',
  side: 'Reverse',
  location: 'Sabadell, BCN'
};

export const UPCOMING_EVENTS: Match[] = [
  {
    id: 'e1',
    title: 'Americana Mixta',
    type: 'Americana',
    level: '3.5 - 4.5',
    location: 'Ripollet Padel Club',
    date: '2025-02-22',
    time: '10:30',
    participants: 6,
    maxParticipants: 16,
    price: 10
  },
  {
    id: 'e2',
    title: 'Torneo Retos Oro',
    type: 'Torneo',
    level: '4.0+',
    location: 'Sabadell Indoor',
    date: '2025-02-24',
    time: '11:00',
    participants: 2,
    maxParticipants: 4,
    price: 8
  }
];

export const TOP_PLAYERS: Player[] = [
  { id: '1', name: 'Robert G.', level: 16, skillLevel: 7, points: 6120, wins: 32, losses: 18, avatar: 'https://i.pravatar.cc/150?u=1', side: 'Reverse', location: 'Sabadell, BCN' },
  { id: '2', name: 'Miquel T.', level: 14, skillLevel: 6, points: 4980, wins: 27, losses: 21, avatar: 'https://i.pravatar.cc/150?u=2', side: 'Drive', location: 'Ripollet, BCN' },
  { id: '3', name: 'David S.', level: 12, skillLevel: 5, points: 3450, wins: 19, losses: 15, avatar: 'https://i.pravatar.cc/150?u=3', side: 'Reverse', location: 'Barcelona' },
  { id: '4', name: 'Sara L.', level: 15, skillLevel: 7, points: 5890, wins: 45, losses: 12, avatar: 'https://i.pravatar.cc/150?u=4', side: 'Drive', location: 'Sant Cugat' },
  { id: '5', name: 'Oscar V.', level: 19, skillLevel: 9, points: 9420, wins: 88, losses: 24, avatar: 'https://i.pravatar.cc/150?u=5', side: 'Reverse', location: 'Mataró, BCN' },
  { id: '6', name: 'Paula R.', level: 10, skillLevel: 4, points: 2100, wins: 12, losses: 14, avatar: 'https://i.pravatar.cc/150?u=6', side: 'Drive', location: 'Badalona' }
];

export const MEDALS: Medal[] = [
  { id: 'm1', title: 'Campeón Regional', icon: '🥇', unlocked: true },
  { id: 'm2', title: 'Invicto 50', icon: '💎', unlocked: true },
  { id: 'm3', title: 'Leyenda del Club', icon: '👑', unlocked: false },
  { id: 'm4', title: 'Maestro del Smash', icon: '🎾', unlocked: false },
];

export const ACHIEVEMENTS: Achievement[] = [
  { id: 'a1', title: '10 Win Streak', description: 'Gana 10 partidos seguidos en cualquier modalidad.', icon: '🔥', unlocked: true },
  { id: 'a2', title: 'Tournament MVP', description: 'Sé el jugador con más puntos en un torneo oficial.', icon: '🏆', unlocked: true },
  { id: 'a3', title: 'Iron Lung', description: 'Juega 3 partidos en un mismo día.', icon: '🫁', unlocked: true },
  { id: 'a4', title: 'Power Smasher', description: 'Realiza 5 remates por 3 en un solo set.', icon: '⚡', unlocked: true },
  { id: 'a5', title: 'Level 5 Master', description: 'Alcanza el nivel 5 de experiencia.', icon: '⭐', unlocked: false },
  { id: 'a6', title: 'Double Bagel', description: 'Gana un partido 6-0, 6-0.', icon: '🥯', unlocked: false },
  { id: 'a7', title: 'Marathon Match', description: 'Juega un partido de más de 2 horas.', icon: '⏱️', unlocked: false },
  { id: 'a8', title: 'Wall Defense', description: 'Gana un punto después de que la bola toque 3 paredes.', icon: '🛡️', unlocked: false },
  { id: 'a9', title: 'World Traveler', description: 'Juega en 5 clubes diferentes.', icon: '🌍', unlocked: false },
  { id: 'a10', title: 'Club Legend', description: 'Sé el jugador #1 en el ranking de tu club local.', icon: '👑', unlocked: false }
];
