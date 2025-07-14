import { HandleDetector } from './models/HandleDetector.ts';

(async () => {
    const text =
        'En esta actividad de @marcos, resolvemos #retos de #programación desde https://retosdeprogramacion.com/semanales2022, que @braismoure aloja en www.github.com';
    console.log(`Handles in "${text}: `, HandleDetector.detect(text));
})();
