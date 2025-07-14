import { Army } from './models/Army.ts';
import { Battle } from './models/Battle.ts';
import { EvilRaceFactory } from './models/Factories/EvilRaceFactory.ts';
import { GoodRaceFactory } from './models/Factories/GoodRaceFactory.ts';
import { EvilRace, GoodRace } from './models/Race.ts';
import { BattleView } from './views/BattleView.ts';

(async () => {
    const amount = 10;
    const evilArmy = new Army<EvilRace>(new EvilRaceFactory().random(amount));
    const goodArmy = new Army<GoodRace>(new GoodRaceFactory().random(amount));
    const battle = new Battle(goodArmy, evilArmy);

    new BattleView(battle).render();
})();
