import { TreeBuilder } from './builders/TreeBuilder';

describe('Tree', () => {
    it('should create an instance', () => {
        expect(new TreeBuilder().build()).toBeTruthy();
    });

    it('should have a position', () => {
        expect(new TreeBuilder().withPosition(1).build().position).toBe(1);
    });

    it('should have a value of 🌲', () => {
        expect(new TreeBuilder().build().value).toBe('🌲');
    });
});
