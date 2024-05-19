import { CollisionBuilder } from './builders/CollisionBuilder.ts';

describe('Collision', () => {
    it('should create an instance', () => {
        expect(new CollisionBuilder().build()).toBeTruthy();
    });

    it('should have a position', () => {
        expect(new CollisionBuilder().withPosition(1).build().position).toBe(1);
    });

    it('should have a value of 💥', () => {
        expect(new CollisionBuilder().build().value).toBe('💥');
    });
});
