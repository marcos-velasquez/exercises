import { Elf, Dwarf, Numenorean, GoodSoutherner, Peloso } from '../Races/Good/index.ts';
import { GoodRace } from '../Race.ts';
export const teamGood = (): GoodRace[] => [
    new Elf(),
    new Dwarf(),
    new Numenorean(),
    new GoodSoutherner(),
    new Peloso(),
];
