import { LostNumberEvaluator } from './models/LostNumberEvaluator.ts';

(async () => {
    const lostNumberEvaluator = new LostNumberEvaluator([1, 4, 8, 11, 19]);
    console.log(lostNumberEvaluator.evaluate());
})();
