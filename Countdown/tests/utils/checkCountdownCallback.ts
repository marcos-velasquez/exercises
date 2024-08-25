export const checkCountdownCallback = (start: number) => {
    let count = start;
    return jest.fn((n: number) => {
        expect(n).toBe(count);
        count -= 1;
    });
};
