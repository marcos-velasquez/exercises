import { Countdown } from '../src/models/Countdown.ts';
import { checkCountdownCallback } from './utils/checkCountdownCallback.ts';

describe('Countdown', () => {
    beforeEach(() => {
        jest.useFakeTimers();
        jest.spyOn(global, 'clearInterval');
    });

    it.each([
        { options: { delay: 1, start: 3 } },
        { options: { delay: 4, start: 12 } },
        { options: { delay: 3, start: 1000 } },
    ])('given two params when called start then it should countdown with delay', ({ options }) => {
        const countdown = new Countdown(options);

        const mockCallback = checkCountdownCallback(options.start);
        countdown.start(mockCallback);

        for (let i = options.start; i >= 0; i--) {
            jest.advanceTimersByTime(options.delay * 1000);
        }

        expect(clearInterval).toHaveBeenCalledTimes(1);
        expect(mockCallback).toHaveBeenCalledTimes(options.start + 1);
    });

    test('given a negative start number when created countdown then it should throw', () => {
        expect(() => new Countdown({ start: -1 })).toThrow();
    });

    test('given a negative delay when created countdown then it should throw', () => {
        const dummyStart = 1;
        expect(() => new Countdown({ delay: -1, start: dummyStart })).toThrow();
        expect(() => new Countdown({ delay: -100, start: dummyStart })).toThrow();
    });

    afterEach(() => {
        jest.clearAllTimers();
        jest.clearAllMocks();
    });
});
