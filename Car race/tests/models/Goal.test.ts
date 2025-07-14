import { GoalBuilder } from './builders/GoalBuilder.ts';

describe('Goal', () => {
    it('should create an instance', () => {
        expect(new GoalBuilder().build()).toBeTruthy();
    });

    it('should have a position', () => {
        expect(new GoalBuilder().withPosition(1).build().position).toBe(1);
    });

    it('should have a value of 🏁', () => {
        expect(new GoalBuilder().build().value).toBe('🏁');
    });
});
