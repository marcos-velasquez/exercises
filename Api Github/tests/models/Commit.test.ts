import { Commit } from '../../src/models/Commit';
import { generateCommitData } from '../data/commit';

describe('Commit', () => {
    it('should crate a new commit', () => {
        const [{ hash, author, message, date }] = generateCommitData();
        expect(new Commit(hash, author, message, date)).toBeDefined();
    });

    it('should create a new commit and return correct values', () => {
        generateCommitData(10).forEach(({ hash, author, message, date }) => {
            const commit = new Commit(hash, author, message, date);
            expect(commit.hash).toBe(hash);
            expect(commit.author).toBe(author);
            expect(commit.message).toBe(message);
            expect(commit.date).toEqual(new Date(date));
        });
    });

    it('should create a new commit and return toArray correct values', () => {
        generateCommitData(10).forEach(({ hash, author, message, date }) => {
            const commit = new Commit(hash, author, message, date);
            expect(commit.toArray()).toEqual([hash, author, message, date]);
        });
    });

    it('should return a error if date is invalid', () => {
        const [{ hash, author, message }] = generateCommitData();
        expect(() => new Commit(hash, author, message, 'invalid')).toThrow();
        expect(() => new Commit(hash, author, message, '22-12**2024')).toThrow();
    });
});
