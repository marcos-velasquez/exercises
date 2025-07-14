import { Orc, Troll, Goblin, BadSoutherner, Huargo } from '../Races/Evil/index.ts';
import { EvilRace } from '../Race.ts';

export const teamEvil = (): EvilRace[] => [new Orc(), new Troll(), new Goblin(), new BadSoutherner(), new Huargo()];
