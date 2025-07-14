import { EmptyTrackBuilder } from './builders/EmptyTrackBuilder.ts';

describe('EmptyTrack', () => {
    it('should create an instance', () => {
        expect(new EmptyTrackBuilder().build()).toBeTruthy();
    });

    it('should have a position', () => {
        expect(new EmptyTrackBuilder().withPosition(1).build().position).toBe(1);
    });

    it('should have a value of _', () => {
        expect(new EmptyTrackBuilder().build().value).toBe('_');
    });
});
