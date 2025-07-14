import { Robot } from './models/Robot.ts';

(async () => {
    const values = [15, -2, 8, 11, 25];
    const robot = new Robot();
    robot.move(values);
    console.log('with values: ', values, ' -> ', robot.whereIs());
})();
