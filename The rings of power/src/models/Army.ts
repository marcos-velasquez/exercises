import { Race } from './Race.ts';

export class Army<T extends Race> {
    constructor(public readonly members: T[] = []) {}

    public add(race: T) {
        this.members.push(race);
    }

    public isGreaterThan(other: Army<Race>): boolean {
        return this.getTotalValue() > other.getTotalValue();
    }

    public getTotalValue(): number {
        return this.members.reduce((acc, curr) => acc + curr.value, 0);
    }

    public toString(): string {
        return this.members.map((race) => `${race.name}(${race.value})`).join(', ');
    }
}
