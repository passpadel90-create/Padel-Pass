export type Player = {
  id: string;
  name: string;
  level: number;
  skillLevel: number; // 1 to 10
  points: number;
  wins: number;
  losses: number;
  avatar: string;
  side: 'Drive' | 'Reverse' | 'Both';
  location: string;
};

export type Medal = {
  id: string;
  title: string;
  icon: string;
  unlocked: boolean;
};

export type Match = {
  id: string;
  title: string;
  type: string;
  level: string;
  location: string;
  date: string;
  time: string;
  participants: number;
  maxParticipants: number;
  price?: number;
};

export type Achievement = {
  id: string;
  title: string;
  description: string;
  icon: string;
  unlocked: boolean;
};
