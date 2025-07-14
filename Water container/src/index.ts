import { WaterContainer } from './models/WaterContainer.ts';

(async () => {
    const values = [4, 0, 3, 6, 1, 3];

    console.log(
        `Values to be used: ${values}\nTrapped water units: ${WaterContainer.calculateTrappedWaterUnits(values)}`
    );
})();
