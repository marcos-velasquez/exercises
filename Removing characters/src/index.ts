import { CharacterRemover } from './models/CharacterRemover.ts';

(async () => {
    const characterRemover = new CharacterRemover(
        'el código limpio es fácil de leer y comprender',
        'los principios mas importantes del software son la cohesion, acoplamiento y granularidad'
    );

    console.log(characterRemover.execute());
})();
